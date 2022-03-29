import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Search from "./Searched";
import Searched from "./Searched";

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched></Searched>}></Route>
    </Routes>
  );
};

export default Pages;
