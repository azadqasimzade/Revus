import React from "react";
import { Routes, Route } from "react-router-dom";
import CarDetail from "../Components/CarDetail/CarDetail";
import Home from "../Pages/Home";

const routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CarDetail/>}/>
    </Routes>
  )
};

export default routes;
