import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import "../Navigation/Navigation.css"
import BurgerMenu from "../Header/BurgerMenu/BurgerMenu";

function Navigation() {
  const [showBurger, setShowBurger] = useState(window.innerWidth <= 768);


  useEffect(() => {
    function handleResize() {
      setShowBurger(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    !showBurger ?
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <NavLink to="/movies" className="nav__link">
              Фильмы
            </NavLink>
          </li>
          <li className='nav__list-item'>
            <NavLink to="/saved-movies" className="nav__link">
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink to="/profile" className="nav__link nav__link_profile">
          Аккаунт
        </NavLink>
      </nav>
      : <BurgerMenu />
  );
}

export default Navigation;
