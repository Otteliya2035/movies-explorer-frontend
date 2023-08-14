
import React from 'react';
import '../NoResults/NoResults.css';
import { Link } from 'react-router-dom';
function NoResults() {
  return (
    <div className="no-results">
      <h2 className="no-results__title">404</h2>
      <p className="no-results__description">Страница не найдена.</p>
      <Link to="/" className="no-results__back-link">Назад</Link>
    </div>
  );
}

export default NoResults;