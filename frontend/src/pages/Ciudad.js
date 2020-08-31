import React from 'react';
import Header from "../components/Header";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import Itinerario from '../components/Itinerario';
import FotoCiudad from "../components/FotoCiudad"




class Ciudad extends React.Component {

    state = {
        ciudad: {},
        itinerarios: []
    }

    async componentDidMount() {
        const idABuscar = this.props.match.params.id
        const response = await axios.get(`http://127.0.0.1:4000/api/ciudad/${idABuscar}`)
        const ciudad = await response.data.ciudadBuscada
        const responseItinerario = await axios.get(`http://127.0.0.1:4000/api/itinerarios/${idABuscar}`)
        const itinerarios = await responseItinerario.data.itinerarios
        this.setState({
            ciudad: ciudad,
            itinerarios: itinerarios
        })
        
    }


    render() {
        const home = require("../imagenes/home.png")
        const flechaVolver = require("../imagenes/flechaVolver.png")
        
        const mensaje = () => {
            if (this.state.itinerarios.length === 0){
               return(
                   <div className="todoTinerary" style={{minHeight: "25vh"}}>
                       <p style={{marginLeft: "30vw", marginTop:"10vh"}}>No tineraries to show</p>
                    </div>
                   )
           }}


        return (   
            <div id="todoelhome">   
              <Header/>
              <div className="divenblanco"style={{display:`none`}}></div>
              <h3 id="textoMenu"> </h3>
              <div id="componenteCiudad">
                  <FotoCiudad ciudad={this.state.ciudad}/>
                     {mensaje()}
                     {this.state.itinerarios.map(itinerario =>{
                         return <Itinerario itinerario={itinerario}/>
                       })}    
              </div>
             
              <div id="homeyflecha">
                  <div id="divhomeyflecha" style={{width:"25vw"}}>
                     <div id="divFlechaVolver"><NavLink to="/ciudades"><img alt="home" id="flechaVolver" src={flechaVolver}></img></NavLink></div>
                     <div id="divHomeVolver"> <NavLink to="/home"><img alt="volver" id="homeVolver" src={home}></img></NavLink></div>
                  </div>
              </div>
          </div>
        )
    }
}
export default Ciudad