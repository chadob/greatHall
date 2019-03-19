import {
  TURN_RIGHT,
  TURN_LEFT,
  MOUSE_VIEW,
  MOVE_FORWARD,
  MOVE_BACKWARD,
  RESIZE_WINDOW
} from "./types";
import {mouseMove} from './helperFunctions';
console.log(mouseMove)
export const turnRight = xRotation => ({
  type: TURN_RIGHT,
  newRotation: xRotation + 1.8
})
export const turnLeft = xRotation => ({
  type: TURN_LEFT,
  newRotation: xRotation - 1.8
})
export const mouseView = (mousePos, windowWidth, windowHeight, yRotation) => ({
  type: MOUSE_VIEW,
  mousePos: mousePos,
  xRotation: mouseMove(mousePos, windowWidth, windowHeight, yRotation).x,
  yRotation: mouseMove(mousePos, windowWidth, windowHeight, yRotation).y
})
export const moveForward = (direction, curPos) => ({
  type: MOVE_FORWARD,
  curPos: curPos + 10
})
export const moveBackward = (direction, curPos) => ({
  type: MOVE_BACKWARD,
  curPos: curPos - 10
})
export const resizeWindow = (width, height) => ({
  type: RESIZE_WINDOW,
  windowWidth: width,
  windowHeight: height
})
