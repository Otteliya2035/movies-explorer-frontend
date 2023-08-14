
import "../../../components/Main/AboutProject/AboutProject.css"
 function AboutProject (){
   return(
    <section className="about" id="section1">
<h2 className="about__title">О проекте</h2>
<div className="about__container">
<div className="about__container-item">Дипломный проект включал 5 этапов</div>
  <div className="about__container-item">На выполнение диплома ушло 5 недель</div>
  <div className="about__container-item">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</div>
  <div className="about__container-item">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</div>
</div>
<div className="about__list">
  <div className="about__primary">
    1 неделя
    <span className="about__label">Back-end</span>
  </div>
  <div className="about__secondary">
    4 недели
    <span className="about__label">Front-end</span>
  </div>
</div>
</section>
   );
 }

 export default AboutProject;