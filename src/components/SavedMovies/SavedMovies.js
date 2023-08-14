import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../components/Movies/Movies.css";
import filmsData from '../../utils/utils';
import SearchForm from "../../components/Movies/SearchForm/SearchForm";
import Preloader from './Preloader/Preloader';
import MoviesCard from "../Movies/MoviesCard/MoviesCard"
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
function SavedMovies() {
  const moviesData = filmsData;


    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
    return (
      <>

        <SearchForm/>
        {isLoading ? <Preloader/> : <MoviesCardList movies={moviesData} />}


<Footer />
      </>
    );
  }

export default SavedMovies;