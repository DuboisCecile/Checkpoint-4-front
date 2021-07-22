import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faBars,
  // faUserCircle,
  faChessRook,
  faSmile,
  faGem,
  faShoppingBasket,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  // const { isLoggedIn = true, profile } = useContext(CurrentUserContext);
  const isLoggedIn = true;
  const [burger, setBurger] = useState(false);
  const handleBurgerToggle = () => {
    setBurger(!burger);
  };

  return (
    <header className="w-full h-auto flex bg-primary">
      <div className="container px-4 justify-between items-start align-center flex flex-wrap">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <div className="flex items-center h-full">
            <NavLink exact path="/" to="/">
              Evadit
            </NavLink>
          </div>
          <button type="button" onClick={handleBurgerToggle}>
            <FontAwesomeIcon
              className="lg:hidden flex"
              icon={burger ? faTimes : faBars}
            />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center${
            burger ? ' flex' : ' hidden'
          }`}
        >
          <ul className="w-full flex flex-col lg:flex-row list-none lg:ml-auto lg:justify-end mt-7">
            <li className="nav-item">
              <NavLink
                className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
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

            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/add-event"
                  className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  {burger ? (
                    'Ajouter un évènement'
                  ) : (
                    <FontAwesomeIcon icon={faPlusCircle} />
                  )}
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  to="/guides"
                  className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  {burger ? (
                    'Rechercher un animateur'
                  ) : (
                    <FontAwesomeIcon icon={faSmile} />
                  )}
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  exact
                  to="/gems"
                >
                  {burger ? 'Mes gemmes' : <FontAwesomeIcon icon={faGem} />}
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
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
            )}

            {/* {isLoggedIn && (
              <>
                <li>
                  <NavLink
                    className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                    exact
                    to="/profile"
                  >
                    {burger ? (
                      'Profil'
                    ) : (
                      <FontAwesomeIcon icon={faUserCircle} />
                    )}
                  </NavLink>
                </li>
              </>
            )} */}
            {/* {!isLoggedIn && (
              <>
                <li>
                  <NavLink
                    exact
                    to="/sign-up"
                    className="px-3 py-2 flex items-center text-3xl lg:text-md uppercase font-bold leading-snug text-white hover:opacity-75"
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
