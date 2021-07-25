import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faBars,
  faUserCircle,
  faChessRook,
  // faSmile,
  faGem,
  // faShoppingBasket,
  faPlusCircle,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Header() {
  // const { isLoggedIn = true, profile } = useContext(CurrentUserContext);
  const { profile } = useContext(CurrentUserContext);
  const isLoggedIn = true;
  const [burger, setBurger] = useState(false);
  const handleBurgerToggle = () => {
    setBurger(!burger);
  };

  return (
    <header className="w-full h-auto flex bg-blue-400">
      <div className="w-full px-4 justify-between items-center align-center flex flex-wrap">
        <div className="mt-4 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <NavLink
            className="font-primary text-white font-bold text-6xl mb-0"
            exact
            path="/"
            to="/"
          >
            Evadit
          </NavLink>

          <button type="button" onClick={handleBurgerToggle}>
            <FontAwesomeIcon
              className="text-2xl lg:hidden flex text-white"
              icon={burger ? faTimes : faBars}
            />
          </button>
        </div>
        <div className={`lg:flex items-center${burger ? ' flex' : ' hidden'}`}>
          <ul className="w-full flex flex-col lg:flex-row list-none lg:ml-auto lg:justify-center mt-7">
            {profile && (
              <li className="nav-item">
                <div className="px-3 py-2 flex items-center text-xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75">{`Mon trésor actuel : ${profile.gems} gemmes`}</div>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                exact
                to="/sites"
                path="/sites"
              >
                {burger ? (
                  'Rechercher un site'
                ) : (
                  <FontAwesomeIcon icon={faChessRook} />
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                exact
                to="/events"
                path="/events"
              >
                {burger ? (
                  'Rechercher un évènement'
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </NavLink>
            </li>

            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/add-event"
                  className="px-3 py-2 flex items-center text-xl lg:text-3xl  uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  {burger ? (
                    'Ajouter un évènement'
                  ) : (
                    <FontAwesomeIcon icon={faPlusCircle} />
                  )}
                </NavLink>
              </li>
            )}
            {/* {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/guides"
                  className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  {burger ? (
                    'Rechercher un animateur'
                  ) : (
                    <FontAwesomeIcon icon={faSmile} />
                  )}
                </NavLink>
              </li>
            )} */}

            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  exact
                  to="/buy-gems"
                >
                  {burger ? (
                    'Acheter des gemmes'
                  ) : (
                    <FontAwesomeIcon icon={faGem} />
                  )}
                </NavLink>
              </li>
            )}

            {/* {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  exact
                  to="/basket"
                >
                  {burger ? (
                    'Mon panier'
                  ) : (
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  )}
                </NavLink>
              </li>
            )} */}

            {/* {isLoggedIn && ( */}
            <li>
              <NavLink
                className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                exact
                to="/profile"
              >
                {burger ? 'Profil' : <FontAwesomeIcon icon={faUserCircle} />}
              </NavLink>
            </li>
            {/* )} */}

            {/* {!isLoggedIn && (
              <>
                <li>
                  <NavLink
                    exact
                    to="/sign-up"
                    className="px-3 py-2 flex items-center text-xl lg:text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    S'inscrire
                  </NavLink>
                </li>
                <li>
                  <ModalSignIn />
                </li>
              </>
            )}
            {isLoggedIn && (
              <li>
                <Logout />
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </header>
  );
}
