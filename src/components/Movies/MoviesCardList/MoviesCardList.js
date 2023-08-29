import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

function MoviesCardList({ setVisibleMovies, cards, savedFilms, setSavedFilms }) {
  return (
    <section className="movies__cards">
      <ul className="movies__cards-list">
        {cards.length ? cards.map((card, index) => (
          <li key={index} className="movies__card-item">
            <MoviesCard setVisibleMovies={setVisibleMovies}
                        setSavedFilms={setSavedFilms}
                        savedFilms={savedFilms}
                        key={card.id}
                        card={card} />
          </li>
        )) : <div className={'center'}><h1>Ничего не найдено :(</h1></div>}
      </ul>
    </section>
  );
}

export default MoviesCardList;
