import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes, getRecipesByName } from "../../actions";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        id="search"
        type="search"
        placeholder="Search recipe"
        onChange={(e) => handleChange(e)}
      />
      <button>Search</button>
    </form>
  );
}
