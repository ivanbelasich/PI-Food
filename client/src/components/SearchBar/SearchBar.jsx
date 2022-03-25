import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes, getRecipesByName } from "../../redux/actions";
import { BiSearchAlt2 } from "react-icons/bi";
import "./SearchBar.css";

export default function SearchBar() {
  const [data, setData] = useState();

  function handleChange(e) {
    setData((data) => (data = e.target.value));
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      dispatch(getRecipesByName(data));
    } else {
      dispatch(getRecipes());
    }
  };

  return (
    <form className="searchbar-body" onSubmit={(e) => handleSubmit(e)}>
      <input
        id="search"
        placeholder="Search recipe"
        onChange={(e) => handleChange(e)}
      />
      <div className="search-button">
        <BiSearchAlt2 />
      </div>
    </form>
  );
}
