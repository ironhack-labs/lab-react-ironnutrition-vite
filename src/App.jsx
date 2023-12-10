import{ useState } from 'react';
import './App.css';
import food from './foods.json';
import { FoodBox } from './components/FoodBox';
import {FoodForm } from './components/AddFoodForm';
import ReactPlayer from 'react-player';
function App() {
  const [foodState, setState] = useState(food);

  function deleteFood(ID) {
const newList = foodState.filter(one=> one.id != ID )
setState(newList);

  }

  return (
    <div className="App">
    <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing  width={100}/>
      <h1>LAB | React IronNutrition</h1>
      <FoodForm foodState={foodState} setState={setState} />
       <div style={{display: 'flex', flexWrap: 'wrap' }}> {foodState.map((item) => (
      
        <FoodBox 
          key={item.id}
          name={item.name}
          image={item.image}
          calories={item.calories}
          servings={item.servings}
          id={item.id}
          deleteFood={deleteFood}
        />
      ))}</div>
    </div>
  );
}

export default App;
