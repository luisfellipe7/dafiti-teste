import React from "react";
import logo from "./Assets/01-Principal_Desktop.jpg";
import logomob from "./Assets/02-Principal_Mobile.jpg";
import vans from "./Assets/logotipos/01.jpg";
import puma from "./Assets/logotipos/02.jpg";
import newera from "./Assets/logotipos/03.jpg";
import adidas from "./Assets/logotipos/04.jpg";
import fila from "./Assets/logotipos/05.jpg";
import converse from "./Assets/logotipos/06.jpg";
import asics from "./Assets/logotipos/07.jpg";
import tommy from "./Assets/logotipos/08.jpg";
import nb from "./Assets/logotipos/09.jpg";
import starter from "./Assets/logotipos/10.jpg";
import nike from "./Assets/logotipos/11.jpg";
import inter1 from "./Assets/03-Intermediario01.jpg";
import inter2 from "./Assets/04-Intermediario02.jpg";
import inter3 from "./Assets/05-Intermediario03.jpg";
import "./App.css";

function App() {
  return (
    <div className="Sneakers">
      <header className="Sneakers-header">
        <img src={logo} className="Sneakers-logo" alt="logo" />
        <img src={logomob} className="LogoMobile" alt="banner" />
        <div className="Brands-logo">
          <img src={vans} alt="vans" />
          <img src={puma} alt="puma" />
          <img src={newera} alt="newera" />
          <img src={adidas} alt="adidas" />
          <img src={fila} alt="fila" />
          <img src={converse} alt="converse" />
          <img src={asics} alt="asics" />
          <img src={tommy} alt="tommy" />
          <img src={nb} alt="nb" />
          <img src={starter} alt="starter" />
          <img src={nike} alt="nike" />
        </div>
      </header>
      <body className="Sneakers-body">
        <div className="Imgs">
          <div className="Inter123">
            <div id="wrapper">
              <img
                src={inter1}
                className="Inter1"
                alt="imagem intermediaria 1"
              />
              <p class="text">
                50 ANOS DE SUPERTAR<br></br>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.{" "}
              </p>
            </div>
            <img src={inter3} className="Inter3" alt="imagem intermediaria 3" />
          </div>
          <img src={inter2} className="Inter2" alt="imagem intermediaria 2" />
        </div>
      </body>
    </div>
  );
}

export default App;
