import React from 'react';
import Header from "../components/Header";
import Carousel1 from "../components/Carousel1"
import Footer from "../components/Footer"


class Home extends React.Component {
    render() {
        const fotoflecha = require("../imagenes/flecha.png")

        return (   
            <div id="todoelhome">          
             <Header />
              <h3 id="textoMenu">Find your perfect trip, designed by insiders who know and love their cities.</h3>
              <div id="divflechaboton"><img id="flechaBoton" src={fotoflecha} alt="flecha"></img></div>
              <div id="carouselstyle"><Carousel1/></div>
              <footer><Footer/></footer>
            </div>
        )
    }
}

export default Home