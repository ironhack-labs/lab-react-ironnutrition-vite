import {useState} from "react";
//import { Divider, Input, Button } from "antd";
import { Divider, Input} from "antd";

const AddFoodForm = props => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleName = event => {
        setName(event.target.value);
    };
    const handleImage = event => {
        setImage(event.target.value);
    };
    const handleCalories = event => {
        setCalories(event.target.value);
    };
    const handleServings = event => {
        setServings(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const id = Math.random() * name.length;

        const newFood = {
            name,
            image,
            calories,
            servings,
            id
        };

        props.addFoodHandler(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings(0);
    };

    return (
        <div>
            <Divider>Add Food Entry</Divider>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <Input type="text" name="name" value={name} onChange={handleName} /><br />

                <label>Image</label>
                <Input type="text" name="image" value={image} onChange={handleImage} /><br />

                <label>Calories</label>
                <Input type="number" name="calories" value={calories} onChange={handleCalories} /><br />

                <label>Servings</label>
                <Input type="number" name="servings" value={servings} onChange={handleServings} /><br />

                <button type="submit">Create</button> {/* when I change the button to Button it stops working */}
            </form>
        </div>
    )
}

export default AddFoodForm;