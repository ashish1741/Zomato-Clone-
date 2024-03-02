import React from "react";
import Slider from "react-slick";
import NextArrow from "../common/NextArrow";
import PreviousArrow from "../common/PreviousArrow";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ItemSlider({ FoodItems, introduction }) {
  const settings = {
    
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className="FoodSlier">
      <h1>{introduction}</h1>
      <Slider {...settings} className="max-width FoodItems">
        {FoodItems &&
          FoodItems.map((ele) => (
            <div className="itmes" key={ele.id}>
              <img src={ele.img} alt={ele.name} />
              <h4>{ele.name}</h4>
              {ele.distance && <p>{ele.distance}</p>}
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ItemSlider;
