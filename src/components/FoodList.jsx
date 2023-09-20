import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";
// import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [foodsData, setFoodsData] = useState(foodsJson);

  const addNewFood = (food) => {
    const updateFoods = [...foods, food];
    const updatedFoodsData = [...foodsData, food];

    setFoods(updateFoods);
    setFoodsData(updatedFoodsData);
  };

  //Iteration 4 | Delete List Items
  function deleteItem(index) {
    const deletedItem = [...foods];
    deletedItem.splice(index, 1);
    setFoods(deletedItem);
  }

  return (
    <div className="foodList">
      <h1>IronNutrition</h1>
      {/* <Search /> */}

      <AddFood addFood={addNewFood} />
      <div className="foodContainer">
      {foods.map((food, index) => (
        <FoodBox key={index} i={index} food={food} deleteItem={deleteItem} />
      ))}
      </div>

    </div>
  );
}

export default FoodList;
