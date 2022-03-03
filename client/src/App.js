import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Create } from "./components/Create/Create";
import { Detail } from "./components/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Create />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        {/*   <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
