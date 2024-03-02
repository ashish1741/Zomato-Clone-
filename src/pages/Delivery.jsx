import React, { useState } from "react";
import Filter from "../common/Filter";
import TuneIcon from "@mui/icons-material/Tune";
import ItemSlider from "../Components/Slider";
import { BH, Burger, LimeLimeon, daddy, spices } from "../assets/index";
import { chickenWings } from "../assets/index";
import { Pizza } from "../assets/index";
import { Momo } from "../assets/index";
import { PotatoSagu } from "../assets/index";
import { NL } from "../assets/index";
import { chumin } from "../assets/index";
import { Loard } from "../assets/index";
import { lizzaPizza } from "../assets/index";
import { HB } from "../assets/index";
import Cards from "../Components/Cards";

function Delivery() {
  const deliveryFilterList = [
    {
      id: 1,
      title: "Filters",
      icon: <TuneIcon />,
    },
    {
      id: 2,
      title: "Rating : 4.0+",
    },
    {
      id: 3,
      title: "Pure Veg",
    },
    {
      id: 4,
      title: "Price",
    },
  ];

  const FoodItems = [
    {
      id: 1,
      name: "chickenWings",
      img: chickenWings,
    },
    {
      id: 3,
      name: "Pizza",
      img: Pizza,
    },
    {
      id: 2,
      name: "Momo",
      img: Momo,
    },
    {
      id: 4,
      name: "Burger",
      img: Burger,
    },
    {
      id: 7,
      name: "Briyani",
      img: BH,
    },
    {
      id: 5,
      name: "Newari Launch",
      img: NL,
    },
    {
      id: 6,
      name: "chumin",
      img: chumin,
    },
    {
      id: 7,
      name: "potato Sagu",
      img: PotatoSagu,
    },
  ];

  const TopBrand = [
    {
      id: 1,
      name: "daddy's Kitchen",
      img: daddy,
      distance: "25 min",
    },
    {
      id: 3,
      name: " Lizza Pizza",
      img: lizzaPizza,
      distance: "50 min",
    },
    {
      id: 2,
      name: "Lime Limeon",
      img: LimeLimeon,
      distance: "10 min",
    },
    {
      id: 4,
      name: "Loard",
      img: Loard,
      distance: "10 min",
    },
    {
      id: 7,
      name: "Hyderabadi biryani",
      img: HB,
      distance: "40 min",
    },
    {
      id: 5,
      name: "spices cafe",
      img: spices,
      distance: "50 min",
    },
  ];

  const introduction = "Inspiration for your first order";
  const TopSeller = "Top brands for you";

  return (
    <div>
      <div className="max-width">
        <Filter deliveryFilterList={deliveryFilterList} />
      </div>
      <div className="foodItemsDelivery">
        <ItemSlider FoodItems={FoodItems} introduction={introduction} />
      </div>
      <div className="top-seller">
        <ItemSlider FoodItems={TopBrand} introduction={TopSeller} />
      </div>
      <div className="card-box ">
        <h1>Delivery Restaurants in</h1>
        <div className="">
          <Cards /> 
        </div>
      </div>
    </div>
  );
}

export default Delivery;
