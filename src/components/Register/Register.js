import "../Register/Register.css"
import logo from "../../images/logo.svg"
import {Link, useNavigate} from "react-router-dom";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import Logo from "../Logo/Logo";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/user";
import mainApi from "../../utils/api/MainApi";

function Profile() {
  const {login} = useContext(UserContext);
  const { values, handleChange, errors, isValid, setIsValid, setErrors } = useFormAndValidation();

  const { email, password, name } = values;

  const navigate = useNavigate();

  useEffect(() => {
    if (!email && !password && !name) {
      console.log('wroks')
      setIsValid(false);
    }
  }, [email, password, name, setIsValid])

  const handleSubmit = (e) => {
    e.preventDefault();

    mainApi.register(name, email, password)
      .then((res) => {
        if(res) {
          alert('Вы успешно зарегистрированы')
          login(email, password);
          navigate('/movies')
          return true;
        }
      })
      .catch(err => {
        if(err.status === 409) {
          alert('Пользователь с таким Email уже зарегистрирован')
        } else {
          alert('Произошла ошибка при регистрации.')
        }
        console.log(err);
      });
  }

  return (
    <main>
      <section className="registration">
        <div className="registration__header">
          <Logo classname={'registration__header-logo'} />
          <h1 className="registration__header-title">Добро пожаловать!</h1>
        </div>

        <form className="registration__form" onSubmit={handleSubmit}>
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
          <button type="submit" className="registration__button" disabled={!isValid}>Зарегистрироваться</button>
          <p className="registration__login-text">Уже зарегистрировались? <Link to="/signin" className="registration__login-link">Войти</Link></p>
        </form>
      </section>
    </main>
  );
}

export default Profile;
