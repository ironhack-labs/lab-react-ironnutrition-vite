import { Card, Col, Button } from "antd";

function FoodBox({ food, deleteItem, i }) {
  return (
    <div key={i} className="foodCard">
      <p>{food.name}</p>
      <img src={food.image} alt={food.name} className="foodImage" />
      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>
      <Button type="primary"  onClick={() => deleteItem(i)}>Delete</Button>
    </div>
  );
}

export default FoodBox;
