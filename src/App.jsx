import './App.css';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox'
import foods from './foods.json'
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'

function App() {

  const [totalFood, setTotalFood] = useState(foods)
  const [foodData] = useState(foods)
  const [showForm, setShowForm] = useState(false)

  const addNewFood = food => {
    const foodCopy = [food, ...totalFood]
    setTotalFood(foodCopy)
  }

  const filterFood = (typedLetter) => {
    const filteredFood = foodData.filter((food) =>
      food.name.toLowerCase().includes(typedLetter.toLowerCase())
    );
    setTotalFood(filteredFood);
    
    
  };

  const deleteFood = (name) => {
    const toDeleteFood = totalFood.filter((food) => food.name !== name)
    setTotalFood(toDeleteFood)
  }

  return (
    <div className="App">
      {showForm && <AddFoodForm addNewFood={addNewFood} />}

      <Button onClick={() => setShowForm(!showForm)} className='hideAdd'>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      <Search filterFood={filterFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {totalFood.map((foodCard) => {
          return <FoodBox
            food={{
              name: foodCard.name,
              calories: foodCard.calories,
              image: foodCard.image,
              servings: foodCard.servings
            }}
            deleteFood={deleteFood}
          />
        })}
      </Row>
      {totalFood.length === 0
        ?
        <div>
          <h2>Ops, there is no more content to show.</h2>
          <img src="" alt="" />
        </div>
        :
        ''}
    </div>
  );
}

export default App;