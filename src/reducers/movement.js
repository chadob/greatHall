const movement = (state = {xRotation: 0, yRotation: 0, curPos: 100}, action) => {
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
    case 'ADJUST_VERT':
      return {
        ...state,
          yRotation: action.newRotation
      }
    case 'MOVE_FORWARD':
    console.log('hi')
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
