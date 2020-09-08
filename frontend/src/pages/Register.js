import React from 'react';
import Header from "../components/Header";
import usuariosActions from '../redux/actions/usuariosActions';
import {connect} from 'react-redux'



class Register extends React.Component {

    state = {
        nombre:"",
        apellido:"",
        mail: "",
        foto:"",
        usuario:"",
        password:""
    }


    leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        this.setState ({
            [campo]: valor
        })
    }

    enviarInfo = async e =>{
     e.preventDefault()
        if (this.state.nombre === '' || this.state.apellido ==='' || this.state.foto ===''|| this.state.mail ==='' || this.state.usuario ==='' || this.state.password ===''){
            alert ("please complete all fields")
        }else{
            await this.props.nuevoUsuarios(this.state)
            if(this.props.success){
                alert("Thank you for signing up")
                this.props.history.push("/home")  
            }
            }
    }

   
   


    render() {
        console.log(this.state)

        return (   
            <div id="todoelhome">   
              <Header/>
              <div className="divenblanco"style={{display:`none`}}></div>
              <h3 id="textoMenu"> </h3>

              <div id="divFormulario">
                  <form>
                     <h3>Complete this form to register</h3>
                     <div id="divNombre">
                         <input onChange={this.leerImput} type="text" id="nombre" name="nombre" placeholder="Whrite your name here"></input>
                     </div>
                     <div id="divApellido">
                         <input onChange={this.leerImput} type="text" id="apellido" name="apellido" placeholder="Whrite your surname here"></input>
                     </div>
                     <div id="divMail">
                         <input onChange={this.leerImput} type="text" id="mail" name="mail" placeholder="Whrite your mail here"></input>
                     </div>
                     <div id="divFoto">
                         <input onChange={this.leerImput} type="text" id="foto" name="foto" placeholder="Put your picture URL here"></input>
                     </div>
                     <div id="divPais">
                         <select name="pais" onChange={this.leerImput}>
                             <option value="All">Select your country</option>
                             <option value="Argentina">Argentina</option>
                             <option value="Australia">Australia</option>
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