import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fotoscarousel from "../components/Fotoscarousel"

class Carousel1 extends React.Component {
  state = {
    slide: [
    ["Sydney", "Melbourne", "Brisbane","Darwin"],
    ["Adelaida", "Broome","Uluru","Canberra"],
    ["Cairns", "Gold-Coast","Perth","Byron-Bay"],
    ["Townsvielle", "Darwin","Hobart","New-Castle"]
  ],
  }
  render() {
    return ( 
      <Carousel>
        {this.state.slide.map(slide=> {
          return( 
           <Carousel.Item>
             <Fotoscarousel ciudades={slide}/>
           </Carousel.Item>
          )
         })}
     </Carousel>
    )
  }
}
export default Carousel1