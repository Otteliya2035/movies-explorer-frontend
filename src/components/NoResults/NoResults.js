
import React from 'react';
import '../NoResults/NoResults.css';
import { Link } from 'react-router-dom';
function NoResults() {
  return (
    <main>
      <section className="no-results">
        <h1 className="no-results__title">404</h1>
        <p className="no-results__description">Страница не найдена.</p>
        <Link to="/" className="no-results__back-link">Назад</Link>
      </section>
    </main>
  );
}

export default NoResults;
