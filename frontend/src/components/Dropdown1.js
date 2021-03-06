import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import usuariosActions from '../redux/actions/usuariosActions';



const Dropdown1 = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const fotousuario = require("../imagenes/usuario.png")



  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
       <DropdownToggle caret style= {{backgroundColor: `white`, border: `0px solid white`}}>        
        {!props.tokenLogueado
        ? <img id="fotousuario" src={fotousuario} alt="fotousuario"/>
        :<div id="imagenTinerary" className="fotoHeader" style={{ backgroundImage: `url(${props.imagenLogueado})`, width:"6vw", height:"6vw"}}></div>
        }
     </DropdownToggle>



        {!props.tokenLogueado
        ? (<>
         <DropdownMenu>
            <NavLink to="/logIn"><DropdownItem>Login</DropdownItem></NavLink>
            <NavLink to="/register"><DropdownItem>Register</DropdownItem></NavLink>
         </DropdownMenu>
        </>)
        :(<>
         <DropdownMenu>
        <NavLink to="/logIn"><DropdownItem>{props.usuarioLogueado}</DropdownItem></NavLink>
            <NavLink to="/"><DropdownItem onClick={props.desloguearUsuario}>Logout</DropdownItem></NavLink>
         </DropdownMenu>
        </>)
        }       
    </Dropdown>
  );
}

const mapDispatchToProps = {
  desloguearUsuario: usuariosActions.desloguearUsuario,
  forcedLogIn: usuariosActions.forcedLogIn
}

const mapStateToProps = state => {
  return{
    usuarioLogueado: state.usuarios.usuario,
    imagenLogueado: state.usuarios.foto,
    tokenLogueado: state.usuarios.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dropdown1)

