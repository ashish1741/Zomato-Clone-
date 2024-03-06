import React from "react";
import { Link } from "react-router-dom";
import { RestaurantMenu } from "../data/index";

function Cards({ cardsInfo }) {
  return (
    <div className="card-container max-width">
      {RestaurantMenu && RestaurantMenu.map((card, index) => (
        <Link key={index} to={`Delivery/${card.id}`}>
          <div className="cards">
            <div className="card-info">
              <img src={card.img} alt="card-img" />
              <p>{card.discount}</p>
              <div className="card-content">
                <div className="left-content">
                  <h3>{card.name}</h3>
                  <span>{card.address}</span>
                </div>
                <div className="right-content">
                  <span>{card.menu[0].rate} *</span>
                  <span>{card.menu[0].price}</span>
                  <span>{card.distance}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
