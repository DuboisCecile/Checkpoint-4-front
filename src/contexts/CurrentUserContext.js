import { createContext, useState, useEffect } from 'react';
// import { useToasts } from 'react-toast-notifications';
// import history from '../history';
import API from '../APIClient';

export const CurrentUserContext = createContext();

export default function CurrentUserContextProvider({ children }) {
  // const { addToast } = useToasts();
  // eslint-disable-next-line no-unused-vars
  const [loadingProfile, setLoadingProfile] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [userEventList, setUserEventList] = useState([]);

  // const getUserEvents = async (user) => {
  //   try {
  //     const { data } = await API.get(`/users/${user.id}/events`);
  //     setUserEventList(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const createProfile = async (form) => {
  //   try {
  //     await API.post('/users', form);
  //     addToast('Account successfully created', {
  //       appearance: 'success',
  //     });
  //     setTimeout(() => {
  //       history.push('/login');
  //     }, 500);
  //   } catch (err) {
  //     addToast('Account creation was unsuccessful.', {
  //       appearance: 'error',
  //     });
  //   }
  // };

  // const login = async ({ email, password }) => {
  //   try {
  //     await API.post('/auth/login', { email, password });
  //     addToast('Successfully connected!', {
  //       appearance: 'success',
  //     });
  //     const user = await getProfile();
  //     setTimeout(() => {
  //       history.push('/');
  //     }, 500);
  //     await getUserEvents(user);
  //   } catch (err) {
  //     if (err.response && err.response.status === 401) {
  //       addToast('Email or password is incorrect!', {
  //         appearance: 'error',
  //       });
  //     } else window.console.error(err);
  //   }
  // };

  // const logout = async () => {
  //   try {
  //     await API.get('/auth/logout');
  //     addToast('Successfully disconnected!', {
  //       appearance: 'success',
  //     });
  //     setProfile(undefined);
  //     history.push('/');
  //   } catch (err) {
  //     addToast('Connection Failed!', {
  //       appearance: 'error',
  //     });
  //   }
  // };

  const getProfile = async () => {
    setLoadingProfile(true);
    let data = null;
    try {
      data = await API.get('/currentUser').then((res) => res.data);
      setProfile(data);
      setIsLoggedIn(true);
      return data;
    } catch (err) {
      window.console.error(err);
    }
    return data;
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        // createProfile,
        getProfile,
        profile,
        // login,
        isLoggedIn,
        // logout,
        // userEventList,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
