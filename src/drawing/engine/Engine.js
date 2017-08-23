/**
 * Defines the abstract class for rendering engines for EJSCharts.
 *
 * @class EJSC.Engine
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
EJSC.Engine = EJSC.Class.extend({
    /**
     * The owner drawing.
     *
     * @property {EJSC.Drawing} drawing
     * @private
     * @default null
     * @since 3.0.0
     */
    drawing: null,

    /**
     * Holds a pointer to the engine's dom element.
     *
     * @property {DOMElement} element
     * @private
     * @default null
     * @since 3.0.0
     */
    element: null,

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
    arc: function(/* cx, cy, radius, startAngle, endAngle, counterClockwise */) {
        // Placeholder
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
     * @since 3.0.0
     */
    arcTo: function(/* cpx, cpy, x, y, radius */) {
        // Placeholder
    },

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
    beginClip: function(/* left, top, width, height */) {
        // Placeholder
    },

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */
    beginPath: function() {
        // Placeholder
    },

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
    bezierCurveTo: function(/* cp1x, cp1y, cp2x, cp2y, x, y */) {
        // Placeholder
    },

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} cx The x coordinate for the center of the circle
     * @param {Number} cy The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    circle: function(/* cx, cy, radius, styles */) {
        // Placeholder
    },

    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */
    clear: function() {
        // Placeholder
    },

    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */
    closePath: function() {
        // Placeholder
    },

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    draw: function(/* styles */) {
        // Placeholder
    },

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
    ellipse: function(/* cx, cy, rx, ry, styles */) {
        // Placeholder
    },

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */
    endClip: function() {
        // Placeholder
    },

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    fill: function(/* styles */) {
        // Placeholder
    },

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */
    horizontalTo: function(/* x */) {
        // Placeholder
    },

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
    line: function(/* x1, y1, x2, y2, styles */) {
        // Placeholder
    },

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    lineTo: function(/* x, y */) {
        // Placeholder
    },

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    measureText: function(/* text, styles */) {
        // Placeholder
    },

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */
    moveTo: function(/* x, y */) {
        // Placeholder
    },

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
    quadraticCurveTo: function(/* cpx, cpy, x, y */) {
        // Placeholder
    },

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
    rect: function(/* x, y, width, height, styles */) {
        // Placeholder
    },

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */
    resize: function(/* width, height */) {
        // Placeholder
    },

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    stroke: function(/* styles */) {
        // Placeholder
    },

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
    text: function(/* text, x, y, styles */) {
        // Placeholder
    },

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    verticalTo: function(/* y */) {
        // Placeholder
    },

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Array} path The path to draw
     * @since 3.0.0
     */
    drawPath: function(/* path */) {
        // Placeholder
    },

    link: function(drawing) {
        // Link back to the drawing
        this.drawing = drawing;
    },

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @return {Object}
     * @since 3.0.0
     */
    stylize: function(/* styles */) {
        // Placeholder
    }
});
