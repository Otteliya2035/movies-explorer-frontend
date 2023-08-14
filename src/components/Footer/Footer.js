
import '../../components/Footer/Footer.css';

function Footer() {
    return (
      <footer className="footer">
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <ul className="footer__container">
          <li className="footer__item">
            <p className="footer__logo">&copy;2023</p>
          </li>
          <div className='footer__container-item'>
          <li className="footer__item_">
            <p className="footer__link">Яндекс.Практикум</p>
          </li>
          <li className="footer__item">
            <p className="footer__link">Github</p>
          </li>
          </div>
        </ul>
      </footer>
    );
  }

  export default Footer;