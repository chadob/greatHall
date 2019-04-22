import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import {Hallway} from '../components/hallway'
import { turnLeft, turnRight, mouseView, moveForward, moveBackward } from '../actions'

class MovementContainer extends Component {
  constructor(props) {
    super(props)
    this.keyMoveAround = this.keyMoveAround.bind(this)
    this.mouseMoveAround = this.mouseMoveAround.bind(this)
  }

  keyMoveAround(input) {
    if (input.keyCode === 37 || input.keyCode === 65) {
      this.props.turnLeft(this.props.xRotation)
    }
    if (input.keyCode === 39 || input.keyCode === 68) {
      this.props.turnRight(this.props.xRotation)
    }
    if (input.keyCode === 38 || input.keyCode === 87) {
      this.props.moveForward(this.props.xRotation, this.props.yRotation, this.props.direction, this.props.curPos, this.props.perspective)
    }
    if (input.keyCode === 40 || input.keyCode === 83) {
      this.props.moveBackward(this.props.xRotation, this.props.yRotation, this.props.direction, this.props.curPos, this.props.perspective)
    }
  }
  mouseMoveAround(event) {
    console.log(this.props)
    this.props.mouseView({x: event.x, y: event.y}, this.props.windowWidth, this.props.windowHeight, this.props.curPos, this.props.perspective)
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keyMoveAround);
    window.addEventListener('mousemove', this.mouseMoveAround);
  }
  componentWillUnmount() {

  }

  render(){
    return(
      <Hallway
        length={this.props.length}
        windowWidth={this.props.windowWidth}
        windowHeight={this.props.windowHeight}
        xRotation={this.props.xRotation}
        yRotation={this.props.yRotation}
        translateX={this.props.translateX}
        translateY={this.props.translateY}
        translateZ={this.props.translateZ}
        curPos={this.props.curPos}
        perspective={this.props.perspective}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    xRotation: state.movement.xRotation,
    yRotation: state.movement.yRotation,
    translateX: state.movement.translateX,
    translateY: state.movement.translateY,
    translateZ: state.movement.translateZ,
    mousePos: state.movement.mousePos,
    curPos: state.movement.curPos,
    direction: state.movement.direction,
    perspective: state.movement.perspective,
    length: "1000",
    windowWidth: state.resize.windowWidth,
    windowHeight: state.resize.windowHeight
  }
}

const mapDispatchToProps = dispatch => ({
  turnLeft: xRotation => dispatch(turnLeft(xRotation)),
  turnRight: xRotation => dispatch(turnRight(xRotation)),
  mouseView: (mousePos, windowWidth, windowHeight, curPos, perspective) => dispatch(mouseView(mousePos, windowWidth, windowHeight, curPos, perspective)),
  moveForward: (xRotation, yRotation, direction, curPos, perspective) => dispatch(moveForward(xRotation, yRotation, direction, curPos, perspective)),
  moveBackward: (xRotation, yRotation, direction, curPos, perspective) => dispatch(moveBackward(xRotation, yRotation, direction, curPos, perspective))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovementContainer)
