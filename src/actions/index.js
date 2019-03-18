import {
  TURN_RIGHT,
  TURN_LEFT,
  ADJUST_VERT,
  MOVE_FORWARD,
  MOVE_BACKWARD,
  RESIZE_WINDOW
} from "./types";

export const turnRight = xRotation => ({
  type: TURN_RIGHT,
  newRotation: xRotation + 3.6
})
export const turnLeft = xRotation => ({
  type: TURN_LEFT,
  newRotation: xRotation - 3.6
})
export const adjustVert= mousePos, windowWidth, windowHeight => ({
  type: ADJUST_VERT,
  newRotation: 360 * mousePos / 100
})
export const moveForward = (direction, curPos) => ({
  type: MOVE_FORWARD,
  curPos: curPos + 5
})
export const moveBackward = (direction, curPos) => ({
  type: MOVE_BACKWARD,
  curPos: curPos - 5
})
export const resizeWindow = (width, height) => ({
  type: RESIZE_WINDOW,
  windowWidth: width,
  windowHeight: height
})
