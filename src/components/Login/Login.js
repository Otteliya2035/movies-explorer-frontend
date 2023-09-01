import {Link, useNavigate} from 'react-router-dom';
import '../Login/Login.css';
import "../Login/Login.css"
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import Logo from "../Logo/Logo";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/user";
function Login() {

  const { values, handleChange, errors, setIsValid, isValid } = useFormAndValidation();

  const { email, password } = values;

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email && !password) {
      setIsValid(false)
    }
  }, [email, password, setIsValid])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isLoggedIn = await login(email, password);

    if(isLoggedIn) {
      navigate('/movies');
    }
  }

  return (
    <main>
      <section className="login">
        <div className="login__header">
          <Logo classname={'login__header-logo'} />
          <h1 className="login__header-title">Рады видеть!</h1>
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
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
          <button type="submit" className="login__button" disabled={!isValid}>Войти</button>
          <p className="login__signup-text">Еще не зарегистрированы? <Link to="/signup" className="login__signup-link">Регистрация</Link></p>
        </form>
      </section>
    </main>
    );
  }
  export default Login;
