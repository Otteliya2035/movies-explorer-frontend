import find from"../../../images/find.svg"
import "../../../components/Movies/SearchForm/SearchForm.css"
import FilterCheckbox from "../SearchForm/FilterCheckbox/FilterCheckbox"
function SearchForm() {
  return (
    <section className="searchform">
      <div className="searchform__container">
        <input type="text" placeholder="Фильм" className="searchform__input" />
        <button className="searchform__button"></button>

      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;