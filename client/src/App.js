import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Create } from "./components/Create/Create";
import { DetailContainer } from "./components/DetailContainer/DetailContainer";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/add" element={<Create />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<DetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
