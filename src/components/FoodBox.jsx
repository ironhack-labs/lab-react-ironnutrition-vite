
import "../index.css"

function Foodbox(props) {
    return (
        <div>     
        <p>{props.food.name}</p>

        <img className="resizeImage" src={props.food.image} />

        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>
            <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
        </p>

        <button className="buttonElm"
        onClick={function () {
            props.callbackToDelete(props.food.name);
        }}
        >Delete</button>

        
  </div>

           
    );
}

export default Foodbox;

