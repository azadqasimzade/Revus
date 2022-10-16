import React from "react";
import { GrDocumentText } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { IoCarSportOutline } from "react-icons/io5"

const WelcomeSectionItem = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center gap-6">
          <GrDocumentText size={40} className="inline" />
          <h6 className="max-w-[180px] mx-auto text-center uppercase  text-base font-bold">
            WE OFFERS LOWER CARS PRICES
          </h6>
          <p className="max-w-[280px] text-[15px] mx-auto opacity-80">
            Fruitful seed female multiply lights blessed above Bearing in so two
            every together forth so can't seas darkness years rule.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:border-l">
        <div className="flex flex-col items-center text-center gap-6">
          <GrLocation size={40} className="inline" />
          <h6 className="max-w-[180px] mx-auto text-center uppercase  text-base font-bold">
            LARGEST CARS DEALERSHIP
          </h6>
          <p className="max-w-[280px] text-[15px] mx-auto opacity-80">
            Evening together evening given fill upon darkness, i were lesser
            first fly. Had divide him called seas first after night god.
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:border-l">
        <div className="flex flex-col items-center text-center gap-6">
          <IoCarSportOutline size={40} className="inline" />
          <h6 className="max-w-[180px] mx-auto text-center uppercase  text-base font-bold">
            MULTIPOINT SAFETY CHECKS OFFERS
          </h6>
          <p className="max-w-[280px] text-[15px] mx-auto opacity-80">
            Also sixth be replenish third our also their moving unto hath whales
            beginning unto set you'll us let above dry shall greater.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSectionItem;
