import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Search foods
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredFoods = foodsJson.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <div className="foodList">
      <h1>IronNutrition</h1>
      <Search searchTerm={searchTerm} handleChange={handleChange} />

      <AddFood addFood={addNewFood} />
      <div className="foodContainer">
        {foods.length === 0 ? (
          <p className="alert">Oops! There is no more content to show.</p>
        ) : (
          foods.map((food, index) => (
            <FoodBox
              key={index}
              i={index}
              food={food}
              deleteItem={deleteItem}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FoodList;
