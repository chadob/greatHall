export const mouseMove = function(mousePos, windowWidth, windowHeight, yRotation) {
  var hWidth = .5 * windowWidth;
  var hHeight = .5 * windowHeight;
  return {x: -180 * (hWidth - mousePos.x) / hWidth, y: 90 * (hHeight - mousePos.y) / hHeight}
}
