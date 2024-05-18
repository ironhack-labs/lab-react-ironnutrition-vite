import foodsJson from "../foods.json"
import {useState} from 'react';
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);

    const deleteFood = (foodId) => {
      const filteredFood = foods.filter(food => foodId !== food.id)
      setFoods(filteredFood)
    }
  
    const addNewFood = newFood => {
      const updatedFoodList = [newFood, ...foods];
      setFoods(updatedFoodList);
    }

    return (
        <div>
            <div className="food-form"> <AddFoodForm addFoodHandler={addNewFood}/> </div>
            <div className="food-list">
                {foods.map(oneFood => {
                    return <FoodBox 
                    food={oneFood}
                    deleteHandler={deleteFood}
                        key={oneFood.id}
                        name={oneFood.name}
                        picture={oneFood.image}
                        calories={oneFood.calories}
                        servings={oneFood.servings}
                    />
                    })};
            </div>
      </div>
    );
};

export default FoodList;