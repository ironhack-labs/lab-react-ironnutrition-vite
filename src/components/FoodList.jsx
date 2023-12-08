export function FoodList({ name, image, calories, servings,id, deleteFood}){
    const totalCalories = servings * calories;
    return(  <div>
        <p>{name}</p>
        <img src={image} alt={`Image of ${name}`} style={{height:'100px'}}/>
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p><b>Total Calories: </b> {totalCalories} kcal</p>
        <button aria-label={`Delete ${id}`}  onClick={()=>deleteFood(id)}>Delete</button>
    </div>)
}