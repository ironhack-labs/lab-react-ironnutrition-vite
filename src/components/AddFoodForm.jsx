import React, { useState } from "react";

function AddFoodForm({ handleAddFood }) {
    const [formFood, setFormFood] = useState({name: "", image:"", calories:"", servings:""});
    
    const handleChange =(e) => {
        setFormFood({
            ...formFood,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        handleAddFood(formFood);
        setFormFood({
            name: "", image:"", calories:"", servings:"",  
        });
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
            <input
            name= "name"
            type="text"
            value={formFood.name}
            onChange = {handleChange}
            />
        

        <label>Image: </label>
            <input
            name= "image"
            type="text"
            value={formFood.image}
            onChange = {handleChange}
            />
        

        <label>Calories: </label>
            <input
            name= "calories"
            type="number"
            value={formFood.calories}
            onChange = {handleChange}
            
            />
        

        <label>Servings: </label>
            <input
            name= "servings"
            type="number"
            value={formFood.servings}
            onChange = {handleChange}
            />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFoodForm
