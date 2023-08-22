import foto from "../../../images/foto.png";
import "../../../components/Main/AboutMe/AboutMe.css"
 function AboutMe (){
   return(
    <section className="aboutme" id="section3">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__info">
          <div className="aboutme__text-wrapper">
            <h3 className="aboutme__header">Виталий</h3>
            <p className="aboutme__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <p className="aboutme__git">Github</p>
        </div>

        <img src={foto} className="aboutme__foto" alt="Фотография разработчика"/>
      </div>
    </section>
   );
 }

 export default AboutMe;
