import React from "react";
import { Bike } from "../types/Bike";

interface CardProps {
  bike: Bike;
}

const Card: React.FC<CardProps> = ({ bike }) => {
  return (
    <div className="card w-100">
      <img
        src={`/img/${bike.image}.png`}
        alt={bike.name}
        className="card-img-top"
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-title">{bike.name}</h3>
        <p className="card-text">{bike.price} $</p>
      </div>
    </div>
  );
};

export default Card;
