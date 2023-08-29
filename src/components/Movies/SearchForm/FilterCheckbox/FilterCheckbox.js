import "../FilterCheckbox/FilterCheckbox.css"

function FilterCheckbox({shortFilter, setShortFilter}) {
    return (
      <div className="filter">
        <input
          className="filter__checkbox"
          type="checkbox"
          checked={!!shortFilter}
          onChange={(e) => setShortFilter(e.target.checked)}
        ></input>
        <span className="filter__title">Короткометражки</span>
      </div>
    )
  }

  export default FilterCheckbox
