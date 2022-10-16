import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const MobileHeaderLinks = ({ open, setOpen }) => {
  return (
    <>
      {open && <div className="w-hull h-full absolute inset-0 ease-in duration-200 bg-black/70 z-50"></div>}
      <div className={`${open ? "left-0" : "-left-[100%]"} fixed w-[280px] ease-in duration-200 h-full z-50 bg-white top-0`}>
        <div className="mt-10">
          <nav>
            <ul className="flex flex-col ml-5 gap-10 text-xs font-semibold">
              <li className="relative">
                <NavLink
                  to={"/"}
                  className="flex items-center gap-x-2 hover:text-primary transition-all uppercase"
                >
                  Inventory
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="hover:text-primary transition-all uppercase"
                >
                  About
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to={"/"}
                  className="flex items-center gap-x-2 hover:text-primary transition-all uppercase"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="hover:text-primary transition-all uppercase"
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="hover:text-primary transition-all uppercase"
                >
                  Sell Your car
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div onClick={() =>setOpen(false)} className="absolute top-2 right-2 cursor-pointer">
          <AiOutlineClose size={20} />
        </div>
      </div>
    </>
  );
};

export default MobileHeaderLinks;
