/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC['.sparkline'].LineSeries
 * @extends EJSC['.sparkline'].ScatterSeries
 * @constructor
 * @since 3.0.0
 */
EJSC['.sparkline'].LineSeries = EJSC['.sparkline'].ScatterSeries.extend({
    /**
     * Defines the style options for the drawn line.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} line
     * @property {Integer} line.lineWidth Defines the width of the line. (Default: 1)
     * @property {String} line.strokeStyle Defines the color of the line. (Default: null)
     * @since 3.0.0
     */
    line: {
        lineWidth: 1,
        strokeStyle: null
    },

    // Getter
    getLine: function() {
        // Return the current line
        return this.line;
    },

    // Setter
    setLine: function(line, apply) {
        // Update the current line
        EJSC._.merge(this.line, line);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Determines if the drawing routine should draw as steps.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Boolean} step
     * @default false
     * @since 3.0.0
     */
    step: false,

    // Getter
    getStep: function() {
        // Return the current step
        return this.step;
    },

    // Setter
    setStep: function(step, apply) {
        // Update the current step
        this.step = step;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Builds the drawing path.
     *
     * @method buildPath
     * @private
     * @return {Array} The path to draw
     * @since 3.0.0
     */
    buildPath: function() {
        // Grab some local pointers
        var step = this.step;
        var path = [];

        // Build the drawing path
        EJSC._.forEach(this.data, function(point, index) {
            // Add the previous step (if needed)
            if (index > 0 && step) {
                path.push({

                                    x: point.x,

                                    y: path[path.length - 1].y
                });
            }

            // Add the current point to the path
            path.push({

                                    x: point.x,

                                    y: point.y
            });
        });

        /* {{ remove-if-sparkline }} */
        // Clip the path
        path = this.clipPath(path);
        /* {{ /remove-if-sparkline }} */

        // Return the path
        return path;
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
        // Define some local variables
        var pointSpacing = this.points.visible ? this._super.apply(this, arguments) : 0;
        var lineSpacing = Math.ceil(this.line.width / 2);

        // Return the larger spacing
        return EJSC._.max([pointSpacing, lineSpacing]);
    },

    /* {{ remove-if-sparkline }} */
    // TODO:
    clipPath: function(path) {
        // Grab some local pointers
        var isPointInBounds = this.isPointInBounds;
        var spacing = this.calculateSpacing();
        var xAxis = this.referenceXAxis();
        var xAxisZoom = xAxis.getCurrentZoom(spacing);
        var xMin = xAxisZoom.xMin;
        var xMax = xAxisZoom.xMax;
        var yAxis = this.referenceYAxis();
        var yAxisZoom = yAxis.getCurrentZoom(spacing);
        var yMin = yAxisZoom.yMin;
        var yMax = yAxisZoom.yMax;

        // Define some local variables
        var clip = [];
        var lastPoint;
        var lastPointInBounds;

        // Loop through each of the data points
        EJSC._.forEach(path, function(point, index) {
            // Define some local variables
            var pointIsInBounds = isPointInBounds(point, xAxisZoom, yAxisZoom);
            var xMinCross;
            var xMaxCross;
            var yMinCross;
            var yMaxCross;

            // If this is not the first point, we need to figure out any cross points
            if (index > 0) {
                // Calculate each cross point
                xMaxCross = xAxis.calculateCross(lastPoint, point, xMax);
                xMinCross = xAxis.calculateCross(lastPoint, point, xMin);
                yMaxCross = yAxis.calculateCross(lastPoint, point, yMax);
                yMinCross = yAxis.calculateCross(lastPoint, point, yMin);

                /* eslint-disable max-depth */
                // If this point and the next are both in bounds
                if (pointIsInBounds && lastPointInBounds) {
                    // Do nothing...
                }
                else if (lastPoint.x < point.x) {
                    if (lastPoint.y < point.y) {
                        if (xMinCross.y >= lastPoint.y && xMinCross.y <= point.y) {
                            if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                                clip.push({
                                    x: xMin,
                                    y: xMinCross.y,
                                    d: 'a'
                                });
                            }
                            else if (xMinCross.y < yMin && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMin,
                                    d: 'b'
                                });
                            }
                            else if (xMinCross.y > yMax && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMax,
                                    d: 'b'
                                });
                            }
                        }

                        if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x) {
                            if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                                clip.push({
                                    x: yMinCross.x,
                                    y: yMin,
                                    d: 'c'
                                });
                            }
                        }

                        if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x) {
                            if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                                clip.push({
                                    x: yMaxCross.x,
                                    y: yMax,
                                    d: 'd'
                                });
                            }
                        }

                        if (xMaxCross.y >= lastPoint.y && xMaxCross.y <= point.y) {
                            if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                                clip.push({
                                    x: xMax,
                                    y: xMaxCross.y,
                                    d: 'e'
                                });
                            }
                            else if (xMaxCross.y < yMin && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMin,
                                    d: 'f'
                                });
                            }
                            else if (xMaxCross.y > yMax && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMax,
                                    d: 'f'
                                });
                            }
                        }
                    }
                    else if (lastPoint.y === point.y) {
                        // TODO:
                    }
                    else if (lastPoint.y > point.y) {
                        if (xMinCross.y <= lastPoint.y && xMinCross.y >= point.y) {
                            if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                                clip.push({
                                    x: xMin,
                                    y: xMinCross.y,
                                    d: 'g'
                                });
                            }
                            else if (xMinCross.y < yMin && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMin,
                                    d: 'h'
                                });
                            }
                            else if (xMinCross.y > yMax && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMax,
                                    d: 'h'
                                });
                            }
                        }

                        if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x) {
                            if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                                clip.push({
                                    x: yMaxCross.x,
                                    y: yMax,
                                    d: 'i'
                                });
                            }
                        }

                        if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x) {
                            if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                                clip.push({
                                    x: yMinCross.x,
                                    y: yMin,
                                    d: 'j'
                                });
                            }
                        }

                        if (xMaxCross.y <= lastPoint.y && xMaxCross.y >= point.y) {
                            if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                                clip.push({
                                    x: xMax,
                                    y: xMaxCross.y,
                                    d: 'k'
                                });
                            }
                            else if (xMaxCross.y < yMin && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMin,
                                    d: 'l'
                                });
                            }
                            else if (xMaxCross.y > yMax && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMax,
                                    d: 'l'
                                });
                            }
                        }
                    }
                }
                else if (lastPoint.x === point.x) {
                    if (lastPoint.y < point.y) {
                        if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x && yMax >= lastPoint.y && yMax <= point.y) {
                            if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                                clip.push({
                                    x: yMinCross.x,
                                    y: yMin,
                                    d: 'aa'
                                });
                            }
                        }

                        if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x && yMax >= lastPoint.y && yMax <= point.y) {
                            if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                                clip.push({
                                    x: yMaxCross.x,
                                    y: yMax,
                                    d: 'ab'
                                });
                            }
                        }
                    }
                    else if (lastPoint.y === point.y) {
                        // Do nothing...
                    }
                    else if (lastPoint.y > point.y) {
                        if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x && yMax <= lastPoint.y && yMax >= point.y) {
                            if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                                clip.push({
                                    x: yMaxCross.x,
                                    y: yMax,
                                    d: 'ac'
                                });
                            }
                        }

                        if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x && yMin <= lastPoint.y && yMin >= point.y) {
                            if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                                clip.push({
                                    x: yMinCross.x,
                                    y: yMin,
                                    d: 'ad'
                                });
                            }
                        }
                    }
                }
                else if (lastPoint.x > point.x) {
                    if (lastPoint.y < point.y) {
                        if (xMaxCross.y >= lastPoint.y && xMaxCross.y <= point.y) {
                            if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                                clip.push({
                                    x: xMax,
                                    y: xMaxCross.y,
                                    d: 'm'
                                });
                            }
                            else if (xMaxCross.y < yMin && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMin,
                                    d: 'n'
                                });
                            }
                            else if (xMaxCross.y > yMax && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMax,
                                    d: 'n'
                                });
                            }
                        }

                        if (yMinCross.x <= lastPoint.x && yMinCross.x >= point.x) {
                            if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                                clip.push({
                                    x: yMinCross.x,
                                    y: yMin,
                                    d: 'o'
                                });
                            }
                        }

                        if (yMaxCross.x <= lastPoint.x && yMaxCross.x >= point.x) {
                            if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                                clip.push({
                                    x: yMaxCross.x,
                                    y: yMax,
                                    d: 'p'
                                });
                            }
                        }

                        if (xMinCross.y >= lastPoint.y && xMinCross.y <= point.y) {
                            if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                                clip.push({
                                    x: xMin,
                                    y: xMinCross.y,
                                    d: 'q'
                                });
                            }
                            else if (xMinCross.y < yMin && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMin,
                                    d: 'r'
                                });
                            }
                            else if (xMinCross.y > yMax && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMax,
                                    d: 'r'
                                });
                            }
                        }
                    }
                    else if (lastPoint.y === point.y) {
                        // TODO:
                    }
                    else if (lastPoint.y > point.y) {
                        if (xMaxCross.y <= lastPoint.y && xMaxCross.y >= point.y) {
                            if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                                clip.push({
                                    x: xMax,
                                    y: xMaxCross.y,
                                    d: 's'
                                });
                            }
                            else if (xMaxCross.y < yMin && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMin,
                                    d: 't'
                                });
                            }
                            else if (xMaxCross.y > yMax && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                                clip.push({
                                    x: xMax,
                                    y: yMax,
                                    d: 't'
                                });
                            }
                        }

                        if (yMaxCross.x <= lastPoint.x && yMaxCross.x >= point.x) {
                            if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                                clip.push({
                                    x: yMaxCross.x,
                                    y: yMax,
                                    d: 'u'
                                });
                            }
                        }

                        if (yMinCross.x <= lastPoint.x && yMinCross.x >= point.x) {
                            if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                                clip.push({
                                    x: yMinCross.x,
                                    y: yMin,
                                    d: 'v'
                                });
                            }
                        }

                        if (xMinCross.y <= lastPoint.y && xMinCross.y >= point.y) {
                            if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                                clip.push({
                                    x: xMin,
                                    y: xMinCross.y,
                                    d: 'w'
                                });
                            }
                            else if (xMinCross.y < yMin && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMin,
                                    d: 'x'
                                });
                            }
                            else if (xMinCross.y > yMax && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                                clip.push({
                                    x: xMin,
                                    y: yMax,
                                    d: 'x'
                                });
                            }
                        }
                    }
                }
                /* eslint-enable max-depth */
            }

            // Clamp and push the current point onto the clip
            clip.push({
                x: EJSC._.clamp(point.x, xMin, xMax),
                y: EJSC._.clamp(point.y, yMin, yMax),
                d: 'direct'
            });

            // Update the last point and if it's in bounds
            lastPoint = point;
            lastPointInBounds = isPointInBounds(lastPoint, xAxisZoom, yAxisZoom);
        });

        // console.log(JSON.stringify(clip));

        return clip;
    },
    /* {{ /remove-if-sparkline }} */

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
        var points = this.buildPath();

        // Begin the drawing path
        chart.beginPath();

        // Loop through the points of data adding them to the path array
        EJSC._.forEach(points, function(point, index) {
            chart[index === 0 ? 'moveTo' : 'lineTo'](
                xAxis.convertPointToPixel(point.x),
                yAxis.convertPointToPixel(point.y)
            );
        });

        // Draw the line
        chart.stroke(EJSC._.merge({}, this.line, {
            strokeStyle: this.line.strokeStyle || this.color
        }));

        // Draw the points if needed
        if (this.points.visible === true) {
            this._super.apply(this, arguments);
        }
    },

    /* {{ remove-if-sparkline }} */
    // TODO:
    isPointInBounds: function(point, xAxisZoom, yAxisZoom) {
        // Return if the given point is inside the current zoom area
        return (
            point.x >= xAxisZoom.min &&
            point.x <= xAxisZoom.max &&
            point.y >= yAxisZoom.min &&
            point.y <= yAxisZoom.max
        );
    }
    /* {{ /remove-if-sparkline }} */
});
