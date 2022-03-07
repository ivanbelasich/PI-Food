import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import { Paginate } from "../Paginate/Paginate";

export default function Cards() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);

  const ITEMS_PER_PAGE = 12;

  const [datosFromApi, setDatosFromApi] = useState(recipes);

  const [items, setItems] = useState([...recipes].splice(0, ITEMS_PER_PAGE));

  const [currentPage, setCurrentPage] = useState(1);

  const nextHandler = () => {
    const totalElements = datosFromApi.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * ITEMS_PER_PAGE;

    if (firstIndex === totalElements) return;
    setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
    setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };

  return (
    <>
      <Paginate
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        currentPage={currentPage}
        totalPages={Math.round(items.length / ITEMS_PER_PAGE)}
        items={items}
      />
    </>
  );
}
