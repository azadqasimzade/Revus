import React from "react";
import image05 from "../../../../assets/ServicesSection/image-05.jpg";
import { BsCheck } from "react-icons/bs";

const AutoPaintingSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
      <div className="w-full">
        <img src={image05} className="w-full object-cover" alt="/" />
      </div>
      <div>
        <h2 className="text-secondary text-2xl font-bold">Auto Painting</h2>
        <p className="my-5">
          Edipisicing elit sed do eiusmod tempor incididunt ut laboret dolore
          magna aliy Ut enim ad minim veniam, quis nostrud exercitation ullam
          laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin
          reprehenderits.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="flex items-center flex-wrap mt-5 sm:gap-x-0 gap-x-5 gap-y-5">
          <li className="font-bold text-secondary sm:w-1/2 flex items-center text-[15px]">
            <span className="text-primary">
              <BsCheck size={25} />
            </span>
            Quick Set-up Facility
          </li>
          <li className="font-bold text-secondary sm:w-1/2 flex items-center text-[15px]">
            <span className="text-primary">
              <BsCheck size={25} />
            </span>
            Experienced Team
          </li>
          <li className="font-bold text-secondary sm:w-1/2 flex items-center text-[15px]">
            <span className="text-primary">
              <BsCheck size={25} />
            </span>
            Pay After Approval
          </li>
          <li className="font-bold text-secondary sm:w-1/2 flex items-center text-[15px]">
            <span className="text-primary">
              <BsCheck size={25} />
            </span>
            Bigger Fleet Capacity
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AutoPaintingSection;
