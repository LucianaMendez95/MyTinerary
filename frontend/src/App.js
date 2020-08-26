import React from 'react';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ciudades from "../src/pages/Ciudades";
import Ciudad from "../src/pages/Ciudad";
import "../src/estilos/generalstyles.css";
import "../src/estilos/ciudades.css";
import "../src/estilos/itinerarios.css";

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

class App extends React.Component {
  render (){

    return (
      <BrowserRouter>
       <Switch>
         <Route exact path="/home" component={Home}/>
         <Route path="/ciudades" component={Ciudades}/>
         <Route path="/ciudad/:id" component={Ciudad}/>
         <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App