import "../../../components/Main/Portfolio/Portfolio.css"
import arrow from "../../../images/arrow.svg"
import "../../../components/Main/Portfolio/Portfolio.css"
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="link portfolio__link" target="_blank" href={'https://github.com/Otteliya2035/how-to-learn'}>
            <span>Статичный сайт</span>
            <img src={arrow} alt="Стрелка" className="portfolio__link-img" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="link portfolio__link" target="_blank" href={'https://github.com/Otteliya2035/russian-travel'}>
            <span>Адаптивный сайт</span>
            <img src={arrow} alt="Стрелка" className="portfolio__link-img" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="link portfolio__link" target="_blank" href={'https://github.com/Otteliya2035/react-mesto-api-full-gha'}>
            <span>Одностраничное приложение</span>
            <img src={arrow} alt="Стрелка" className="portfolio__link-img" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;






