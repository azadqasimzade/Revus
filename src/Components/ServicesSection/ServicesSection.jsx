import React, { useState } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { FiRefreshCcw, FiSettings } from "react-icons/fi";
import { GiPaintRoller, GiAutoRepair } from "react-icons/gi";
import AutoFinancingSection from "./Components/AutoFinancingSection/AutoFinancingSection";
import VehicleTreadeInSection from "./Components/VehicleTreadeInSection/VehicleTreadeInSection";
import PartsRepairingSection from "./Components/PartsRepairingSection/PartsRepairingSection";
import CarInspectionSection from "./Components/CarInspestionSection/CarInspectionSection";
import AutoPaintingSection from "./Components/AutoPaintingSection/AutoPaintingSection";

const ServicesSection = () => {
  const [autoF, setAutoF] = useState(true);
  const [vehicle, setVehicle] = useState(false);
  const [parts, setParts] = useState(false);
  const [car, setCar] = useState(false);
  const [autoP, setAutoP] = useState(false);

  const autoFHandle = () => {
    setAutoF(true);
    setVehicle(false);
    setParts(false);
    setCar(false);
    setAutoP(false);
  };

  const vehicleHandle = () => {
    setVehicle(true);
    setAutoF(false);
    setParts(false);
    setCar(false);
    setAutoP(false);
  };

  const partsHandle = () => {
    setParts(true);
    setVehicle(false);
    setAutoF(false);
    setCar(false);
    setAutoP(false);
  };

  const carHandle = () => {
    setCar(true);
    setParts(false);
    setVehicle(false);
    setAutoF(false);
    setAutoP(false);
  };
  const autoPHandle = () => {
    setAutoP(true);
    setCar(false);
    setParts(false);
    setVehicle(false);
    setAutoF(false);
  };

  return (
    <section className="w-full pt-28 bg-searchCartBg">
      <div className="w-full md:container mx-auto xl:px-32 px-6">
        <div className="flex flex-col items-center">
          <h5 className="text-xs uppercase font-semibold tracking-wide">
            HELPS YOU TO FIND YOUR NEXT CAR EASILY
          </h5>
          <h2 className="text-[40px] font-bold">
            Services We <span className="text-primary">Offers</span>
          </h2>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-8">
          <div
            onClick={autoFHandle}
            className={`${
              autoF ? "bg-primary text-white" : "bg-white"
            } w-full pt-10 px-7 pb-7 shadow-md cursor-pointer`}
          >
            <div className="font-semibold opacity-60 text-base">01</div>
            <div className="flex justify-center">
              <IoCarSportOutline size={65} />
            </div>
            <div className="text-center mt-2">
              <p>Auto Financing</p>
            </div>
          </div>
          <div
            onClick={vehicleHandle}
            className={`${
              vehicle ? "bg-primary text-white" : "bg-white"
            } w-full pt-10 px-7 pb-7 shadow-md cursor-pointer`}
          >
            <div className="font-semibold opacity-60 text-base">02</div>
            <div className="flex justify-center">
              <FiRefreshCcw size={65} />
            </div>
            <div className="text-center mt-2">
              <p>Vehicle Trade-In</p>
            </div>
          </div>
          <div
            onClick={partsHandle}
            className={`${
              parts ? "bg-primary text-white" : "bg-white"
            } w-full pt-10 px-7 pb-7 shadow-md cursor-pointer`}
          >
            <div className="font-semibold opacity-60 text-base">03</div>
            <div className="flex justify-center">
              <FiSettings size={65} />
            </div>
            <div className="text-center mt-2">
              <p>Parts Repairing</p>
            </div>
          </div>
          <div
            onClick={carHandle}
            className={`${
              car ? "bg-primary text-white" : "bg-white"
            } w-full pt-10 px-7 pb-7 shadow-md cursor-pointer`}
          >
            <div className="font-semibold opacity-60 text-base">04</div>
            <div className="flex justify-center">
              <GiAutoRepair size={65} />
            </div>
            <div className="text-center mt-2">
              <p>Car Inspection</p>
            </div>
          </div>
          <div
            onClick={autoPHandle}
            className={`${
              autoP ? "bg-primary text-white" : "bg-white"
            } w-full pt-10 px-7 pb-7 shadow-md cursor-pointer`}
          >
            <div className="font-semibold opacity-60 text-base">05</div>
            <div className="flex justify-center">
              <GiPaintRoller size={65} />
            </div>
            <div className="text-center mt-2">
              <p>Auto Painting</p>
            </div>
          </div>
        </div>
        {autoF && <AutoFinancingSection />}
        {vehicle && <VehicleTreadeInSection />}
        {parts && <PartsRepairingSection />}
        {car && <CarInspectionSection />}
        {autoP && <AutoPaintingSection />}
      </div>
    </section>
  );
};

export default ServicesSection;
