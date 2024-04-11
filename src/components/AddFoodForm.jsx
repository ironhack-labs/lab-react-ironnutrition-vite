import { useState } from "react";
import { Input, Button } from "antd";

const initialFoodState = {
    name: '',
    image: '',
    calories: 0,
    servings: 0
}

function AddFoodForm({ onCreate }) {

    const [ newFood, setNewFood ] = useState({...initialFoodState});

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setNewFood({...newFood, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(newFood);
        setNewFood({...initialFoodState});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input type="text" name="name" value={newFood.name} onChange ={handleChange} />
            <label>Image</label>
            <Input type="text" name="image" value={newFood.image} onChange ={handleChange} />
            <label>Calories</label>
            <Input type="number" name="calories" value={newFood.calories} onChange ={handleChange} />
            <label>Servings</label>
            <Input type="number" name="servings" value={newFood.servings} onChange ={handleChange} />
            <Button htmlType="submit" style={{marginTop: "0.5rem", backgroundColor: "lightgray"}}>Create</Button>
        </form>
    );
}

AddFoodForm.defaultProps = {
    onCreate: () => {}
}

export default AddFoodForm;