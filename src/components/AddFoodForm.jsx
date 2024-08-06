import React, { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(formData);
    setFormData({
      name: '',
      image: '',
      calories: '',
      servings: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <label>
        Calories:
        <input type="number" name="calories" value={formData.calories} onChange={handleChange} />
      </label>
      <label>
        Servings:
        <input type="number" name="servings" value={formData.servings} onChange={handleChange} />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
