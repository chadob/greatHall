//Increasing perspective makes the cube further away from z = 0;
// Lower values of translatez make the element futher away from screen
//yRotation describes the angle to rotate around the x axis: so angling the img away from you or spinning it horizontally
//xRotation describes the angle to rotate around the y axis: so angling the img to the side or spinning it vertically
import React from 'react';
import "../styles/hallway.css";
import {Project} from "./project";
export class Hallway extends React.Component {
  render() {
    console.log(this.props)
    console.log(this.props.curPos);
    console.log(this.props.yRotation)
    console.log(this.props.xRotation)
    return (
      <div className="wrap" style = {{
        perspective: this.props.perspective + "px"
      }}>
      	<div className="cube" style={{
          width: this.props.windowWidth,
          height: this.props.windowHeight,
          transformOrigin: "50% 50% " + (-1 * this.props.curPos) +"px" ,
          transform: "rotateX(" + this.props.xRotation + "deg) " +
                     "rotateY(" + this.props.yRotation + "deg) " +
                     "translateX(" + (this.props.translateX) + "px) " +
                     "translateY(" + (this.props.translateY) + "px) " +
                     "translateZ(" + (this.props.translateZ) + "px)"
        }}>
          <div className="ends front" style={{width: "100%", height: "100%", transform: "rotateY(180deg) translateZ(" + 0 + "px)"}} ></div>
          <div className="ends back" style={{width: "100%", height: "100%", transform: "rotateY(0deg) translateZ(" + -1 * this.props.length + "px)"}} ></div>
          <div className="flats top" style={{height: this.props.length + "px", transform: "rotateX(270deg) translateZ("+ 0 + "px)"}} ></div>
          <div className="flats bottom" style={{height: this.props.length + "px", transform: "rotateX(90deg) translateY(" +  -1 * this.props.length + "px) translateZ(" + -1 * this.props.windowHeight + "px)"}} ></div>
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
