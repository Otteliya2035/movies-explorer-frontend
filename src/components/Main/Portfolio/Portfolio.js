import "../../../components/Main/Portfolio/Portfolio.css"
import arrow from "../../../images/arrow.svg"
import "../../../components/Main/Portfolio/Portfolio.css"
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <span>Статичный сайт</span>
          <img src={arrow} alt="Стрелка" className="portfolio__img" />
        </li>
        <li className="portfolio__list-item">
          <span>Адаптивный сайт</span>
          <img src={arrow} alt="Стрелка" className="portfolio__img" />
        </li>
        <li className="portfolio__list-item">
          <span>Одностраничное приложение</span>
          <img src={arrow} alt="Стрелка" className="portfolio__img" />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;






