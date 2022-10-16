import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { BsChevronRight, BsChevronLeft, BsCalendarDate, BsSpeedometer2 } from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";
import featureData from "../../Api/featureData.json";
import {aboutCar} from "../../store/carSlice"
import { Link } from "react-router-dom";

function NextBtn({ onClick }) {
  return (
    <button
      className="md:flex hidden w-11 h-11 bg-white absolute top-[80px] lg:right-[144px] right-2 items-center justify-center z-10"
      onClick={onClick}
    >
      <BsChevronRight />
    </button>
  );
}

function PrevBtn({ onClick }) {
  return (
    <button
      className="md:flex hidden w-11 h-11 bg-white absolute top-[80px] lg:right-[195px] right-16 items-center justify-center z-10"
      onClick={onClick}
    >
      <BsChevronLeft />
    </button>
  );
}

const FeatureSectionItem = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setData(featureData);
  }, [data]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };

  const carHundle = (item) =>{
    dispatch(aboutCar({item}))
    localStorage.setItem("car", JSON.stringify(item))
  }

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="relative group overflow-hidden">
            <Link to={`/${item.title}`} onClick={() => carHundle(item)} className="w-full h-[240px] bg-secondary cursor-pointer">
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:opacity-20 transition-all"
                alt={item.title}
              />
            </Link>
            <div className="absolute top-4 left-4 z-10 -translate-x-5 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 ease-in duration-200">
                <span className="bg-primary text-white text-[17px] py-1 px-2 font-semibold">{item.price}</span>
            </div>
            <div className="text-secondary py-4 group-hover:bg-primary bg-white group-hover:text-white transition-colors">
              <div className="text-center px-2 pb-4 font-bold text-lg border-b">
                <h6>{item.title}</h6>
              </div>
              <ul className="flex items-center justify-between text-sm mt-4 px-5">
                <li className="flex items-center gap-x-2"><BsCalendarDate/> {item.year}</li>
                <li className="flex items-center gap-x-2"><BsSpeedometer2/> {item.km}</li>
                <li className="flex items-center gap-x-2"><MdLocalGasStation/> {item.fuel}</li>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSectionItem;
