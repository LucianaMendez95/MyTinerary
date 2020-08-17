import React from 'react';


class Fotoscarousel extends React.Component {
    render() {
    
        return (   
             <div id="divDivsCarousel"> 
             {this.props.hola.map(ciudad => {
                 const ciudadFoto = require(`../imagenes/${ciudad}.jpg`)
                 return (
                    <div key={ciudad} className="divFotoCarousel" style={{backgroundImage: `url(${ciudadFoto})`}}>
                        <p id="carouselP" >{ciudad}</p>
                    </div> 
                 )
             }) } 
             </div>
        )
    }
}

export default Fotoscarousel