import { useState } from "react"
import { Card } from "antd"
const AddFoodForm = ({ addFood }) => {

  const [foodData, setFoodData] = useState({
    id: 0,
    name: "",
    image: "",
    calories: 0,
    servings: 0
  })

  const counterId = 1

  const handleInputsChange = event => {

    const { name, value } = event.target
    setFoodData({
      ...foodData,
      id: counterId + 1,
      [name]: value
    })

  }

  const handleSubmitForm = event => {

    event.preventDefault()
    addFood(foodData)

  }

  // Ant design


  return (
    <Card className="AddFoodForm">
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleInputsChange}
          type="text"
          value={foodData.name}
          name="name"
        />

        <label htmlFor="image">Image</label>
        <input
          onChange={handleInputsChange}
          type="text"
          name="image"
          value={foodData.image}
        />

        <label htmlFor="calories">Calories</label>
        <input
          onChange={handleInputsChange}
          type="number"
          min="0"
          value={foodData.calories}
          id="food-calories"
          name="calories"
        />

        <label htmlFor="servings">Servings</label>
        <input
          onChange={handleInputsChange}
          type="number"
          min="0"
          id="food-servings"
          name="servings"
          value={foodData.servings}
        />

        <button type="submit">Create</button>
      </form>
    </Card>
  )
}
export default AddFoodForm