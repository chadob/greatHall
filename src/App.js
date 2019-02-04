import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {Hall} from "./components/hall";
import {End} from './components/end';
import "./styles/app.css";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Hall />
        <End />
      </div>
    );
  }
}

export default hot(module)(App);
