export const turnRight = xRotation => ({
  type: 'TURN_RIGHT',
  newRotation: xRotation + 5
})
export const turnLeft = xRotation => ({
  type: 'TURN_LEFT',
  newRotation: xRotation - 5
})
export const adjustVert= mousePos => ({
  type: 'ADJUST_VERT',
  newRotation: 360 * mousePos / 100
})
export const moveForward = (direction, curPos) => ({
  type: 'MOVE_FORWARD',
  newLocation: xRotation + 5
})
export const moveBackward = (direction, curPos) => ({
  type: 'MOVE_BACKWARD',
  newLocation: xRotation - 5
})
export const resizeWindow = (width, height) => ({
  type: 'RESIZE_WINDOW',
  width: width,
  height: height
})
