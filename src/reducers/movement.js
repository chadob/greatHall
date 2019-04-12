const movement = (state = {xRotation: 0, yRotation: 0, curPos: 1, perspective: 1000, mousePos: {x: 0, y: 0}}, action) => {
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
          yRotation: action.yRotation
      }
    case 'MOVE_FORWARD':
      return {
        ...state,
          curPos: action.curPos
      }
    case 'MOVE_BACKWARD':
      return {
        ...state,
          curPos: action.curPos
      }
    default:
      return state
  }
}

export default movement
