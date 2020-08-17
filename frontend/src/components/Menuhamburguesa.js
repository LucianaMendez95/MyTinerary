import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Menuhamburguesa = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const fotoBoton = require("../imagenes/menuHamburguesa.png")

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{backgroundColor: `white`, border: `none`}}><img src={fotoBoton} alt="menu" style={{width: `30%`}}></img></DropdownToggle>
      <DropdownMenu>
        <DropdownItem>A definir</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>A definir</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Menuhamburguesa;