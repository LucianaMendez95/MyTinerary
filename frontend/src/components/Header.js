import React from 'react';
import Menuhamburguesa from "../components/Menuhamburguesa"
import Dropdown1 from "../components/Dropdown1"
import {NavLink} from "react-router-dom"
import usuariosActions from '../redux/actions/usuariosActions';
import {connect} from 'react-redux'

const Header = (props) => {
    const fotologo = require("../imagenes/logo.png")
    return (
        <header>
            <div id="barraArriba" style={{display:`flex`, alignItems: `center`}}>
              <div id="usuarioymenu"><Dropdown1/></div>
              <img id="fotologo" src={fotologo} alt="logo" style={{ marginLeft: `2vw`,}}/>
              <div id="menuHamburguesa" style={{marginLeft: `4vw`, marginTop: `2vh`}}><Menuhamburguesa/></div>
              <div id="menuNormal">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/ciudades">Ciudades</NavLink>
              </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
  return{
    usuarioLogueado: state.usuarios.usuario,
    imagenLogueado: state.usuarios.foto
  }
}

export default connect(mapStateToProps) (Header)