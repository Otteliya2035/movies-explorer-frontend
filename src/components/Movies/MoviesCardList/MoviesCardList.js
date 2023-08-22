import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <section className="movies__cards">
      <ul className="movies__cards-list">
        {movies.map((movie, index) => (
          <li key={index} className="movies__card-item">
            <MoviesCard movie={movie} />
          </li>
        ))}
      </ul>
      <button type={'button'} className='movies__btn'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
