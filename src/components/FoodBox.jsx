import React, { useState } from "react";
import { Card, Col, Button } from "antd";


function FoodBoox(props) {
    const { food } = props;

    return (
        <Col>
        {/* <div className="foodbox-container"> */}
            {/* <h3>{props.food.name}</h3> */}
            <Card title={props.food.name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={props.food.image} height={60} alt="food"/>
                <p>Calories: {props.food.calories}</p>
                <p>Servings: {props.food.servings}</p>
                <p>
                    <b>Total Calories: { props.food.calories * props.food.servings }</b>kcal 
                </p>
                <Button type="primary" onClick={() => props.handleDelete(props.food.id)}>Delete</Button>
        {/* </div> */}
            </Card>
        </Col>
    )
}


export default FoodBoox;