/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import API from '../APIClient';
import Event from './Event';

export default function Events() {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    API.get('events')
      .then(async (res) => {
        setEventsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul className="flex flex-col lg:flex-row lg:justify-start lg:overflow-x-scroll">
        {eventsList.length &&
          eventsList.map(
            ({
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
            }) => (
              <li className="max-w-full" key={id}>
                <Event
                  id={id}
                  availablePlaces={availablePlaces}
                  cost={cost}
                  description={description}
                  duration={duration}
                  image={image}
                  language={language}
                  maxAvailablePlaces={maxAvailablePlaces}
                  Guide={Guide}
                  Site={Site}
                  startDateTime={startDateTime}
                  title={title}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
}
