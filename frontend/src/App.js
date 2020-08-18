import React from 'react';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ciudades from "../src/pages/Ciudades";
import "../src/estilos/generalstyles.css";
import "../src/estilos/generalstyles.css";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

class App extends React.Component {
  render (){

    return (
      <>
      <BrowserRouter>
       <Switch>
         <Route exact path="/Home" component={Home}/>
         <Route path="/Ciudades" component={Ciudades}/>
         <Redirect to="/Home"/>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </>
    );

  }
}

export default App