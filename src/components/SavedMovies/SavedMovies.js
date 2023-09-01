import React, {useEffect, useMemo, useState} from 'react';
import { Link } from 'react-router-dom';
import "../../components/Movies/Movies.css";
import filmsData from '../../utils/utils';
import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import Preloader from './Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import mainApi from "../../utils/api/MainApi";
import searchFilter from "../../utils/searchFilter";
function SavedMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const fetchSavedFilms = async () => {
      try {
        const token = localStorage.getItem('jwt')
        const data = await mainApi.getSavedMovies(token);
        if (data.length > 0) {
          setFilteredMovies(data);
          setSavedMovies(data);
        } else {
          setError('Ничего не найдено');
        }
      } catch (err) {
        setError('Ошибка при загрузке фильмов');
        console.error(err);
      }
    }

    fetchSavedFilms().finally(() => {
      setIsLoading(false);
    });
  }, [])


  const filter = useMemo(() => (name, shorts) => {
    const filtered = searchFilter(savedMovies, name, shorts);
    setError(filtered.length === 0 ? 'Ничего не найдено' : '');
    setFilteredMovies(filtered);
    setIsLoading(false);
  }, [savedMovies]);

  const handleSearch = (name, shorts) => {
    setIsLoading(true);
    filter(name, shorts);
  };

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    return (
      <main className={'movies'}>
        <SearchForm handleSearch={handleSearch} />
        {isLoading ? <Preloader/> : <MoviesCardList setVisibleMovies={setFilteredMovies} savedFilms={savedMovies} setSavedFilms={setSavedMovies} cards={filteredMovies} />}
      </main>
    );
  }

export default SavedMovies;
