//Increasing perspective makes the cube further away from z = 0;
// Lower values of translatez make the element futher away from screen
//yRotation describes the angle to rotate around the x axis: so angling the img away from you or spinning it horizontally
//xRotation describes the angle to rotate around the y axis: so angling the img to the side or spinning it vertically
import React from 'react';
import "../styles/hallway.css";
import Radium from 'radium';
import {Project} from "./project";

class Hallway extends React.Component {
  render() {
    console.log(this.props.curPos)
    console.log(this.props.xRotation);
    console.log(this.props.yRotation)
    const styles = {
      wrap: {
        perspective: this.props.perspective + "px"
      },
      cube: {
        width: this.props.windowWidth,
        height: this.props.windowHeight,
        transformOrigin: "50% 50% " + (-1 * this.props.curPos) +"px" ,
        transform:
          "rotateX(" + this.props.xRotation + "deg) " +
          "rotateY(" + this.props.yRotation + "deg) " +
          "translateX(" + (this.props.translateX) + "px) " +
          "translateY(" + (this.props.translateY) + "px) " +
          "translateZ(" + (this.props.translateZ) + "px)"
      },
      front: {width: "100%", height: "100%", transform: "rotateY(180deg) translateZ(" + 0 + "px)"},
      back: {width: "100%", height: "100%", transform: "rotateY(0deg) translateZ(" + -1 * this.props.length + "px)"},
      top: {height: this.props.length + "px", transform: "rotateX(270deg) translateZ("+ 0 + "px)"},
      bottom: {height: this.props.length + "px", transform: "rotateX(90deg) translateY(" +  -1 * this.props.length + "px) translateZ(" + -1 * this.props.windowHeight + "px)"},
      left: {width: this.props.length + "px", transform: "rotateY(90deg) translateZ(" + 0 + "px)"},
      right: {width: this.props.length + "px", transform: "rotateY(270deg) translateZ(" + -1 * this.props.windowWidth + "px) translateX(" + -1 * this.props.length + "px)"}
    }
    return (
      <div className="wrap" style = {styles.wrap}>
      	<div className="cube" style={styles.cube}>
          <div className="ends front" style={styles.front} ></div>
          <div className="ends back" style={styles.back} ></div>
          <div className="flats top" style={styles.top} ></div>
          <div className="flats bottom" style={styles.bottom} ></div>
          <div className="sides left" style={styles.left} >
            <Project numProj="2"/>
            <Project numProj="2"/>
          </div>
          <div className="sides right" style={styles.right} >
            <Project numProj="2"/>
            <Project numProj="2"/>
          </div>
        </div>
      </div>
    );
  }
}

console.log(Radium(Hallway))
export default Radium(Hallway);
