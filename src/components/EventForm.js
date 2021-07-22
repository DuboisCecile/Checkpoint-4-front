/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import API from '../APIClient';
import history from '../history';

export default function EventForm() {
  const { addToast } = useToasts();
  // const [event, setEvent] = useState(false);
  const [sitesList, setSitesList] = useState([]);
  const { register, handleSubmit } = useForm();

  // const handleChangeToggle = () => {
  //   setEvent(!event);
  // };

  useEffect(() => {
    API.get('sites')
      .then(async (res) => {
        setSitesList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = async (form) => {
    if (form && form.siteId === '') {
      history.push('/add-site');
    }
    const updatedForm = {
      ...form,
      guideId: '1',
      startDateTime: new Date(`${form.date} ${form.time}:00`),
      maxPlaces: form.maxPlaces === '' ? null : parseInt(form.maxPlaces, 10),
    };
    console.log(updatedForm);
    try {
      await API.post('/events', updatedForm);
      addToast('Votre animation a bien été enregistrée', {
        appearance: 'success',
      });
      setTimeout(() => {
        history.push('/');
      }, 500);
    } catch (err) {
      addToast('Il y a eu une erreur pendant la création de votre animation', {
        appearance: 'error',
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-2/3 m-auto border shadow-2xl">
      <div className="p-4 w-full">
        <h1 className="titles">Ajoutez une nouvelle animation</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8"
          action="send"
          method="POST"
        >
          <div className="mt-5">
            <label htmlFor="title" className="subtitles">
              Titre
              <input
                type="text"
                required
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Titre"
                {...register('title')}
              />
            </label>
          </div>
          <div className="mt-5">
            <label htmlFor="description" className="subtitles">
              Description
              <input
                type="textarea"
                required
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Décrivez cette animation"
                {...register('description')}
              />{' '}
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="siteId" className="subtitles">
              Choisissez le site concerné par cette animation :
              <br />
              <select {...register('siteId')}>
                <option key="" value="">
                  Ajouter un nouveau site
                </option>
                {sitesList &&
                  sitesList.map((site) => (
                    <option key={site.id} value={site.id}>
                      {`${site.name} ${site.address}`}
                    </option>
                  ))}
              </select>
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="date" className="subtitles">
              Date :
              <br />
              <input type="date" {...register('date')} />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="time" className="subtitles">
              Heure de début :
              <br />
              <input type="time" {...register('time')} />{' '}
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="duration" className="subtitles">
              Durée
              <select {...register('duration')} className="ml-5">
                <option key={60} value={60}>
                  1h
                </option>
                <option key={90} value={90}>
                  1h30
                </option>
                <option key={120} value={120}>
                  2h
                </option>
                <option key={150} value={150}>
                  2h30
                </option>
                <option key={180} value={180}>
                  3h
                </option>
              </select>
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="videoLink" className="mt-5 subtitles">
              Ajoutez le lien de la vidéo :
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="text"
                placeholder="Ajoutez le lien de la vidéo"
                {...register('videoLink')}
              />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="maxPlaces" className="mt-5 subtitles">
              Choisissez le nombre maximal de places disponibles :
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="number"
                min="1"
                {...register('maxPlaces')}
              />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="cost" className="mt-5 subtitles">
              Choisissez le coût en gemmes :
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="number"
                min="1"
                {...register('cost')}
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
