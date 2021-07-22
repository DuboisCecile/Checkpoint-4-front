import { useEffect, useState } from 'react';
import './SearchBar.css';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import API from '../APIClient';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  // const [searchDate, setSearchDate] = useState('');
  const [resultList, setResultList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
  };

  // const handleDateChange = (e) => {
  //   setSearchDate(e.target.value);
  // };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    API.post('sites/search', { searchValue })
      .then((res) => setResultList(res.data))
      .catch(console.error);
  }, [searchValue]);

  // console.log(searchDate);
  return (
    <>
      <div className="flex flex-row align-baseline justify-between p-4 rounded bg-green-light w-min m-auto shadow-md">
        <div className="relative text-lg bg-transparent text-gray-800">
          <div className="flex bg-white items-center border-b border-b-2 border-teal-500 py-2 shadow-sm">
            <input
              className="bg-transparent border-none mr-4 px-4 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute right-0 top-0 mt-3 mr-4 "
              onClick={handleClick}
            >
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
        {/* <input
          className="bg-white border-none mr-4 px-4 leading-tight focus:outline-none shadow-sm"
          id="date"
          name="date"
          type="date"
          onChange={handleDateChange}
        />
        <button
          type="button"
          className="font-bold py-2 px-4 rounded hover:bg-green-200 shadow-sm"
          onClick={handleClick}
        >
          Search
        </button> */}
      </div>
      <ul className="suggestions w-3/4 m-auto ">
        {searchValue &&
          resultList.map((result) => (
            <li key={result.id}>
              <NavLink
                className="flex flex-row w-full justify-between"
                to={`/events/${result.id}`}
              >
                <span className="inline-block">{result.name}</span>
                <span className="inline-block">
                  {dayjs(result.date).format('DD/MM/YYYY - HH:mm')}
                </span>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
}
