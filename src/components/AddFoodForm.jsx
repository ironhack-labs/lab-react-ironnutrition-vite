// Your code here
import React, { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the onAddFood function
    onAddFood(formData);
    // Clear the form after submission
    setFormData({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        id="calories"
        name="calories"
        value={formData.calories}
        onChange={handleChange}
        required
      />

      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        id="servings"
        name="servings"
        value={formData.servings}
        onChange={handleChange}
        required
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
