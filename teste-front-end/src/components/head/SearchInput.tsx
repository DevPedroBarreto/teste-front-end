import "./SearchInput.scss";
import searchIcon from "../../assets/images/icons/search.png";

function SearchInput() {
  return (
    <div className="search">
      <input type="text" placeholder="O que você está buscando?" />
      <img src={searchIcon} alt="Buscar" />
    </div>
  );
}

export default SearchInput;
