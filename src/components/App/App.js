import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../index.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../../components/Movies/Movies';
import Profile from '../../components/Profile/Profile';
import Register from '../Register/Register'
import Login from '../Login/Login'
import NoResults from '../NoResults/NoResults';
import React, { useState } from 'react';
import '../App/App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="page">
      <Header isLoggedIn={isLoggedIn}/>
          {/* <Link to="/signup" className="header__link">
          Регистрация
        </Link>
          <button className="header__btn">
            Войти
          </button>
        </Header> */}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NoResults/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/saved-movies" element={<SavedMovies/>}/>
          <Route path="/signin" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;