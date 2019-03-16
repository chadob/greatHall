import React, { Component} from "react";
import {hot} from "react-hot-loader";
import HallwayContainer from "./containers/hallwayContainer";
import "./styles/app.css";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="app">
        <HallwayContainer />
      </div>
    );
  }
}

export default hot(module)(App);
