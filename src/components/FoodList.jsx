import AddFoodForm from "./AddFoodForm";
import FoodBoox from "./FoodBox";
import foodsJson from '../foods.json';
import { useState } from "react";
import { Divider } from "antd";
import Search from "./Search";

function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
    const [foodsData, setFoodsData] = useState(foodsJson);
   
    const handleDelete = id => {
      setFoods(prevState => {
        return prevState.filter(food => food.id !== id)
      })
    }
  
    const addNewFood = (newFood) => {
      const updatedFoods = [...foods, newFood];
      const updatedFoodsData = [...foodsData, newFood];
      setFoods(updatedFoods);
      setFoodsData(updatedFoodsData);
    };

    const searchFoods = (str) => {
        let searchFood;

        if(str === "All") {
            searchFood = foodsData;
        } else {
            searchFood = foodsData.filter((food) => {
                return food.name[0].toLowerCase() === str.toLowerCase();
            });
        }
        setFoods(searchFoods);
    };

  
    return(
        <div className="list-food-container">
        <AddFoodForm addFood={addNewFood} /> 
        <Divider>Food List</Divider>
        {/* <h2>List of Food:</h2> */}
        {foods.map( food => {
          return <FoodBoox key={food._id} food={food} handleDelete={handleDelete}/>
        })}
        </div>
    )
    
}

export default FoodList;