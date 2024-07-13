import foodsData from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [foodname, setFoodname] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [image, setImage] = useState("");

  const handleName = (e) => {
    setFoodname(e.target.value);
  };
  const handleCalories = (e) => {
    setCalories(e.target.value);
  };
  const handleServings = (e) => {
    setServings(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: foodname,
      calories: calories,
      servings: servings,
      image: image,
    };
    setFoods([...foods, newFood]);
    setFoodname("");
    setCalories(0);
    setServings(0);
    setImage("");
  }

  const deleteFood = (name) => {
    const foodToDelete = foods.filter((food) => {
      return food.name !== name;
    });
    setFoods(foodToDelete);
  };
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-5">
        Iron Nutrition
      </h1>
      <AddFoodForm handleName={handleName} handleCalories={handleCalories} handleServings={handleServings} handleImage={handleImage} handleSubmit={handleSubmit} foodname={foodname} calories={calories} servings={servings} image={image} />
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {foods.map((food, index) => {
          return <FoodBox key={index} food={food} deleteFood={deleteFood} />;
        })}
      </div>
    </div>
  );
}

export default App;
