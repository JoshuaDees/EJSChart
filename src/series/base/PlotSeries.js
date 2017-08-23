/**
 * Defines a series that will plot its data using the chart's axes.
 *
 * @class EJSC['.sparkline'].PlotSeries
 * @extends EJSC['.sparkline'].Series
 * @private
 * @since 3.0.0
 */
EJSC['.sparkline'].PlotSeries = EJSC['.sparkline'].Series.extend({
    /**
     * Defines the x axis to draw on.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {String} xAxis
     * @default 'bottom'
     * @values 'bottom', 'top'
     * @since 3.0.0
     */
    xAxis: 'bottom',

    // Getter
    getXAxis: function() {
        // Return the current x axis
        return this.xAxis;
    },

    // Setter
    setXAxis: function(xAxis, apply) {
        // Update the current x axis
        this.xAxis = xAxis;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the y axis to draw on.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {String} yAxis
     * @default 'left'
     * @values 'left', 'right'
     * @since 3.0.0
     */
    yAxis: 'left',

    // Getter
    getYAxis: function() {
        // Return the current y axis
        return this.yAxis;
    },

    // Setter
    setYAxis: function(yAxis, apply) {
        // Update the current y axis
        this.yAxis = yAxis;

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

        // Return the extremes
        return extremes;
    },

    /**
     * Returns the list of visible points.
     *
     * @method getVisiblePoints
     * @private
     * @return {Array} The list of visible points
     * @since 3.0.0
     */
    getVisiblePoints: function() {
        // TODO:
        var series = this;

        // Return the list of visible points
        return EJSC._.filter(series.data, function(point) {
            return series.isPointVisible(point);
        });
    },

    /**
     * Returns a reference to the x axis
     *
     * @method referenceXAxis
     * @private
     * @return {EJSC['.sparkline'].Axis} The x axis
     * @since 3.0.0
     */
    referenceXAxis: function() {
        // Return a reference to the x axis
        return this.chart['axis' + EJSC._.capitalize(this.xAxis)];
    },

    /**
     * Returns a reference to the y axis
     *
     * @method referenceXAxis
     * @private
     * @return {EJSC['.sparkline'].Axis} The y axis
     * @since 3.0.0
     */
    referenceYAxis: function() {
        // Return a reference to the y axis
        return this.chart['axis' + EJSC._.capitalize(this.yAxis)];
    }
});
