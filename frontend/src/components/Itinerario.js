import React from 'react';


class Itinerario extends React.Component {
    state = {
    }


    render() {

     
        return (   
                  <div className="todoTinerary">
                      <div id="imagenTinerary"style={{ backgroundImage: `url(${this.props.itinerario.profilePic})`, width:"14vw", height:"14vw"}}></div>
                      <div id="infoTinerary">
                          <div id="ratingDurationPriceTinerary">
                             <div>{this.props.itinerario.rating}/5 rating</div>
                             <div>{this.props.itinerario.duration}hs</div>
                             <div>{this.props.itinerario.price}/5 price</div>
                          </div>

                          <div id="tituloHashtagsTinerary"> 
                              <div id="hashtagsTinerary">{this.props.itinerario.hashtag.map(unhashtag=>{
                                  return <p>{unhashtag}</p>
                              })}</div>
                              <div id="tituloTinerary">"{this.props.itinerario.title}"</div>
                          </div>
                          <button>View More</button>
                      </div>
                
                  </div>
              )
    }
}
export default Itinerario