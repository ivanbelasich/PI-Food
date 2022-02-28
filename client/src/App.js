import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Cards />} />
    </Routes>
  );
}

export default App;
