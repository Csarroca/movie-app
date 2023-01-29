import Input from "../Input/Input";
import FilterStyled from "./SearcherStyled";

const Searcher = ({ label, search, searcher, placeholder }) => {
  return (
    <FilterStyled className="filter">
      <Input
        label={label}
        value={search}
        onChange={searcher}
        type="text"
        placeholder={placeholder}
        className="filter__input"
      />
    </FilterStyled>
  );
};

export default Searcher;
