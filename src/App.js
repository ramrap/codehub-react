import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

import Home from "./Pages/Home";
import UserPage from "./Pages/User";


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/user/:id" component={UserPage}/>
      </Switch></BrowserRouter>
        
    )
  }
}

export default App;
