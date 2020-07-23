import EJSC from '../../../EJSC.es6';
import Inheritable from '../../../class/Inheritable.es6';

/**
 * Defines the abstract class for rendering engines for EJSCharts.
 *
 * @class EJSC.Engine
 * @private
 * @extends EJSC.Inheritable
 * @since @todo
 */
export default EJSC.Engine = class Engine extends Inheritable {
  /**
   * The owner drawing.
   *
   * @property {EJSC.Drawing} drawing
   * @private
   * @default null
   * @since @todo
   */

  /**
   * Holds a pointer to the engine's dom element.
   *
   * @property {Element} element
   * @private
   * @default null
   * @since @todo
   */

  /**
   * Draws an arc at a point.
   *
   * @method arc
   * @param {Number} cx The x coordinate of the center
   * @param {Number} cy The y coordinate of the center
   * @param {Number} radius The radius of the arc
   * @param {Number} startAngle The start angle (in radians)
   * @param {Number} endAngle The end angle (in radians)
   * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
   * @since @todo
   */
  arc(/* cx, cy, radius, startAngle, endAngle, counterClockwise */) {
    // Placeholder
  }

  /**
   * Draws an arc stemming using a control point to an end point.
   *
   * @method arcTo
   * @param {Number} cpx The x coordinate of the control point
   * @param {Number} cpy The y coordinate of the control point
   * @param {Number} x The x coordinate of the end point
   * @param {Number} y The y coordinate of the end point
   * @param {Number} radius The radius of the arc
   * @since @todo
   */
  arcTo(/* cpx, cpy, x, y, radius */) {
    // Placeholder
  }

  /**
   * Begins clippig the given area.
   *
   * @method beginClip
   * @param {Number} left The left coordinate of the clip area
   * @param {Number} top The top coordinate of the clip area
   * @param {Number} width The width of the clip area
   * @param {Number} height The height of the clip area
   * @since @todo
   */
  beginClip(/* left, top, width, height */) {
    // Placeholder
  }

  /**
   * Begins a new path.
   *
   * @method beginPath
   * @since @todo
   */
  beginPath() {
    // Placeholder
  }

  /**
   * Draws a bezier curve.
   *
   * @method bezierCurveTo
   * @param {Number} cp1x The x coordinate of the first control point
   * @param {Number} cp1y The y coordinate of the first control point
   * @param {Number} cp2x The x coordinate of the second control point
   * @param {Number} cp2y The y coordinate of the second control point
   * @param {Number} x The end x coordinate of the curve
   * @param {Number} y The end y coordinate of the curve
   * @since @todo
   */
  bezierCurveTo(/* cp1x, cp1y, cp2x, cp2y, x, y */) {
    // Placeholder
  }

  /**
   * Draws a circle on the canvas.
   *
   * @method circle
   * @param {Number} cx The x coordinate for the center of the circle
   * @param {Number} cy The y coordinate for the center of the circle
   * @param {Number} radius The radius (in px) of the circle
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  circle(/* cx, cy, radius, styles */) {
    // Placeholder
  }

  /**
   * Clears the canvas.
   *
   * @method clear
   * @since @todo
   */
  clear() {
    // Placeholder
  }

  /**
   * Closes the current path.
   *
   * @method clear
   * @since @todo
   */
  closePath() {
    // Placeholder
  }

  /**
   * Fills and strokes the given path on the canvas.
   *
   * @method draw
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  draw(/* styles */) {
    // Placeholder
  }

  /**
   * Draws a ellipse.
   *
   * @method ellipse
   * @param {Number} x The x coordinate to start the ellipse at
   * @param {Number} y The y coordinate to start the ellipse at
   * @param {Number} rx The x radius of the ellipse
   * @param {Number} ry The y radius of the ellipse
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  ellipse(/* cx, cy, rx, ry, styles */) {
    // Placeholder
  }

  /**
   * Ends the current clipping of the canvas' drawing area.
   *
   * @method endClip
   * @since @todo
   */
  endClip() {
    // Placeholder
  }

  /**
   * Fills the given path on the canvas.
   *
   * @method fill
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  fill(/* styles */) {
    // Placeholder
  }

  /**
   * Draws a horizontal line to a new position.
   *
   * @method horizontalTo
   * @param {Number} x The x coordinate to draw to
   * @since @todo
   */
  horizontalTo(/* x */) {
    // Placeholder
  }

  /**
   * Draws a line between two points.
   *
   * @method line
   * @param {Number} x1 The x coordinate for the starting point
   * @param {Number} y1 The y coordinate for the starting point
   * @param {Number} x2 The x coordinate for the ending point
   * @param {Number} y2 The y coordinate for the ending point
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  line(/* x1, y1, x2, y2, styles */) {
    // Placeholder
  }

  /**
   * Draws a line to a new position.
   *
   * @method lineTo
   * @param {Number} x The x coordinate to draw to
   * @param {Number} y The y coordinate to draw to
   * @since @todo
   */
  lineTo(/* x, y */) {
    // Placeholder
  }

  /**
   * Measures the width of the given text.
   *
   * @method measureText
   * @param {String} text The text
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  measureText(/* text, styles */) {
    // Placeholder
  }

  /**
   * Moves the pen to a new position.
   *
   * @method moveTo
   * @param {Number} x The x coordinate to move to
   * @param {Number} y The y coordinate to move to
   * @since @todo
   */
  moveTo(/* x, y */) {
    // Placeholder
  }

  /**
   * Draws a quadratic curve.
   *
   * @method quadraticCurveTo
   * @param {Number} cpx The x coordinate of the control point
   * @param {Number} cpy The y coordinate of the control point
   * @param {Number} x The end x coordinate of the curve
   * @param {Number} y The end y coordinate of the curve
   * @since @todo
   */
  quadraticCurveTo(/* cpx, cpy, x, y */) {
    // Placeholder
  }

  /**
   * Draws a rectanle on the canvas.
   *
   * @method rect
   * @param {Number} x The x coordinate to start at
   * @param {Number} y The y coordinate to start at
   * @param {Number} width The width of the rectangle
   * @param {Number} height The height of the rectangle
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  rect(/* x, y, width, height, styles */) {
    // Placeholder
  }

  /**
   * Resizes the canvas.
   *
   * @method resize
   * @param {Integer} width The new width for the canvas
   * @param {Integer} height The new height for the canvas
   * @since @todo
   */
  resize(/* width, height */) {
    // Placeholder
  }

  /**
   * Draws a stroke along the current drawing path.
   *
   * @method stroke
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  stroke(/* styles */) {
    // Placeholder
  }

  /**
   * Draws text on the canvas.
   *
   * @method text
   * @param {String} text The text to draw on the canvas
   * @param {Number} x The x coordinate to draw the text at
   * @param {Number} y The y coordinate to draw the text at
   * @param {Object} styles The styles to apply
   * @since @todo
   */
  text(/* text, x, y, styles */) {
    // Placeholder
  }

  /**
   * Draws a vertical line to a new position.
   *
   * @method verticalTo
   * @param {Number} y The y coordinate to draw to
   * @since @todo
   */
  verticalTo(/* y */) {
    // Placeholder
  }

  // init
  init() {
    // super
    super.init();

    // Initialize the private properties
    this.drawing = null;
    this.element = null;
  }

  /**
   * Draws the given path.
   *
   * @method drawPath
   * @private
   * @param {Array} path The path to draw
   * @since @todo
   */
  drawPath(/* path */) {
    // Placeholder
  }

  // TODO:
  link(drawing) {
    // Link back to the drawing
    this.drawing = drawing;
  }

  /**
   * Applies the given styles to the drawing context.
   *
   * @method stylize
   * @private
   * @param {Object} styles The styles to apply
   * @return {Object}
   * @since @todo
   */
  stylize(/* styles */) {
    // Placeholder
  }
};
