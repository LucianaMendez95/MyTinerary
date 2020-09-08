import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import usuariosActions from '../redux/actions/usuariosActions';
import {connect} from 'react-redux'


const LogIn = props => {

    const [ingresoUsuario, setIngresoUsuario] = useState({})

     const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setIngresoUsuario ({
            ...ingresoUsuario,
            [campo]: valor
        })
    }

    const enviarInfo  = async e => {
        e.preventDefault()
        const usuarioAloguear = {usuario: ingresoUsuario.usuario, password: ingresoUsuario.password}
        await props.loguearUsuario(usuarioAloguear)
    }

    useEffect(()=>{
        if(props.success){
            alert("Welcome")
           props.history.push("/home")  
        }
    },[props.success]) 
    
   
    

        return (   
            <div id="todoelhome">   
              <Header/>
              <div className="divenblanco"style={{display:`none`}}></div>
              <h3 id="textoMenu"> </h3>
             
              <div id="divFormulario">
                  <form>
                     <h3>Log In form</h3>
                     <div id="divUsuario">
                         <input onChange={leerImput} type="text" id="usuario" name="usuario" placeholder="Write your username here"></input>
                     </div>
                     <div id="divContraseña">
                         <input onChange={leerImput} type="password" id="password" name="password" placeholder="Write your password here"></input>
                     </div>
                     <button onClick={enviarInfo}>Log in</button>
                  </form>
              </div>
              
          </div>
        )
    
}

const mapStateToProps = state => {
    return{
        success: state.usuarios.success
    }
}

const mapDispatchToProps = {
    loguearUsuario: usuariosActions.loguearUsuario,
 }

export default connect(mapStateToProps, mapDispatchToProps) (LogIn)
