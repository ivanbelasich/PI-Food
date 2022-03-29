import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/index";
import { NoRecipes } from "../NoRecipes/NoRecipes";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes);

  const [pageNumber, setPageNumber] = React.useState(0);

  const currentPosts = recipes.slice(0, 130);
  const recipesPerPage = 10;
  const pagesVisited = pageNumber * recipesPerPage;

  const displayRecipes = currentPosts
    .slice(pagesVisited, pagesVisited + recipesPerPage)
    .map((el) => {
      return (
        <Card
          key={el.id}
          title={el.title}
          image={el.image}
          diets={el.diets}
          id={el.id}
          score={el.score}
        />
      );
    });

  var pageCount = Math.ceil(currentPosts.length / recipesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="cards-container">
        {recipes.length > 0 ? displayRecipes : <NoRecipes />}
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
      />
    </>
  );
}
