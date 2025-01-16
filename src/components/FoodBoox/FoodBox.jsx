import './foodBox.css'

function foodBox ({ food, deleteFood }){
 
    return(
        <div className='card-food'>
            <p>{food.name}</p>

            <img src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: SERVINGS * CALORIES </b> kcal
            </p>

            <button onClick={()=> deleteFood(food.id)} >Delete</button>
        </div>

    )
}
export default foodBox