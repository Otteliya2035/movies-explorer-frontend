import "../../../components/Main/NavTab/NavTab.css"
function NavTab() {
    return (
      <nav className="navtab">
        <ul className="navtab__list">
       <li className="navtab__list-item"> <a href="#section1">
       <span>О проекте</span>
        </a></li>
      <li className="navtab__list-item">  <a href="#section2">
      <span>Технологии</span>
        </a></li>
       <li className="navtab__list-item"><a href="#section3">
       <span>Студент</span>
        </a></li>
        </ul>
      </nav>
    );
  }

  export default NavTab;
