import { useState } from "react";

import FoodBox from "./../components/FoodBox";
import AddFoodForm from "./../components/AddFoodForm";
import SearchBox from "./Searchbox";

function FoodList({ foodData }){
    const [foods, setFoods] = useState(foodData);
    const [showAddForm, setShowAddForm] = useState(false);

    function deleteFoodItem(id){
      const foodsCopy = [...foods];
      let ind = 0;
      foodsCopy.map((food, index)=>{
        if(food.id===id){
          ind = index;
        } 
      });
      foodsCopy.splice(ind, 1);
      setFoods(foodsCopy);
    }
  
    function addNewFood(foodItem){
      const foodsCopy = [...foods]
      foodsCopy.unshift(foodItem);
      // console.log("test", foodsCopy[foodsCopy.length-1]);
      setFoods(foodsCopy);
    }

    function doSearch(e){
      //console.log(e.target.value);
      let searchstr = e.target.value;
      let searchStrlength = searchstr.length;
      const foodsCopy = [...foods];
      const arr = [];
      const foodArr = foodsCopy.map(food=>{
        // console.log(food.name.substring(0, searchStrlength), searchstr);
        if(food.name.charAt(0).toLowerCase()===searchstr.charAt(0).toLowerCase()){
          if(food.name.toLowerCase().substring(0, searchStrlength)===searchstr.toLowerCase()){
            arr.push(food);
          }
        }
      });
      // console.log(arr);
      if(searchStrlength>0){
        setFoods(arr);
      }else{
        setFoods(foodsCopy);
      }
     
    }

    return(<div>
         <h1>LAB | React IronNutrition</h1>
         <button onClick={()=>{setShowAddForm(!showAddForm)}}>Add New Item</button>
         {showAddForm && <AddFoodForm addNewFood={addNewFood}/>}
         <SearchBox doSearch={ doSearch }/>   
      <div className="food-layout">
        {foods.map((foodItem, index)=>(
          <FoodBox 
            key={index} 
            foodItem={{id: foodItem.id, name: foodItem.name, calories: foodItem.calories, image: foodItem.image, servings: foodItem.servings}}
           deleteFoodItem={deleteFoodItem}
          /> ))}
      </div>
    </div>)
}
export default FoodList;