import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";
import Search from "./Search";
import foodsJson from "./../foods.json";
import { useState } from "react";
import { Divider } from "antd";

function FoodList() {

    const [ foods, setFoods ] = useState(foodsJson);
    const [ foodResults, setFoodResults ] = useState(foodsJson);

    const handleDelete = (foodId) => {
      const updatedFoods = foods.filter(food => food.id !== foodId);
      setFoods(updatedFoods);
      setFoodResults(updatedFoods);
    }
  
    const handleCreate = (newFood) => {
      const updatedFoods = [{...newFood, id: self.crypto.randomUUID()}, ...foods];
      setFoods(updatedFoods);
      setFoodResults(updatedFoods);
    }

    const handleSearchResults = (textInput) => {
      setFoodResults(foods.filter(food => food.name.toLowerCase().includes(textInput.toLowerCase())));
    }

    return (
      <>
        <Divider><b>Add Food Entry</b></Divider>
        <AddFoodForm onCreate={handleCreate} />
        
        <Divider><b>Search Food</b></Divider>
        <Search onSearch={handleSearchResults}/>
        
        <Divider><b>Food List</b></Divider>
        {
          foodResults.length ?
            foodResults.map(food => <FoodBox key= {food.id} food={food} onDelete={handleDelete} />)
            :
            <p style={{color: "red"}}><b>Oops! There is no more content to show.</b></p>
        }
      </>
    );
}

export default FoodList;