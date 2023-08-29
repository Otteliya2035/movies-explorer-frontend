
import React, {useContext, useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo.svg";
import "../../components/Header/Header.css"
import Navigation from "../Navigation/Navigation"
import Popup from "./Popup/Popup";
import {routes} from "../../contstrains/routes";
import PopupImage from '../../images/popup__open-button.svg'
import {UserContext} from "../../contexts/user";

function Header() {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useLocation()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if( navigate.pathname === '/signin' || navigate.pathname === '/signup' || navigate.pathname === '/no-results'  || !routes.some(route => route.path === navigate.pathname)) {
    return
  }


  function handlePopupClick() {
    setIsOpen(!isOpen);
  }

 return (

    <header className="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" className="header__logo-image" />
          </Link>
              <nav className="header__container">
                {!isLoggedIn ? (
                  <div className="header__container-wrapper">
                    <Link to="/signup" className="header__container-link">
                      Регистрация
                    </Link>
                    <Link to="/signin"> <button type='button' className='header__container-button'>Войти</button> </Link>
                  </div>
                ) : (
                  isMobile
                    ? <button type='button' className='button header__container-popup-button' onClick={handlePopupClick}><img className='header__container-popup-img' src={PopupImage} alt='Иконка меню' /></button>
                    : (
                  <Navigation />
                    )
                )}
              </nav>
          <Popup isOpen={isOpen} onClose={handlePopupClick} />

    </header>
  );
}

export default Header;
