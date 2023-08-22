import React, { useState } from 'react';
import "../../Header/BurgerMenu/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <button type={'button'} type='button' className="burger-menu__button" onClick={toggleMenu}>
        <div className="burger-menu__icon">
          <div className="burger-menu__bar"></div>
          <div className="burger-menu__bar"></div>
          <div className="burger-menu__bar"></div>
        </div>
      </button>
      <button type='button' className="burger-menu__close-button" onClick={toggleMenu}></button>
      <div className="burger-menu__content">
        <nav className="burger-menu__nav">
          <ul className="burger-menu__list">
            <li className="burger-menu__item"><a href="/">Главная</a></li>
            <li className="burger-menu__item"><a href="/movies">Фильмы</a></li>
            <li className="burger-menu__item"><a href="/saved-movies">Сохраненные фильмы</a></li>
            <li className="burger-menu__item"><a href="/profile">Аккаунт</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;





