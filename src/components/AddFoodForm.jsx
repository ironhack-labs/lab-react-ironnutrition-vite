import { useState } from "react";
import {Divider, Input, Button } from "antd";

function AddFoodForm(props) {
  const {addFoodForm} = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
 const [servings, setServings] = useState(0);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const food = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    }
    console.log(food);

    if (!name) {
      console.log("Please provide a name, an empty name is not an option.");
      return;
    }
    addFoodForm(food);

    setName("");
   setImage("");
    setCalories(0);
    setServings(0);
  }

  return (
    <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
      <fieldset>
        <label htmlFor="food-name">Name</label>
        <Input
         name="food-name"
          type="text"
          id="food-name"
          onChange={handleNameInput}
          value={name}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="food-image">Image</label>
        <Input
         name="food-image"
          type="text"
          id="food-image"
          onChange={handleImageInput}
          value={image}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="food-calories">Calories </label>
        <Input
         name="food-calories"
          type="number"
          id="food-calories"
          onChange={handleCaloriesInput}
          value={calories}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="food-servings">Servings</label>
        <Input
         name="food-servings"
          type="number"
          id="food-servings"
          onChange={handleServingsInput}
          value={servings}
        />
      </fieldset>
      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;