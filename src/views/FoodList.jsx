import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import Form from "../components/AddFoodForm";

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);

    const onDelete = (id) => {
        const newFoods = foods.filter(food => food.id !== id)
        setFoods(newFoods)
    } 

    const handleOnSubmit = (food) => {
        setFoods((prev) => {
            return([...prev, { ...food, id: (Math.random() + 1).toString(36).substring(7)}])
        })
    }

    return (
        <div>
            <Form onSubmit={handleOnSubmit}/> 
            <h2>Food List:</h2>
            <div className="row">
            {foods.map((food) => {
                return (
                <FoodBox id={food.id} onDelete={onDelete} key={food.id} name={food.name} calories={food.calories} servings={food.servings} image={food.image}/>
                )
            })}
            </div>
        </div>
    )

};

export default FoodList;