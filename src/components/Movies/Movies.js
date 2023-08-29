import React, {useEffect, useMemo, useState} from 'react';
import "../../components/Movies/Movies.css";
import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import Preloader from './Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import {useBrowserWidth} from "../../utils/useBrowserWidth";
import {
  DEFAULT_MOVIES_PER_PAGE,
  DEFAULT_MOVIES_PER_PAGE_MOBILE, DEFAULT_MOVIES_PER_PAGE_TABLET,
  MOBILE_WIDTH,
  MOVIES_PER_PAGE,
  MOVIES_PER_PAGE_MOBILE, MOVIES_PER_PAGE_TABLET, TABLET_WIDTH
} from "../../utils/constrains";
import moviesApi from "../../utils/api/MoviesApi";
import searchFilter from "../../utils/searchFilter";
import mainApi from "../../utils/api/MainApi";
function Movies() {
  const width = useBrowserWidth();

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedFilms, setSavedFilms] = useState([]);
  const [moviesPerPage, setMoviesPerPage] = useState(MOVIES_PER_PAGE);
  const [visibleMovies, setVisibleMovies] = useState();
  const [defaultMoviesPerPage, setDefaultMoviesPerPage] = useState(DEFAULT_MOVIES_PER_PAGE);


  useEffect(() => {
    if(width <= MOBILE_WIDTH) {
      setMoviesPerPage(MOVIES_PER_PAGE_MOBILE);
      setDefaultMoviesPerPage(DEFAULT_MOVIES_PER_PAGE_MOBILE)
    } else if (width <= TABLET_WIDTH) {
      setMoviesPerPage(MOVIES_PER_PAGE_TABLET);
      setDefaultMoviesPerPage(DEFAULT_MOVIES_PER_PAGE_TABLET);
    } else {
      setMoviesPerPage(MOVIES_PER_PAGE);
      setDefaultMoviesPerPage(DEFAULT_MOVIES_PER_PAGE);
    }

    setVisibleMovies(filteredMovies.slice(0, moviesPerPage * currentPage + defaultMoviesPerPage - moviesPerPage))
  }, [width, filteredMovies, currentPage, moviesPerPage])

  useEffect(() => {
    const storageMovies = localStorage.getItem('movies');

    if (!storageMovies) {
      const fetchFilms = async () => {
        try {
          const data = await moviesApi.getFilms().finally(() => setIsLoading(false));

          if (data.length > 0) {
            localStorage.setItem('movies', JSON.stringify(data));
            setFilteredMovies(data);
            setError('');
          }
        } catch (error) {
          setError('Проблема при загрузке фильмов');
        }
      };

      fetchFilms()
    } else {
      setIsLoading(false);
    }

    const fetchSavedFilms = async () => {
      const storagedMovies = localStorage.getItem('movies');
      if(storagedMovies) {
        try {
          const token = localStorage.getItem('jwt');
          await mainApi.getSavedMovies(token).then(
            res => {
              setSavedFilms(res)
            }
          );
        } catch (err) {
          alert('Не удалось подгрузить сохранённые фильмы')
        }
      }


    }
    fetchSavedFilms()

    const name = localStorage.getItem('searchFilm');
    const shorts = JSON.parse(localStorage.getItem('shorts'));
    filter(name, shorts);
  }, []);

  const filter = useMemo(() => (name, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const filtered = searchFilter(storedMovies, name, shorts);
    setError(filtered.length === 0 ? 'Ничего не найдено' : '');
    setFilteredMovies(filtered);
    setCurrentPage(1);
  }, []);

  const handleSearch = (name, shorts) => {

    filter(name, shorts);
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
  };

    return (
      <main className={'movies'}>
        <SearchForm handleSearch={handleSearch} />

        {isLoading
          ? <Preloader/>
          : <>
              <MoviesCardList setVisibleMovies={setVisibleMovies} savedFilms={savedFilms} setSavedFilms={setSavedFilms} cards={visibleMovies} />
              <button type={'button'} className='movies__btn' onClick={handleLoadMore}>Ещё</button>
            </>
        }
      </main>
    );
  }

export default Movies;
