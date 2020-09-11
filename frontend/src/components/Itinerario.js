import React from 'react';
import Activities from "./Activities"
import {connect} from 'react-redux'
import comentariosActions from '../redux/actions/comentariosActions';
import Comentario from './Comentario';


class Itinerario extends React.Component {
    state = {
        viewMore: false,
        like: this.props.itinerario.rating,
        cambiarColor: true,
        comentarios:{
            foto:this.props.usuario.foto,
            usuario:this.props.usuario.usuario,
            token:this.props.usuario.token,
            comentario:""
        }
    }
  

    render() {
        console.log("esto estoy render enviando", this.state)

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


        const leerImput = e => {
          const campo = e.target.name
          const valor = e.target.value
          this.setState ({
              comentarios: {
                 ...this.state.comentarios,
                  [campo]: valor
                }
                
            })
        }

        const modificarLike = async e =>{
            e.preventDefault()
            this.setState({cambiarColor: !this.state.cambiarColor})
            const likesumado = this.state.like +1
            const likerestado = this.state.like -1

            if (this.state.cambiarColor){
                this.setState({like: likesumado})
                await this.props.sumarlike(this.props.itinerario._id, likesumado, this.props.tokenLogueado, this.props.usuario)

            }else{
                this.setState({like: likerestado})
                await this.props.restarlike(this.props.itinerario._id, likerestado, this.props.tokenLogueado, this.props.usuario)

            }

            this.setState({
                ...this.state,
                like: this.state.like
                 
            })
             }

            
        

        
       const enviarInfo = async e =>{
            e.preventDefault()
               if (this.state.comentarios.comentario === ''){
                   alert ("please write your coment")
               }else{
                   await this.props.nuevoComentario(this.state.comentarios, this.props.itinerario._id)
                   this.props.itinerario.comentarios.push(this.state.comentarios)
         
                   this.setState({
                      comentarios: {
                        ...this.state.comentarios,
                         comentario: ""
                       }
                  })
                   }
           }


       console.log(this.state)
            return (   
                  <div className="todoTinerary">
                      <div className="TinerarySinVerMas">
                         <div id="imagenTinerary"style={{ backgroundImage: `url(${this.props.itinerario.profilePic})`, width:"14vw", height:"14vw"}}></div>
                         <div id="infoTinerary">
                            <div id="ratingDurationPriceTinerary">
                                <div id="rating" onClick={modificarLike}><img alt="like" src={like}></img>{this.state.like}</div>
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
                      {this.state.viewMore && <div id="verMas"><Activities idItinerario={this.props.itinerario._id}/></div>}
                      <div id="divBoton"> <button onClick={verMas}>{this.state.viewMore ? "Hide activities" : "Show activities"}</button></div>
                   
                    <div id="todoComentarios">
                            <h3>Comments</h3>
                            <div id="ComentariosFotoInfo">
                                    {this.props.itinerario.comentarios.map((comentario, index) =>{
                                        return <Comentario comentario={comentario} idItinerario={this.props.itinerario._id} index={index} itinerario={this.props.itinerario}/>
                                    })}
                                    
                            </div>
                            {!this.props.tokenLogueado
                            ?<div id="inputybutton">  </div>
                            :  <div id="inputybutton"> 
                                  <input onChange={leerImput} type="text" id="comentario" value={this.state.comentarios.comentario} name="comentario" placeholder="Write a coment here"></input>
                                  <button onClick={enviarInfo}>Send coment</button>
                              </div>
                             }

                        </div>
                     </div>
              )
    }
}

const mapStateToProps = state => {
    return{
        usuario: state.usuarios,
        tokenLogueado: state.usuarios.token

    }
}

const mapDispatchToProps = {
    nuevoComentario: comentariosActions.nuevoComentario,
    restarlike: comentariosActions.restarlike,
    sumarlike: comentariosActions.sumarlike


 }

export default connect(mapStateToProps, mapDispatchToProps) (Itinerario)