import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"


class Ciudades extends React.Component {
    render() {
        const fotoflecha = require("../imagenes/flecha.png")

        return (   
            <div id="todoelhome">   
            <Header/>       
            <h3 id="textoMenu"></h3>
          </div>
        )
    }
}

export default Ciudades