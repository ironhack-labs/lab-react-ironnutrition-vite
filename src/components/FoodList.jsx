import foodsJson from "../foods.json";
import { useState } from "react"
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import SearchForFood from "./SearForFood";

function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
    const [foodData, setFoodData] = useState(foodsJson);

    // lifting the state to parent
    const deleteFood = foodId => {
        // console.log(foodId);
        setFoods((prevState) => prevState.filter((e) => e.id !== foodId))
    }

    // lifting the state to parent
    const addNewFood = newFood => {
        // Create a new array
        const updatedFood = [newFood, ...foods];
        const updatedFoodData = [...foodData, newFood];

        setFoods(updatedFood);
        setFoodData(updatedFoodData);
    };

    const filterFoodList = (str) => {
        let filteredFood;

        if (str === "") {
            filteredFood = foodData;
        } else {
            filteredFood = foodData.filter((food) => {
                return food.name.toLowerCase().includes(str.toLowerCase());
            });
        }
        setFoods(filteredFood);
    };

    return (
        <div>

            <SearchForFood searchFood={filterFoodList} />
            <AddFoodForm addNewFood={addNewFood} />

            <div className="food-container">

                {foods.map((food) => {
                    return <FoodBox
                        key={food.id}
                        food={food}
                        // setFoods={setFoods}
                        deleteFood={deleteFood}
                    />
                })}
            </div>
        </div>
    );
}

export default FoodList;