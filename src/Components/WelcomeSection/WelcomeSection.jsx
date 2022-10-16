import React from "react";
import WelcomeSectionItem from "./WelcomeSectionItem";
import welcomeCar from "../../assets/WelcomeSection/welcomeCar.png"

const WelcomeSection = () => {
  return (
    <section className="w-full mt-28">
      <div className="w-full md:container mx-auto xl:px-32 px-6">
        <div className="flex flex-col items-center">
          <h5 className="text-xs uppercase font-semibold tracking-wide">
            HELPS YOU TO FIND YOUR NEXT CAR EASILY
          </h5>
          <h2 className="md:text-[40px] text-3xl font-bold">
            Welcome to <span className="text-primary">Revus</span>
          </h2>
        </div>
        <WelcomeSectionItem />
        <div className="flex justify-center">
            <img src={welcomeCar} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
