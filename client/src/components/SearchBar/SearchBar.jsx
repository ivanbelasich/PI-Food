import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes, getRecipesByName, resetSearch } from "../../redux/actions";
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
      dispatch(resetSearch(0));
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
        autoComplete="off"
      />
      <button type="submit" className="search-button">
        <BiSearchAlt2 />
      </button>
    </form>
  );
}
