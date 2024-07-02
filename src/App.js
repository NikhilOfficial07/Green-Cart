import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Headergreen from "./Component/Headergreen"
import Navbarg from "./Component/navbargreen"


function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/green" element={[<Headergreen/>, <Navbarg/>]}/>
          <Route path="/" element={[<Header />, <NavBar/>, <Home /> ,<Footer/>]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
