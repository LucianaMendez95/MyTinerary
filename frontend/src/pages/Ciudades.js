import React from 'react';
import Header from "../components/Header";
import FotoCiudad from "../components/FotoCiudad"
import {NavLink} from "react-router-dom"
import loading from "../imagenes/loading.gif"
import ciudadesActions from '../redux/actions/ciudadesActions';
import {connect} from 'react-redux'




class Ciudades extends React.Component {
   
    async componentDidMount() {
      this.props.getcities()
       
    }

    capturarValor = e =>{
    const valorDeseado = e.target.value.toLowerCase().trim()
    this.props.ciudadesfiltradas(valorDeseado)
    }



    render() {
        const notFound = require("../imagenes/notfound.jpg")

        if(this.props.ciudades === null){
            return <img alt="loading" src={loading} id="loading"/>
        }

        const mensaje = () => {
            if (this.props.ciudadesFiltradas.length===0) {
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
                     {this.props.ciudadesFiltradas.map(ciudad =>{
                       return <NavLink to={`/ciudad/${ciudad._id}`} href="#divenblanco"><FotoCiudad ciudad={ciudad}/></NavLink>
                      })}
                 </div>
             

          </div>
        )
    }
}
    const mapStateToProps = state => {
        return{
            ciudades: state.ciudades.ciudades,
            ciudadesFiltradas: state.ciudades.ciudadesFiltradas

        }
    }

   const mapDispatchToProps = {
    getcities: ciudadesActions.getcities,
    ciudadesfiltradas: ciudadesActions.filtrarCiudades

   }

export default connect(mapStateToProps, mapDispatchToProps) (Ciudades)