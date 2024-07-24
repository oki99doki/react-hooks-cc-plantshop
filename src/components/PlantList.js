import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {

  return (
    <ul className="cards">
      {props.plants.map(plant => (
        <PlantCard          
          key = {plant.id}
          name = {plant.name}
          image = {plant.image}
          price = {plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
