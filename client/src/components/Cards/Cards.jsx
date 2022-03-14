import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";

export default function Cards() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);

  const [pageNumber, setPageNumber] = useState(0);

  const currentPosts = recipes.slice(0, 130);
  const recipesPerPage = 9;
  const pagesVisited = pageNumber * recipesPerPage;

  const displayRecipes = currentPosts
    .slice(pagesVisited, pagesVisited + recipesPerPage)
    .map((el) => {
      return (
        <>
          <Card
            key={el.id}
            title={el.title}
            image={el.image}
            diets={el.diets}
            id={el.id}
          />
        </>
      );
    });

  const pageCount = Math.ceil(currentPosts.length / recipesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displayRecipes}
      <ReactPaginate
        previousLabel={"<Prev"}
        nextLabel={"Next>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        /*  activeClassName={"paginationActive"} */
        /*     pageRangeDisplayed={13} */
        eventListener={window.scroll(0, 0)}
      />
    </div>
  );
}
