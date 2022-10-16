import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import searchData from "../../Api/searchData.json";

const SearchSection = () => {
  const [open, setOpen] = useState(false)
  const [make, setMake] = useState("All Makes");

  const toggleOpen = () =>{
    setOpen(!open)
  }

  const selectHandle = e =>{
    setMake(e.innerText)
    setOpen(false)
  }
  return (
    <section className="relative w-full -top-24">
      <div className="w-full md:container mx-auto xl:px-32 px-6">
        <form className="w-full flex lg:flex-row flex-col items-center gap-2 bg-white shadow-md border-b-2 border-dark py-[60px] px-[50px]">
          <div className="relative w-full">
            <div className="font-semibold text-sm">
              <span className="text-[#ccc] text-[17px] mr-2">01</span>Select
              Make
            </div>
            <div onClick={toggleOpen} className="w-full h-[60px] flex items-center text-[13px] py-[15px] px-5 mt-3  justify-between bg-searchCartBg hover:bg-white transition-colors hover:shadow-md cursor-pointer">
              {make}
             <span className={`${open ? "-rotate-180" : "rotate-0"} ease-in duration-200`}><FiChevronUp /></span>
            </div>
            <ul className={`${open ? "block" : "hidden"} absolute w-full h-36 text-[13px] bg-white overflow-y-auto z-10`}>
              {searchData.map((item) => (
                <li onClick={e => selectHandle(e.target)} key={item.id} className="py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full">
            <div className="font-semibold text-sm">
              <span className="text-[#ccc] text-[17px] mr-2">02</span>Select a
              Model
            </div>
            <div className="w-full h-[60px] flex items-center text-[13px] justify-between bg-searchCartBg hover:bg-white transition-colors hover:shadow-md py-[15px] px-5 mt-3 cursor-pointer">
              All Models
              <FiChevronUp />
            </div>
          </div>
          <div className="relative w-full">
            <div className="font-semibold text-sm">
              <span className="text-[#ccc] text-[17px] mr-2">03</span>Select
              Body
            </div>
            <div className="w-full h-[60px] flex items-center text-[13px] justify-between bg-searchCartBg hover:bg-white transition-colors hover:shadow-md py-[15px] px-5 mt-3 cursor-pointer">
              All Models
              <FiChevronUp />
            </div>
          </div>
          <div className="relative w-full">
            <div className="font-semibold text-sm">
              <span className="text-[#ccc] text-[17px] mr-2">04</span>Fuel Type
            </div>
            <div className="w-full h-[60px] flex items-center text-[13px] justify-between bg-searchCartBg hover:bg-white transition-colors hover:shadow-md py-[15px] px-5 mt-3 cursor-pointer">
              All Models
              <FiChevronUp />
            </div>
          </div>
          <button
            type="button"
            className="relative min-w-[175px] min-h-[60px] text-[13px] font-semibold bg-primary text-white hover:bg-secondary transition-colors py-[15px] top-4 px-5 ml-10 uppercase"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
