import { Link } from 'react-router-dom';
import '../Login/Login.css';
import "../Login/Login.css"
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import Logo from "../Logo/Logo";
function Login({ setIsLoggedIn }) {

  const { values, handleChange, errors, setIsValid, isValid, setValues, setErrors } = useFormAndValidation();

  const { password, email } = values;

  return (
    <main>
      <section className="login">
        <div className="login__header">
          <Logo classname={'login__header-logo'} />
          <h1 className="login__header-title">Рады видеть!</h1>
        </div>

        <form className="login__form">
          <label htmlFor="email" className="login__label">Email</label>
          <input onChange={handleChange} type="email" name='email' required id="email" pattern='^.+@.+\..+$' value={email} className="login__input" placeholder="Введите ваш email" />
          <span className={'input-input-error'}>
            {errors.email}
          </span>
          <label htmlFor="password" className="login__label">Пароль</label>
          <input onChange={handleChange} minLength='5' maxLength='12' name='password' required type="password" id="password" value={password} className="login__input" placeholder="Введите пароль"  />
          <span className={'input-input-error'}>
            {errors.password}
          </span>
          <button type="submit" className="login__button">Войти</button>
          <p className="login__signup-text">Еще не зарегистрированы? <Link to="/signup" className="login__signup-link">Регистрация</Link></p>
        </form>
      </section>
    </main>
    );
  }
  export default Login;
