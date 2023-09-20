// Your code here
import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFood(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    console.log("Submitted: ", newFood);
    props.addFood(newFood);

    //reset state
    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  };

  return (
    <div className="AddFood">
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label>Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Servings: </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFood;
