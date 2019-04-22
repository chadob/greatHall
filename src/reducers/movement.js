//need to manually change perspective and translateZ to same number initially and take curPos into account

const movement = (state =
  {
    xRotation: 0,
    yRotation: 0,
    curPos: 0,
    perspective: 500,
    mousePos: {x: 0, y: 0},
    translateX: 0,
    translateY: 0,
    translateZ: 500
  }, action) => {
    switch (action.type) {
      case 'TURN_LEFT':
        return {
          ...state,
            xRotation: action.newRotation
        }
      case 'TURN_RIGHT':
        return {
          ...state,
            xRotation: action.newRotation
        }
      case 'MOUSE_VIEW':
        return {
          ...state,
            mousePos: action.mousePos,
            xRotation: action.xRotation,
            yRotation: action.yRotation,
            translateX: action.translateX,
            translateY: action.translateY,
            translateZ: action.translateZ
        }
      case 'MOVE_FORWARD':
        return {
          ...state,
            curPos: action.curPos,
            translateX: action.translateX,
            translateY: action.translateY,
            translateZ: action.translateZ
        }
      case 'MOVE_BACKWARD':
        return {
          ...state,
            curPos: action.curPos,
            translateX: action.translateX,
            translateY: action.translateY,
            translateZ: action.translateZ
        }
      default:
        return state
    }
}

export default movement
