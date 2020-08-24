import React from 'react';

function Footer() {
    const fotoc = require("../imagenes/c.png")
    return (
        <footer>
           <div>
              <img src={fotoc} alt="Copy Right"></img>
              <p>MyTineray All rights reserved 2020</p>
            </div>
        </footer>
    )
}

export default Footer