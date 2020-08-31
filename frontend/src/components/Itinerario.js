import React from 'react';
import Activities from "../components/Activities"


class Itinerario extends React.Component {
    state = {
        viewMore: false
    }

  

    render() {
        const billete = require("../imagenes/billetelleno.png")
        const billeteVacio = require("../imagenes/billetevacio.png")
        const like = require("../imagenes/like.png")

        const billetesarray = []
        const billeteVacioCuenta = 5 - (this.props.itinerario.price)
        const billeteVacioArray = []

        const billetes = (cantidad, array) => {
            for (var i=0; cantidad > i; i++ ){
                array.push(cantidad)
            }
        }    
           
        billetes(this.props.itinerario.price, billetesarray)
        billetes(billeteVacioCuenta, billeteVacioArray)


        const verMas = () => {
            this.setState({viewMore: !this.state.viewMore})
         }
       
            return (   
                  <div className="todoTinerary">
                      <div className="TinerarySinVerMas">
                         <div id="imagenTinerary"style={{ backgroundImage: `url(${this.props.itinerario.profilePic})`, width:"14vw", height:"14vw"}}></div>
                         <div id="infoTinerary">
                            <div id="ratingDurationPriceTinerary">
                                <div id="rating"><img alt="like" src={like}></img>{this.props.itinerario.rating}</div>
                                <div>{this.props.itinerario.duration}hours</div>
                                <div id="priceTinerary">
                                    {billetesarray.map(billeteimg => 
                                      <img alt="billete" src={billete} style={{width:"3vw", marginRight:"1vw"}}></img>)}
                                   {billeteVacioArray.map(billeteimg => 
                                      <img alt="billete" src={billeteVacio} style={{width:"3vw", marginRight:"1vw"}}></img>)} 
                                 </div>
                            </div> 

                            <div id="tituloHashtagsTinerary"> 
                                <div id="tituloTinerary">"{this.props.itinerario.title}"</div>
                                <div id="hashtagsTinerary">{this.props.itinerario.hashtag.map(unhashtag => <p>{unhashtag}</p>)}</div>

                            </div>
                         </div>
                      </div>
                      {this.state.viewMore && <div id="verMas"><Activities/></div>}
                      <div id="divBoton"> <button onClick={verMas}>{this.state.viewMore ? "View less" : "View more"}</button></div>

                  </div>
              )
    }
}
export default Itinerario