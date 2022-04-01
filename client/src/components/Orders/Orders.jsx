import React from "react";
import "./Orders.css";

export const Orders = ({ orderAZ, orderZA, orderScore, orderScoreDesc }) => {
  return (
    <div className="body-orders">
      <button className="filter-button" onClick={(e) => orderAZ(e)}>A-Z</button>
      <button className="filter-button" onClick={(e) => orderZA(e)}>Z-A</button>
      <button className="filter-button" onClick={(e) => orderScore(e)}>High Score</button>
      <button className="filter-button" onClick={(e) => orderScoreDesc(e)}>Low Score</button>
    </div>
  );
};
