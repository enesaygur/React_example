import { useState } from "react";
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const {darkMode} =useSelector((state)=>state.theme)
  const dispatch=useDispatch()
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navi />
      <Dashboard />
    </div>
  );
}

export default App;
