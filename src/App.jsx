import { Row, Divider } from "antd";
import "./App.css";
import FoodList from "./components/FoodList";


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Divider>Search bar</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>

        <FoodList />
      </Row>
    </div>
  );
}

export default App;