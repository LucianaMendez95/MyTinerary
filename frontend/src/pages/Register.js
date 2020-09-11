import React from 'react';
import Header from "../components/Header";
import usuariosActions from '../redux/actions/usuariosActions';
import {connect} from 'react-redux'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';




class Register extends React.Component {

    state = {
        nuevoUsuario: {
            nombre:"",
            apellido:"",
            mail: "",
            foto:"",
            usuario:"",
            password:"",
            pais:"",
        },
        paises:[]
    }

    async componentDidMount(){
        const respuestaIt = await axios.get('https://restcountries.eu/rest/v2/all')
        const infoIt = respuestaIt.data
        this.setState({
            paises: infoIt
        })
    }


    leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState ({
            nuevoUsuario: {
                ...this.state.nuevoUsuario,
                 [campo]: valor
            }
            
        })
    }

    enviarInfo = async e =>{
     e.preventDefault()
        if (this.state.nuevoUsuario.nombre === '' || this.state.nuevoUsuario.apellido ==='' || this.state.nuevoUsuario.foto ===''|| this.state.nuevoUsuario.mail ==='' || this.state.nuevoUsuario.usuario ==='' || this.state.nuevoUsuario.password ===''){
            alert ("please complete all fields")
        }else{
            await this.props.nuevoUsuarios(this.state.nuevoUsuario)
            if(this.props.success){
                alert("Thank you for signing up")
                this.props.history.push("/home")  
            }
            }
    }

    responseGoogle = respuesta => {
        this.props.nuevoUsuarios({
            nombre: respuesta.profileObj.givenName,
            apellido: respuesta.profileObj.familyName,
            password:respuesta.profileObj.googleId,
            usuario:respuesta.profileObj.email,
            mail:respuesta.profileObj.email,
            foto:respuesta.profileObj.imageUrl,
            pais:"Argentina"
        })
        alert("Thank you for signing up")
        this.props.history.push("/home")  
    }



    render() {


        return (   
            <div id="todoelhome">   
              <Header/>
              <div className="divenblanco"style={{display:`none`}}></div>
              <h3 id="textoMenu"> </h3>

             
        
              <div id="divFormulario">
                  <form>
                     <h3>Complete this form to register</h3>

                     <GoogleLogin id="GoogleLogin"
                        clientId="83311303903-d8eviki4j9rvmabuc0ceg0c5im70b2ab.apps.googleusercontent.com"
                        buttonText="Sing up with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                     <div id="divNombre">
                         <input onChange={this.leerImput} type="text" id="nombre" name="nombre" placeholder="Write your name here"></input>
                     </div>
                     <div id="divApellido">
                         <input onChange={this.leerImput} type="text" id="apellido" name="apellido" placeholder="Write your surname here"></input>
                     </div>
                     <div id="divMail">
                         <input onChange={this.leerImput} type="text" id="mail" name="mail" placeholder="Write your mail here"></input>
                     </div>
                     <div id="divFoto">
                         <input onChange={this.leerImput} type="text" id="foto" name="foto" placeholder="Put your picture URL here"></input>
                     </div>
                     <div id="divPais">
                         <select name="pais" onChange={this.leerImput}>
                             <option value="All">Select your country</option>
                             {this.state.paises.map(pais=> <option key={pais.alpha2Code} value={pais.alpha2Code} >{pais.name}</option>)}
                         </select>
                     </div>
                     <div id="divUsuario">
                         <input onChange={this.leerImput} type="text" id="usuario" name="usuario" placeholder="Whrite your username here"></input>
                     </div>
                     <div id="divContraseña">
                         <input onChange={this.leerImput} type="password" id="password" name="password" placeholder="Whrite your password here"></input>
                     </div>
                     <button onClick={this.enviarInfo}>Create Account</button>
                  </form>
              </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        success: state.usuarios.success
    }
}

const mapDispatchToProps = {
    nuevoUsuarios: usuariosActions.nuevoUsuarios,
 }

export default connect(mapStateToProps, mapDispatchToProps) (Register)