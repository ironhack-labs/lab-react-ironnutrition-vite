import { useState } from "react";
import foods from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  // Implement deleteFood function to remove food from foodData array

  const deleteFood = (foodToDelete) => {
    const updatedFood = foodData.filter((food) => food.id !== foodToDelete.id);

    setFoodData(updatedFood);
  };

  // Mock example of AddFoodForm model
  /* 
Persimmon
https://images.immediate.co.uk/production/volatile/sites/30/2020/02/persimmon-0790ddb.jpg?quality=90&resize=556,505
120
1
 */

  // Create a new foodData object

  const addFoodForm = (newFoodData) => {
    setFoodData([...foodData, newFoodData]);
  };

  // Fetch and display food data from foods.json file
  const [foodData, setFoodData] = useState(foods);

  // Mock example of FoodBox model

  /* const mockFood = {
    name : "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
  }; */

  return (
    <div>
      <h1>Add Food Entry</h1>
      <section className="food-entry">
        <AddFoodForm addFoodForm={addFoodForm}></AddFoodForm>
      </section>
      <br/>
      <section>
        <h1>Food List </h1>
        <body>
          <div class="container">
            {/* <FoodBox food={mockFood} /> */}
            {foodData.map((food) => (
              <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
            ))}
          </div>
          <br/>
        </body>
      </section>
    </div>
  );
}

export default FoodList;
