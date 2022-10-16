import React from "react";

const VehicleSection = ({ item }) => {

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>Make:</div>
          <div className="font-semibold uppercase text-sm">
            {item?.title}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>Year:</div>
          <div className="font-semibold text-sm">{item?.year}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Km:</div>
          <div className="font-semibold text-sm">{item?.km}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Fuel:</div>
          <div className="font-semibold text-sm">{item?.fuel}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Doors:</div>
          <div className="font-semibold text-sm">4</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Price Type:</div>
          <div className="font-semibold text-sm">Fixed</div>
        </div>
      </div>
    </>
  );
};

export default VehicleSection;
