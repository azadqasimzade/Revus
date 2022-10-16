import React from "react";
import { BsCheck } from "react-icons/bs";
import image04 from "../../../../assets/ServicesSection/image-04.jpg";

const CarInspectionSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
      <div className="w-full">
        <img src={image04} className="w-full object-cover" alt="/" />
      </div>
      <div>
        <h2 className="text-secondary text-2xl font-bold">Car Inspection</h2>
        <p className="my-5">
          Lacinia accumsan auctor sociis elementum tempus a hendrerit massa at
          varius fames eleifend Metus. Litora lectus habitant ultricies donec,
          purus adipiscing senectus vitae Porttitor, pulvinar metus adipiscing
          lobortis tristique hendrerit.
        </p>
        <p>
          Malesuada et convallis sociosqu pellentesque quis dictumst aliquet
          urna arcu nullam aenean proin nullam venenatis.
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

export default CarInspectionSection;
