import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Custom from "./components/Custom";
import ecualogo from "./assets/ecualogo.png"
import { Navigate } from 'react-router-dom'
import Home from "./components/Home";



function App() {
  
  return (
    <>
      <HashRouter>
           {/* <img src={ecualogo} alt="" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom" element={<Custom />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
