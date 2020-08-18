import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          <DropdownItem header>Login</DropdownItem>
          <DropdownItem>Register</DropdownItem>
       </DropdownMenu>
    </Dropdown>
  );
}

export default Dropdown1;