import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, resetSearch } from "../../redux/actions/index";
import { NoRecipes } from "../NoRecipes/NoRecipes";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards() {
  const dispatch = useDispatch();

  const ancho = window.innerWidth;

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);

  const page = useSelector((state) => state.page);

  const currentPosts = recipes.slice(0, 130);
  const recipesPerPage = ancho < 1367 ? 8 : 10;
  const pagesVisited = page * recipesPerPage;

  const displayRecipes = currentPosts
    .slice(pagesVisited, pagesVisited + recipesPerPage)
    .map((el) => {
      return (
        <Card
          key={el.id}
          title={el.title}
          image={el.image}
          diet={el.diet}
          id={el.id}
          score={el.score}
        />
      );
    });

  var pageCount = Math.ceil(currentPosts.length / recipesPerPage);

  const changePage = ({ selected }) => {
    dispatch(resetSearch(selected));
  };

  return (
    <>
      <div className="cards-container">
        {recipes.length > 0 ? (
          displayRecipes
        ) : (
          <NoRecipes message={`The recipe you are looking for isn't in our records, try another one!`} />
        )}
      </div>
      <ReactPaginate
        previousLabel={"<Prev"}
        nextLabel={"Next>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        pageLinkClassName={"pageLinkClassName"}
        eventListener={window.scroll(0, 0)}
        marginPagesDisplayed={ancho < 600 ? 0 : 4}
        pageRangeDisplayed={ancho < 600 ? 0 : 3}
      />
    </>
  );
}
