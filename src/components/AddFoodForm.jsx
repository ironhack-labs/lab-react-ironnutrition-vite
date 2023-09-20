import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setImage(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, image, calories, servings};
        props.addFood(newFood);

        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    }


    return (
        <div className="addFood">
             <Divider>Add Food Entry</Divider>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <Input 
                    type="text" 
                    name="name" 
                    id="name"
                    value= {name}
                    onChange={handleNameInput}
                />
                <label>Image</label>
                <Input 
                    type="file" 
                    name="image" 
                    id="image" 
                    value={image}
                    onChange={handleImageInput}
                />
                <label>Calories</label>
                <Input 
                    type="number" 
                    name="calories" 
                    id="calories"
                    value={calories}
                    onChange={handleCaloriesInput}
                />
                <label>Servings</label>
                <Input 
                    type="number" 
                    name="servings" 
                    id="servings"
                    value={servings}
                    onChange={handleServingsInput}
                 />

                 <Button type="submit">Create</Button>
            </form>
        </div>

    )
}

export default AddFoodForm;