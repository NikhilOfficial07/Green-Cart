import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";




function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <NavBar/>, <Home /> ,<Footer/>]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
