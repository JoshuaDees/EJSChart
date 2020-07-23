import $Element from '../util/Element.es6';
import $Object from '../util/Object.es6';
import EJSC from '../EJSC.es6';
import Inheritable from '../class/Inheritable.es6';

/**
 * Defines a drawing that uses an engine (Canvas, SVG, VML, etc.) to draw on the page.
 *
 * @example
 *
 *   // Create a chart sending in the id of the container
 *   let chart = new EJSC['.sparkline'].Chart('#chart-container');
 *
 * @class EJSC.Drawing
 * @extends EJSC.Inheritable
 * @constructor
 * @param {Element|String} The container element or id
 * @param {Object} [options={}] The config options
 * @since @todo
 */
export default EJSC.Drawing = class Drawing extends Inheritable {
  /**
   * Defines the container element to render the drawing in.
   *
   * @example
   *
   *   // Create a chart sending in the id of the container
   *   let chart = new EJSC['.sparkline'].Chart('#chart-container');
   *
   *   // Create a chart sending in a reference to the container's element
   *   let chart = new EJSC['.sparkline'].Chart(document.getElementById('chart-container'));
   *
   * @attribute {Element|String} container
   * @default null
   * @required
   * @since @todo
   */

  // getter
  getContainer() {
    return this.container;
  }

  // setter
  setContainer(container) {
    // Save the new container
    this.container = $Element.find(container)[0];

    // Move the engine's element into the container
    if ($Object.has(this, 'engine.element')) {
      this.container.appendChild(this.engine.element);
    }

    // Run any update methods if needed
    if (this.listening) {
      this.resize();
    }
  }

  /**
   * Holds a pointer to the rendering engine.
   *
   * @property {EJSC.Engine} engine
   * @private
   * @since @todo
   */

  /**
   * Holds the coordinates of the last point.
   *
   * @property {Array} lastPoint
   * @private
   * @since @todo
   */

  /**
   * Holds the coordinates of the last control point.
   *
   * @property {Array} lastControlPoint
   * @private
   * @since @todo
   */

   /**
    * Draws an arc at a point.
    *
    * @example
    *
    *   // TODO:
    *
    * @method arc
    * @param {Number} cx The x coordinate of the center
    * @param {Number} cy The y coordinate of the center
    * @param {Number} radius The radius of the arc
    * @param {Number} startAngle The start angle (in radians)
    * @param {Number} endAngle The end angle (in radians)
    * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method arcTo
    * @param {Number} cpx The x coordinate of the control point
    * @param {Number} cpy The y coordinate of the control point
    * @param {Number} x The x coordinate of the end point
    * @param {Number} y The y coordinate of the end point
    * @param {Number} radius The radius of the arc
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method beginClip
    * @param {Number} left The left coordinate of the clip area
    * @param {Number} top The top coordinate of the clip area
    * @param {Number} width The width of the clip area
    * @param {Number} height The height of the clip area
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method beginPath
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method bezierCurveTo
    * @param {Number} cp1x The x coordinate of the first control point
    * @param {Number} cp1y The y coordinate of the first control point
    * @param {Number} cp2x The x coordinate of the second control point
    * param {Number} cp2y The y coordinate of the second control point
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method circle
    * @param {Number} x The x coordinate for the center of the circle
    * @param {Number} y The y coordinate for the center of the circle
    * @param {Number} radius The radius (in px) of the circle
    * @param {Object} styles The styles to apply to the circle
    * @chainable
    * @since @todo
    */
   circle(cx, cy, radius, styles) {
     // Call the engine's circle method
     this.engine.circle(cx, cy, radius, $Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Clears the canvas.
    *
    * @example
    *
    *   // TODO:
    *
    * @method clear
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method clear
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method draw
    * @param {Object} styles The styles to apply to the fill
    * @chainable
    * @since @todo
    */
   draw(styles) {
     // Call the engine's draw method
     this.engine.draw($Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a ellipse.
    *
    * @example
    *
    *   // TODO:
    *
    * @method ellipse
    * @param {Number} x The x coordinate to start the ellipse at
    * @param {Number} y The y coordinate to start the ellipse at
    * @param {Number} rx The x radius of the ellipse
    * @param {Number} ry The y radius of the ellipse
    * @param {Object} styles The set of attributes to apply to the ellipse
    * @chainable
    * @since @todo
    */
   ellipse(cx, cy, rx, ry, styles) {
     // Call the engine's ellipse method
     this.engine.ellipse(cx, cy, rx, ry, $Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Ends the current clipping of the canvas' drawing area.
    *
    * @example
    *
    *   // TODO:
    *
    * @method endClip
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method fill
    * @param {Object} styles The styles to apply to the fill
    * @chainable
    * @since @todo
    */
   fill(styles) {
     // Call the engine's fill method
     this.engine.fill($Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a horizontal line to a new position.
    *
    * @example
    *
    *   // TODO:
    *
    * @method horizontalTo
    * @param {Number} x The x coordinate to draw to
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method line
    * @param {Number} x1 The x coordinate for the starting point
    * @param {Number} y1 The y coordinate for the starting point
    * @param {Number} x2 The x coordinate for the ending point
    * @param {Number} y2 The y coordinate for the ending point
    * @param {Object} attributes The set of attributes to apply to the line
    * @chainable
    * @since @todo
    */
   line(x1, y1, x2, y2, styles) {
     // Call the engine's line method
     this.engine.line(x1, y1, x2, y2, $Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a line to a new position.
    *
    * @example
    *
    *   // TODO:
    *
    * @method lineTo
    * @param {Number} x The x coordinate to draw to
    * @param {Number} y The y coordinate to draw to
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method measureText
    * @param {String} text The text
    * @param {Object} styles The styles to apply
    * @return {Number} The width of the text
    * @since @todo
    */
   measureText(text, styles) {
     // Call the engine's measureText method
     return this.engine.measureText(text, $Object.merge({}, EJSC.Engine.defaults, styles));
   }

   /**
    * Moves the pen to a new position.
    *
    * @example
    *
    *   // TODO:
    *
    * @method moveTo
    * @param {Number} x The x coordinate to move to
    * @param {Number} y The y coordinate to move to
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method quadraticCurveTo
    * @param {Number} cpx The x coordinate of the control point
    * @param {Number} cpy The y coordinate of the control point
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since @todo
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
    * @example
    *
    *   // TODO:
    *
    * @method rect
    * @param {Number} x The x coordinate to start at
    * @param {Number} y The y coordinate to start at
    * @param {Number} width The width of the rectangle
    * @param {Number} height The height of the rectangle
    * @param {Object} styles The styles to apply to the rectangle
    * @chainable
    * @since @todo
    */
   rect(x, y, width, height, styles) {
     // Call the engine's rect method
     this.engine.rect(x, y, width, height, $Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Resizes the canvas.
    *
    * @example
    *
    *   // TODO:
    *
    * @method resize
    * @param {Integer} [width] The new width for the canvas
    * @param {Integer} [height] The new height for the canvas
    * @since @todo
    */
   resize(width, height) {
     // If no engine, break out
     if (!this.engine) {
       return;
     }

     // Resize the drawing engine
     this.engine.resize(width || this.container.clientWidth, height || this.container.clientHeight);

     // Redraw the drawing
     this.draw();
   }

   /**
    * Draws a bezier curve stemming from a control point from a previous bezier curve.
    *
    * @example
    *
    *   // TODO:
    *
    * @method smoothBezierCurveTo
    * @param {Number} cpx The x coordinate of the next control point
    * @param {Number} cpy The y coordinate of the next control point
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since @todo
    */
   smoothBezierCurveTo(cpx, cpy, x, y) {
     // Build needed variables
     let cp1x = ($Object.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
     let cp1y = ($Object.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

     // Call internal method
     if ($Object.isNull(cp1x) || $Object.isNull(cp1y)) {
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
    * @example
    *
    *   // TODO:
    *
    * @method smoothQuadraticCurveTo
    * @param {Number} x The end x coordinate of the curve
    * @param {Number} y The end y coordinate of the curve
    * @chainable
    * @since @todo
    */
   smoothQuadraticCurveTo(x, y) {
     // Build needed variables
     let cpx = ($Object.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
     let cpy = ($Object.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

     // Call internal method
     if ($Object.isNull(cpx) || $Object.isNull(cpy)) {
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
    * @example
    *
    *   // TODO:
    *
    * @method stroke
    * @param {Object} attributes The set of attributes to apply to the stroke
    * @chainable
    * @since @todo
    */
   stroke(styles) {
     // Call the engine's stroke method
     this.engine.stroke($Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws text on the canvas.
    *
    * @example
    *
    *   // TODO:
    *
    * @method text
    * @param {String} text The text to draw on the canvas
    * @param {Number} x The x coordinate to draw the text at
    * @param {Number} y The y coordinate to draw the text at
    * @param {Object} styles The styles to apply to the text
    * @chainable
    * @since @todo
    */
   text(text, x, y, styles) {
     // Call the engine's text method
     this.engine.text(text, x, y, $Object.merge({}, EJSC.Engine.defaults, styles));

     // Return the drawing for chainability
     return this;
   }

   /**
    * Draws a vertical line to a new position.
    *
    * @example
    *
    *   // TODO:
    *
    * @method verticalTo
    * @param {Number} y The y coordinate to draw to
    * @chainable
    * @since @todo
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
   * @since @todo
   */

  // constructor
  constructor(container, options = {}) {
    // super
    super(options);

    // Select the rendering engine
    this.selectEngine();

    // Set the container
    this.setContainer(container);

    // Resize the drawing
    this.resize();
  }

  // init
  init() {
    // Initialize the public properties
    this.container = null;

    // Initialize the private properties
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
   * @since @todo
   */
  selectEngine() {
    // Find and select the first supported engine
    if ($Object.isNil(this.engine)) {
      this.engine = new (EJSC.Drawing.engines.find(engine => engine.isSupported()))();
    }

    // Link the engine back to the drawing
    $Object(this).invoke('engine.link', this);
  }

  /**
   * Adds a new drawing engine to the list of available engines.
   *
   * @method choose
   * @static
   * @private
   * @param {String} name Then engine name
   * @param {EJSC.Engine} engine The drawing engine
   * @since @todo
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
 * @since @todo
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
 * @since @todo
 */
EJSC.Drawing.engines = {};
