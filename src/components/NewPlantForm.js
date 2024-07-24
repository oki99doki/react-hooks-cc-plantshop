import React, { useState } from "react";

function NewPlantForm() {

  const [plants, setPlants] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Create new plant object from form data
    const newPlant = {
      name: formData.get("name"),
      image: formData.get("image"),
      price: parseFloat(formData.get("price")),
    };

    // Update state to include new plant
    setPlants((prevPlants) => [...prevPlants, newPlant]);

    // Reset form
    form.reset();
  }

  // Add onSubmit in form
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
