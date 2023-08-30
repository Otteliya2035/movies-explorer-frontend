
import "../../../components/Main/AboutProject/AboutProject.css"
 function AboutProject (){
   return(
    <section className="about" id="section1">
      <h2 className="about__title">О проекте</h2>
      <div className="about__container">
        <h3 className="about__container-item">Дипломный проект включал 5 этапов</h3>
        <h3 className="about__container-item">На выполнение диплома ушло 5 недель</h3>
        <p className="about__container-item">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about__container-item">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>

      <div className='about__stages'>
        <p className='about__weeks'>
          1 неделя
        </p>

        <p className='about__weeks about__weeks_frontend'>
          4 недели
        </p>

        <span className='about__span about__span--back-end'>
          Back-end
        </span>

        <span className='about__span about__span--front-end'>
      Front-end
    </span>
      </div>
    </section>
   );
 }

 export default AboutProject;
