import { Card, Col, Button } from "antd";

export default function FoodBox({ food: { name, image, calories, servings }, onDelete }) {
    return (
      <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        {/* </Card><p><b>{name}</b></p> */}
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings <b>{servings}</b></p>
        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
        <Button type="primary" onClick={() => onDelete(name)}>Delete</Button>
        </Card>
      </Col>
    );
  }