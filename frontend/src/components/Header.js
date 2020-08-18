import React from 'react';
import Menuhamburguesa from "../components/Menuhamburguesa"
import Dropdown1 from "../components/Dropdown1"
import {NavLink} from "react-router-dom"



function Header() {
    const fotologo = require("../imagenes/logo.png")
    const fotobanner = require("../imagenes/banner1.jpg")
    return (
        <header>
            <div id="barraArriba" style={{display:`flex`, alignItems: `center`}}>
              <div id="usuarioymenu"><Dropdown1/></div>
              <img id="fotologo" src={fotologo} alt="logo" style={{ marginLeft: `2vw`,}}/>
              <div id="menuHamburguesa" style={{marginLeft: `4vw`, marginTop: `2vh`}}><Menuhamburguesa/></div>
              <div id="menuNormal">
                  <NavLink to="/Home">Home</NavLink>
                  <NavLink to="/Ciudades">Ciudades</NavLink>
              </div>
            </div>
            <div id="fotoHeader"><img src={fotobanner} alt="banner"></img></div>

        </header>
    )
}

export default Header