import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";

function App() {
 
  return (
    <div className="App">
      <FoodList foodData={foodsJson}/>
    </div>
  );
}

export default App;
