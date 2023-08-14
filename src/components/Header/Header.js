
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo.svg";
import "../../components/Header/Header.css"
import Register from '../Register/Register';
import Login from '../Login/Login';
import Navigation from "../Navigation/Navigation"
import BurgerMenu from '../../components/Header/BurgerMenu/BurgerMenu';
function Header({isLoggedIn}) {
  const navigate = useLocation()
  const isMobile = window.innerWidth <= 768;
  if( navigate.pathname === '/signin' || navigate.pathname === '/signup' || navigate.pathname === '/no-results' ) {
    return
  }
  const isAuth = isLoggedIn;
 return (

    <header className="header">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" className="header__logo-image" />
          </Link>
          {isMobile ? <BurgerMenu /> : (isAuth && <Navigation />)}

        <div className="header__container">
          {!isAuth ? (
            <>
              <Link to="/signup" className="header__container-link">
                Регистрация
              </Link>
              <Link to="/signin"> <button className='header__container-button'>Войти</button> </Link>
            </>
          ) : (
            <Navigation />
          )}
        </div>

    </header>
  );
}

export default Header;