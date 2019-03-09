import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {Hallway} from "./components/hallway";
import {End} from './components/end';
import "./styles/app.css";

class App extends Component{
  constructor(props) {
  super(props);
  this.state = { windowWidth: 0, windowHeight: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  console.log(window.innerWidth)
  this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
}
  render(){
    return(
      <div className="app">
        <Hallway length="1000" screenWidth={this.state.windowWidth} screenHeight={this.state.windowHeight}/>

      </div>
    );
  }
}

export default hot(module)(App);
