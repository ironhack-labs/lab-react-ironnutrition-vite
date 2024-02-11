import { Card, Button } from "antd";
const FoodBox = ({ food, deleteFood }) => {
    const { name, calories, image, servings, totalCalories = servings * calories } = food



    return (
        <div className="Card">
            <h1>{name}</h1>
            <img className='foodImage' src={image} />
            <h2>Calories: {calories}</h2>
            <h2>Servings: {servings} </h2>
            <p>
                <h3>Total Calories: {totalCalories} kcal </h3>
            </p>
            <Button className="btn-delete" onClick={() => deleteFood(food.id)}>Delete</Button>
        </div>
    )
}
export default FoodBox