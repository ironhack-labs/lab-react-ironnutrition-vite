import propTypes from "prop-types";
import "./AddFoodForm.css";
import { useState } from "react";

function AddFoodForm( {handleCreate} ) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  function handleFormSubmit(e) {
    e.preventDefault();
    const food = {
        name: name,
        image: image,
        calories: calories,
        servings: servings
    }
    handleCreate(food);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleNameInput}
            name="name"
            type="text"
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            onChange={handleImageInput}
            name="image"
            type="text"
            value={image}
          ></input>
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            onChange={handleCaloriesInput}
            name="calories"
            type="number"
            value={calories}
          ></input>
        </div>
        <div>
          <label htmlFor="servings">Servings</label>
          <input
            onChange={handleServingsInput}
            name="servings"
            type="number"
            value={servings}
          ></input>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

AddFoodForm.propTypes = {
    handleCreate: propTypes.func,
};

export default AddFoodForm;
