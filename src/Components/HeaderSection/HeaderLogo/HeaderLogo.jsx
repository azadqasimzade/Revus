import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../../assets/Logo/revus.png";

const HeaderLogo = () => {
  return (
    <div className="w-[106px] h-16 cursor-pointer">
      <Link to={"/"}><img src={logo} alt="logo" /></Link>
    </div>
  );
};

export default HeaderLogo;
