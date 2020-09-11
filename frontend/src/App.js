import React from 'react';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ciudades from "../src/pages/Ciudades";
import Ciudad from "../src/pages/Ciudad";
import "../src/estilos/generalstyles.css";
import "../src/estilos/ciudades.css";
import "../src/estilos/itinerarios.css";
import "../src/estilos/registroLogIn.css";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import {connect} from 'react-redux'
import usuariosActions from '../src/redux/actions/usuariosActions';

class App extends React.Component {
  render (){
    if (localStorage.getItem('token') && this.props.tokenLogueado===""){
      (this.props.forcedLogIn(localStorage.getItem('token')))

    }
console.log(this.props)
    

    return (
      
      <BrowserRouter>
       <Switch>
         <Route exact path="/home" component={Home}/>
         <Route path="/ciudades" component={Ciudades}/>
         <Route path="/ciudad/:id" component={Ciudad}/>
         <Route path="/register" component={Register}/>
         <Route path="/logIn" component={LogIn}/>
         <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = {
  forcedLogIn: usuariosActions.forcedLogIn
}

const mapStateToProps = state => {
  return{
    tokenLogueado: state.usuarios.token  
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
