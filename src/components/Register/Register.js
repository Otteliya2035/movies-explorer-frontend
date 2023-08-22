import "../Register/Register.css"
import logo from "../../images/logo.svg"
import {Link, useNavigate} from "react-router-dom";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import Logo from "../Logo/Logo";

function Profile({ setIsLoggedIn }) {
  const { values, handleChange, errors, setIsValid, isValid, setValues, setErrors } = useFormAndValidation();

  const { password, email, name } = values;

  return (
    <main>
      <section className="registration">
        <div className="registration__header">
          <Logo classname={'registration__header-logo'} />
          <h1 className="registration__header-title">Добро пожаловать!</h1>
        </div>

        <form className="registration__form">
          <label htmlFor="name" className="registration__label">Имя</label>
          <input onChange={handleChange} minLength='2' maxLength='30' name='name' required id="name" value={name} className="registration__input" placeholder="Введите ваше имя" />
          <span className={'input-input-error'}>
                {errors.name}
          </span>

          <label htmlFor="email" className="registration__label">Email</label>
          <input onChange={handleChange} type="email" name='email' required id="email" pattern='^.+@.+\..+$' value={email} className="registration__input" placeholder="Введите ваш email" />
          <span className={'input-input-error'}>
                {errors.email}
          </span>

          <label htmlFor="password" className="registration__label">Пароль</label>
          <input onChange={handleChange} minLength='5' maxLength='12' name='password' required type="password" id="password" value={password} className="registration__input" placeholder="Введите пароль"  />
          <span className={'input-input-error'}>
                {errors.password}
          </span>
          <button type="submit" className="registration__button">Зарегистрироваться</button>
          <p className="registration__login-text">Уже зарегистрировались? <Link to="/signin" className="registration__login-link">Войти</Link></p>
        </form>
      </section>
    </main>
  );
}

export default Profile;
