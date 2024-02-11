import { useState } from "react"
import { Card, Row, Col, Divider, Input, Button } from "antd";
const AddFoodForm = ({ addNewFood }) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = event => setName(event.target.value)
    const handleImageChange = event => setImage(event.target.value)
    const handleCaloriesChange = event => setCalories(event.target.value)
    const handleServingsChange = event => setServings(event.target.value)

    const handleFromSubmit = event => {
        event.preventDefault()
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
        }
        addNewFood(newFood)
    }



    return (
        < div>
            <h4>New Food</h4>
            <form className='foodForm' onSubmit={handleFromSubmit}>

                <label>Name
                    <input type="text" placeholder='food`s Name' value={name} onChange={handleNameChange} />
                </label>
                <label>
                    Image
                    <input type="text" placeholder='food`s image' value={image} onChange={handleImageChange} />
                </label>
                <label>
                    Calorias
                    <input type="number" placeholder='Number of calories' value={calories} onChange={handleCaloriesChange} />
                </label>
                <label>
                    Servicios
                    <input type="number" placeholder='Number of services' value={servings} onChange={handleServingsChange} />
                </label>

                <input type="submit" value='Create' />
            </form>
        </div >
    )

}
export default AddFoodForm