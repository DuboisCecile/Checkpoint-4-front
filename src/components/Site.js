import { NavLink } from 'react-router-dom';

export default function Site({
  id,
  image,
  name,
  description,
  address,
  postcode,
  city,
  country,
  category,
}) {
  return (
    <NavLink to={`/sites/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-8">
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
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="text-grey-darker text-sm">
            {`${address} ${postcode} ${city} ${country}`}
          </div>
          <div className="text-grey-darker text-sm mt-4 font-bold">
            {category}
          </div>

          <div className="text-grey-darker text-sm mt-4">{description} </div>
        </div>
      </div>
    </NavLink>
  );
}
