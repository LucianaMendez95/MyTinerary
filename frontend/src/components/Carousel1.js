import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Fotoscarousel from "../components/Fotoscarousel"


class Carousel1 extends React.Component {
  state = {
    slide1: ["Bangkok", "Surat-Thani", "Ayutthaya","Chiang-Mai"],
    slide2: ["Ho-Chi-Minh", "Ha-Long","Siem-Reap","Kuala-Lumpur"],
    slide3: ["Manila", "Melbourne","El-Nido","Sydney"]
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