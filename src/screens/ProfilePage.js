import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import API from '../APIClient';

export default function Profile() {
  const [registeredEventsList, setRegisteredEventsList] = useState([]);

  useEffect(() => {
    API.get('users/show-registrations')
      .then(async (res) => {
        console.log(res.data);
        setRegisteredEventsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="titles">Les vidéos que j'ai achetées</h1>
      {registeredEventsList && (
        <ul>
          {registeredEventsList.map((registered) => (
            <li
              className="max-w-sm rounded overflow-hidden shadow-lg m-8"
              key={registered.id}
            >
              <div className="font-bold text-xl mb-2">
                {registered.Event.title}
              </div>
              <div className="text-grey-darker text-sm mt-4">
                {registered.Event.description}
              </div>
              <div className="text-grey-darker text-sm mt-4 font-bold">
                {`par ${registered.Event.Guide.pseudo}`}
              </div>
              <ReactPlayer
                url={`${process.env.REACT_APP_API_FILE_STORAGE_URL}/${registered.Event.videoLink}`}
                controls
                // light="true"
                // playing
                loop
                width="100%"
                height="100%"
                // onClickPreview={handleOpenVideo}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
