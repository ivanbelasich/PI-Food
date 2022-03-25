import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipesDetail, resetDetail } from "../../redux/actions";
import "./Detail.css"

export const Detail = () => {
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesDetail(id));
    return () => dispatch(resetDetail());
  }, [id, dispatch]);

  return (
    <>
      {recipeDetail ? (
        <div className="detail-container">
          <h4>{recipeDetail.title}</h4>
          <img src={recipeDetail.image} alt="img" />
          <h3>Diets:</h3>
          <h3>{recipeDetail.diets}</h3>
          <h3>Dish types:</h3>
          <h4>{recipeDetail.dishTypes}</h4>
          <h3>Summary:</h3>
          <h4>{recipeDetail.summary}</h4>
          <h3>Score:</h3>
          <h4>{recipeDetail.score}</h4>
          <h3>Health score:</h3>
          <h4>{recipeDetail.healthScore}</h4>
          <h3>Instructions:</h3>
          <h4>{recipeDetail.instructions}</h4>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
