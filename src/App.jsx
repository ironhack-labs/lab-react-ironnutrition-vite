import "./App.css";
import FoodList from "./components/FoodList";
import { Row } from "antd";

function App() {

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Row style={{width: "100%", justifyContent: "center"}} >
        <FoodList />
      </Row>
    </div>
  );
}

export default App;
