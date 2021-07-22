/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import API from '../APIClient';
import Event from './Event';

export default function Events() {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    API.get('events')
      .then(async (res) => {
        console.log(res.data);
        setEventsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <ul className="flex w-full overflow-x-scroll">
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
              <li className="min-w-max" key={id}>
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
