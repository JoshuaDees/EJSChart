import $Array from '../util/Array.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import EJSC from '../EJSC.es6';
import ScatterSeries from './ScatterSeries.es6';
// TODO:

/**
 * BarSeries renders its points as vertical or horizontal bars which are fixed to a baseline.
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC['sparkline'].BarSeries
 * @extends EJSC['sparkline'].ScatterSeries
 * @constructor
 * @param {Array} data The data array
 * @param {Object} options The config options
 * @since @todo
 */
export default EJSC['sparkline'].BarSeries = class BarSeries extends ScatterSeries {
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
   * @since @todo
   */

  // getter
  getBar() {
      // Return the current bar
    return this.bar;
  }

  // setter
  setBar(bar) {
    // Update the current bar
    $Object.merge(this.bar, bar);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the zero coordinate for the series.
   *
   * @example
   *
   *     // TODO:
   *
   * @attribute {Number} zeroCoordinate
   * @default 0
   * @since @todo
   */

  // getter
  getZeroCoordinate() {
    // Return the current zeroCoordinate
    return this.zeroCoordinate;
  }

  // setter
  setZeroCoordinate(zeroCoordinate) {
    // Update the current zeroCoordinate
    this.zeroCoordinate = zeroCoordinate;

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
    this.bar = {
      size: 0.8,
      style: {
        fillStyle: null,
        lineWidth: 1,
        strokeStyle: null
      }
    };
    this.zeroCoordinate = 0;
  }

  /**
   * Calculates the boundary points for a bar in the series.
   *
   * @method calculateBarPoints
   * @private
   * @return {Object} The boundary points
   * @since @todo
   */
  calculateBarPoints(point) {
    // Grab some local pointers
    let barSize = this.calculateBarSize();
    let zeroCoordinate = this.zeroCoordinate;

    // Return the bar points
    return {
      xMax: point.x + (barSize / 2),
      xMin: point.x - (barSize / 2),
      yMax: $Number.max(point.y, zeroCoordinate),
      yMin: $Number.min(point.y, zeroCoordinate)
    };
  }

  /**
   * Calculates the boundary pixels for a bar in the series.
   *
   * @method calculateBarPixels
   * @private
   * @return {Object} The boundary pixels
   * @since @todo
   */
  calculateBarPixels(point) {
    // Grab some local pointers
    let xAxis = this.referenceXAxis();
    let yAxis = this.referenceYAxis();
    let spacing = this.getSpacing();
    let xAxisZoom = xAxis.getCurrentZoom(spacing);
    let yAxisZoom = yAxis.getCurrentZoom(spacing);
    let barPoints = this.calculateBarPoints(point);
    let temp;

    // Calculate the bar pixels
    let barPixels = {
      xMax: xAxis.convertPointToPixel($Number.min(barPoints.xMax, xAxisZoom.max)),
      xMin: xAxis.convertPointToPixel($Number.max(barPoints.xMin, xAxisZoom.min)),
      yMax: yAxis.convertPointToPixel($Number.min(barPoints.yMax, yAxisZoom.max)),
      yMin: yAxis.convertPointToPixel($Number.max(barPoints.yMin, yAxisZoom.min))
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
  }

  /**
   * Calculates the size (width) for a bar in the series.
   *
   * @method calculateBarPixels
   * @private
   * @return {Number} The size of the bar
   * @since @todo
   */
  calculateBarSize() {
    // Grab some local pointers
    let data = this.data;

    // Define some local variables
    let barSize = 1;

    // If there are more than 1 points, determine the min distance between the points
    if (data.length > 1) {
      $Array(data)
        .sort((point1, point2) => point1.x - point2.x)
        .forEach((point, index, points) => {
          barSize = index === 0 ? null : $Number.min(barSize, point.x - points[index - 1].x);
        });
    }

    // Finalize the bar size
    barSize = barSize * this.bar.size;

    // Return the bar size
    return barSize;
  }

  /**
   * Calculates the extremes for the series based off of its data.
   *
   * @method calculateExtremes
   * @private
   * @return {Object} The calculated extremes
   * @since @todo
   */
  calculateExtremes() {
    // Grab some local pointers
    let extremes = super.calculateExtremes();
    let barSize = this.calculateBarSize();
    let zeroCoordinate = this.zeroCoordinate;

    // Update extremes to the zero coordinate
    extremes.yMin = $Number.min(extremes.yMin, zeroCoordinate);
    extremes.yMax = $Number.max(extremes.yMax, zeroCoordinate);

    // Update extremes to the bar size
    extremes.xMin -= (barSize / 2);
    extremes.xMax += (barSize / 2);

    // Return the extremes
    return extremes;
  }

  /**
   * Draws the series to the chart.
   *
   * @method draw
   * @private
   * @since @todo
   */
  draw() {
    // Grab some local pointers
    let { chart, color, bar } = this;

    // Define the drawing style
    let style = $Object.merge({}, bar.style, {
      fillStyle: bar.fillStyle || this.setOpacity(color, 0.5),
      strokeStyle: bar.strokeStyle || color
    });

    // Loop through the visible points
    $Array.forEach(this.getVisiblePoints(), point => {
      // Calculate the bar points
      let barPixels = this.calculateBarPixels(point);

      // Draw the bar
      chart.rect(
        $Number.round(barPixels.xMin) + 0.5,
        $Number.round(barPixels.yMin) + 0.5,
        $Number.round(barPixels.xMax) - $Number.round(barPixels.xMin),
        $Number.round(barPixels.yMax) - $Number.round(barPixels.yMin),
        style
      );
    });

    // Draw the points if needed
    if (this.points.visible === true) {
      super.draw();
    }
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
    // Declare some local variables
    let pointSpacing = this.points.visible ? super.getSpacing() : 0;
    let lineSpacing = Math.ceil(this.bar.style.lineWidth / 2);

    // Define some local variables
    let spacing = $Number.max(pointSpacing, lineSpacing);

    // Return the spacing needed for the series
    return {
      xMin: lineSpacing,
      xMax: lineSpacing,
      yMin: spacing,
      yMax: spacing
    };
  }

  /**
   * Determines if the given point is in range of the cursor or not.
   *
   * @method isPointInRange
   * @private
   * @param {EJSC.Point} point The point
   * @param {MouseEvent} event The mouse event
   * @return {Boolean} If the point is in range or not
   * @since @todo
   */
  isPointInRange(point, event) {
    // Grab some local pointers
    let chart = this.chart;
    let chartPixels = chart.getChartPixels(event);
    let { x: cursorX, y: cursorY } = chartPixels;
    let spacing = this.getSpacing();
    let barPixels = this.calculateBarPixels(point);

    // Determine if the bar is in range of the cursor
    let barInRange = (
      cursorX >= barPixels.xMin - spacing - 5 &&
      cursorX <= barPixels.xMax + spacing + 5 &&
      cursorY >= barPixels.yMin - spacing - 5 &&
      cursorY <= barPixels.yMax + spacing + 5
    );

    // Determine if the point is in range of the cursor
    let pointInRange = (this.points.visible ? super.isPointInRange(point, event) : false);

    // Return if the bar or the point (if shown) is in range of the cursor
    return barInRange || pointInRange;
  }

  /**
   * Determines if a point is currently visible or not.
   *
   * @method isPointVisible
   * @private
   * @param {Array} point The point to determine
   * @return {Boolean} If the point is currently visible or not
   * @since @todo
   */
  isPointVisible(point) {
    // Grab some local pointers
    let spacing = this.getSpacing();
    let xAxisZoom = this.referenceXAxis().getCurrentZoom(spacing);
    let yAxisZoom = this.referenceYAxis().getCurrentZoom(spacing);
    let barPoints = this.calculateBarPoints(point);

    // Determine if the bar is visible or not
    let barVisible = (
      $Object.isNil(point.x) === false &&
      $Object.isNil(point.y) === false &&
      barPoints.xMax >= xAxisZoom.min &&
      barPoints.xMin <= xAxisZoom.max &&
      barPoints.yMax >= yAxisZoom.min &&
      barPoints.yMin <= yAxisZoom.max
    );

    // Determine if the point is visible or not
    let pointVisible = (this.points.visible ? super.isPointVisible(point) : false);

    // Return if this bar or the point (if shown) is visible or not
    return barVisible || pointVisible;
  }
};
