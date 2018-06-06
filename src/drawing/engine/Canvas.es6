import EJSC from '../../EJSC.es6';
import Util from '../../util/Util.es6';
import Drawing from '../Drawing.es6';
import Engine from './Engine.es6';

/**
 * Defines the CANVAS rendering engine for EJSCharts.
 *
 * @class EJSC.Canvas
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
export default EJSC.Canvas = class Canvas extends Engine {
  /**
   * Holds a pointer to the drawing context for the canvas.
   *
   * @property {CanvasRenderingContext2D} ctx
   * @private
   * @default null
   * @since 3.0.0
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
   * @since 3.0.0
   */
  arc(cx, cy, radius, startAngle, endAngle, counterClockwise) {
    // Call the canvas' arc method
    this.ctx.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);
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
   * @since 3.0.0
   */
  arcTo(cpx, cpy, x, y, radius) {
    // Call the canvas' arcTo method
    this.ctx.arcTo(cpx, cpy, x, y, radius);
  }

  /**
   * Begins clippig the given area.
   *
   * @method beginClip
   * @param {Number} left The left coordinate of the clip area
   * @param {Number} top The top coordinate of the clip area
   * @param {Number} width The width of the clip area
   * @param {Number} height The height of the clip area
   * @since 3.0.0
   */
  beginClip(left, top, width, height) {
    // Set the new clip area
    this.ctx.save();
    this.ctx.rect(left, top, width, height);
    this.ctx.clip();
  }

  /**
   * Begins a new path.
   *
   * @method beginPath
   * @since 3.0.0
   */
  beginPath() {
    // Call the canvas' clearPath method
    this.ctx.beginPath();
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
   * @since 3.0.0
   */
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    // Call the canvas' bezierCurveTo method
    this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  /**
   * Draws a circle on the canvas.
   *
   * @method circle
   * @param {Number} x The x coordinate for the center of the circle
   * @param {Number} y The y coordinate for the center of the circle
   * @param {Number} radius The radius (in px) of the circle
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  circle(x, y, radius, styles) {
    // Apply the given styles
    this.stylize(styles);

    // Draw the circle
    this.ctx.beginPath();
    this.ctx.arc(x + 0.5, y + 0.5, radius, 0, 2 * Math.PI, false);

    // Fill the path
    this.ctx.fill();

    // Stroke the path if needed
    if (styles.strokeStyle !== 'none') {
      this.ctx.stroke();
    }

    // Reset the styles
    this.unstylize();
  }

  /**
   * Clears the canvas.
   *
   * @method clear
   * @since 3.0.0
   */
  clear() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.element.offsetWidth, this.element.offsetWidth);
  }

  /**
   * Closes the current path.
   *
   * @method clear
   * @since 3.0.0
   */
  closePath() {
    // Call the canvas' closePath method
    this.ctx.closePath();
  }

  /**
   * Fills and strokes the given path on the canvas.
   *
   * @method draw
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  draw(styles) {
    // Apply the given styles
    this.stylize(styles);

    // Fill the path
    this.ctx.fill();

    // Stroke the path if needed
    if (styles.strokeStyle !== 'none') {
      this.ctx.stroke();
    }

    // Reset the styles
    this.unstylize();
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
   * @since 3.0.0
   */
  ellipse(cx, cy, rx, ry, styles) {
    // Apply the given styles
    this.stylize(styles);

    // Update the y radius to match SVG/VML
    let yr = ry * (4 / 3);

    // Draw the ellipse
    this.ctx.beginPath();
    this.ctx.moveTo(cx - rx, cy);
    this.ctx.bezierCurveTo(cx - rx, cy - yr, cx + rx, cy - yr, cx + rx, cy);
    this.ctx.bezierCurveTo(cx + rx, cy + yr, cx - rx, cy + yr, cx - rx, cy);
    this.ctx.closePath();

    // Fill the path
    this.ctx.fill();

    // Stroke the path if needed
    if (styles.strokeStyle !== 'none') {
      this.ctx.stroke();
    }

    // Reset the styles
    this.unstylize();
  }

  /**
   * Ends the current clipping of the canvas' drawing area.
   *
   * @method endClip
   * @since 3.0.0
   */
  endClip() {
    // Clear the current clip area
    this.ctx.restore();
  }

  /**
   * Fills the given path on the canvas.
   *
   * @method fill
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  fill(styles) {
    // Apply the given styles
    this.stylize(styles);

    // Fill in the path
    this.ctx.fill();

    // Reset the styles
    this.unstylize();
  }

  /**
   * Draws a horizontal line to a new position.
   *
   * @method horizontalTo
   * @param {Number} x The x coordinate to draw to
   * @since 3.0.0
   */
  horizontalTo(x) {
    // Declare local variables
    let y;

    // Define needed points
    y = this.drawing.lastPoint[1];

    // Call the internal lineTo method
    this.lineTo(x, y);
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
   * @since 3.0.0
   */
  line(x1, y1, x2, y2, styles) {
    // Apply the given styles
    this.stylize(styles);

    // Draw the line
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);

    // Stroke the path if needed
    if (styles.strokeStyle !== 'none') {
      this.ctx.stroke();
    }

    // Reset the styles
    this.unstylize();
  }

  /**
   * Draws a line to a new position.
   *
   * @method lineTo
   * @param {Number} x The x coordinate to draw to
   * @param {Number} y The y coordinate to draw to
   * @since 3.0.0
   */
  lineTo(x, y) {
    // Call the canvas' lineTo method
    this.ctx.lineTo(x, y);
  }

  /**
   * Measures the width of the given text.
   *
   * @method measureText
   * @param {String} text The text
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  measureText(text, styles) {
    // Apply the given styles
    this.stylize(styles);

    // Calculate the measurement
    let measurement = this.ctx.measureText(text);

    // Reset the styles
    this.unstylize();

    // Return the measurement
    return measurement;
  }

  /**
   * Moves the pen to a new position.
   *
   * @method moveTo
   * @param {Number} x The x coordinate to move to
   * @param {Number} y The y coordinate to move to
   * @since 3.0.0
   */
  moveTo(x, y) {
    // Call the canvas' moveTo method
    this.ctx.moveTo(x, y);
  }

  /**
   * Draws a quadratic curve.
   *
   * @method quadraticCurveTo
   * @param {Number} cpx The x coordinate of the control point
   * @param {Number} cpy The y coordinate of the control point
   * @param {Number} x The end x coordinate of the curve
   * @param {Number} y The end y coordinate of the curve
   * @since 3.0.0
   */
  quadraticCurveTo(cpx, cpy, x, y) {
    // Call the canvas' bezierCurveTo method
    this.ctx.quadraticCurveTo(cpx, cpy, x, y);
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
   * @since 3.0.0
   */
  rect(x, y, width, height, styles) {
    // Apply the given styles
    this.stylize(styles);

    // Build the rectangle
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);

    // Fill the path
    this.ctx.fill();

    // Stroke the path if needed
    if (styles.strokeStyle !== 'none') {
      this.ctx.stroke();
    }

    // Reset the styles
    this.unstylize();
  }

  /**
   * Resizes the canvas.
   *
   * @method resize
   * @param {Integer} width The new width for the canvas
   * @param {Integer} height The new height for the canvas
   * @since 3.0.0
   */
  resize(width, height) {
    // Resize the canvas
    this.element.setAttribute('width', width);
    this.element.setAttribute('height', height);
  }

  /**
   * Draws a stroke along the current drawing path.
   *
   * @method stroke
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  stroke(styles) {
    // Apply the given styles
    this.stylize(styles);

    // Stroke the path if needed
    if (styles.strokeStyle !== 'none') {
      this.ctx.stroke();
    }

    // Reset the styles
    this.unstylize();
  }

  /**
   * Draws text on the canvas.
   *
   * @method text
   * @param {String} text The text to draw on the canvas
   * @param {Number} x The x coordinate to draw the text at
   * @param {Number} y The y coordinate to draw the text at
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  text(text, x, y, styles) {
    // Apply the given styles
    this.stylize(styles);

    // Draw the text
    if (styles.textRotation) {
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(styles.textRotation * (Math.PI / 180));
      this.ctx.fillText(text, 0, 0);
      this.ctx.restore();
    }
    else {
      this.ctx.fillText(text, x, y);
    }
  }

  /**
   * Draws a vertical line to a new position.
   *
   * @method verticalTo
   * @param {Number} y The y coordinate to draw to
   * @since 3.0.0
   */
  verticalTo(y) {
    // Call the internal lineTo method
    this.lineTo(this.drawing.lastPoint[0], y);
  }

  // constructor
  constructor() {
    // super
    super();

    // Create the CANVAS element
    this.element = document.createElement('CANVAS');

    // Grab the 2D drawing context
    this.ctx = this.element.getContext('2d');
  }

  // init
  init() {
    // super
    super.init();

    // Initialize some private properties
    this.ctx = null;
  }

  /**
   * Draws the given path.
   *
   * @method drawPath
   * @private
   * @param {Array} path The path to draw
   * @since 3.0.0
   */
  drawPath(path) {
    // Run path methods
    for (let i = 0; i < path.length; i++) {
      this[path[i][0]].apply(this, path[i][1]);
    }
  }

  /**
   * Applies the given styles to the drawing context.
   *
   * @method stylize
   * @private
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  stylize(styles) {
    // Apply the default and user styles to the context
    Util.merge(this.ctx, Drawing.defaults, styles);

    // Set the line dash
    this.ctx.setLineDash((styles || {}).lineDash || []);
  }

  /**
   * Applies the default styles to the drawing context.
   *
   * @method unstylize
   * @private
   * @since 3.0.0
   */
  unstylize() {
    // Apply the default styles to the context
    Util.merge(this.ctx, Drawing.defaults);

    // Clear the line dash
    this.ctx.setLineDash([]);
  }
};

/**
 * Determines if the browser supports CANVAS.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports CANVAS
 * @since 3.0.0
 */
EJSC.Canvas.isSupported = () => {
  // Create a CANVAS element
  let canvas = document.createElement('canvas');

  // Return if the element supports Canvas
  return canvas.getContext && canvas.getContext('2d');
};

// Register the engine
Drawing.register('Canvas', EJSC.Canvas);
