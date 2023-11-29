// src/components/AddMovie.jsx

import { useState } from "react";

function AddFood(props) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //change this and adapted to food

  return (
    <div className="AddMovie">
      <h4>Add New Food</h4>

      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image: </label>
        <img
          src={image}
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <label>Servings: </label>
        <input
          type="number"
          name="calories"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <button type="submit">Add New Food</button>
      </form>
    </div>
  );
}

export default AddFood;
