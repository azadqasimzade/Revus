import React from "react";
import image01 from "../../../../assets/ServicesSection/image-01.jpg";
import { BsCheck } from "react-icons/bs";

const AutoFinancingSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
      <div className="w-full">
        <img src={image01} className="w-full object-cover" alt="/" />
      </div>
      <div>
        <h2 className="text-secondary text-2xl font-bold">Auto Financing</h2>
        <p className="my-5">
          Morbi aliquam montes, volutpat semper pretium penatibus vel varius
          scelerisque curabitur aptent tincidunt scelerisque habitasse ultricies
          facilisi. Adipiscing nulla. Sollicitudin turpis hymenaeos adipiscing
        </p>
        <p>
          Volutpat maecenas sagittis molestie vivamus pretium vulputate orci
          lorem cras, tempor commodo nibh euismod feugiat sociis eros sagittis
          montes venenatis augue integer.
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

export default AutoFinancingSection;
