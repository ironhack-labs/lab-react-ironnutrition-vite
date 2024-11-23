function FoodBox({food: {id, name, image, calories, servings}, onDeleteFood}) {

    return(
        <div>
            <p>{name}</p>

            <img src={image} />

            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>

            <p>
                <b>Total Calories: {calories * servings} </b> kcal
            </p>

            <button onClick={() => onDeleteFood(id)}>Delete</button>
        </div>
    )
}

export default FoodBox;