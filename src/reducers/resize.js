const resize = (state = {windowWidth: 0, windowHeight: 0}, action) => {
  switch (action.type) {
    case 'RESIZE_WINDOW':
    console.log(state)
    console.log(action)
      return {
        ...state,
        windowWidth: action.windowWidth,
        windowHeight: action.windowHeight
      }
    default:
      return state
  }
}

export default resize
