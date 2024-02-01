import React, { useState } from "react";

const AddFoodForm = ({ onAddFood }) => {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(newFood);
    // Resetear formulario después de enviar
    setNewFood({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={newFood.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Imagen
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={newFood.image}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="calories" className="form-label">
          Calorías
        </label>
        <input
          type="number"
          className="form-control"
          id="calories"
          name="calories"
          value={newFood.calories}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="servings" className="form-label">
          Porciones
        </label>
        <input
          type="number"
          className="form-control"
          id="servings"
          name="servings"
          value={newFood.servings}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
