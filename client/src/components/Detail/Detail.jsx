import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipesDetail, resetDetail } from "../../redux/actions";
import BackButton from "../Back/BackButton";
import "./Detail.css";

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
      <div className="back-button-container">
        <BackButton />
      </div>
      {recipeDetail ? (
        <div className="detail-container">
          <div className="detail-principal-title">{recipeDetail.title}</div>
          <img className="detail-image" src={recipeDetail.image} alt="img" />

          <div className="detail-card">
            <div className="detail-title">Diets</div>
            <div className="detail-data">
              {(recipeDetail.diet + ` `).replace(/,/g, ", ")}
            </div>
          </div>
          <div className="detail-card">
            <div className="detail-title">Dish types</div>
            <div className="detail-data">
              {(recipeDetail.dishTypes + "").replace(/,/g, ", ")}
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-title">Score</div>
            <div className="detail-data">{recipeDetail.score}</div>
          </div>
          <div className="detail-card">
            <div className="detail-title">Health score</div>
            <div className="detail-data">{recipeDetail.healthScore}</div>
          </div>
          <div className="detail-instructions">
            <div className="detail-title">Summary</div>
            <div className="detail-data">{recipeDetail.summary}</div>
          </div>
          <div className="detail-instructions">
            <div className="detail-title">Instructions</div>
            <div className="detail-data">
              {recipeDetail.instructions.replace(/\.,/g, ". ")}
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
