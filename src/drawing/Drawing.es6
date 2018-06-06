import EJSC from '../EJSC.es6';
import Class from '../class/Class.es6';
import Util from '../util/Util.es6';
import DOM from '../util/DOM.es6';

/**
 * // TODO:
 *
 * @class EJSC.Drawing
 * @constructor
 * @param {Element|String} The container element or id
 * @param {Object} [options={}] The config options
 * @since 3.0.0
 */
export default EJSC.Drawing = class Drawing extends Class {
  /**
   * Defines the container element to render the drawing in.
   *
   * @example
   *
   *   // Create a chart sending in the id of the container
   *   var chart = new EJSC['.sparkline'].Chart('chart-container');
   *
   *   // Create a chart sending in a reference to the container's element
   *   var chart = new EJSC['.sparkline'].Chart(document.getElementById('chart-container'));
   *
   * @attribute {Element|String} container
   * @default null
   * @required
   * @since 3.0.0
   */

  // getter
  getContainer() {
    return this.container;
  }

  // setter
  setContainer(container) {
    // Save the new container
    this.container = DOM(container)[0];

    // Move the engine's element into the container
    if (Util.has(this, 'engine.element')) {
      this.container.appendChild(this.engine.element);
    }

    // Run any update methods if needed
    if (this.listening && this.engine) {
      this.resize();
    }
  }

  /**
   * Holds a pointer to the rendering engine.
   *
   * @property {EJSC.Engine} engine
   * @private
   * @since 3.0.0
   */

  /**
   * Holds the coordinates of the last point.
   *
   * @property {Array} lastPoint
   * @private
   * @since 3.0.0
   */

  /**
   * Holds the coordinates of the last control point.
   *
   * @property {Array} lastControlPoint
   * @private
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
    * @chainable
    * @since 3.0.0
    */
   arc(cx, cy, radius, startAngle, endAngle, counterClockwise) {
     // Append to current path
     this.engine.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);

     // Build needed variables
     let lastX = cx + (radius * Math.cos(endAngle));
     let lastY = cy + (radius * Math.sin(endAngle));

     // Update last points
     this.lastPoint = [lastX, lastY];
     this.lastControlPoint = [null, null];

     // Return the drawing for chainability
     return this;
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
    * @chainable
    * @since 3.0.0
    */
   arcTo(cpx, cpy, x, y, radius) {
     // Append to current path
     this.engine.arcTo(cpx, cpy, x, y, radius);

     // Grab last points
     let lastX = this.lastPoint[0];
     let lastY = this.lastPoint[1];

     // Find the angle of each section
     let firstAngle = (Math.PI / 2) - Math.atan2((cpy - lastY), (cpx - lastX));
     let secondAngle = (Math.PI / 2) - Math.atan2((cpy - y), (cpx - x));
     let centerAngle = (firstAngle + secondAngle) / 2;

     // Find the length of the triangle's hypotenuse
     let hypotenuse = radius / Math.sin(0 - Math.abs(centerAngle - firstAngle));
     let adjacent = Math.sqrt((hypotenuse * hypotenuse) - (radius * radius));

     // Get the cross coordinates for the circle's points
     lastX = cpx - (Math.sin(secondAngle) * adjacent);
     lastY = cpy - (Math.cos(secondAngle) * adjacent);

     // Update last point
     this.lastPoint = [lastX, lastY];
     this.lastControlPoint = [cpx, cpy];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Begins clippig the given area.
    *
    * @method beginClip
    * @param {Number} left The left coordinate of the clip area
    * @param {Number} top The top coordinate of the clip area
    * @param {Number} width The width of the clip area
    * @param {Number} height The height of the clip area
    * @chainable
    * @since 3.0.0
    */
   beginClip(left, top, width, height) {
     // Call the engine's beginClip method
     this.engine.beginClip(left, top, width, height);

     // Return the drawing for chainability
     return this;
   }

   /**
    * Begins a new path.
    *
    * @method beginPath
    * @chainable
    * @since 3.0.0
    */
   beginPath() {
     // Call engine's method
     this.engine.beginPath();

     // Clear old variables
     this.lastPoint = [null, null];
     this.lastControlPoint = [null, null];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a bezier curve.
    *
    * @method bezierCurveTo
    * @param {Number} cp1x The x coordinate of the first control point
    * @param {Number} cp1y The y coordinate of the first control point
    * @param {Number} cp2x The x coordinate of the second control point
    * param {Number} cp2y The y coordinate of the second control point
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since 3.0.0
    */
   bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
     // Append to current path
     this.engine.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

     // Update last points
     this.lastPoint = [x, y];
     this.lastControlPoint = [cp2x, cp2y];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a circle on the canvas.
    *
    * @method circle
    * @param {Number} x The x coordinate for the center of the circle
    * @param {Number} y The y coordinate for the center of the circle
    * @param {Number} radius The radius (in px) of the circle
    * @param {Object} styles The styles to apply to the circle
    * @chainable
    * @since 3.0.0
    */
   circle(cx, cy, radius, styles) {
     // Call the engine's circle method
     this.engine.circle(cx, cy, radius, Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Clears the canvas.
    *
    * @method clear
    * @chainable
    * @since 3.0.0
    */
   clear() {
     // Call engine's method
     this.engine.clear();

     // Return the drawing for chainability
     return this;
   }

   /**
    * Closes the current path.
    *
    * @method clear
    * @chainable
    * @since 3.0.0
    */
   closePath() {
     // Append to current path
     this.engine.closePath();

     // Return the drawing for chainability
     return this;
   }

   /**
    * Fills and strokes the given path on the canvas.
    *
    * @method draw
    * @param {Object} styles The styles to apply to the fill
    * @chainable
    * @since 3.0.0
    */
   draw(styles) {
     // Call the engine's draw method
     this.engine.draw(Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a ellipse.
    *
    * @method ellipse
    * @param {Number} x The x coordinate to start the ellipse at
    * @param {Number} y The y coordinate to start the ellipse at
    * @param {Number} rx The x radius of the ellipse
    * @param {Number} ry The y radius of the ellipse
    * @param {Object} styles The set of attributes to apply to the ellipse
    * @chainable
    * @since 3.0.0
    */
   ellipse(cx, cy, rx, ry, styles) {
     // Call the engine's ellipse method
     this.engine.ellipse(cx, cy, rx, ry, Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Ends the current clipping of the canvas' drawing area.
    *
    * @method endClip
    * @chainable
    * @since 3.0.0
    */
   endClip() {
     // Call the engine's endClip method
     this.engine.endClip();

     // Return the drawing for chainability
     return this;
   }

   /**
    * Fills the given path on the canvas.
    *
    * @method fill
    * @param {Object} styles The styles to apply to the fill
    * @chainable
    * @since 3.0.0
    */
   fill(styles) {
     // Call the engine's fill method
     this.engine.fill(Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a horizontal line to a new position.
    *
    * @method horizontalTo
    * @param {Number} x The x coordinate to draw to
    * @chainable
    * @since 3.0.0
    */
   horizontalTo(x) {
     // Append to current path
     this.engine.horizontalTo(x);

     // Update last points
     this.lastPoint[0] = x;
     this.lastControlPoint = [null, null];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a line between two points.
    *
    * @method line
    * @param {Number} x1 The x coordinate for the starting point
    * @param {Number} y1 The y coordinate for the starting point
    * @param {Number} x2 The x coordinate for the ending point
    * @param {Number} y2 The y coordinate for the ending point
    * @param {Object} attributes The set of attributes to apply to the line
    * @chainable
    * @since 3.0.0
    */
   line(x1, y1, x2, y2, styles) {
     // Call the engine's line method
     this.engine.line(x1, y1, x2, y2, Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a line to a new position.
    *
    * @method lineTo
    * @param {Number} x The x coordinate to draw to
    * @param {Number} y The y coordinate to draw to
    * @chainable
    * @since 3.0.0
    */
   lineTo(x, y) {
     // Append to current path
     this.engine.lineTo(x, y);

     // Update last points
     this.lastPoint = [x, y];
     this.lastControlPoint = [null, null];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Measures the width of the given text.
    *
    * @method measureText
    * @param {String} text The text
    * @param {Object} styles The styles to apply
    * @return {Number} The width of the text
    * @since 3.0.0
    */
   measureText(text, styles) {
     // Call the engine's measureText method
     return this.engine.measureText(text, Util.merge({}, EJSC.Engine.defaults, styles));
   }

   /**
    * Moves the pen to a new position.
    *
    * @method moveTo
    * @param {Number} x The x coordinate to move to
    * @param {Number} y The y coordinate to move to
    * @chainable
    * @since 3.0.0
    */
   moveTo(x, y) {
     // Append to current path
     this.engine.moveTo(x, y);

     // Update last points
     this.lastPoint = [x, y];
     this.lastControlPoint = [null, null];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a quadratic curve.
    *
    * @method quadraticCurveTo
    * @param {Number} cpx The x coordinate of the control point
    * @param {Number} cpy The y coordinate of the control point
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since 3.0.0
    */
   quadraticCurveTo(cpx, cpy, x, y) {
     // Append to current path
     this.engine.quadraticCurveTo(cpx, cpy, x, y);

     // Update last points
     this.lastPoint = [x, y];
     this.lastControlPoint = [cpx, cpy];

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a rectanle on the canvas.
    *
    * @method rect
    * @param {Number} x The x coordinate to start at
    * @param {Number} y The y coordinate to start at
    * @param {Number} width The width of the rectangle
    * @param {Number} height The height of the rectangle
    * @param {Object} styles The styles to apply to the rectangle
    * @chainable
    * @since 3.0.0
    */
   rect(x, y, width, height, styles) {
     // Call the engine's rect method
     this.engine.rect(x, y, width, height, Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Resizes the canvas.
    *
    * @method resize
    * @param {Integer} [width] The new width for the canvas
    * @param {Integer} [height] The new height for the canvas
    * @since 3.0.0
    */
   resize(width, height) {
     // Resize the drawing engine
     this.engine.resize(width || this.container.clientWidth, height || this.container.clientHeight);

     // Redraw the drawing
     this.draw();
   }

   /**
    * Draws a bezier curve stemming from a control point from a previous bezier curve.
    *
    * @method smoothBezierCurveTo
    * @param {Number} cpx The x coordinate of the next control point
    * @param {Number} cpy The y coordinate of the next control point
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since 3.0.0
    */
   smoothBezierCurveTo(cpx, cpy, x, y) {
     // Build needed variables
     let cp1x = (Util.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
     let cp1y = (Util.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

     // Call internal method
     if (Util.isNull(cp1x) || Util.isNull(cp1y)) {
       this.quadraticCurveTo(cpx, cpy, x, y);
     }
     else {
       this.bezierCurveTo(cp1x, cp1y, cpx, cpy, x, y);
     }

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a quadratic curve stemming from a control point from a previous quadratic curve.
    *
    * @method smoothQuadraticCurveTo
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since 3.0.0
    */
   smoothQuadraticCurveTo(x, y) {
     // Build needed variables
     let cpx = (Util.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
     let cpy = (Util.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

     // Call internal method
     if (Util.isNull(cpx) || Util.isNull(cpy)) {
       this.lineTo(x, y);
     }
     else {
       this.quadraticCurveTo(cpx, cpy, x, y);
     }

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a stroke along the current drawing path.
    *
    * @method stroke
    * @param {Object} attributes The set of attributes to apply to the stroke
    * @chainable
    * @since 3.0.0
    */
   stroke(styles) {
     // Call the engine's stroke method
     this.engine.stroke(Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws text on the canvas.
    *
    * @method text
    * @param {String} text The text to draw on the canvas
    * @param {Number} x The x coordinate to draw the text at
    * @param {Number} y The y coordinate to draw the text at
    * @param {Object} styles The styles to apply to the text
    * @chainable
    * @since 3.0.0
    */
   text(text, x, y, styles) {
     // Call the engine's text method
     this.engine.text(text, x, y, Util.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a vertical line to a new position.
    *
    * @method verticalTo
    * @param {Number} y The y coordinate to draw to
    * @chainable
    * @since 3.0.0
    */
   verticalTo(y) {
     // Append to current path
     this.engine.verticalTo(y);

     // Update last points
     this.lastPoint[1] = y;
     this.lastControlPoint = [null, null];

     // Return the drawing for chainability
     return this;
   }

  /**
   * Holds the list of actions for the current path.
   *
   * @property {Array} path
   * @private
   * @since 3.0.0
   */

  // constructor
  constructor(container, options = {}) {
    // super
    super(options);

    // Select the rendering engine
    this.selectEngine();

    // Set the container
    this.setContainer(container);

    // TOOD: remove this.resize() as it should be done in this.setContainer()
    // Resize the drawing
    this.resize();
  }

  // init
  init() {
    // Initialize some public properties
    this.container = null;

    // Initialize some private properties
    this.engine = null;
    this.lastPoint = [null, null];
    this.lastControlPoint = [null, null];
    this.path = [];
  }

  /**
   * Selects the engine to use for the drawing.
   *
   * @method selectEngine
   * @private
   * @since 3.0.0
   */
  selectEngine() {
    // Find and select the first supported engine
    if (Util.isNil(this.engine)) {
      this.engine = new (Util.find(EJSC.Drawing.engines, (engine) => {
        return engine.isSupported();
      }))();
    }

    // Link the engine back to the drawing
    if (this.engine) {
      this.engine.link(this);
    }
  }

  /**
   * Adds a new drawing engine to the list of available engines.
   *
   * @method choose
   * @static
   * @private
   * @param {String} name Then engine name
   * @param {EJSC.Engine} engine The drawing engine
   * @since 3.0.0
   */
  static register(name, engine) {
    Drawing.engines[name] = engine;
  }
};

/**
 * Holds the default styles for drawings.
 *
 * @property {Object} defaults
 * @static
 * @protected
 * @since 3.0.0
 */
EJSC.Drawing.defaults = {
  fillStyle: 'rgba(0, 0, 0)',
  font: '10px Verdana',
  lineCap: 'butt', // butt, round, square
  lineDash: [],
  lineJoin: 'miter', // miter, round, bevel
  strokeStyle: 'rgb(0, 0, 0)',
  strokeOpacity: 1,
  textAlign: 'left', // left, right, center[, start, end]
  textBaseline: 'middle', // top, middle, bottom[, alphabetic, hanging, ideographic]
  textRotation: 0
};

/**
 * Holds the list of available drawing engines.
 *
 * @property {Object} engines
 * @static
 * @private
 * @since 3.0.0
 */
EJSC.Drawing.engines = {};
