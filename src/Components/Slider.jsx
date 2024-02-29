import React from 'react'
import Slider from "react-slick";

function ItemSlider({FoodItems, introduction}) {
    

      
  return (
    <div className="ItemSlider">
        <div className="max-width">
            <div className='introduction' >{introduction}</div>
            {FoodItems && FoodItems.map((ele) => {
              return <h1>{ele.name}</h1>
            })}

        </div>
    </div>
  )
}

export default ItemSlider