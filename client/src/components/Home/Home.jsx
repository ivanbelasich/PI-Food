import React from "react";
import Cards from "../Cards/Cards";
import { FilterBar } from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";

export const Home = () => {
  return (
    <div>
      <FilterBar />
      <Cards />
    </div>
  );
};
