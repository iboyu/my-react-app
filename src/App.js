import logo from "./logo.svg";
import "./App.css";
import Test from "./Component/Test";
import Test2 from "./Component/Test2";
import ParentComponent from "./Component/ParentComponent";
import Counter from "./Component/Counter";

function App() {
  return (
    <div className="App">
      {/* <Test></Test> */}
      {/* <Test />
      <Test2 /> */}
      {/* <ParentComponent /> */}
      <Counter />
    </div>
  );
}

export default App;
