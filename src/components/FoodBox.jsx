function FoodBox({ foodItem , deleteFoodItem }){

    function handleDeleteClick(id){
        // console.log(id);
        deleteFoodItem(id);
    }

    return (
        <div key={foodItem.id} className="food-item">
        <h2>{foodItem.name}</h2>

        <div className="picture-container"><img src={foodItem.image} alt={foodItem.name}/></div>

        <p>Calories: {foodItem.calories}</p>
        <p>Servings {foodItem.servings}</p>

        <p>
            <b>Total Calories: {foodItem.servings * foodItem.calories} </b> kcal
        </p>

        <button onClick={()=>handleDeleteClick(foodItem.id)}>Delete</button>
        </div>
    )
}
export default FoodBox;