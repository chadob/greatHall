import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import {Hallway} from '../components/hallway'
import { turnLeft, turnRight, adjustVert, moveForward, moveBackward } from '../actions'

class MovementContainer extends Component {
  componentDidMount() {
    window.addEventListener('keydown', function(e) {
      console.log(e.keyCode)
      arrowKeys(e.keyCode);
    });
  }
  componentWillUnmount() {

  }
  render(){
    return(
      <Hallway length={this.props.length} windowWidth={this.props.windowWidth} windowHeight={this.props.windowHeight}/>
    );
  }
}
function mapStateToProps(state) {
  return {
    xRotation: state.xRotation,
    mousePos: state.mousePos,
    curPos: state.curPos,
    direction: state.direction,
    length: "1000",
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight
  }
}
const arrowKeys = (input) => {
  console.log('hi')
  if (input === 37 || input === 65) {
    this.props.turnLeft(this.props.xRotation)
  }
  if (input === 39 || input === 68) {
    this.props.turnRight(this.props.xRotation)
  }
  if (input === 38 || input === 87) {
    this.props.moveForward(this.props.direction, this.props.curPos)
  }
  if (input === 40 || input === 83) {
    this.props.moveBackward(this.props.direction, this.props.curPos)
  }
}
const mouseMovement = coords => {
  this.props.adjustVert(coords[1]);
}

const mapDispatchToProps = dispatch => ({
  turnLeft: xRotation => dispatch(turnLeft(xRotation)),
  turnRight: xRotation => dispatch(turnRight(xRotation)),
  adjustVert: mousePos => dispatch(adjustVert(mousePos)),
  moveForward: (direction, curPos) => dispatch(moveForward(direction, curPos)),
  moveBackward: (direction, curPos) => dispatch(moveBackward(direction, curPos))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovementContainer)
