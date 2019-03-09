import React from 'react';
import "../styles/hallway.css";
import {Project} from "./project";
export class Hallway extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="wrap">
      	<div className="cube" style={{width: this.props.screenWidth, height: this.props.screenHeight}}>
        <div className="ends front" style={{}} ></div>
        <div className="ends back" style={{width: "100%", height: "100%", transform: "rotateY(180deg) translateZ(" + this.props.length + "px)"}} ></div>
        <div className="flats top" style={{height: this.props.length + "px", transform: "rotateX(270deg) translateZ("+ 0 +"px)"}} ></div>
        <div className="flats bottom" style={{height: this.props.length + "px", transform: "rotateX(270deg) translateZ(" + this.props.screenHeight + "px)"}} ></div>
        <div className="sides left" style={{width: this.props.length + "px", transform: "rotateY(90deg) translateZ(" + 0 + "px)"}} >
          <Project numProj="2"/>
          <Project numProj="2"/>
        </div>
          <div className="sides right" style={{width: this.props.length + "px", transform: "rotateY(270deg) translateZ(" + -1 * this.props.screenWidth + "px) translateX(" + -1 * this.props.length + "px)"}} >
            <Project numProj="2"/>
            <Project numProj="2"/>
          </div>

      	</div>
      </div>
    );
  }
}
