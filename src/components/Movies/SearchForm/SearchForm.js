import find from"../../../images/find.svg"
import "../../../components/Movies/SearchForm/SearchForm.css"
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox"
import {useEffect, useState} from "react";
import {useFormAndValidation} from "../../../hooks/useFormAndValidation";
import {useLocation} from "react-router-dom";
function SearchForm({ handleSearch }) {
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

  const [shortFilter, setShortFilter] = useState();

  const { searchInput } = values;


  const { pathname } = useLocation();

  const handleShortFilter = () => {

    setShortFilter(!shortFilter);

  };

  const findFilm = (e) => {
    e.preventDefault();
    if(errors.searchInput || !searchInput) return;


    if (pathname === '/movies') {
      localStorage.setItem('searchFilm', searchInput);
      if(shortFilter) {
        localStorage.setItem('shorts', String(shortFilter));
      } else {
        localStorage.setItem('shorts', String(false));
      }
    }


    handleSearch(searchInput, shortFilter);
  };

  useEffect(() => {
    if (pathname === '/movies') {
      const savedInputValue = localStorage.getItem('searchFilm');
      const savedShorts = JSON.parse(localStorage.getItem('shorts'));

      if (savedInputValue) {
        setValues({...values, searchInput: savedInputValue});
      }
      if (savedShorts) {
        setShortFilter(savedShorts);
      }
      console.log(savedInputValue && savedShorts)
      if (savedInputValue || savedShorts) {
        handleSearch(savedInputValue, savedShorts);
      }
    }
  }, []);

  return (
    <section className="searchform">
      <form className="searchform__container" onSubmit={findFilm}>
        <div className="searchform__container-inputs">
          <input type="text" placeholder="Фильм" name='searchInput' value={searchInput || ''} onChange={handleChange} required className="searchform__input" />
          <button className="searchform__button" type='submit' disabled={!isValid || !searchInput}></button>
        </div>
        <p className={'searchform__error'}>{errors.searchInput}</p>
        <FilterCheckbox shortFilter={shortFilter} setShortFilter={handleShortFilter} />

      </form>

    </section>
  );
}

export default SearchForm;
