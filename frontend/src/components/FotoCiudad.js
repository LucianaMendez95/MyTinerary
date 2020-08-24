import React from 'react';

class FotoCiudad extends React.Component {
    render() {
        return (   
              <div key={this.props.ciudad.ciudad} className="divFotoCiudad" style={{backgroundImage: `url(${this.props.ciudad.fotoCiudad})`}}>
                  <p id="carouselP" >{this.props.ciudad.ciudad}</p>
            </div> 
        )
    }
}
export default FotoCiudad