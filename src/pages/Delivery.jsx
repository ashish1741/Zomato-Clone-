import React, { useState } from "react";
import Filter from "../common/Filter";
import TuneIcon from "@mui/icons-material/Tune";
import ItemSlider from "../Components/Slider";
import  {BH} from "../assets/index"
import  {chickenWings} from "../assets/index"
import  {Pizza} from "../assets/index"
import  {Momo} from "../assets/index"
import  {PotatoSagu} from "../assets/index"

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
      id:1,
      name:"chickenWings",
      img : chickenWings ,

    },
    {
      id:3,
      name:"Pizza",
      img : Pizza ,

    },
    {
      id:2,
      name:"Momo",
      img : Momo ,

    },
    {
      id:4,
      name:"potato Sagu",
      img:PotatoSagu,
    },
    {
      id:4,
      name : "Briyani",
      img:BH
    }
    
  ]

  const introduction = "Inspiration for your first order";

  return (
    <div>
      <div className="max-width">
        <Filter deliveryFilterList={deliveryFilterList} />
      </div>
      <div>
        <ItemSlider  FoodItems = {FoodItems} introduction = {introduction}  />
      </div>
    </div>
  );
}

export default Delivery;
