import foodsJson from "../foods.json"
import {useState} from 'react';
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import Search from "./Search";

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);
    const [search, setSearch] = useState("")

    const deleteFood = (foodId) => {
      const filteredFood = foods.filter(food => foodId !== food.id)
      setFoods(filteredFood)
    }
  
    const addNewFood = newFood => {
      const updatedFoodList = [newFood, ...foods];
      setFoods(updatedFoodList);
    }

    const handleSearch = value => {

        /*         if(foods==[]) {
            return <p>Oops! There is no food you are searching for</p>
        } else {
        const foodAfterSearch = foodsJson.filter(food => {
            return food.name.toLowerCase().includes(value.toLowerCase())
        });
        setFoods(foodAfterSearch);
        setSearch(value);} */

        const foodAfterSearch = foodsJson.filter(food => {
            return food.name.toLowerCase().includes(value.toLowerCase())
        });
        setFoods(foodAfterSearch);
        setSearch(value);
    }

    return (
        <div>
            <Search searchValue={search} searchedFoods={handleSearch} />
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