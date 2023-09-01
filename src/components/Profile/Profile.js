import "../Profile/Profile.css"
import {useContext, useEffect, useState} from "react";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import {NavLink} from "react-router-dom";
import {UserContext} from "../../contexts/user";
import mainApi from "../../utils/api/MainApi";
function Profile() {
  const [isSubmitting, setIsSubmitting] = useState(false);


  const { values, handleChange, errors, setIsValid, setValues, isValid } = useFormAndValidation();

  const { email, name } = values;

  const { logout, userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    setValues({email: userData.email, name: userData.name})
  }, [userData])

  useEffect(() => {
    if ((!email && !name)) {
      setIsValid(false)
    }

    if((userData.name === name && userData.email === email) ) {
      setIsValid(false)
    }
  }, [email, name, setIsValid, isSubmitting, userData])

  const handleSubmitChanges = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    if (userData.name === name && userData.email === email) {
      setIsSubmitting(false);
      return;
    }
    const token = localStorage.getItem('jwt');

    mainApi.editCurrentUserInfo(token, {name, email}).then((res) => {
      alert('Вы успешно изменили данные!')
      setUserData(res)
    }).catch((err) => {
      if(err.status === 409) {
        alert('Такой Email уже зарегистрирован')
      } else {
        alert('Ошибка при изменении данных.')
      }
      console.log(err)
    }).finally(() => {
      setIsSubmitting(false);
    });
  }

  const handleExit = () => {
    logout();
  }
    return (
      <main>
        <section className="profile">
            <h1 className='profile__title'>Привет, {userData.name}!</h1>
            <form className='profile__form' onSubmit={handleSubmitChanges}>
              <div className='profile__input-container'>
                <div className='profile__input-wrapper'>
                  <label htmlFor='name' className='profile__input-label'>Имя</label>
                  <input
                    id='name'
                    type='text'
                    className='profile__input'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    required
                    minLength='2'
                    maxLength='30'
                    placeholder='Имя'
                  />
                </div>
                <span className="input-error input-error_active">
                {errors.name}
                </span>
              </div>


              <div className='profile__input-container'>
                <div className='profile__input-wrapper'>
                  <label htmlFor='email' className='profile__input-label'>E-mail</label>
                  <input
                    type='email'
                    id='email'
                    className='profile__input'
                    name='email'
                    value={email}
                    // pattern='^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
                    minLength='2'
                    maxLength='30'
                    onChange={handleChange}
                    required
                    placeholder='Email'
                  />
                </div>
                <span className="input-error input-error_active">
                  {errors.email}
                </span>
              </div>


              <div className='profile__buttons'>
                <button type='submit' className='link profile__button profile__button_type_edit' disabled={!isValid}>Редактировать</button>
                <NavLink className='profile__button profile__button_type_exit' to='/' onClick={handleExit}>
                  Выйти из профиля
                </NavLink>
              </div>
            </form>
        </section>
      </main>
    );
  }

  export default Profile;

