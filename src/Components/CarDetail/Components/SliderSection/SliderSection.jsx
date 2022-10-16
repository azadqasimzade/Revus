import React from "react";
import Slider from "react-slick";

const SliderSection = ({item}) => {
    const settings = {
        customPaging: function (i) {
          return (
            <div className="w-full h-full">
              <img
                src={item?.images[i]}
                className="w-full h-full object-cover"
                alt={item?.title}
              />
            </div>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
  return (
    <>
      <Slider {...settings} className="carDetailSlide">
        {item?.images.map((img) => (
          <div key={item?.id} className="w-full sm:h-[430px] h-[300px]">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={item?.title}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderSection;
