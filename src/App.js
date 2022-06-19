import React from "react";
import Login from "./components/Login";
import EditTask from "./components/EditTask";
import JokesSpot from "./components/JokesSpot";
import ViewTask from "./components/ViewTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    
      
      <Router>
        <Routes>
          <Route  path="/" component={<Login/>}/>
          <Route  path="/EditTask" component={<EditTask />}/>
          <Route  path="/JokesSpot" component={<JokesSpot/>} />
          <Route  path="/ViewTask" component={<ViewTask/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
