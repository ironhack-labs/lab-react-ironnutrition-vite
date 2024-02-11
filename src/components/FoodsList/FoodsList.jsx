import foodsData from "./../../foods.json";
import { useState, useEffect } from "react";
import FoodBox from "./../../components/FoodBox";
import AddFoodForm from './../AddFoodForm'


const FoodsList = () => {


    const [foods, setFoods] = useState([foodsData])

    useEffect(() => {
        setFoods(foodsData);
    }, []);

    const deleteFood = foodToDelete => {

        const filteredFood = foods.filter(food => {
            return food.id != foodToDelete
        })

        setFoods(filteredFood)
    }
    const addNewFood = newFood => {
        const foodsDataCopy = [...foods]
        foodsDataCopy.unshift(newFood)
        setFoods(foodsDataCopy)
    }



    return (
        <div>

            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm addNewFood={addNewFood} />
            {
                foods.map((food, index) => (
                    <FoodBox key={index} food={food} deleteFood={deleteFood} />
                ))
            }


        </div>


    )




}
export default FoodsList