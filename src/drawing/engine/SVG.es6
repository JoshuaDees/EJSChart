import EJSC from '../../EJSC.es6';
import Util from '../../util/Util.es6';
import Drawing from '../Drawing.es6';
import Engine from './Engine.es6';

/**
 * Defines the SVG rendering engine for EJSCharts.
 *
 * @class EJSC.SVG
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
export default EJSC.SVG = class SVG extends Engine {
  /**
   * Holds a pointer to the engine's background dom element.
   *
   * @property {DOM.Element} background.
   * @private
   * @default null
   * @since 3.0.0
   */

  /**
   * Holds a current clip id.
   *
   * @property {String} clipId
   * @private
   * @default null
   * @since 3.0.0
   */

  /**
   * Holds the current clip index.
   *
   * @property {Integer} clipIndex
   * @private
   * @default null
   * @since 3.0.0
   */

  /**
   * Holds a pointer to the engine's definitions dom element.
   *
   * @property {DOM.Element} definitions
   * @private
   * @default null
   * @since 3.0.0
   */

  /**
   * Holds the current drawing path.
   *
   * @property {Array} path
   * @private
   * @default []
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
    // Define needed points
    let x1 = cx + (radius * Math.cos(startAngle));
    let y1 = cy + (radius * Math.sin(startAngle));
    let x2 = cx + (radius * Math.cos(endAngle));
    let y2 = cy + (radius * Math.sin(endAngle));

    // Determine the direction from the angles
    let direction = (startAngle < endAngle ? 0 : 1);

    // Define the arc flags
    let largeArc = (counterClockwise ? 1 - direction : direction);
    let sweep = (counterClockwise ? 0 : 1);

    // Move to starting point
    this.path.push((Util.isNull(this.drawing.lastPoint[0]) ? 'M' : 'L') + ' ' + x1 + ',' + y1);

    // Append to path object
    this.path.push('A ' + radius + ',' + radius + ' ' + 0 + ' ' + largeArc + ' ' + sweep + ' ' + x2 + ',' + y2);
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
    // Grab last points
    let x0 = this.drawing.lastPoint[0];
    let y0 = this.drawing.lastPoint[1];

    // Find the angle of each section
    let firstAngle = (Math.PI / 2) - Math.atan2((cpy - y0), (cpx - x0));
    let secondAngle = (Math.PI / 2) - Math.atan2((cpy - y), (cpx - x));
    let centerAngle = (firstAngle + secondAngle) / 2;

    // Find the length of the triangle's hypotenuse
    let hypotenuse = radius / Math.sin(-Math.abs(centerAngle - firstAngle));
    let adjacent = Math.sqrt((hypotenuse * hypotenuse) - (radius * radius));

    // Get the center coordinates for the circle
    let cx = cpx + (Math.sin(centerAngle) * hypotenuse);
    let cy = cpy + (Math.cos(centerAngle) * hypotenuse);

    // Get the cross coordinates for the circle's points
    let cx1 = cpx - (Math.sin(firstAngle) * adjacent);
    let cy1 = cpy - (Math.cos(firstAngle) * adjacent);
    let cx2 = cpx - (Math.sin(secondAngle) * adjacent);
    let cy2 = cpy - (Math.cos(secondAngle) * adjacent);

    // Build the new angles
    let startAngle = Math.atan2((cy1 - cy), (cx1 - cx));
    let endAngle = Math.atan2((cy2 - cy), (cx2 - cx));

    // Draw the connecting line
    this[(Util.isNull(this.drawing.lastPoint[0]) ? 'moveTo' : 'lineTo')](cx1, cy1);

    // Draw the arc
    this.arc(cx, cy, radius, startAngle, endAngle, firstAngle > secondAngle);
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
  beginClip(x, y, width, height) {
    // Build the clip id
    let clipId = 'clip-' + (this.clipIndex++);

    // Create the clip definition
    let clipPath = this.definitions.appendChild(this.createElement('clipPath', {
      id: clipId
    }));

    // Append the clip area
    clipPath.appendChild(this.createElement('rect', {
      x: x,
      y: y,
      width: width,
      height: height
    }));

    // Store the clip id
    this.clipId = clipId;
  }

  /**
   * Begins a new path.
   *
   * @method beginPath
   * @since 3.0.0
   */
  beginPath() {
    // Reset the current path
    this.path = [];
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
    // Append to path object
    this.path.push('C ' + cp1x + ',' + cp1y + ' ' + cp2x + ',' + cp2y + ' ' + x + ',' + y);
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
  circle(cx, cy, radius, styles) {
    // Create the circle element
    this.element.appendChild(this.createElement('circle', Util.merge(this.stylize(styles), {
      cx: cx,
      cy: cy,
      r: radius
    })));
  }

  /**
   * Clears the canvas.
   *
   * @method clear
   * @since 3.0.0
   */
  clear() {
    // Clear out all of the elements (except for the definitions and background)
    while (this.element.childNodes.length > 2) {
      this.element.removeChild(this.element.lastChild);
    }

    // Clear out all of the definitions
    while (this.definitions.childNodes.length > 0) {
      this.definitions.removeChild(this.definitions.lastChild);
    }

    // Clear out the clip variables
    this.clipId = null;
    this.clipIndex = 0;
  }

  /**
   * Closes the current path.
   *
   * @method clear
   * @since 3.0.0
   */
  closePath() {
    // Append to path object
    this.path.push('Z');
  }

  /**
   * Fills and strokes the given path on the canvas.
   *
   * @method draw
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  draw(styles) {
    this.drawPath(this.stylize(styles));
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
    // Create the ellipse element
    this.element.appendChild(this.createElement('ellipse', Util.merge(this.stylize(styles), {
      cx: cx,
      cy: cy,
      rx: rx,
      ry: ry
    })));
  }

  /**
   * Ends the current clipping of the canvas' drawing area.
   *
   * @method endClip
   * @since 3.0.0
   */
  endClip() {
    // Clear the clip id
    this.clipId = null;
  }

  /**
   * Fills the given path on the canvas.
   *
   * @method fill
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  fill(styles) {
    this.drawPath(Util.merge(this.stylize(styles), {
      strokeStyle: 'transparent'
    }));
  }

  /**
   * Draws a horizontal line to a new position.
   *
   * @method horizontalTo
   * @param {Number} x The x coordinate to draw to
   * @since 3.0.0
   */
  horizontalTo(x) {
    // Append to path object
    this.path.push('H ' + x);
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
    // Create the line element
    this.element.appendChild(this.createElement('line', Util.merge(this.stylize(styles), {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2
    })));
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
    // Append to path object
    this.path.push('L ' + x + ',' + y);
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
    // TODO:
    return [text, styles];
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
    // Append to path object
    this.path.push('M ' + x + ',' + y);
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
    // Append to path object
    this.path.push('Q ' + cpx + ',' + cpy + ' ' + x + ',' + y);
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
    // Create the rect element
    this.element.appendChild(this.createElement('rect', Util.merge(this.stylize(styles), {
      x: x,
      y: y,
      width: width,
      height: height
    })));
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
    // Set the width and height attributes of the main element
    this.element.setAttribute('width', width);
    this.element.setAttribute('height', height);

    // Set the viewbox attribute of the main element
    this.element.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

    // Set the width and height attributes of the background element
    this.background.setAttribute('width', width);
    this.background.setAttribute('height', height);
  }

  /**
   * Draws a stroke along the current drawing path.
   *
   * @method stroke
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  stroke(styles) {
    // Stroke the path
    this.drawPath(Util.merge(this.stylize(styles), {
      fillStyle: 'transparent'
    }));
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
    // Build the correct styles object
    styles = Util.merge({}, this.stylize(styles), {
      strokeStyle: 'none',
      x: x,
      y: y
    });

    // Create the text element
    let el = this.element.appendChild(this.createElement('text', styles));
    el.setAttribute('transform', 'rotate(' + styles.textRotation + ' ' + x + ' ' + y + ')');
    el.appendChild(document.createTextNode(text));
  }

  /**
   * Draws a vertical line to a new position.
   *
   * @method verticalTo
   * @param {Number} y The y coordinate to draw to
   * @since 3.0.0
   */
  verticalTo(y) {
    // Append to path object
    this.path.push('V ' + y);
  }

  // constructor
  constructor() {
    // super
    super();

    // Create a document fragment to temporarily hold the DOM Elements
    let frag = document.createDocumentFragment();

    // Create the main element
    this.element = frag.appendChild(this.createElement('svg', {
      'xmlns': EJSC.SVG.xmlns,
      'version': '1.1'
    }));
    this.element.setAttributeNS(EJSC.SVG.xmlns, 'xmlns:xlink', EJSC.SVG.xlink);

    // Create the definitions element
    this.definitions = this.element.appendChild(this.createElement('defs'));

    // Create the background element
    this.background = this.element.appendChild(this.createElement('rect', {
      x: 0,
      y: 0,
      fill: 'transparent'
    }));

    // Create a global stylesheet (only once) to restrict user selection
    EJSC.SVG.buildStylesheet();
  }

  // init
  init() {
    // Initialize some private properties
    this.background = null;
    this.clipId = null;
    this.clipIndex = 0;
    this.definitions = null;
    this.path = [];
  }

  /**
   * Creates an SVG elemen.
   *
   * @method createElement
   * @param {String} tagName The type of element to create
   * @param {Object} attributes The attributes to add to the element
   * @return {DOM.Element}
   * @since 3.0.0
   */
  createElement(tagName, attributes) {
    // Create an element using the given tagName
    let el = document.createElementNS(EJSC.SVG.svgns, tagName);

    // Set the given attributes to the element
    for (let i in attributes) {
      // If this is direct css
      if (i === 'css') {
        el.style.cssText = attributes[i];
      }

      // If this is the font attribute, set it using CSS
      else if (i === 'font') {
        el.style.cssText = 'font: ' + attributes.font + ' !important;';
      }

      // If this is the text-align attribute
      else if (i === 'textAlign') {
        el.setAttribute('text-anchor', ({
          'left': 'start',
          'center': 'middle',
          'right': 'end'
        })[attributes[i]]);
      }

      // If this is the rotate attribute, don't set it
      else if (i === 'textRotation') {
        // Do nothing
      }

      // If this is the text-baseline attribute, set it using custom attributes
      else if (i === 'textBaseline') {
        el.style.dominantBaseline = ({
          'top': 'hanging',
          'middle': 'middle',
          'bottom': 'baseline'
        })[attributes[i]];
      }

      // If this is the same as the default attribute
      else if (attributes[i] === Drawing.defaults[i] && i !== 'strokeStyle' && i !== 'fillStyle') {
        // Do nothing
      }

      // Set the attribute to the element
      else {
        el.setAttribute(EJSC.SVG.styles[i] || i, attributes[i]);
      }
    }

    if (this.clipId !== null) {
      el.setAttribute('clip-path', 'url(#' + this.clipId + ')');
    }

    // Return the element
    return el;
  }

  /**
   * Draws the given path.
   *
   * @method drawPath
   * @private
   * @param {Object} styles The styles to apply
   * @since 3.0.0
   */
  drawPath(styles) {
    // Create the path element
    this.element.appendChild(this.createElement('path', Util.merge(this.stylize(styles), {
      d: this.path.join(' ')
    })));
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
  stylize(styles) {
    // Apply the default and user styles to the context
    return Util.merge({}, Drawing.defaults, styles);
  }
};

// TODO:
EJSC.SVG.css = 'svg { overflow: hidden; } svg, svg * { user-select: none; -moz-user-select: none; -webkit-user-select: none; }';

/**
 * Defines the style conversion names.
 *
 * @property {Object} styles
 * @private
 * @static
 * @since 3.0.0
 */
EJSC.SVG.styles = {
  fillStyle: 'fill',
  font: 'font',
  lineCap: 'stroke-linecap',
  lineDash: 'stroke-dasharray',
  lineJoin: 'stroke-linejoin',
  lineWidth: 'stroke-width',
  strokeStyle: 'stroke',
  textAlign: 'text-align',
  textBaseline: 'text-baseline',
  textRotation: 'text-rotation'
};

/**
 * Defines the stylesheet that holds the global SVG styles.
 *
 * @property {StyleSheet} stylesheet
 * @private
 * @static
 * @default null
 * @since 3.0.0
 */
EJSC.SVG.stylesheet = null;

/**
 * Defines the SVG namespace.
 *
 * @property {String} svgns
 * @private
 * @static
 * @default 'http://www.w3.org/2000/svg'
 * @since 3.0.0
 */
EJSC.SVG.svgns = 'http://www.w3.org/2000/svg';

/**
 * Defines the XML namespace.
 *
 * @property {String} xmlns
 * @private
 * @static
 * @default 'http://www.w3.org/2000/xmlns/'
 * @since 3.0.0
 */
EJSC.SVG.xmlns = 'http://www.w3.org/2000/xmlns/';

/**
 * Defines the Xlink namespace.
 *
 * @property {String} xlink
 * @private
 * @static
 * @default 'http://www.w3.org/2000/xlink'
 * @since 3.0.0
 */
EJSC.SVG.xlink = 'http://www.w3.org/1999/xlink';

/**
 * Builds the default SVG stylesheet.
 *
 * @method buildStylesheet
 * @private
 * @static
 * @since 3.0.0
 */
EJSC.SVG.buildStylesheet = () => {
  // Only run once
  if (Util.isNull(EJSC.SVG.stylesheet)) {
    // Grab the page header
    let head = document.head || document.getElementsByTagName('head')[0];

    // Create the stylesheet
    let stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';

    // Set the CSS
    if (stylesheet.styleSheet) {
      stylesheet.styleSheet.cssText = EJSC.SVG.css;
    }
    else {
      stylesheet.appendChild(document.createTextNode(EJSC.SVG.css));
    }

    // Append the styleshet to the page header
    head.appendChild(stylesheet);

    // Save the stylesheet
    EJSC.SVG.stylesheet = stylesheet;
  }
};

/**
 * Determines if the browser supports SVG.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports SVG
 * @since 3.0.0
 */
EJSC.SVG.isSupported = () => document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');

// Register the engine
Drawing.register('SVG', EJSC.SVG);
