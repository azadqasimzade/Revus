import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderSection from "../Components/HeaderSection/HeaderSection";

const routes = () => {
  return (
    <Routes>
        <Route path="/" element={<HeaderSection/>}/>
    </Routes>
  )
};

export default routes;
