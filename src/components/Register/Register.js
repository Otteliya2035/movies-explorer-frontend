import "../Register/Register.css"
import logo from "../../images/logo.svg"
function Profile({ setIsLoggedIn }) {
    return (
<div className="registration">
  <img src={logo} alt="Логотип" className="registration__logo"/>
  <h1 className="registration__title">Добро пожаловать!</h1>
  <form className="registration__form">
    <label htmlFor="username" className="registration__label">Имя</label>
    <input type="text" id="username" className="registration__input" placeholder="Введите ваше имя"/>
    <label htmlFor="email" className="registration__label">Email</label>
    <input type="email" id="email" className="registration__input" placeholder="Введите ваш email"/>
    <label htmlFor="password" className="registration__label">Пароль</label>
    <input type="password" id="password" className="registration__input" placeholder="Введите пароль"/>
    <p className="registration__input-error">Что-то пошло не так...</p>
    <button type="submit" className="registration__button">Зарегистрироваться</button>
    <p className="registration__login-text">Уже зарегистрировались? <a href="#" className="registration__login-link">Войти</a></p>
  </form>
</div>

    );
  }

  export default Profile;