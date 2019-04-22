// To figure out the angle of rotation I am basing it on mouse position with a maximum of being able to rotate
// the y axis by 180 deg and around the x axis by 90 deg.
// On the translate properties I am first applying a rotation around the x axis and then a rotation around the y axis
//we are basing the transformation off of the initial starting point of (0,0,perspective + curPos)
//translateX: 0 * Math.cos(xRadians) - (0 * Math.sin(yRadians) + 500 * Math.cos(yRadians)) * Math.sin(xRadians),
//translateY: 0 * Math.cos(yRadians) + 500 * Math.sin(yRadians),
//translateZ: 0 * -1 * Math.sin(xRadians) + Math.cos(xRadians) * (0 * Math.sin(yRadians) + 500 * Math.cos(yRadians))

export const rotateCube = function(mousePos, windowWidth, windowHeight, curPos, perspective) {
  var hWidth = .5 * windowWidth;
  var hHeight = .5 * windowHeight;
  var xRotation = -180 * (hWidth - mousePos.x) / hWidth;
  var yRotation = 90 * (hHeight - mousePos.y) / hHeight;
  return {
    xRotation: xRotation,
    yRotation: yRotation,
  }
}
export const translateCube = function(xRotation, yRotation, curPos, perspective) {
  var xRadians = xRotation * Math.PI / 180;
  var yRadians = yRotation * Math.PI / 180;
  return {
    translateX: -1 * ((curPos + perspective) * Math.cos(yRadians)) * Math.sin(xRadians),
    translateY: (curPos + perspective) * Math.sin(yRadians),
    translateZ: Math.cos(xRadians) * ((curPos + perspective) * Math.cos(yRadians))
  }
}
