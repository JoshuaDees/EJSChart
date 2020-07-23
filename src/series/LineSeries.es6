import $Array from '../util/Array.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import EJSC from '../EJSC.es6';
import ScatterSeries from './ScatterSeries.es6';

/**
 * LineSeries is rendered by drawing a line from point to point.
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC['sparkline'].LineSeries
 * @extends EJSC['sparkline'].ScatterSeries
 * @constructor
 * @param {Array} data The data array
 * @param {Object} options The config options
 * @since @todo
 */
export default EJSC['sparkline'].LineSeries = class LineSeries extends ScatterSeries {
  /**
   * Defines the style options for the drawn line.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} line
   * @property {Integer} line.lineWidth Defines the width of the line. (Default: 1)
   * @property {String} line.strokeStyle Defines the color of the line. (Default: null)
   * @since @todo
   */

  // getter
  getLine() {
    // Return the current line
    return this.line;
  }

  // setter
  setLine(line) {
    // Update the current line
    $Object.merge(this.line, line);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Determines if the drawing routine should draw as steps.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Boolean} step
   * @default false
   * @since @todo
   */

  // getter
  getStep() {
    // Return the current step
    return this.step;
  }

  // setter
  setStep(step) {
    // Update the current step
    this.step = step;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  // init
  init() {
    // super
    super.init();

    // Initialize some public properties
    this.line = {
      lineWidth: 1,
      strokeStyle: null
    };
    this.step = false;
  }

  /**
   * Builds the drawing path.
   *
   * @method buildPath
   * @private
   * @return {Array} The path to draw
   * @since @todo
   */
  buildPath() {
    // Grab some local pointers
    let step = this.step;
    let path = [];

    // Build the drawing path
    $Array.forEach(this.data, (point, index) => {
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

    /* not-sparkline:start */
    // Clip the path
    path = this.clipPath(path);
    /* not-sparkline:end */

    // Return the path
    return path;
  }

  /**
   * Calculates the spacing needed for the series.
   *
   * @method calculateSpacing
   * @private
   * @return {Number} The spacing needed for the series
   * @since @todo
   */
  calculateSpacing() {
    // Define some local variables
    let pointSpacing = this.points.visible ?
      super.calculateSpacing() :
      {
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0
      };
    let lineSpacing = Math.ceil(this.line.lineWidth / 2);

    // Return the larger spacing
    return {
      xMin: $Number.max(pointSpacing.xMin, lineSpacing),
      xMax: $Number.max(pointSpacing.xMax, lineSpacing),
      yMin: $Number.max(pointSpacing.yMin, lineSpacing),
      yMax: $Number.max(pointSpacing.yMax, lineSpacing)
    };
  }

  /* not-sparkline:start */
  /**
   * Clips the draw path to the given zoom.
   *
   * @method clipPath
   * @private
   * @param {Array} path The draw path
   * @since @todo
   */
  clipPath(path) {
    // Grab some local pointers
    let isPointVisible = this.isPointVisible;
    let spacing = this.calculateSpacing();
    let xAxis = this.referenceXAxis();
    let xAxisZoom = xAxis.getCurrentZoom(spacing);
    let { xMin, xMax } = xAxisZoom;
    let yAxis = this.referenceYAxis();
    let yAxisZoom = yAxis.getCurrentZoom(spacing);
    let { yMin, yMax } = yAxisZoom;

    // Define some local variables
    let clip = [];
    let lastPoint;
    let lastPointIsVisible;

    // Loop through each of the data points
    $Array.forEach(path, (point, index) => {
      // Define some local variables
      let pointIsInBounds = isPointVisible(point, xAxisZoom, yAxisZoom);
      let xMinCross;
      let xMaxCross;
      let yMinCross;
      let yMaxCross;

      // If this is not the first point, we need to figure out any cross points
      if (index > 0) {
        // Calculate each cross point
        xMaxCross = xAxis.calculateCross(lastPoint, point, xMax);
        xMinCross = xAxis.calculateCross(lastPoint, point, xMin);
        yMaxCross = yAxis.calculateCross(lastPoint, point, yMax);
        yMinCross = yAxis.calculateCross(lastPoint, point, yMin);

        /* eslint-disable max-depth */
        // If this point and the next are both in bounds
        if (pointIsInBounds && lastPointIsVisible) {
          // Do nothing...
        }

        // If this segment goes left to right
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

          // If this segment goes directly right
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

        // If this segment goes directly up or down
        else if (lastPoint.x === point.x) {
          // If this segment goes directly up
          if (lastPoint.y < point.y) {
            // If this segment crosses the y min value, clip it and add it to the path
            if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x && yMax >= lastPoint.y && yMax <= point.y) {
              if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                clip.push({
                  x: yMinCross.x,
                  y: yMin,
                  d: 'direct up - y min cross'
                });
              }
            }

            // If this segment crosses the y max value, clip it and add it to the path
            if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x && yMax >= lastPoint.y && yMax <= point.y) {
              if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                clip.push({
                  x: yMaxCross.x,
                  y: yMax,
                  d: 'direct up - y max cross'
                });
              }
            }
          }

          // If the points are exactly the same
          else if (lastPoint.y === point.y) {
            // Do nothing...
          }

          // If this segment goes directly down
          else if (lastPoint.y > point.y) {
            // If this segment crosses the y max value, clip it and add it to the path
            if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x && yMax <= lastPoint.y && yMax >= point.y) {
              if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                clip.push({
                  x: yMaxCross.x,
                  y: yMax,
                  d: 'direct down - y max cross'
                });
              }
            }

            // If this segment crosses the y min value, clip it and add it to the path
            if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x && yMin <= lastPoint.y && yMin >= point.y) {
              if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                clip.push({
                  x: yMinCross.x,
                  y: yMin,
                  d: 'direct down - y min cross'
                });
              }
            }
          }
        }

        // If this segment goes right to left
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

          // If this segment goes directly left
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
        x: $Number.clamp(point.x, xMin, xMax),
        y: $Number.clamp(point.y, yMin, yMax),
        d: 'direct to point'
      });

      // Update the last point and if it's in bounds
      lastPoint = point;
      lastPointIsVisible = isPointVisible(lastPoint, xAxisZoom, yAxisZoom);
    });

    // console.log(JSON.stringify(clip));

    return clip;
  }
  /* not-sparkline:end */

  /**
   * Draws the series to the chart.
   *
   * @method draw
   * @private
   * @since @todo
   */
  draw() {
    // Grab some local pointers
    let chart = this.chart;
    let xAxis = this.referenceXAxis();
    let yAxis = this.referenceYAxis();
    let points = this.buildPath();

    // Begin the drawing path
    chart.beginPath();

    // Loop through the points of data adding them to the path array
    $Array.forEach(points, (point, index) => chart[index === 0 ? 'moveTo' : 'lineTo'](
      xAxis.convertPointToPixel(point.x),
      yAxis.convertPointToPixel(point.y)
    ));

    // Draw the line
    chart.stroke($Object.merge({}, this.line, {
      strokeStyle: this.line.strokeStyle || this.color
    }));

    // Draw the points if needed
    if (this.points.visible === true) {
      super.draw();
    }
  }
};
