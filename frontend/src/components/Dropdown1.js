import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {NavLink} from "react-router-dom"


const Dropdown1 = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const fotousuario = require("../imagenes/usuario.png")

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
       <DropdownToggle caret style= {{backgroundColor: `white`, border: `0px solid white`}}>
         <img id="fotousuario" src={fotousuario} alt="fotousuario"/>
        </DropdownToggle>
       <DropdownMenu>
          <NavLink to="/logIn"><DropdownItem>Login</DropdownItem></NavLink>
          <NavLink to="/register"><DropdownItem>Register</DropdownItem></NavLink>
       </DropdownMenu>
    </Dropdown>
  );
}

export default Dropdown1;