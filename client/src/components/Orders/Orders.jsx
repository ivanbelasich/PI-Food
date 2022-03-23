import React from "react";
import "./Orders.css";

export const Orders = ({ orderAZ, orderZA, orderScore, orderScoreDesc }) => {
  return (
    <div className="body-orders">
      <div>
        <button onClick={(e) => orderAZ(e)}>A-Z</button>
      </div>
      <div>
        <button onClick={(e) => orderZA(e)}>Z-A</button>
      </div>
      <div>
        <button onClick={(e) => orderScore(e)}>High score</button>
      </div>
      <div>
        <button onClick={(e) => orderScoreDesc(e)}>Low score</button>
      </div>
    </div>
  );
};
