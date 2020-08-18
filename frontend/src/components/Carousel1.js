import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fotoscarousel from "../components/Fotoscarousel"


class Carousel1 extends React.Component {
  state = {
    slide1: ["Sydney", "Melbourne", "Brisbane","Darwin"],
    slide2: ["Adelaida", "Broome","Uluru","Camberra"],
    slide3: ["Cairns", "Gold-Coast","Perth","Byron-Bay"]
  }

  render() {
   
    return (
      
   <Carousel>
     <Carousel.Item>
        <Fotoscarousel hola={this.state.slide1}/>
     </Carousel.Item>

     <Carousel.Item>
        <Fotoscarousel hola={this.state.slide2}/>
     </Carousel.Item>

      <Carousel.Item>
      <Fotoscarousel hola={this.state.slide3}/>
      </Carousel.Item>
    </Carousel>
    )
  }
}

export default Carousel1