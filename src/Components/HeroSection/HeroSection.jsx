import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[620px] bg-heroSectionBg bg-no-repeat bg-cover">
      <div className="absolute lg:hidden block w-full h-full inset-0 bg-gray-900/90"></div>
      <div className="relative w-full h-full md:container mx-auto xl:px-36 px-6">
        <div className="absolute lg:block hidden w-[795px] h-full bg-heroSectionBase bg-no-repeat top-0 left-36" />
        <div className="absolute xl:w-[411px] lg:w-[380px] xl:h-[196px] lg:h-[180px] hidden md:block bg-heroSectionAuto1 bg-no-repeat bg-contain bottom-28 xl:left-5 left-0" />
        <div className="absolute xl:w-[716px] lg:w-[550px] xl:h-[496px] lg:h-[400px] sm:w-[450px] w-[300px] sm:h-[360px] h-[300px] bg-heroSectionAuto2 bg-no-repeat bg-contain bottom-0 md:right-0 right-1/2 translate-x-1/2 md:translate-x-0 z-10" />
        <div className="absolute xl:top-28 sm:top-10 top-32 xl:left-80 lg:left-72 md:left-52 left-1/2 -translate-x-1/2 md:-translate-x-0">
          <h5 className="font-medium text-white uppercase text-base">
            Expert auto services
          </h5>
          <h1 className="font-bold xl:text-6xl md:text-5xl sm:text-4xl text-3xl leading-tight text-white capitalize">
            Premium <br /> Cars Dealers
          </h1>
          <div className="lg:flex hidden items-center justify-end gap-x-6 mt-8">
            <div className="w-24 h-1 bg-primary" />
            <Link
              to={"/"}
              className="font-semibold text-white text-base uppercase"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
