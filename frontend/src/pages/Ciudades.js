import React from 'react';
import Header from "../components/Header";
import axios from 'axios';
import FotoCiudad from "../components/FotoCiudad"
import {NavLink} from "react-router-dom"



class Ciudades extends React.Component {
    state = {
        listaDeCiudades: [],
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
                       return <NavLink to={`/ciudad/${ciudad._id}`}><FotoCiudad ciudad={ciudad}/> </NavLink>
                      })}
                 </div>
             

          </div>
        )
    }
}
export default Ciudades