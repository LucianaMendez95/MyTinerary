import React from 'react';
import Menuhamburguesa from "../components/Menuhamburguesa"
import Dropdown1 from "../components/Dropdown1"


function Header() {
    const fotologo = require("../imagenes/logo.png")
    const fotobanner = require("../imagenes/banner1.jpg")
    return (
        <header>
            <div id="barraArriba" style={{display:`flex`, alignItems: `center`}}>
              <div id="usuarioymenu"><Dropdown1/></div>
              <img id="fotologo" src={fotologo} alt="logo" style={{ marginLeft: `2vw`,}}/>
              <div id="menuHamburguesa" style={{marginLeft: `4vw`, marginTop: `3vh`}}><Menuhamburguesa/></div>
              <div id="menuNormal">
                  <a href="https://www.google.com.ar/?gws_rd=ssl">A definir</a>
                  <a href="https://www.google.com.ar/?gws_rd=ssl">A definir</a>
              </div>
            </div>
            <div id="fotoHeader"><img src={fotobanner} alt="banner"></img></div>

        </header>
    )
}

export default Header