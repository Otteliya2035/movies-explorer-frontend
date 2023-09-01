
import React from 'react';
import '../NoResults/NoResults.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
function NoResults() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="no-results">
        <h1 className="no-results__title">404</h1>
        <p className="no-results__description">Страница не найдена.</p>
        <Link onClick={() => navigate(-1)} className="no-results__back-link">Назад</Link>
      </section>
    </main>
  );
}

export default NoResults;
