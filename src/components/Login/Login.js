import { Link } from 'react-router-dom';
import '../Login/Login.css';
import logo from "../../images/logo.svg"
import "../Login/Login.css"
function Login({ setIsLoggedIn }) {
    return (
      <div className="login">
        <img src={logo} alt="Логотип" className="login__logo"/>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <label htmlFor="email" className="login__label">Email</label>
          <input type="email" id="email" className="login__input" placeholder="Введите ваш email" />
          <label htmlFor="password" className="login__label">Пароль</label>
          <input type="password" id="password" className="login__input" placeholder="Введите пароль" />
          <button type="submit" className="login__button">Войти</button>
        <p className="login__signup-text">Еще не зарегистрированы? <Link to="/signup" className="login__signup-link">Регистрация</Link></p>
        </form>
      </div>
    );
  }
  export default Login;