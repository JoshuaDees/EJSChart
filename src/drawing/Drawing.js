/**
 * Holds the common code for all rendering engine for EJSCharts.
 *
 * @class EJSC.Drawing
 * @extends EJSC.Class
 * @constructor
 * @private
 * @since 3.0.0
 */
EJSC.Drawing = EJSC.Class.extend({
    /**
     * Defines the container element to render the chart in.
     *
     * @example
     *
     *     // Create a chart sending in the id of the container
     *     var chart = new EJSC['.sparkline'].Chart('chart-container');
     *
     *     // Create a chart sending in a reference to the container's element
     *     var chart = new EJSC['.sparkline'].Chart(document.getElementById('chart-container'));
     *
     * @attribute {DOMElement|String} container
     * @default null
     * @required
     * @since 3.0.0
     */
    container: null,

    // Getter
    getContainer: function() {
        return this.container;
    },

    // Setter
    setContainer: function(container, apply) {
        // Save the new container
        this.container = (EJSC._.isString(container) ? document.getElementById(container) : container);

        // Move the engine's element into the container
        if (EJSC._.has(this, 'engine.element')) {
            this.container.appendChild(this.engine.element);
        }

        // Run any update methods if needed
        if (apply !== false) {
            this.resize();
        }
    },

    /**
     * Holds a pointer to the rendering engine.
     *
     * @property {EJSC.Engine} engine
     * @private
     * @since 3.0.0
     */
    engine: null,

    /**
     * Holds the coordinates of the last point.
     *
     * @property {Array} lastPoint
     * @private
     * @since 3.0.0
     */
    lastPoint: [null, null],

    /**
     * Holds the coordinates of the last control point.
     *
     * @property {Array} lastControlPoint
     * @private
     * @since 3.0.0
     */
    lastControlPoint: [null, null],

    /**
     * Holds the list of actions for the current path.
     *
     * @property {Array} path
     * @private
     * @since 3.0.0
     */
    path: [],

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
    arc: function(cx, cy, radius, startAngle, endAngle, counterClockwise) {
        // Append to current path
        this.engine.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);

        // Build needed variables
        var lastX = cx + (radius * Math.cos(endAngle));
        var lastY = cy + (radius * Math.sin(endAngle));

        // Update last points
        this.lastPoint = [lastX, lastY];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

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
    arcTo: function(cpx, cpy, x, y, radius) {
        // Append to current path
        this.engine.arcTo(cpx, cpy, x, y, radius);

        // Grab last points
        var lastX = this.lastPoint[0];
        var lastY = this.lastPoint[1];

        // Find the angle of each section
        var firstAngle = (Math.PI / 2) - Math.atan2((cpy - lastY), (cpx - lastX));
        var secondAngle = (Math.PI / 2) - Math.atan2((cpy - y), (cpx - x));
        var centerAngle = (firstAngle + secondAngle) / 2;

        // Find the length of the triangle's hypotenuse
        var hypotenuse = radius / Math.sin(0 - Math.abs(centerAngle - firstAngle));
        var adjacent = Math.sqrt((hypotenuse * hypotenuse) - (radius * radius));

        // Get the cross coordinates for the circle's points
        lastX = cpx - (Math.sin(secondAngle) * adjacent);
        lastY = cpy - (Math.cos(secondAngle) * adjacent);

        // Update last point
        this.lastPoint = [lastX, lastY];
        this.lastControlPoint = [cpx, cpy];

        // Return the drawing for chainability
        return this;
    },

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
    beginClip: function(left, top, width, height) {
        // Call the engine's beginClip method
        this.engine.beginClip(left, top, width, height);

        // Return the drawing for chainability
        return this;
    },

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @chainable
     * @since 3.0.0
     */
    beginPath: function() {
        // Call engine's method
        this.engine.beginPath();

        // Clear old variables
        this.lastPoint = [null, null];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

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
    bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y) {
        // Append to current path
        this.engine.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [cp2x, cp2y];

        // Return the drawing for chainability
        return this;
    },

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
    circle: function(cx, cy, radius, styles) {
        // Call the engine's circle method
        this.engine.circle(cx, cy, radius, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Clears the canvas.
     *
     * @method clear
     * @chainable
     * @since 3.0.0
     */
    clear: function() {
        // Call engine's method
        this.engine.clear();

        // Return the drawing for chainability
        return this;
    },

    /**
     * Closes the current path.
     *
     * @method clear
     * @chainable
     * @since 3.0.0
     */
    closePath: function() {
        // Append to current path
        this.engine.closePath();

        // Return the drawing for chainability
        return this;
    },

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply to the fill
     * @chainable
     * @since 3.0.0
     */
    draw: function(styles) {
        // Call the engine's draw method
        this.engine.draw(EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

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
    ellipse: function(cx, cy, rx, ry, styles) {
        // Call the engine's ellipse method
        this.engine.ellipse(cx, cy, rx, ry, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @chainable
     * @since 3.0.0
     */
    endClip: function() {
        // Call the engine's endClip method
        this.engine.endClip();

        // Return the drawing for chainability
        return this;
    },

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply to the fill
     * @chainable
     * @since 3.0.0
     */
    fill: function(styles) {
        // Call the engine's fill method
        this.engine.fill(EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @chainable
     * @since 3.0.0
     */
    horizontalTo: function(x) {
        // Append to current path
        this.engine.horizontalTo(x);

        // Update last points
        this.lastPoint[0] = x;
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

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
    line: function(x1, y1, x2, y2, styles) {
        // Call the engine's line method
        this.engine.line(x1, y1, x2, y2, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @chainable
     * @since 3.0.0
     */
    lineTo: function(x, y) {
        // Append to current path
        this.engine.lineTo(x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @return {Number} The width of the text
     * @since 3.0.0
     */
    measureText: function(text, styles) {
        // Call the engine's measureText method
        return this.engine.measureText(text, EJSC._.merge({}, EJSC.Engine.defaults, styles));
    },

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @chainable
     * @since 3.0.0
     */
    moveTo: function(x, y) {
        // Append to current path
        this.engine.moveTo(x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

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
    quadraticCurveTo: function(cpx, cpy, x, y) {
        // Append to current path
        this.engine.quadraticCurveTo(cpx, cpy, x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [cpx, cpy];

        // Return the drawing for chainability
        return this;
    },

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
    rect: function(x, y, width, height, styles) {
        // Call the engine's rect method
        this.engine.rect(x, y, width, height, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} [width] The new width for the canvas
     * @param {Integer} [height] The new height for the canvas
     * @since 3.0.0
     */
    resize: function(width, height) {
        // Resize the drawing engine
        this.engine.resize(width || this.container.clientWidth, height || this.container.clientHeight);

        // Redraw the drawing
        this.draw();
    },

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
    smoothBezierCurveTo: function(cpx, cpy, x, y) {
        // Build needed variables
        var cp1x = (EJSC._.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
        var cp1y = (EJSC._.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

        // Call internal method
        if (EJSC._.isNull(cp1x) || EJSC._.isNull(cp1y)) {
            this.quadraticCurveTo(cpx, cpy, x, y);
        }
        else {
            this.bezierCurveTo(cp1x, cp1y, cpx, cpy, x, y);
        }

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a quadratic curve stemming from a control point from a previous quadratic curve.
     *
     * @method smoothQuadraticCurveTo
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */
    smoothQuadraticCurveTo: function(x, y) {
        // Build needed variables
        var cpx = (EJSC._.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
        var cpy = (EJSC._.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

        // Call internal method
        if (EJSC._.isNull(cpx) || EJSC._.isNull(cpy)) {
            this.lineTo(x, y);
        }
        else {
            this.quadraticCurveTo(cpx, cpy, x, y);
        }

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} attributes The set of attributes to apply to the stroke
     * @chainable
     * @since 3.0.0
     */
    stroke: function(styles) {
        // Call the engine's stroke method
        this.engine.stroke(EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

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
    text: function(text, x, y, styles) {
        // Call the engine's text method
        this.engine.text(text, x, y, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @chainable
     * @since 3.0.0
     */
    verticalTo: function(y) {
        // Append to current path
        this.engine.verticalTo(y);

        // Update last points
        this.lastPoint[1] = y;
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Consstructs the class.
     *
     * @method __construct
     * @private
     * @param {DOMElement|String} The container element or id
     * @param {Object} options The config options
     * @since 3.0.0
     */
    __construct: function(container, options) {
        // Update the options object with the required properties
        options = EJSC._.merge(options, {
            container: container
        });

        // Merge in the options
        this.copyOptions(options);

        // Select the rendering engine
        this.selectEngine();

        // Resize the drawing
        this.resize();
    },

    /**
     * Selects the engine to use for the drawing.
     *
     * @method selectEngine
     * @private
     * @since 3.0.0
     */
    selectEngine: function() {
        // Find and seect the first supported engine
        if (EJSC._.isNil(this.engine)) {
            this.engine = new (EJSC._.find(EJSC.Drawing.engines, function(engine) {
                return engine.isSupported();
            }))();
        }

        // Link the engine back to the drawing
        this.engine.link(this);
    }
});

/**
 * TODO:
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
EJSC.Drawing.register = function(name, engine) {
    // Add the new engine to the list
    EJSC.Drawing.engines[name] = engine;
};
