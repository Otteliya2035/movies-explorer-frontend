import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <section className="movies">
    <div className="movies__card-list">
      {movies.map((movie, index) => (
        <MoviesCard key={index} movie={movie} />
      ))}
    </div>
    <button type={'button'} className='movies__btn'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
