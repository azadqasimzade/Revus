import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4 text-xs font-semibold">
        <li className="relative group">
          <NavLink
            to={"/"}
            className="flex items-center gap-x-2 hover:text-primary transition-all uppercase"
          >
            Home <AiFillCaretDown size={10} className="text-[#ccc]" />
          </NavLink>
          <ul className="absolute top-[40px] z-10 py-4 w-[167px] px-5 shadow-md border border-[#ccc]/30 font-medium translate-y-10 ease-in duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Dealer Demo
              </Link>
            </li>
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Rental Demo
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <NavLink
            to={"/"}
            className="flex items-center gap-x-2 hover:text-primary transition-all uppercase"
          >
            Inventory <AiFillCaretDown size={10} className="text-[#ccc]" />
          </NavLink>
          <ul className="absolute top-[40px] z-10 py-4 w-[167px] px-5 shadow-md border border-[#ccc]/30 font-medium translate-y-10 ease-in duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Inventory grid
              </Link>
            </li>
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Inventory list
              </Link>
            </li>
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Vehicle details
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to={"/"}
            className="hover:text-primary transition-all uppercase"
          >
            About
          </NavLink>
        </li>
        <li className="relative group">
          <NavLink
            to={"/"}
            className="flex items-center gap-x-2 hover:text-primary transition-all uppercase"
          >
            News <AiFillCaretDown size={10} className="text-[#ccc]" />
          </NavLink>
          <ul className="absolute top-[40px] z-10 py-4 w-[167px] px-5 shadow-md border border-[#ccc]/30 font-medium translate-y-10 ease-in duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Blog List
              </Link>
            </li>
            <li className="py-3">
              <Link to={"/"} className="hover:text-primary">
                Blog Post
              </Link>
            </li>
          </ul>
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
  );
};

export default HeaderLinks;
