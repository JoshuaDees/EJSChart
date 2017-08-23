/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC['.sparkline'].BarSeries
 * @extends EJSC['.sparkline'].ScatterSeries
 * @constructor
 * @since 3.0.0
 */
EJSC['.sparkline'].BarSeries = EJSC['.sparkline'].ScatterSeries.extend({
    /**
     * Defines the styles for the bar.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} bar
     * @property {Number} bar.size The amount of available space the bars should take up. (Default: 0.8)
     * @property {Object} bar.style
     * @property {String} bar.style.fillStyle The background color of the bar. (Default: null)
     * @property {Integer} bar.style.lineWidth The border width of the bar. (Default: 1)
     * @property {String} bar.style.strokeStyle The border color of the bar. (Default: null)
     * @since 3.0.0
     */
    bar: {
        size: 0.8,
        style: {
            fillStyle: null,
            lineWidth: 1,
            strokeStyle: null
        }
    },

    // Getter
    getBar: function() {
        // Return the current bar
        return this.bar;
    },

    // Setter
    setBar: function(bar, apply) {
        // Update the current bar
        EJSC._.merge(this.bar, bar);

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
        // Return the current zeroCoordinate
        return this.zeroCoordinate;
    },

    // Setter
    setZeroCoordinate: function(zeroCoordinate, apply) {
        // Update the current zeroCoordinate
        this.zeroCoordinate = zeroCoordinate;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the boundary points for a bar in the series.
     *
     * @method calculateBarPoints
     * @private
     * @return {Object} The boundary points
     * @since 3.0.0
     */
    calculateBarPoints: function(point) {
        // Grab some local pointers
        var barSize = this.calculateBarSize();
        var zeroCoordinate = this.zeroCoordinate;

        // Return the bar points
        return {
            xMax: point.x + (barSize / 2),
            xMin: point.x - (barSize / 2),
            yMax: EJSC._.max([point.y, zeroCoordinate]),
            yMin: EJSC._.min([point.y, zeroCoordinate])
        };
    },

    /**
     * Calculates the boundary pixels for a bar in the series.
     *
     * @method calculateBarPixels
     * @private
     * @return {Object} The boundary pixels
     * @since 3.0.0
     */
    calculateBarPixels: function(point) {
        // Grab some local pointers
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var spacing = this.getSpacing();
        var xAxisZoom = xAxis.getCurrentZoom(spacing);
        var yAxisZoom = yAxis.getCurrentZoom(spacing);
        var barPoints = this.calculateBarPoints(point);
        var temp;

        // Calculate the bar pixels
        var barPixels = {
            xMax: xAxis.convertPointToPixel(EJSC._.min([barPoints.xMax, xAxisZoom.max])),
            xMin: xAxis.convertPointToPixel(EJSC._.max([barPoints.xMin, xAxisZoom.min])),
            yMax: yAxis.convertPointToPixel(EJSC._.min([barPoints.yMax, yAxisZoom.max])),
            yMin: yAxis.convertPointToPixel(EJSC._.max([barPoints.yMin, yAxisZoom.min]))
        };

        // Reverse the x values if needed
        if (barPixels.xMax < barPixels.xMin) {
            temp = barPixels.xMax;
            barPixels.xMax = barPixels.xMin;
            barPixels.xMin = temp;
        }

        // Reverse the y values if needed
        if (barPixels.yMax < barPixels.yMin) {
            temp = barPixels.yMax;
            barPixels.yMax = barPixels.yMin;
            barPixels.yMin = temp;
        }

        // Return the bar pixels
        return barPixels;
    },

    /**
     * Calculates the size (width) for a bar in the series.
     *
     * @method calculateBarPixels
     * @private
     * @return {Number} The size of the bar
     * @since 3.0.0
     */
    calculateBarSize: function() {
        // Grab some local pointers
        var data = this.data;

        // Define some local variables
        var xs = [];
        var barSize = 1;

        // If there are more than 1 points, determine the min distance between the points
        if (data.length > 1) {
            // Add each point's x value to the array
            EJSC._.forEach(data, function(point) {
                xs.push(point.x);
            });

            // Sort the array
            xs.sort();

            // Find the minimum difference
            EJSC._.forEach(xs, function(x, index) {
                if (index === 0) {
                    barSize = null;
                }
                else {
                    barSize = EJSC._.min([barSize, x - xs[index - 1]]);
                }
            });
        }

        // Return the bar size
        return barSize * this.bar.size;
    },

    /**
     * Calculates the extremes for the series based off of its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object<Number xMin, Number xMax, Number yMin, Number yMin>} The calculated extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Grab some local pointers
        var extremes = this._super();
        var barSize = this.calculateBarSize();
        var zeroCoordinate = this.zeroCoordinate;

        // Update extremes to the zero coordinate
        extremes.yMin = EJSC._.min([extremes.yMin, zeroCoordinate]);
        extremes.yMax = EJSC._.max([extremes.yMax, zeroCoordinate]);

        // Update extremes to the bar size
        extremes.xMin -= (barSize / 2);
        extremes.xMax += (barSize / 2);

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
        var series = this;
        var chart = this.chart;
        var color = this.color;
        var bar = this.bar;

        // Define the drawing style
        var style = EJSC._.merge({}, bar, {
            fillStyle: bar.fillStyle || EJSC._.setOpacity(color, 0.5),
            strokeStyle: bar.strokeStyle || color
        });

        // Loop through the visible points
        EJSC._.forEach(this.getVisiblePoints(), function(point) {
            // Calculate the bar points
            var barPixels = series.calculateBarPixels(point);

            // Draw the bar
            chart.rect(
                Math.round(barPixels.xMin) + 0.5,
                Math.round(barPixels.yMin) + 0.5,
                Math.round(barPixels.xMax - barPixels.xMin),
                Math.round(barPixels.yMax - barPixels.yMin),
                style
            );
        });

        // Draw the points if needed
        if (this.points.visible === true) {
            this._super.apply(this, arguments);
        }
    },

    /**
     * Calculates the spacing needed for the series.
     *
     * @method getSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */
    getSpacing: function() {
        // Declare some local variables
        var pointSpacing = this.points.visible ? this._super.apply(this, arguments) : 0;
        var lineSpacing = Math.ceil(this.bar.lineWidth / 2);

        // Return the spacing
        return EJSC._.max([pointSpacing, lineSpacing]);
    },

    /**
     * Determines if the given point is in range of the cursor or not.
     *
     * @method isPointInRange
     * @private
     * @param {EJSC.Point} point The point
     * @param {MouseEvent} event The mouse event
     * @return {Boolean} If the point is in range or not
     * @since 3.0.0
     */
    isPointInRange: function(point, event) {
        // Grab some local pointers
        var chart = this.chart;
        var chartPixels = chart.getChartPixels(event);
        var cursorX = chartPixels.x;
        var cursorY = chartPixels.y;
        var spacing = this.getSpacing();
        var barPixels = this.calculateBarPixels(point);

        // Determine if the bar is in range of the cursor
        var barInRange = (
            cursorX >= barPixels.xMin - spacing - 5 &&
            cursorX <= barPixels.xMax + spacing + 5 &&
            cursorY >= barPixels.yMin - spacing - 5 &&
            cursorY <= barPixels.yMax + spacing + 5
        );

        // Determine if the point is in range of the cursor
        var pointInRange = (this.points.visible ? this._super.apply(this, arguments) : false);

        // Return if the bar or the point (if shown) is in range of the cursor
        return barInRange || pointInRange;
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
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var spacing = this.getSpacing();
        var xAxisZoom = xAxis.getCurrentZoom(spacing);
        var yAxisZoom = yAxis.getCurrentZoom(spacing);
        var barPoints = this.calculateBarPoints(point);

        // Determine if the bar is visible or not
        var barVisible = (
            EJSC._.isNil(point.x) === false &&
            EJSC._.isNil(point.y) === false &&
            barPoints.xMax >= xAxisZoom.min &&
            barPoints.xMin <= xAxisZoom.max &&
            barPoints.yMax >= yAxisZoom.min &&
            barPoints.yMin <= yAxisZoom.max
        );

        // Determine if the point is visible or not
        var pointVisible = (this.points.visible ? this._super.apply(this, arguments) : false);

        // Return if this bar or the point (if shown) is visible or not
        return barVisible || pointVisible;
    }
});
