import React from 'react';
import ciudadesActions from '../redux/actions/ciudadesActions';
import {connect} from 'react-redux'
import comentariosActions from '../redux/actions/comentariosActions'
import deletecoment  from "../imagenes/delete.png"
import modifycoment  from "../imagenes/modify.png"
import cancel  from "../imagenes/cancel.png"
import save  from "../imagenes/save.png"



class Comentario extends React.Component {
    state = {
        modificar: true,
        comentarios:{
            foto:this.props.usuario.foto,
            usuario:this.props.usuario.usuario,
            token:this.props.usuario.token,
            comentario:"",
        }
    }

    render() {
        

        const modificarComentario = async e =>{
            e.preventDefault()
           await this.setState({modificar: !this.state.modificar})

           }

           const borrarComentario = async e =>{
            e.preventDefault()
            await this.props.eliminarComentario(this.props.idItinerario, this.props.index)
             
           }

           const leerImput = e => {
            this.props.comentario.comentario = e.target.value
            const campo = e.target.name
            const valor = e.target.value
            this.setState ({
                comentarios: {
                   ...this.state.comentarios,
                    [campo]: valor
                  }
                  
              })
          }

          const enviarInfo = async e =>{
            e.preventDefault()
               if (this.state.comentarios.comentario === ''){
                   alert ("please write your coment")
               }else{
                   await this.props.modificarComentario(this.state.comentarios, this.props.idItinerario, this.props.index)
                   this.props.itinerario.comentarios.push(this.state.comentarios)
                   await this.setState({modificar: !this.state.modificar})

                   this.setState({
                      comentarios: {
                        ...this.state.comentarios,
                         comentario: ""
                       }
                  })
                   }
           }

       const  modificarmicomentario = () =>{
        if (this.props.usuarioLogueado !== this.props.comentario.usuario ){
            return(<div id="eliminarYmodificar"></div> )
        }  else{
            return(<div id="eliminarYmodificar">
            <button onClick={modificarComentario}><img src={modifycoment} style={{width: '2vw'}}></img></button>
            <button onClick={borrarComentario}><img src={deletecoment} style={{width: '2vw'}}></img></button>
        </div>)
        }
         
       }


        return (
            <div id="infoComentario"> 
                <div id="imagenTinerary"style={{ backgroundImage: `url(${this.props.comentario.foto})`, width:"8vw", height:"8vw"}}></div>
                <div id="usuarioYComentario">
                    <h4>{this.props.comentario.usuario}</h4>
                    {this.state.modificar 
                    ? <p>{this.props.comentario.comentario}</p> 
                    :<>
                    <input onChange={leerImput} type="text" id="editarcomentario" value={this.props.comentario.comentario} name="comentario" style={{width:`18vw`}}></input>
                    <button onClick={enviarInfo}><img src={save} style={{width: '2vw'}}></img></button>
                    </>
                    } 
                </div>
                
               {modificarmicomentario()}
               

            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        usuario: state.usuarios,
        usuarioLogueado: state.usuarios.usuario,
    }
}

const mapDispatchToProps = {
    modificarComentario: comentariosActions.modificarComentario,
    eliminarComentario: comentariosActions.eliminarComentario,
    nuevoComentario: comentariosActions.nuevoComentario
 }

export default connect(mapStateToProps, mapDispatchToProps) (Comentario)