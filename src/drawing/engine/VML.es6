import EJSC from '../../EJSC.es6';
// import Util from '../../util/Util.es6';
// import Drawing from '../Drawing.es6';
import Engine from './Engine.es6';

/**
 * Defines the VML rendering engine for EJSCharts.
 *
 * @class EJSC.VML
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
export default EJSC.VML = class VML extends Engine {
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
  arc(/* cx, cy, r, startAngle, endAngle, counterClockwise */) {
    // TODO:
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
  arcTo(/* cpx, cpy, x, y, radius */) {
    // TODO:
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
  beginClip(/* x, y, width, height */) {
    // TODO:
  }

  /**
   * Begins a new path.
   *
   * @method beginPath
   * @since 3.0.0
   */
  beginPath() {
    // TODO:
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
  bezierCurveTo(/* cp1x, cp1y, cp2x, cp2y, x, y */) {
    // TODO:
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
  circle(/* cx, cy, radius, styles */) {
    // TODO:
  }

  /**
   * Clears the canvas.
   *
   * @method clear
   * @since 3.0.0
   */
  clear() {
    // TODO:
  }

  /**
   * Closes the current path.
   *
   * @method clear
   * @since 3.0.0
   */
  closePath() {
    // TODO:
  }

  /**
   * Fills and strokes the given path on the canvas.
   *
   * @method draw
   * @param {Array} path The coordinates of the path
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  draw(/* path, styles */) {
    // TODO:
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
  ellipse(/* cx, cy, rx, ry, styles */) {
    // TODO:
  }

  /**
   * Ends the current clipping of the canvas' drawing area.
   *
   * @method endClip
   * @since 3.0.0
   */
  endClip() {
    // TODO:
  }

  /**
   * Fills the given path on the canvas.
   *
   * @method fill
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  fill(/* styles */) {
    // TODO:
  }

  /**
   * Draws a horizontal line to a new position.
   *
   * @method horizontalTo
   * @param {Number} x The x coordinate to draw to
   * @since 3.0.0
   */
  horizontalTo(/* x */) {
    // TODO:
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
  line(/* x1, y1, x2, y2, styles */) {
    // TODO:
  }

  /**
   * Draws a line to a new position.
   *
   * @method lineTo
   * @param {Number} x The x coordinate to draw to
   * @param {Number} y The y coordinate to draw to
   * @since 3.0.0
   */
  lineTo(/* x, y */) {
    // TODO:
  }

  /**
   * Measures the width of the given text.
   *
   * @method measureText
   * @param {String} text The text
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  measureText(/* text, styles */) {
    // TODO:
  }

  /**
   * Moves the pen to a new position.
   *
   * @method moveTo
   * @param {Number} x The x coordinate to move to
   * @param {Number} y The y coordinate to move to
   * @since 3.0.0
   */
  moveTo(/* x, y */) {
    // TODO:
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
  quadraticCurveTo(/* cpx, cpy, x, y */) {
    // TODO:
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
  rect(/* x, y, width, height, styles */) {
    // TODO:
  }

  /**
   * Resizes the canvas.
   *
   * @method resize
   * @param {Integer} width The new width for the canvas
   * @param {Integer} height The new height for the canvas
   * @since 3.0.0
   */
  resize(/* width, height */) {
    // TODO:
  }

  /**
   * Draws a stroke along the current drawing path.
   *
   * @method stroke
   * @param {Array} path The path
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  stroke(/* styles */) {
    // TODO:
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
  text(/* text, x, y, styles */) {
    // TODO:
  }

  /**
   * Draws a vertical line to a new position.
   *
   * @method verticalTo
   * @param {Number} y The y coordinate to draw to
   * @since 3.0.0
   */
  verticalTo(/* y */) {
    // TODO:
  }

  // constructor
  constructor() {
    // super
    super();

    // TODO:
  }

  /**
   * Draws the given path.
   *
   * @method drawPath
   * @private
   * @param {Array} path The path to draw
   * @since 3.0.0
   */
  drawPath(/* path, styles */) {
    // TODO:
  }

  /**
   * Applies the given styles to the drawing context.
   *
   * @method stylize
   * @private
   * @param {Object} styles The styles to apply
   * @return {Object}
   * @since 3.0.0
   */
  stylize(/* styles */) {
    // TODO:
  }
};

/**
 * Determines if the browser supports VML.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports VML
 * @since 3.0.0
 */
EJSC.VML.isSupported = () => {
  // Define the support variable
  let supportsVML = false;

  // Build a container div and insert a shape into it
  let div = document.body.appendChild(document.createElement('div'));
  div.innerHTML = '<v:shape id="vml_flag1" adj="1" />';

  // Grab the shape and set it's behavior
  let shape = div.firstChild;
  shape.style.behavior = 'url(#default#VML)';

  // Determine if VML is supported
  supportsVML = (shape ? typeof shape.adj === 'object' : true);

  // Remove the un-needed node
  div.parentNode.removeChild(div);

  // Return if VML is supported
  return supportsVML;
};

// Register the engine
// EJSC.Drawing.register('VML', EJSC.VML);
