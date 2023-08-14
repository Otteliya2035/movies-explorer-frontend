import React from 'react';
import "../MoviesCard/MoviesCard.css"
import Like from "../../../images/Like.svg";
import deletebtn from "../../../images/deletebtn.svg"


function MoviesCard({ movie }) {
  return (
    <div className="movies__card">
  <img src={movie.image} alt={movie.title} className="movies__card-image" />
  <div className="movies__card-content">
    <h2 className="movies__card-title">{movie.title}</h2>
    <p className="movies__card-duration">{movie.duration}</p>
  </div>
  {movie.isLiked ? (
    <div className="movies__card-buttons">
      <button className="movies__card-button-del">
      </button>
      <img src={Like} alt="Лайк" className="movies__card-like-icon" />
    </div>
  ) : (
    <div className="movies__card-buttons">
      <button className="movies__card-button-save">Сохранить</button>
    </div>
  )}
</div>

  )
}

export default MoviesCard;
