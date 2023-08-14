import "../Profile/Profile.css"
function Profile() {
    return (
      <section className="profile">
        <div className="profile__content">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__form-group">
            <label className="profile__label" placeholder="Имя">Имя</label>
              <input type="text" className="profile__form-input" value="Виталий" />
            </div>
            <div className="profile__form-group">
              <label className="profile__label">Email</label>
              <input type="email" className="profile__form-input" value="vitaliy@example.com" />
            </div>
            <button className="profile__edit-button">Редактировать</button>

          <button className="profile__signout-button">Выйти из аккаунта</button>
          </form>
        </div>

      </section>
    );
  }

  export default Profile;

