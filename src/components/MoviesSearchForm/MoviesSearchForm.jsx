import css from "./MoviesSearchForm.module.css";
const MoviesSearchForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.search.value.trim();
    if (value === "") {
      return;
    }
    onSubmit(value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="search"
        placeholder="Search movies"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default MoviesSearchForm;
