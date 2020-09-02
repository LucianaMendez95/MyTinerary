import React, {useState} from 'react';
import Header from "../components/Header";


const LogIn = () => {

    const [ingresoUsuario, setIngresoUsuario] = useState("usauario", "contraseña")

     const leerImput = e => {
        const campo = e.target.name
        const valor = e.target.value
        setIngresoUsuario ({
            ...ingresoUsuario,
            [campo]: valor
        })
    }

    const enviarInfo  = e => {
        e.preventDefault()

    }
    

        return (   
            <div id="todoelhome">   
              <Header/>
              <div className="divenblanco"style={{display:`none`}}></div>
              <h3 id="textoMenu"> </h3>
             
              <div id="divFormulario">
                  <form>
                     <h3>Log In form</h3>
                     <div id="divUsuario">
                         <input onChange={leerImput} type="text" id="usuario" name="usuario" placeholder="Whrite your username here"></input>
                     </div>
                     <div id="divContraseña">
                         <input onChange={leerImput} type="text" id="contraseña" name="contraseña" placeholder="Whrite your password here"></input>
                     </div>
                     <button onClick={enviarInfo}>Log in</button>
                  </form>
              </div>
              
          </div>
        )
    
}
export default LogIn