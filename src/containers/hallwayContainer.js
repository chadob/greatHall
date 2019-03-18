import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resizeWindow } from '../actions'
import MovementContainer from '../containers/movementContainer'

class HallwayContainer extends Component {
  constructor(props) {
    super(props)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    this.props.resizeWindow(window.innerWidth, window.innerHeight)
  }

  componentDidMount() {
    console.log(this)
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render(){
    return(
      <MovementContainer length={this.props.length}/>
    );
  }
}

const mapStateToProps = state => ({
  length: "1000"
})

const mapDispatchToProps = dispatch => ({
  resizeWindow: (windowWidth, windowHeight) => dispatch(resizeWindow(windowWidth, windowHeight)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HallwayContainer)
