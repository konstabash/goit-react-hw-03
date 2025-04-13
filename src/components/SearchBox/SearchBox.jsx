import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={s.container}>
      <label htmlFor="filter"> Find contacts by name </label>

      <input
        className={s.input}
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
