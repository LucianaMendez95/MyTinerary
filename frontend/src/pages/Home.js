import React from 'react';
import Header from "../components/Header";
import Carousel1 from "../components/Carousel1"
import {NavLink} from "react-router-dom"


class Home extends React.Component {
    render() {
        const fotoflecha = require("../imagenes/flechainicio1.png")

        return (   
            <div id="todoelhome">   
              <Header/>       
              <h3 id="textoMenu">Find your perfect trip, designed by insiders who know and love their cities.</h3>
              <div id="divflechaboton">
                 <NavLink to="Ciudades"><img id="flechaBoton" src={fotoflecha} alt="flecha"></img></NavLink>    
              </div>
              <div id="carouselstyle"><Carousel1/></div>
            </div>
        )
    }
}

export default Home