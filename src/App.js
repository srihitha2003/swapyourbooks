import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.js'
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
