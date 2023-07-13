import Search from "antd/es/input/Search";
import "./App.css";
import FoodList from "./components/FoodList";

function App() {
  return (
    <div className="App">
      <Search />
      <FoodList />
    </div>
  );
}

export default App;
