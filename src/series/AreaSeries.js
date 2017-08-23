/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC['.sparkline'].AreaSeries
 * @extends EJSC['.sparkline'].LineSeries
 * @constructor
 * @since 3.0.0
 */
EJSC['.sparkline'].AreaSeries = EJSC['.sparkline'].LineSeries.extend({
    /**
     * Defines the styles for the area fill.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} area
     * @property {String} area.fillStyle The background color of the area fill. (Default: null)
     * @since 3.0.0
     */
    area: {
        fillStyle: null
    },

    // Getter
    getArea: function() {
        // Return the current area
        return this.area;
    },

    // Setter
    setArea: function(area, apply) {
        // Update the current area
        EJSC._.merge(this.area, area);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the zero coordinate for the series.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Number} zeroCoordinate
     * @default 0
     * @since 3.0.0
     */
    zeroCoordinate: 0,

    // Getter
    getZeroCoordinate: function() {
        // Return the current zero coordinate
        return this.zeroCoordinate;
    },

    // Setter
    setZeroCoordinate: function(zeroCoordinate, apply) {
        // Update the current zero coordinate
        this.zeroCoordinate = zeroCoordinate;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the extremes for the series based off of its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The calculated extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Grab some local pointers
        var extremes = this.point.calculateExtremes(this.handler.data);
        var zeroCoordinate = this.zeroCoordinate;

        // Update extremes to the zero coordinate
        extremes.yMin = EJSC._.min([extremes.yMin, zeroCoordinate]);
        extremes.yMax = EJSC._.max([extremes.yMax, zeroCoordinate]);

        // Return the extremes
        return extremes;
    },

    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Grab some local pointers
        var chart = this.chart;
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var yAxisZoom = yAxis.getCurrentZoom();
        var zeroCoordinate = yAxis.convertPointToPixel(EJSC._.clamp(this.zeroCoordinate, yAxisZoom.min, yAxisZoom.max));
        var points = this.buildPath();

        // Start at the first point
        chart.beginPath();

        // Loop through the points of data adding them to the path array
        EJSC._.forEach(points, function(point, index) {
            chart[index === 0 ? 'moveTo' : 'lineTo'](
                xAxis.convertPointToPixel(point.x),
                yAxis.convertPointToPixel(point.y)
            );
        });

        // Loop through the points of data adding them to the path array
        EJSC._.forEach(points.reverse(), function(point) {
            chart.lineTo(
                xAxis.convertPointToPixel(point.x),
                zeroCoordinate
            );
        });

        // Close the path
        chart.closePath();

        // Fill in the path
        chart.fill(EJSC._.merge({}, this.area, {
            fillStyle: this.area.fillStyle || EJSC._.setOpacity(this.color, 0.5)
        }));

        // Draw the line
        this._super.apply(this, arguments);
    }
});
