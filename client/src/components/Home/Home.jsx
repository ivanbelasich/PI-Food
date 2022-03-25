import React from "react";
import Cards from "../Cards/Cards";
import { FilterBar } from "../FilterBar/FilterBar";

export const Home = () => {
  return (
    <div>
      <FilterBar />
      <Cards />
    </div>
  );
};
