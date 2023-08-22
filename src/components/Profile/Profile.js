import "../Profile/Profile.css"
import {useState} from "react";
import {useFormAndValidation} from "../../hooks/useFormAndValidation";
import {NavLink} from "react-router-dom";
function Profile() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  const { values, handleChange, errors, setIsValid, isValid, setValues, setErrors } = useFormAndValidation();

  const { email, name } = values;


  const handleSubmitChanges = () => {

  }
    return (
      <main>
        <section className="profile">
            <h1 className='profile__title'>Привет, Виталий!</h1>
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
                    pattern='^.+@.+\..+$'
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
                <button type='submit' className='link profile__button profile__button_type_edit' >Редактировать</button>
                <NavLink className='profile__button profile__button_type_exit' to='/' >
                  Выйти из профиля
                </NavLink>
              </div>
            </form>
        </section>
      </main>
    );
  }

  export default Profile;

