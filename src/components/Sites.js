/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import API from '../APIClient';
import Site from './Site';

export default function Sites() {
  const [sitesList, setSitesList] = useState([]);
  useEffect(() => {
    API.get('sites')
      .then(async (res) => {
        setSitesList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <ul className="flex w-full overflow-x-scroll">
        {sitesList.length &&
          sitesList.map(
            ({
              id,
              image,
              name,
              description,
              address,
              postcode,
              city,
              country,
              Category,
            }) => (
              <li className="min-w-max" key={id}>
                <Site
                  name={name}
                  image={image}
                  address={address}
                  postcode={postcode}
                  city={city}
                  country={country}
                  id={id}
                  description={description}
                  category={Category.name}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
}
