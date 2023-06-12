import React, { useState } from "react";
import cars from "./details.json";
import spark from "../assets/spark.jpg";
import picanto from "../assets/kiapicanto.jpg";
import great from "../assets/Great-Wall-M4.png";
import tigo from "../assets/TIGGO-2_06.jpg";
import tracker from "../assets/chevtracker.png";
import mazda from "../assets/mazda.png";
import style from "./custom.css";

const Custom = () => {
  const [index, setIndex] = useState(0);

  console.log(cars);

  const showCar1 = () => {
    setIndex(0);
  };

  const showCar2 = () => {
    setIndex(1);
  };

  const showCar3 = () => {
    setIndex(2);
  };

  const showCar4 = () => {
    setIndex(3);
  };

  const showCar5 = () => {
    setIndex(4);
  };

  const showCar6 = () => {
    setIndex(5);
  };

  const image = () => {
    if (index == 0) {
      return picanto;
    } else if (index == 2) {
      return great;
    } else if (index == 4) {
      return tracker;
    }
  };

  const image2 = () => {
    if (index == 0) {
      return spark;
    } else if (index == 2) {
      return tigo;
    } else if (index == 4) {
      return mazda;
    }
  };

  return (
    <>
      <h2>Elige tu presupuesto</h2>
      <div className="buttoncontainer">
        <div>
          <button onClick={showCar1}>$ 14000</button>
        </div>
        {/* <div>
          <button onClick={showCar2}>Chevrolet Spark</button>
        </div> */}
        <div>
          <button onClick={showCar3}>$ 16000</button>
        </div>
        {/* <div>
          <button onClick={showCar4}>Tigo chery</button>
        </div> */}
        <div>
          <button onClick={showCar5}>$ 20000</button>
        </div>
        {/* <div>
          <button onClick={showCar6}>Mazda CX-7</button>
        </div> */}
      </div>
      <div>
        <h2 className="carname">{cars[index].name}</h2>
        <img src={image()} alt="" className="image" />
        <div className="detailcontainer">
          <div className="detailbox">
            <h2 className="title contrato">Valor de contrato</h2>
            <h3>$ {cars[index].inscription}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title mensualidad">Mensualidad</h2>
            <h3>$ {cars[index].quotes}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title total">Valor total del vehiculo</h2>
            <h3>$ {cars[index].total}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title inicial">Valor Inicial </h2>
            <h3>$ {cars[index].initial}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title años">años de pago</h2>
            <h3> {cars[index].years}</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="carname">{cars[index + 1].name}</h2>
        <img src={image2()} alt="" className="image" />
        <div className="detailcontainer">
          <div className="detailbox">
            <h2 className="title contrato">Valor de contrato</h2>
            <h3>$ {cars[index + 1].inscription}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title mensualidad">Mensualidad</h2>
            <h3>$ {cars[index + 1].quotes}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title total">Valor total del vehiculo</h2>
            <h3>$ {cars[index + 1].total}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title inicial">Valor Inicial </h2>
            <h3>$ {cars[index + 1].initial}</h3>
          </div>
          <div className="detailbox">
            <h2 className="title años">años de pago</h2>
            <h3> {cars[index + 1].years}</h3>
          </div>
        </div>
      </div>
      <div className="contact">
        <button className="contactbutton">Comunicate con un asesor</button>
      </div>
    </>
  );
};

export default Custom;
