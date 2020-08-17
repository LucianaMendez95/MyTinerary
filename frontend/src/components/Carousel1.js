import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fotoscarousel from "../components/Fotoscarousel"


class Carousel1 extends React.Component {
  state = {
    slide1: ["Sydney", "Melbourne", "Brisbane","Cairns"],
    slide2: ["Adelaida", "Broome","Byron-Bay","Camberra"],
    slide3: ["Darwin", "Gold-Coast","Perth","Uluru"]
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