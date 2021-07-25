/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';
import API from '../APIClient';
import history from '../history';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Event({
  id,
  availablePlaces,
  cost,
  description,
  duration,
  image,
  language,
  maxAvailablePlaces,
  Guide,
  Site,
  startDateTime,
  title,
}) {
  const { profile, getProfile } = useContext(CurrentUserContext);
  const { addToast } = useToasts();
  const { register, handleSubmit, watch } = useForm();
  const [totalCost, setTotalCost] = useState(cost);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const quantity = watch('quantity');

  useEffect(() => {
    if (quantity && cost) setTotalCost(quantity * cost);
    else setTotalCost(cost);
  }, [quantity, cost]);

  useEffect(() => {
    if (profile && profile.Registrations) {
      const regTest = !(
        profile.Registrations.filter((reg) => reg.eventId === id).length === 0
      );
      setAlreadyRegistered(regTest);
    }
  }, [profile]);

  const onSubmit = async (form) => {
    if (profile && totalCost > profile.gems) {
      history.push('/buy-gems');
    } else {
      try {
        await API.post('events/register', {
          eventId: parseInt(id, 10),
          quantity: parseInt(form.quantity, 10),
          totalCost: parseInt(totalCost, 10),
        });
        getProfile();
        addToast('Votre participation a bien été enregistrée', {
          appearance: 'success',
        });
        setTimeout(() => {
          history.push('/');
        }, 500);
      } catch (err) {
        addToast(
          "Il y a eu une erreur pendant l'enregistrement de votre participation",
          {
            appearance: 'error',
          }
        );
      }
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
      <NavLink to={`/events/${id}`}>
        <img
          className="w-full"
          src={
            image
              ? `${process.env.REACT_APP_API_FILE_STORAGE_URL}/${image}`
              : `https://picsum.photos/200/100?random=${id}`
          }
          alt={image}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-grey-darker font-bold text-lg mt-4">
            depuis : {Site.name}
          </div>
          <p className="text-grey-darker text-sm p-2 md:p-4">
            {dayjs(startDateTime).format('DD/MM/YYYY HH:mm')} -{' '}
            {parseInt(duration / 60, 10)}h
          </p>
          <div className="text-grey-darker text-sm">{language}</div>
          <div className="text-grey-darker text-sm mt-4 font-bold">
            {Guide.pseudo}
          </div>
          <div className="text-grey-darker text-sm mt-4">{description} </div>

          <div className="text-grey-darker text-sm mt-4">
            {`${cost} gemmes`}
          </div>
          {maxAvailablePlaces && availablePlaces && (
            <div className="text-grey-darker text-sm mt-4">
              {`${availablePlaces} places disponibles sur ${maxAvailablePlaces}`}
            </div>
          )}
        </div>
      </NavLink>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8"
        action="send"
        method="POST"
      >
        <div className="mt-5">
          <label htmlFor="quantity" className="mt-5 subtitles">
            Choisissez le nombre de places :
            <input
              className="relative block w-20 px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
              type="number"
              min="1"
              max={availablePlaces || 200}
              defaultValue="1"
              {...register('quantity')}
            />
            {`Coût : ${totalCost} gemmes`}
          </label>
        </div>

        <div className="rounded bg-blue-400 text-white flex items-center justify-center mt-4 p-2">
          <button
            className="font-bold text-xl"
            type="submit"
            disabled={alreadyRegistered}
          >
            Acheter
          </button>
        </div>
      </form>
    </div>
  );
}
