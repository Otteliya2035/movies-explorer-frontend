import '../../components/Footer/Footer.css';
import {useLocation} from "react-router-dom";
import {routes} from "../../contstrains/routes";

function Footer() {
  const path = useLocation().pathname;

  if((path === '/signup') || (path === '/signin')) {
    return
  } else if (!routes.some(item => item.path === path)) {
    return
  }

    return (
      <footer className="footer">
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <ul className="footer__container">
          <li className="footer__item">
              <p className="footer__logo">&copy;2023</p>
          </li>
          <li className='footer__item'>
            <a className='footer__link'
               href='https://practicum.yandex.ru'
               target='_blank'
               rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__item'>
            <a className='footer__link'
               href='https://github.com/Otteliya2035'
               target='_blank'
               rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </footer>
    );
  }

  export default Footer;
