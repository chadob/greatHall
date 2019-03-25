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
      this.props.moveForward(this.props.direction, this.props.curPos)
    }
    if (input.keyCode === 40 || input.keyCode === 83) {
      this.props.moveBackward(this.props.direction, this.props.curPos)
    }
  }
  mouseMoveAround(event) {
    this.props.mouseView({x: event.x, y: event.y}, this.props.windowWidth, this.props.windowHeight, this.props.yRotation)
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
  mouseView: (mousePos, windowWidth, windowHeight, yRotation) => dispatch(mouseView(mousePos, windowWidth, windowHeight, yRotation)),
  moveForward: (direction, curPos) => dispatch(moveForward(direction, curPos)),
  moveBackward: (direction, curPos) => dispatch(moveBackward(direction, curPos))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovementContainer)
