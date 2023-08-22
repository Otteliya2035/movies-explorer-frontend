import find from"../../../images/find.svg"
import "../../../components/Movies/SearchForm/SearchForm.css"
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox"
function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__container">
        <div className="searchform__container-inputs">
          <input type="text" placeholder="Фильм" className="searchform__input" />
          <button className="searchform__button" type='submit'></button>
        </div>
        <FilterCheckbox />

      </form>

    </section>
  );
}

export default SearchForm;
