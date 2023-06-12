import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate()

  const enter=()=>{
    navigate("/custom")
  }

  return (
    <div>
       <div className="welcomeContainer">
          <h1>Bienvenido <br />El auto de tus sueños está a un click</h1>
        </div>
        <button onClick={enter}>Ingresar</button>
    </div>
  );
};

export default Home;