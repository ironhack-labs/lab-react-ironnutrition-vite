import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBoox from "./components/FoodBox";
import FoodList from "./components/FoodList";
import foodsJson from './foods.json';
import { useState } from "react";
import { Row } from "antd";
import Search from "antd/es/input/Search";

function App() {
  // const [foods, setFoods] = useState(foodsJson);
  // const [foodsData, setFoodsData] = useState(foodsJson);
 
  // const handleDelete = id => {
  //   setFoods(prevState => {
  //     return prevState.filter(food => food.id !== id)
  //   })
  // }

  // const addNewFood = (newFood) => {
  //   const updatedFoods = [...foods, newFood];
  //   const updatedFoodsData = [...foodsData, newFood];
  //   setFoods(updatedFoods);
  //   setFoodsData(updatedFoodsData);
  // };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <Search />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList />
      </Row>

      {/* <AddFoodForm addFood={addNewFood} /> 
      
      <h2>List of Food:</h2>
      {foods.map( food => {
        return <FoodBoox key={food._id} food={food} handleDelete={handleDelete}/>
      })} */}
   

    </div>
  );
}

export default App;
