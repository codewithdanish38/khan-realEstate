/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/Header"; // Navigation Bar
import SignUp from "./Component/SignUp";
import Home from "./Home/Home"; // Home Page
import About from "./Component/About";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import Project from "./Component/Project";
function App() {
  return (
    <Router>
        <Header /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/project" element={<Project/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
