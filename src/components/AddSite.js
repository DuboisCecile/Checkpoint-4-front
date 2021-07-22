/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import API from '../APIClient';
import history from '../history';

export default function EventForm() {
  const { addToast } = useToasts();
  // const [event, setEvent] = useState(false);
  const [siteCategoryList, setSiteCategoryList] = useState([]);
  const { register, handleSubmit, watch } = useForm();
  const categoryId = watch('categoryId');

  // const handleChangeToggle = () => {
  //   setEvent(!event);
  // };

  useEffect(() => {
    API.get('sites/categories')
      .then(async (res) => {
        setSiteCategoryList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitSite = async (form) => {
    console.log(form);

    try {
      await API.post('/sites', form);
      addToast('Ce nouveau site a bien été enregistré', {
        appearance: 'success',
      });
      setTimeout(() => {
        history.push('/add-event');
      }, 500);
    } catch (err) {
      addToast(
        "Il y a eu une erreur pendant l'enregistrement de ce nouveau site",
        {
          appearance: 'error',
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center w-2/3 m-auto border shadow-2xl">
      <div className="p-4 w-full">
        <h1 className="titles">Ajoutez un nouveau site</h1>
        <form
          onSubmit={handleSubmit(onSubmitSite)}
          className="mt-8"
          action="send"
          method="POST"
        >
          <div className="mt-5">
            <label htmlFor="siteName" className="subtitles">
              Nom
              <input
                type="text"
                required
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Nom"
                {...register('siteName')}
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
            {siteCategoryList && (
              <>
                <label htmlFor="categoryId" className="subtitles">
                  Choisissez la catégorie de ce site :
                  <select
                    {...register('categoryId', { required: true })}
                    defaultValue=""
                  >
                    <option key="title" value="" disabled>
                      Sélectionnez une catégorie
                    </option>
                    {siteCategoryList.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
              </>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="address" className="mt-5 subtitles">
              Adresse
              <br />
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="text"
                placeholder="Adresse"
                {...register('address')}
              />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="postcode" className="mt-5 subtitles">
              Code postal
              <br />
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="text"
                placeholder="Code postal"
                {...register('postcode')}
              />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="city" className="mt-5 subtitles">
              Ville
              <br />
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="text"
                placeholder="Ville"
                {...register('city')}
              />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="country" className="mt-5 subtitles">
              Pays
              <br />
              <input
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                type="text"
                placeholder="Pays"
                {...register('country')}
              />
            </label>
          </div>

          <div className="mt-5">
            <label htmlFor="image" className="subtitles">
              Image d'illustration
              <input
                type="text"
                required
                className="relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
                placeholder="image"
                {...register('image')}
              />
            </label>
          </div>

          <div>
            <button
              // onClick={() => {
              //   setValue('name', siteName);
              // }}
              type="submit"
              disabled={categoryId === ''}
              className="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
