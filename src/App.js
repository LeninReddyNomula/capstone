import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
