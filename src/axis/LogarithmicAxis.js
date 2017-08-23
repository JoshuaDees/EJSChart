/**
 * TODO:
 *
 * @class EJSC['.sparkline'].LogarithmicAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
EJSC['.sparkline'].LogarithmicAxis = EJSC.Axis.extend({
    // TODO:
    base: 10,

    // Getter
    getBase: function() {
        // Return the current base
        return this.base;
    },

    // Setter
    setBase: function(base, apply) {
        // Update the current base
        this.base = base;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    logPoints: {
        maxPositive: null,
        minPositive: null,
        zeroValue: null,
        maxNegative: null,
        minNegative: null
    },

    // TODO:
    calculateExtremes: function() {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var orientation = this.orientation;
        var padding = this.padding;
        var extremes = this.extremes;
        var logPoints = this.logPoints;
        var visibleSeries = this.getVisibleSeries();

        // Define some local variables
        var dataPoint = orientation === 'vertical' ? 'y' : 'x';
        var spacing = 0;
        var min = null;
        var max = null;
        var maxPositive = null;
        var minPositive = null;
        var zeroValue = null;
        var maxNegative = null;
        var minNegative = null;
        var scale;

        // Reset the extremes
        EJSC._.merge(extremes, {
            min: null,
            max: null
        });

        // Reset the log points
        EJSC._.merge(logPoints, {
            maxPositive: null,
            minPositive: null,
            zeroValue: null,
            maxNegative: null,
            minNegative: null
        });

        // If there are no visible series, we can't calculate the extremes
        if (visibleSeries.length <= 0) {
            return;
        }

        // Loop through each of the visible series
        EJSC._.forEach(visibleSeries, function(series) {
            // Calculate the min and max range
            EJSC._.forEach(series.data, function(point) {
                EJSC._.forEach(series.dataPoints[dataPoint], function(property) {
                    // Calculate the extremes
                    min = EJSC._.min([min, point[property]]);
                    max = EJSC._.max([max, point[property]]);

                    // Calculate the log points
                    if (point[property] > 0) {
                        maxPositive = EJSC._.max([maxPositive, point[property]]);
                        minPositive = EJSC._.min([minPositive, point[property]]);
                    }
                    else if (point[property] === 0) {
                        zeroValue = 0;
                    }
                    else if (point[property] < 0) {
                        maxNegative = EJSC._.max([maxNegative, point[property]]);
                        minNegative = EJSC._.min([minNegative, point[property]]);
                    }
                });
            });

            // Calculate the series spacing
            spacing = EJSC._.max([spacing, series.calculateSpacing()]);
        });

        if (!EJSC._.isNil(zeroValue) || (!EJSC._.isNil(minPositive) && !EJSC._.isNil(maxNegative))) {
            // Make sure the zero value is defined
            zeroValue = 0;

            // Move minPositive and maxNegative to closest power
            minPositive = this.convertPowerToPoint(Math.floor(this.convertPointToPower(minPositive)));
            maxNegative = -this.convertPowerToPoint(Math.floor(this.convertPointToPower(-maxNegative)));
        }

        // Reset the log points
        EJSC._.merge(logPoints, {
            maxPositive: maxPositive,
            minPositive: minPositive,
            zeroValue: zeroValue,
            maxNegative: maxNegative,
            minNegative: minNegative
        });

        // Add the series spacing to the padding
        padding += spacing - 1;

        var linearMin = this.convertPointToLinear(min);
        var linearMax = this.convertPointToLinear(max);

        // Determine the scale based on the axis' orientation
        switch (orientation) {
            case 'horizontal':
                scale = ((linearMax - linearMin) / (drawArea.right - drawArea.left - (padding * 2)));
                break;

            case 'vertical':
                scale = ((linearMax - linearMin) / (drawArea.bottom - drawArea.top - (padding * 2)));
                break;
        }

        min = this.convertLinearToPoint(linearMin - (scale * padding));
        max = this.convertLinearToPoint(linearMax + (scale * padding));

        // Update the extremes with the padding
        EJSC._.merge(extremes, {
            min: min,
            max: max
        });
    },

    // TODO:
    calculateTicks: function() {
        // Grab some local pointers
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var min = this.convertPointToLinear(zoom.min);
        var max = this.convertPointToLinear(zoom.max);
        var ticks = [];
        var i;

        // Loop through adding a tick at each power
        for (i = Math.ceil(min); i <= Math.floor(max); i++) {
            ticks.push(this.convertLinearToPoint(i));
        }

        // Return the list of ticks
        return ticks;
    },

    // TODO:
    convertLinearToPoint: function(linear) {
        // TODO:
        var logPoints = this.logPoints;
        var minPositive = logPoints.minPositive;
        var maxNegative = logPoints.maxNegative;

        // TODO:
        var point;

        // Convert 0 to 0
        if (linear === 0) {
            point = 0;
        }

        // TODO:
        else if (linear > 0 && linear < 1) {
            // TODO
        }

        // TODO:
        else if (linear < 0 && linear > -1) {
            // TODO:
        }

        // TODO
        else if (linear >= 1) {
            point = this.convertPowerToPoint(linear - 1 + this.convertPointToPower(minPositive));
        }

        // TODO:
        else if (linear <= -1) {
            point = -(this.convertPowerToPoint(-linear - 1 + this.convertPointToPower(-maxNegative)));
        }

        // Return the point value
        return point;
    },

    // TODO:
    convertPixelToPoint: function(pixel) {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var pixelMin;
        var pixelMax;
        var pixelDif;
        var pixelPerc;
        var linearMin = this.convertPointToLinear(zoom.min);
        var linearMax = this.convertPointToLinear(zoom.max);
        var linearDif = linearMax - linearMin;
        var point = null;

        // There needs to be a current zoom to convert
        if (linearMin !== null && linearMax !== null) {
            // Calculate the coordinate based on the axis' orientation
            switch (this.orientation) {
                case 'horizontal':
                    pixelMin = drawArea.left;
                    pixelMax = drawArea.right - 1;
                    pixelDif = pixelMax - pixelMin;
                    pixelPerc = ((pixel - pixelMin) / pixelDif);

                    if (this.reverse === false) {
                        point = this.convertLinearToPoint(linearMin + (linearDif * pixelPerc));
                    }
                    else {
                        point = this.convertLinearToPoint(linearMax - (linearDif * pixelPerc));
                    }

                    break;

                case 'vertical':
                    pixelMin = drawArea.top;
                    pixelMax = drawArea.bottom - 1;
                    pixelDif = pixelMax - pixelMin;
                    pixelPerc = ((pixel - pixelMin) / pixelDif);

                    if (this.reverse === false) {
                        point = this.convertLinearToPoint(linearMax - (linearDif * pixelPerc));
                    }
                    else {
                        point = this.convertLinearToPoint(linearMin + (linearDif * pixelPerc));
                    }

                    break;
            }
        }

        // Return the point
        return point;
    },

    // TODO:
    convertPointToLinear: function(point) {
        // TODO:
        var logPoints = this.logPoints;
        var minPositive = logPoints.minPositive;
        var maxNegative = logPoints.maxNegative;

        // TODO:
        var linear;

        // Convert 0 to 0
        if (point === 0) {
            linear = 0;
        }

        // TODO:
        else if (point > 0 && point < minPositive) {
            // TODO:
        }

        // TODO:
        else if (point < 0 && point > maxNegative) {
            // TODO:
        }

        // Calculate the power difference for positive values above minPositive
        else if (point >= minPositive) {
            linear = this.convertPointToPower(point) - this.convertPointToPower(minPositive) + 1;
        }

        // Calculate the power difference for negative values below maxNegative
        else if (point <= maxNegative) {
            linear = -(this.convertPointToPower(-point) - this.convertPointToPower(-maxNegative) + 1);
        }

        // Return the linear value
        return linear;
    },

    // TODO:
    convertPointToPixel: function(point) {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var linearMin = this.convertPointToLinear(zoom.min);
        var linearMax = this.convertPointToLinear(zoom.max);
        var linearPerc = ((this.convertPointToLinear(point) - linearMin) / (linearMax - linearMin));
        var pixelMin;
        var pixelMax;
        var pixelDif;
        var pixel = null;

        // There needs to be a current zoom to convert
        if (linearMin !== null && linearMax !== null) {
            // Determine the coordinate based on the axis' orientation
            switch (this.orientation) {
                case 'horizontal':
                    pixelMin = drawArea.left;
                    pixelMax = drawArea.right - 1;
                    pixelDif = pixelMax - pixelMin;

                    if (this.reverse === false) {
                        pixel = pixelMin + (pixelDif * linearPerc);
                    }
                    else {
                        pixel = pixelMax - (pixelDif * linearPerc);
                    }

                    break;

                case 'vertical':
                    pixelMin = drawArea.top;
                    pixelMax = drawArea.bottom - 1;
                    pixelDif = pixelMax - pixelMin;

                    if (this.reverse === false) {
                        pixel = pixelMax - (pixelDif * linearPerc);
                    }
                    else {
                        pixel = pixelMin + (pixelDif * linearPerc);
                    }

                    break;
            }
        }

        // Return the pixel
        return pixel;
    },

    // TODO:
    convertPointToPower: function(point) {
        // Calculate the power value
        var power = Math.log(point) / Math.log(this.base);

        // Return the power value
        return power;
    },

    // TODO:
    convertPowerToPoint: function(power) {
        // Calculate the point value
        var point = Math.pow(this.base, power);

        // Return the point value
        return point;
    }
});
