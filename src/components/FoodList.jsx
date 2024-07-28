import { useState } from "react";
import FoodBox from "./FoodBox";
import foodsJson from './../foods.json'
import AddFoodForm from "./AddFoodForm";
import { Row, Divider } from 'antd';
import Search from "./Search";
const FoodList = () => {

  const [foods, setFoods] = useState(foodsJson)

  const deleteFood = foodId => {
    const filteredFoods = [...foods].filter(food => {
      return food.id !== foodId
    })
    setFoods(filteredFoods)

  }

  const addFood = foodData => {
    setFoods([foodData, ...foods])
  }

  const [foodsBackup, setFoodsBackup] = useState(foodsJson)
  const searchFoods = query => {
    console.log(foodsBackup[0].name)
    const filteredFoods = foodsBackup.filter(food => {

      return food.name.toLowerCase().includes(query.toLowerCase())
    })
    setFoods(filteredFoods)
  }
  return (
    <div className="FoodList">
      <Divider>Search</Divider>
      <Search searchFoods={searchFoods} />
      <Divider>Add Food</Divider>
      <AddFoodForm addFood={addFood} />
      <Divider>Food List</Divider>
      <Row gutter={16} align="stretch">
        {!foods.length
          ?
          <h2>Oops! There is no more content to show.</h2>
          :
          foods.map(food => <FoodBox key={food.id} food={food} deleteFood={deleteFood} />)
        }
      </Row>
    </div>
  )
}

export default FoodList