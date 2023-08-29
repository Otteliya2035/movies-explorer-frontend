import React, {useEffect, useState} from 'react';
import "../MoviesCard/MoviesCard.css";
import Like from "../../../images/Like.svg";
import deletebtn from "../../../images/deletebtn.svg"
import {useLocation} from "react-router-dom";
import mainApi from "../../../utils/api/MainApi";


function MoviesCard({ setVisibleMovies, card, savedFilms, setSavedFilms }) {
  const [likedCard, setLikedCard] = useState(null);
  const [like, setLike] = useState(false);
  const likedCardData = savedFilms.find(savedFilm => savedFilm.movieId === card.id);

  const location = useLocation();
  function unixToHoursSeconds(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000 * 60); // Convert to milliseconds
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return { hours, minutes };
  }

  useEffect(() => {
    if (savedFilms.length) {
      if(likedCardData) {
        setLikedCard(likedCardData);
      }
    }
  }, [savedFilms]);

  useEffect(() => {
    if(likedCard) {
      setLike(!!likedCard)
    }

  }, [likedCard])

  useEffect(() => {
  }, [like])

  const handleLikeClick = async () => {
    const token = localStorage.getItem('jwt');
    const newCard = {
      country: card.country,
      description: card.description,
      director: card.director,
      duration: card.duration,
      image: card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image,
      movieId: card.id,
      nameEN: card.nameEN,
      nameRU: card.nameRU,
      thumbnail: "https://www.yandex.com",
      trailerLink: card.trailerLink,
      year: card.year
    }

    try {
      if (like) {
        await mainApi.removeMovie(likedCard._id, token).then(() => {
          setSavedFilms(prevFilms => prevFilms.filter(savedFilm => savedFilm._id !== likedCard._id));
          setLikedCard(null);
          setLike(false);
        }).catch(err => {
          alert('Вы не можете снять лайк');
        });
      } else {
        await mainApi.createMovie(newCard, token).then((res) => {
          setLikedCard(res);
          setLike(true);
        }).catch(() => {
          alert('Вы не можете поставить лайк');
        });
      }
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  const handleRemoveLike = async () => {
    console.log(card);
    const token = localStorage.getItem('jwt')
    await mainApi.removeMovie(card._id, token).then(() => {
        setSavedFilms(prevFilms => prevFilms.filter(savedFilm => savedFilm._id !== card._id));
        setLikedCard(null);
        setLike(false);
        setVisibleMovies(prevFilms => prevFilms.filter(savedFilm => savedFilm._id !== card._id));
      }
    )
  }

  const { hours, minutes } = unixToHoursSeconds(card.duration);

  return (
    <div className="movies__card">
  <img src={card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image} alt={`Название фильма ${card.nameRU}`} className="movies__card-image" />
  <div className="movies__card-content">
    <h2 className="movies__card-title">{card.nameRU}</h2>
    <p className="movies__card-duration">{hours}h:{minutes}m</p>
  </div>
  {location.pathname  === '/saved-movies' ? (
    <div className="movies__card-buttons">
      <button type='button' className="movies__card-button-del" onClick={handleRemoveLike}>
        <img src={Like} alt="Лайк" className="movies__card-like-icon" />
      </button>
    </div>
  ) : (
    <div className="movies__card-buttons">
      {like ? <><button type='button' className="movies__card-button-del" onClick={handleLikeClick}>
        <img src={deletebtn} alt="Удалить" className="movies__card-button-icon" />
      </button> </> : <button type={'button'} className="movies__card-button-save" onClick={handleLikeClick}>Сохранить</button>
      }

    </div>
  )}
</div>

  )
}

export default MoviesCard;
