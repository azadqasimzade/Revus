import React from "react";
import image02 from "../../../../assets/ServicesSection/image-02.jpg";
import { BsCheck } from "react-icons/bs";

const VehicleTreadeInSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
      <div className="w-full">
        <img src={image02} className="w-full object-cover" alt="/" />
      </div>
      <div>
        <h2 className="text-secondary text-2xl font-bold">Vehicle Trade-In</h2>
        <p className="my-5">
          Sociis sollicitudin taciti pharetra venenatis nascetur, per nisl ad
          dictumst sociis ante augue sagittis. Vestibulum. Potenti Sodales dis
          mattis elementum lorem class elementum a donec conubia magna
          pellentesque.
        </p>
        <p>
          Id Taciti tincidunt phasellus orci ullamcorper Magna ultrices nullam
          senectus suscipit convallis in interdum, massa pulvinar. .
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

export default VehicleTreadeInSection;
