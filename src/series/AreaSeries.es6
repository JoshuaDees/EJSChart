import EJSC from '../EJSC.es6';
import LineSeries from './LineSeries.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';

/**
 * // TODO:
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC['sparkline'].AreaSeries
 * @extends EJSC['sparkline'].LineSeries
 * @constructor
 * @since 3.0.0
 */
export default EJSC['sparkline'].AreaSeries = class AreaSeries extends LineSeries {
  /**
   * Defines the styles for the area fill.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} area
   * @property {String} area.fillStyle The background color of the area fill. (Default: null)
   * @since 3.0.0
   */

  // getter
  getArea() {
    // Return the current area
    return this.area;
  }

  // setter
  setArea(area, apply) {
    // Update the current area
    $Object.merge(this.area, area);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * Defines the zero coordinate for the series.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Number} zeroCoordinate
   * @default 0
   * @since 3.0.0
   */

  // getter
  getZeroCoordinate() {
    // Return the current zero coordinate
    return this.zeroCoordinate;
  }

  // setter
  setZeroCoordinate(zeroCoordinate, apply) {
    // Update the current zero coordinate
    this.zeroCoordinate = zeroCoordinate;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  // init
  init() {
    // super
    super.init();

    // Initialize some public properties
    this.area = {
      fillStyle: null
    };
    this.zeroCoordinate = 0;
  }

  /**
   * Calculates the extremes for the series based off of its data.
   *
   * @method calculateExtremes
   * @private
   * @return {Object} The calculated extremes
   * @since 3.0.0
   */
  calculateExtremes() {
    // Grab some local pointers
    let extremes = this.point.calculateExtremes(this.handler.data);
    let zeroCoordinate = this.zeroCoordinate;

    // Update extremes to the zero coordinate
    extremes.yMin = $Number.min(extremes.yMin, zeroCoordinate);
    extremes.yMax = $Number.max(extremes.yMax, zeroCoordinate);

    // Return the extremes
    return extremes;
  }

  /**
   * Draws the series to the chart.
   *
   * @method draw
   * @private
   * @since 3.0.0
   */
  draw() {
    // Grab some local pointers
    let chart = this.chart;
    let xAxis = this.referenceXAxis();
    let yAxis = this.referenceYAxis();
    let yAxisZoom = yAxis.getCurrentZoom();
    let zeroCoordinate = yAxis.convertPointToPixel($Number.clamp(this.zeroCoordinate, yAxisZoom.min, yAxisZoom.max));
    let points = this.buildPath();

    // Start at the first point
    chart.beginPath();

    // Loop through the points of data adding them to the path array
    points.forEach((point, index) => {
      chart[index === 0 ? 'moveTo' : 'lineTo'](
        xAxis.convertPointToPixel(point.x),
        yAxis.convertPointToPixel(point.y)
      );
    });

    // Loop through the points of data adding them to the path array
    points.reverse().forEach(point => {
      chart.lineTo(
        xAxis.convertPointToPixel(point.x),
        zeroCoordinate
      );
    });

    // Close the path
    chart.closePath();

    // Fill in the path
    chart.fill($Object.merge({}, this.area, {
      fillStyle: this.area.fillStyle || this.setOpacity(this.color, 0.5)
    }));

    // Draw the line
    super.draw();
  }
};
