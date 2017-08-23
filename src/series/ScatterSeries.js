/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC['.sparkline'].ScatterSeries
 * @extends EJSC['.sparkline'].XYSeries
 * @constructor
 * @since 3.0.0
 */
EJSC['.sparkline'].ScatterSeries = EJSC['.sparkline'].XYSeries.extend({
    /**
     * Defines the style options for the points.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} points
     * @property {String} points.shape Defines the shape of the points. (Default: 'circle') (Values: 'box', 'circle', 'diamond', 'triangle')
     * @property {Integer} points.size Defines the size of the points. (Default: 5)
     * @property {Object} points.style
     * @property {String} points.style.fillStyle Defines the fill color. (Default: null)
     * @property {Integer} points.style.lineWidth Defines the width of the line. (Default: 2)
     * @property {String} points.style.strokeStyle Defines the color of the line. (Default: null)
     * @property {Boolean} points.visible Defines if the points should be drawn. Only applies to child classes of ScatterSeries. (Default: false)
     * @since 3.0.0
     */
    points: {
        shape: 'circle',
        size: 5,
        style: {
            fillStyle: null,
            lineWidth: 2,
            strokeStyle: null
        },
        visible: false
    },

    // Getter
    getPoints: function() {
        // Return the current points
        return this.points;
    },

    // Setter
    setPoints: function(points, apply) {
        // Update the current points
        EJSC._.merge(this.points, points);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the extremes for the series based on its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The new extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Define some local variables
        var extremes = {
            xMin: null,
            xMax: null,
            yMin: null,
            yMax: null
        };

        // Loop through the associated data
        EJSC._.forEach(this.data, function(point) {
            // Update the xMin value if needed
            EJSC._.merge(extremes, {
                xMin: EJSC._.min([extremes.xMin, point.x]),
                xMax: EJSC._.max([extremes.xMax, point.x]),
                yMin: EJSC._.min([extremes.yMin, point.y]),
                yMax: EJSC._.max([extremes.yMax, point.y])
            });
        });

        // Return the extremes
        return extremes;
    },

    /**
     * Calculates the spacing needed for the series.
     *
     * @method calculateSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */
    calculateSpacing: function() {
        // Grab some local pointers
        var points = this.points;

        // Determine the spacing needed for the series
        var spacing = Math.ceil(points.size + (points.style.lineWidth / 2));

        // Return the spacing needed for the series
        return spacing;
    },

    /**
     * Draws the series.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Define some local variables
        var chart = this.chart;
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var points = this.points;
        var color = this.color;
        var style = EJSC._.merge({}, points.style);
        var size = points.size;

        // Fill in missing colors if needed
        style.fillStyle = style.fillStyle || EJSC._.setOpacity(color, 0.5);
        style.strokeStyle = style.strokeStyle || color;

        // Draw the visible points
        EJSC._.forEach(this.getVisiblePoints(), function(point) {
            // Define the pixel values
            var dx = xAxis.convertPointToPixel(point.x) + 0.5;
            var dy = yAxis.convertPointToPixel(point.y) + 0.5;

            // Determine what shape to draw
            switch (points.shape) {
                // Draw the rect
                case 'box':
                    chart.rect(dx - size, dy - size, size * 2, size * 2, style);
                    break;

                // Draw the circle
                case 'circle':
                    chart.circle(dx, dy, size, style);
                    break;

                // Draw the diamond
                case 'diamond':
                    chart.beginPath();
                    chart.moveTo(dx, dy - size);
                    chart.lineTo(dx - size, dy);
                    chart.lineTo(dx, dy + size);
                    chart.lineTo(dx + size, dy);
                    chart.lineTo(dx, dy - size);
                    chart.draw(style);
                    break;

                // Draw the triangle
                case 'triangle':
                    chart.beginPath();
                    chart.moveTo(dx, dy - size);
                    chart.lineTo(dx - size, dy + size);
                    chart.lineTo(dx + size, dy + size);
                    chart.lineTo(dx, dy - size);
                    chart.draw(style);
                    break;
            }
        });
    },

    /**
     * Determines if a point is currently visible or not.
     *
     * @method isPointVisible
     * @private
     * @param {Array<Number, Number>} point The point to determine
     * @return {Boolean} If the point is currently visible or not
     * @since 3.0.0
     */
    isPointVisible: function(point) {
        // Grab some local pointers
        var spacing = this.calculateSpacing();
        var xAxisZoom = this.referenceXAxis().getCurrentZoom(spacing);
        var yAxisZoom = this.referenceYAxis().getCurrentZoom(spacing);

        // Determine if the point should be drawn or not
        var isPointVisible = (
            EJSC._.isNil(point.x) === false &&
            EJSC._.isNil(point.y) === false &&
            point.x >= xAxisZoom.min &&
            point.x <= xAxisZoom.max &&
            point.y >= yAxisZoom.min &&
            point.y <= yAxisZoom.max
        );

        // Return if the point should be drawn or not
        return isPointVisible;
    }
});
