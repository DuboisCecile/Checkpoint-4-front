/* eslint-disable no-console */
import './DetailedSite.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import dayjs from 'dayjs';
// import { useToasts } from 'react-toast-notifications';
import API from '../APIClient';
// import history from '../history';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function DetailedSite() {
  const [detailedInfo, setDetailedInfo] = useState({});
  // const { profile } = useContext(CurrentUserContext);
  const {
    image,
    name,
    description,
    address,
    postcode,
    city,
    country,
    category,
  } = detailedInfo;

  const { id } = useParams();

  // const { addToast } = useToasts();

  useEffect(() => {
    console.log(id);
    API.get(`/sites/${parseInt(id, 10)}`)
      .then((res) => res.data)
      .then(setDetailedInfo)
      .catch(console.error);
  }, [id]);

  // const handleClick = () => {
  //   API.post('/register', { userId: profile.id, eventId: id })
  //     .then(() => {
  //       addToast('Successfully registered for this event', {
  //         appearance: 'success',
  //       });
  //       setTimeout(() => {
  //         history.push('/');
  //       }, 500);
  //     })
  //     .catch((error) => {
  //       addToast('Something went wrong 😕', {
  //         appearance: 'error',
  //       });
  //       console.error(error);
  //     });
  // };

  return (
    <>
      {Object.keys(detailedInfo).length !== 0 ? (
        <article className="overflow-hidden rounded-lg shadow-lg max-w-prose m-auto my-4">
          <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
            <div className="flex flex-row items-center w-full ">
              <img
                className="w-full"
                src={image || `https://picsum.photos/200/100?random=${id}`}
                alt={image}
              />
            </div>
          </div>
          <h2 className="flex justify-center font-bold text-xl mb-2">{name}</h2>
          {/* <div className="flex flex-row justify-between p-2 md:p-4"> */}
          <p className="ml-2 text-lg">{`${address} ${postcode} ${city} ${country}`}</p>
          <p className="ml-2 text-grey-darker text-lg">{category}</p>
          {/* </div> */}

          <p className="text-black p-2 md:p-4">{description}</p>

          {/* <div className="flex items-center justify-center leading-none p-2 md:p-4">
            <button
              type="button"
              className="btn btn-green"
              onClick={handleClick}
            >
              Register
            </button>
          </div> */}
        </article>
      ) : null}
    </>
  );
}
