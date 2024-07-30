import "./App.css";
import FoodList from "./components/FoodList.jsx";
import { Row, Divider } from "antd";

function App() {
  return (
    <div className="App">
      <Divider></Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList />
        <Divider></Divider>
      </Row>
    </div>
  );
}

export default App;
