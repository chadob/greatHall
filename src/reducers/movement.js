const movement = (state = {}, action) => {
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
      return {
        ...state,
          position: action.newLocation
      }
    case 'MOVE_BACKWARD':
      return {
        ...state,
          position: action.newLocation
      }
    default:
      return state
  }
}

export default movement
