import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../actions/index";
import Card from "../Card/Card";
import { Paginate } from "../Paginate/Paginate";

export default function Cards() {
  const recipes = useSelector((state) => state.recipes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const ITEMS_PER_PAGE = 9;

  const [items, setItems] = useState([...recipes].splice(0, ITEMS_PER_PAGE));

  const [currentPage, setCurrentPage] = useState(0);

  const nextHandler = () => {
    const totalElements = recipes.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;
    if (firstIndex === totalElements) return;
    setItems([...recipes].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
    setItems([...recipes].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  return (
    <>
      <Paginate
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        totalElements={recipes.length}
      />
      <div>
        {items ? (
          items.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              image={el.image}
              diets={el.diets}
              id={el.id}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}
