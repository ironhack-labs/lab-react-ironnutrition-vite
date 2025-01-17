import { useState } from "react";
import { nanoid } from 'nanoid'

// Your code here
function AddFoodForm({ addNewFood }){
    const [state, setState] = useState({
        id: nanoid(),
        name: "",
        image: "",
        calories: 0,
        servings: 0,
      })

    function handleSubmit(e){
        e.preventDefault();
       // console.log("submitted");
        setState({"id": state.id, "name": state.name, "image": state.image, "calories": state.calories, "servings": state.servings})

        addNewFood(state);

        setState({
            id: nanoid(),
            name: "",
            image: "",
            calories: 0,
            servings: 0,
        })
    }

    function handleChange(e){
        let name = e.target.name;
        let valuec = e.target.value;
        setState({
            ...state,
            [name]: valuec
        })
    }

    return (<div className="form-container">
        <form onSubmit={handleSubmit} className="addItemForm">
            <label htmlFor="name">Name</label><br/>
            <input value={state.name} name="name" type="text" onChange={handleChange}/><br/>
            <label htmlFor="image">Image</label><br/>
            <input value={state.image} name="image" type="text" onChange={handleChange}/><br/>
            <label htmlFor="calories">Calories</label><br/>
            <input value={state.calories} name="calories" type="number" onChange={handleChange}/><br/>
            <label htmlFor="servings">Servings</label><br/>
            <input value={state.servings} name="servings" type="number" onChange={handleChange}/><br/>
            <button type="submit">Create</button><br/>
        </form>
    </div>)
}
export default AddFoodForm;