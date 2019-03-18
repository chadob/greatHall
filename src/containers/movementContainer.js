import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import {Hallway} from '../components/hallway'
import { turnLeft, turnRight, adjustVert, moveForward, moveBackward } from '../actions'

class MovementContainer extends Component {
  constructor(props) {
    super(props)
    this.moveAround = this.moveAround.bind(this)
  }

  moveAround(input) {
    console.log(this.props)
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

  componentDidMount() {
    window.addEventListener('keydown', this.moveAround);
  }
  componentWillUnmount() {

  }

  render(){
    console.log(this.props)
    return(
      <Hallway
        length={this.props.length}
        windowWidth={this.props.windowWidth}
        windowHeight={this.props.windowHeight}
        xRotation={this.props.xRotation}
        yRotation={this.props.yRotation}
        curPos={this.props.curPos}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    xRotation: state.movement.xRotation,
    mousePos: state.movement.mousePos,
    curPos: state.movement.curPos,
    direction: state.movement.direction,
    length: "1000",
    windowWidth: state.resize.windowWidth,
    windowHeight: state.resize.windowHeight
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
