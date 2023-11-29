import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import FoodEmpty from "./FoodEmpty";

export default function FoodList() {
  const [foodArray, setFoodArray] = useState(foodsJson);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleCalories = (e) => {
    setCalories(e.target.value);
  };

  const handleServings = (e) => {
    setServings(e.target.value);
  };

  const handleDelete = (id) => {
    setFoodArray([...foodArray].filter((food) => food.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, servings };
    console.log(name, calories, image, servings);
    console.log("selam ya");
    setFoodArray([newFood, ...foodArray]);
  };
  return (
    <div>
      <AddFoodForm
        handleName={handleName}
        handleCalories={handleCalories}
        handleImage={handleImage}
        handleServings={handleServings}
        handleSubmit={handleSubmit}
      />
      <FoodBox foodArray={foodArray} handleDelete={handleDelete} />
      {!foodArray.length && <FoodEmpty />}
    </div>
  );
}
