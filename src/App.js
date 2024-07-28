import logo from "./logo.svg";
import "./App.css";
import Test from "./Component/Test";
import Test2 from "./Component/Test2";
import ParentComponent from "./Component/ParentComponent";
import Counter from "./Component/Counter";
import ToDoList from "./Component/ToDoList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Router/Home";
import Contact from "./Component/Router/Contact";
import About from "./Component/Router/About";

function App() {
  return (
    <div className="App">
      {/* <Test></Test> */}
      {/* <Test />
      <Test2 /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
