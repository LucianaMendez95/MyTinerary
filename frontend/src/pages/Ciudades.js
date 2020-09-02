import React from 'react';
import Header from "../components/Header";
import axios from 'axios';
import FotoCiudad from "../components/FotoCiudad"
import {NavLink} from "react-router-dom"
import loading from "../imagenes/loading.gif"



class Ciudades extends React.Component {
    state = {
        listaDeCiudades: null,
        ciudadesFiltradas: []
    }

    async componentDidMount() {
        const response = await axios.get('http://127.0.0.1:4000/api/ciudades')
        const lista = await response.data.ciudades
        this.setState({
            listaDeCiudades: lista,
            ciudadesFiltradas: lista
        })
    }

    capturarValor = e =>{
    const valorDeseado = e.target.value.toLowerCase().trim()
    const filtrados = this.state.ciudadesFiltradas.filter(ciudad => ciudad.ciudad.toLowerCase().indexOf(valorDeseado) === 0) 
    
    this.setState({
        listaDeCiudades: filtrados
    })
    }



    render() {
        const notFound = require("../imagenes/notfound.jpg")

        if(this.state.listaDeCiudades === null){
            return <img alt="loading" src={loading} id="loading"/>
        }

        const mensaje = () => {
            if (this.state.listaDeCiudades.length===0) {
                return <div id="notFound"><img alt="city not found" src={notFound}/></div>
            }
        }

        return (   
            <div id="todoelhome">   
              <Header/>
              <div className="divenblanco"style={{display:`none`}}></div>
              <h3 id="textoMenu"> </h3>
              <div style={{display: `flex`, justifyContent:`center`}}>
                 <input onChange={this.capturarValor} type="text" placeholder="Search the perfect city for you" name="ciudad" id="ciudd"></input>
              </div>
              {mensaje()}
              
                 <div id="todasLasCiudades">
                     {this.state.listaDeCiudades.map(ciudad =>{
                       return <NavLink to={`/ciudad/${ciudad._id}`} href="#divenblanco"><FotoCiudad ciudad={ciudad}/></NavLink>
                      })}
                 </div>
             

          </div>
        )
    }
}
export default Ciudades