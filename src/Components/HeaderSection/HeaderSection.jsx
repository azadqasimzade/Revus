import React, { useState } from "react";
import MobileHeaderLinks from "../MobileHeaderLinks/MobileHeaderLinks";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderPhone from "./HeaderPhone/HeaderPhone";
import { BsList } from "react-icons/bs";

const HeaderSection = () => {
  const [open, setOpen] = useState(false);


  return (
    <header className="w-full h-[92px] bg-white">
      <div className="w-full h-full md:container mx-auto xl:px-36 px-6 py-2 flex items-center lg:justify-between justify-start gap-4">
        <HeaderLogo />
        <HeaderLinks />
        <HeaderPhone />
        <div onClick={() => setOpen(true)} className="lg:hidden block ml-auto cursor-pointer">
          <BsList size={35}/>
        </div>
        <MobileHeaderLinks open={open} setOpen={setOpen}/>
      </div>
    </header>
  );
};

export default HeaderSection;
