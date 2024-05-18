const FoodBox = props => {
 
    //const deleteFoodItem = props.delete(props.food.key);
return (
    <div>
  <p>{props.food.name}</p>

  <img className="image" src={props.food.image} />

  <p>Calories: {props.food.calories}</p>
  <p>Servings {props.food.servings}</p>

  <p>
    <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
  </p>

  

  <button onClick={() => props.deleteHandler(props.food.id)} >Delete</button>
</div>
)
}

export default FoodBox;