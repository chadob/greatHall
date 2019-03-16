const resize = (state = [], action) => {
  switch (action.type) {
    case 'RESIZE_WINDOW':
      return [
        ...state,
        {
          width: action.width,
          height: action.height
        }

      ]
    default:
      return state
  }
}

export default resize
