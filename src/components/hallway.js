import React from 'react';
import "../styles/hallway.css";
import {Project} from "./project";

export class Hallway extends React.Component {
  render() {
    console.log(this.props.curPos)
    console.log("50% 50% " + (-2 * this.props.curPos + 3 * this.props.perspective) +"px")
    return (
      <div className="wrap" style = {{
        perspective: this.props.perspective
      }}>
      	<div className="cube" style={{
          width: this.props.windowWidth,
          height: this.props.windowHeight,
          transformOrigin: "50% 50% " + (-2 * this.props.curPos + 2 * this.props.perspective) +"px" ,
          transform: "translateZ(" + this.props.curPos + "px) rotateX(" + this.props.yRotation + "deg) rotateY(" + this.props.xRotation + "deg)"
        }}>
          <div className="ends front" style={{}} ></div>
          <div className="ends back" style={{width: "100%", height: "100%", transform: "rotateY(180deg) translateZ(" + this.props.length + "px)"}} ></div>
          <div className="flats top" style={{height: this.props.length + "px", transform: "rotateX(270deg) translateZ("+ 0 +"px)"}} ></div>
          <div className="flats bottom" style={{height: this.props.length + "px", transform: "rotateX(270deg) translateZ(" + this.props.windowHeight + "px)"}} ></div>
          <div className="sides left" style={{width: this.props.length + "px", transform: "rotateY(90deg) translateZ(" + 0 + "px)"}} >
            <Project numProj="2"/>
            <Project numProj="2"/>
          </div>
          <div className="sides right" style={{width: this.props.length + "px", transform: "rotateY(270deg) translateZ(" + -1 * this.props.windowWidth + "px) translateX(" + -1 * this.props.length + "px)"}} >
            <Project numProj="2"/>
            <Project numProj="2"/>
          </div>
        </div>
      </div>
    );
  }
}
