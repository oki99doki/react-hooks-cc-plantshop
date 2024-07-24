import React from "react";

function PlantCard(props) {

  return (
    <li className="card" data-testid="plant-item">
      <img src= {props.image} alt={"plant name"} />
      <h4> {props.name} </h4>
      <p>Price: {props.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
