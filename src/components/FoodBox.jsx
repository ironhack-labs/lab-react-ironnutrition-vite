import { Card, Col, Button } from "antd";

const FoodBox = ({ food, deleteFood }) => {
  const { id, name, calories, image, servings } = food
  const handleDeleteFood = id => {
    deleteFood(id)
  }
  return (
    <Col span={12}>
      <Card className="FoodBox">
        <p>{name}</p>
        <img src={image} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p>
          <b>Total Calories: {servings * calories}</b> kcal
        </p>
        <Button onClick={() => handleDeleteFood(id)}>Delete</Button>
      </Card>
    </Col>
  )
}

export default FoodBox