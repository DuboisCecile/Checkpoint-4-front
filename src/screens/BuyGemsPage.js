/* eslint-disable no-console */
import { useEffect, useState, useContext } from 'react';
import API from '../APIClient';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function BuyGemsPage() {
  const [gemsCost, setGemsCost] = useState([]);
  const { getProfile } = useContext(CurrentUserContext);

  useEffect(() => {
    API.get('/gems')
      .then(async (res) => {
        setGemsCost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleGemsBuying = (gems) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Êtes-vous certain ?')) {
      API.patch('/users/buygems', { gems })
        .then(async () => {
          getProfile();
        })
        .catch((err) => console.log(err));
    }
  };

  return gemsCost ? (
    <div>
      <ul className="h-screen bg-gray-100 flex align-center justify-center flex-wrap">
        {gemsCost.map((batch) => (
          <li
            key={batch.id}
            className="bg-white shadow-lg w-96 flex flex-col p-4 justify-around rounded-xl m-10"
          >
            <div className="text-3xl font-bold text-center font-primary">
              {batch.label}
            </div>
            <div className="text-2xl text-center">{batch.amount} 💎</div>
            <div className="text-2xl text-center">
              {new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR',
              }).format(batch.price)}
            </div>
            <button
              className="rounded bg-blue-400 text-white font-bold text-xl flex items-center justify-center mt-4 p-2"
              type="submit"
              onClick={() => handleGemsBuying(batch.amount)}
            >
              Acheter
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
