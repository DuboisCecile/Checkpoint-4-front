/* eslint-disable no-console */
import './DetailedInfo.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import API from '../APIClient';

export default function DetailedEvent() {
  const [detailedInfo, setDetailedInfo] = useState({});
  const {
    description,
    duration,
    image,
    language,
    Guide,
    Site,
    startDateTime,
    title,
  } = detailedInfo;

  const { id } = useParams();

  useEffect(() => {
    API.get(`/events/${parseInt(id, 10)}`)
      .then((res) => res.data)
      .then(setDetailedInfo)
      .catch(console.error);
  }, [id]);
  return (
    <>
      {Object.keys(detailedInfo).length !== 0 ? (
        <article className="overflow-hidden rounded-lg shadow-lg max-w-prose m-auto my-4">
          <div className="flex flex-col items-center justify-between leading-tight p-2 md:p-4">
            <div className="flex flex-row items-center w-full ">
              <img
                className="w-full"
                src={
                  image
                    ? `${process.env.REACT_APP_API_FILE_STORAGE_URL}/${image}`
                    : `https://picsum.photos/200/100?random=${id}`
                }
                alt={image}
              />
            </div>
          </div>
          <h2 className="flex justify-center font-bold text-xl mb-2">
            {title}
          </h2>
          <p className="ml-2 text-lg">
            {dayjs(startDateTime).format('DD/MM/YYYY HH:mm')} -{' '}
            {parseInt(duration / 60, 10)}h
          </p>
          <p className="ml-2 text-grey-darker text-lg">{language}</p>

          <p className="text-black p-2 md:p-4">{Guide.pseudo}</p>
          <p className="text-black p-2 md:p-4">{description}</p>
          <div className="text-grey-darker text-sm mt-4">{Site.name} </div>
        </article>
      ) : null}
    </>
  );
}
