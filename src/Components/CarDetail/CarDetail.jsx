import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import base from "../../assets/HeroSection/base.png";
import payment from "../../assets/CarDetail/payment.png";
import user from "../../assets/CarDetail/user-2.webp";
import { BsTelephone } from "react-icons/bs";
import SliderSection from "./Components/SliderSection/SliderSection";
import VehicleSection from "./Components/VehicleSection/VehicleSection";
import SocialsSection from "./Components/SocialsSection/SocialsSection";
import FormSection from "./Components/FormSection/FormSection";
import { aboutCar } from "../../store/carSlice";

const CarDetail = () => {
  const [item, setItem] = useState(null);
  
  const { car } = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setItem(car.item)
  }, [car])

  useEffect(() =>{
    const item = JSON.parse(localStorage.getItem("car"));
    dispatch(aboutCar({item}))
  }, [dispatch])

  return (
    <>
      <div className="relative w-full h-[300px] bg-no-repeat bg-center overflow-hidden bg-carDetail">
        <div className="lg:block hidden absolute w-[800px] h-[300px] left-1/2 -translate-x-1/2">
          <img src={base} className="w-full h-full object-cover" alt="/" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h1 className="font-bold lg:text-[40px] text-[30px] text-white whitespace-nowrap">
            { item?.title}
          </h1>
          <div className="lg:flex hidden items-center justify-center gap-x-6 text-white">
            <Link to={"/"}>Home</Link>
            <BsArrowRight /> <span>{item?.title}</span>
          </div>
        </div>
      </div>
      <section className="w-full md:mt-32 mt-16">
        <div className="w-full md:container mx-auto xl:px-36 px-6">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
            <div className="col-span-2">
              <SliderSection item={item} />
              <div className="w-full mt-10">
                <h2 className="text-[22px] pb-[25px] mb-[35px] border-b font-bold text-secondary">
                  Vehicle Specifications
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <VehicleSection item={item} />
                  <div></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <div className="w-full py-[25px] px-5 flex items-center justify-center gap-2 bg-primary text-white">
                Price
                <span className="text-[19px] font-bold">{item?.price}</span>
              </div>
              <div className="w-full py-[25px] px-5 bg-servicesBg flex flex-col items-center justify-center gap-4">
                <div className="max-w-[154px]">
                  <img src={payment} className="w-full" alt="payment" />
                </div>
                <div className="text-xs">Included Taxes & Checkup*</div>
              </div>
              <div className="w-full border mt-6">
                <div className="w-full flex items-center gap-3 py-5 px-[25px] bg-secondary text-white">
                  <div className="max-w-[75px] overflow-hidden rounded-full">
                    <img src={user} alt="user" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">Joseph Kane</h5>
                    <div className="text-sm">Member since: May 2019</div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 py-[35px] px-[25px] bg-white">
                  <div className="flex items-center gap-5">
                    <span className="text-primary">
                      <BsTelephone size={30} />
                    </span>
                    <div className="flex flex-col">
                      Contact Seller
                      <a
                        href="tel:80234234234"
                        className="text-xl font-semibold hover:text-primary transition-colors"
                      >
                        80234234234
                      </a>
                    </div>
                  </div>
                  <SocialsSection />
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="pt-5 pr-5 pb-5 pl-[30px] bg-secondary">
                  <h3 className="text-white font-bold">MESSAGE SELLER</h3>
                </div>
                <div className="p-[30px] bg-servicesBg">
                  <FormSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetail;
