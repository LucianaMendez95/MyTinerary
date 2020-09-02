import React from 'react';
import axios from 'axios';


class Activities extends React.Component {
    state = {
        activities:[]
    }

    async componentDidMount() {
        const idABuscar = this.props.idItinerario
        const responseActivity = await axios.get(`http://127.0.0.1:4000/api/activities/${idABuscar}`)
        const activities = await responseActivity.data.Activities
        this.setState({
            activities: activities

        })
        
    }

   
    render() {
        console.log(this.state.activities)
        return (   
                 <>
                 {this.state.activities.map(activity=>{
                     return (
                         <div id="divActivity" key={activity._id}>
                            <div id="fotoActividad" style={{backgroundImage: `url(${activity.imagenActividad})`}}></div>
                              <div id="infoActivity">
                                 <h4>{activity.titulo}</h4>
                                 <p>{activity.descripcion}</p>
                              </div>
                         </div>
                          )
                  })}
                  
                 </>
        )
    }
}
export default Activities