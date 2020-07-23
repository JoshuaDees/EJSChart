import $Array from '../util/Array.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import EJSC from '../EJSC.es6';
import LineSeries from './LineSeries.es6';

/**
 * AreaSeries is rendered by drawing a line from point to point and then filling the area defined.
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC['sparkline'].AreaSeries
 * @extends EJSC['sparkline'].LineSeries
 * @constructor
 * @param {Array} data The data array
 * @param {Object} options The config options
 * @since @todo
 */
export default EJSC['sparkline'].AreaSeries = class AreaSeries extends LineSeries {
  /**
   * Defines the styles for the area fill.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = EJSC['sparkline'].Chart('chart-container');
   *
   *   // Define a new AreaSeries with the area's background color as light grey
   *   let series = new EJSC['sparkline'].AreaSeries([[0, 0], [1, 2], [2, 1]], {
   *     area: { fillStyle: 'rgb(200, 200, 200)' }
   *   });
   *
   *   // Update the area's background color to light blue
   *   series.setArea({
   *     fillStyle: 'rgb(200, 200, 255)'
   *   });
   *
   *   // Log out the current area styles
   *   console.log(series.getArea());
   *   // => { fillStyle: 'rgb(200, 200, 255)' }
   *
   * @attribute {Object} area
   * @property {String} area.fillStyle The background color of the area fill. (Default: null)
   * @since @todo
   */

  // getter
  getArea() {
    // Return the current area
    return this.area;
  }

  // setter
  setArea(area) {
    // Update the current area
    $Object.merge(this.area, area);

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
   *   // TODO:
   *
   * @attribute {Number} zeroCoordinate
   * @default 0
   * @since @todo
   */

  // getter
  getZeroCoordinate() {
    // Return the current zero coordinate
    return this.zeroCoordinate;
  }

  // setter
  setZeroCoordinate(zeroCoordinate) {
    // Update the current zero coordinate
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
   * @since @todo
   */
  calculateExtremes() {
    // Grab some local pointers
    let extremes = super.calculateExtremes();
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
   * @since @todo
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
    $Array.forEach(points, (point, index) => chart[index === 0 ? 'moveTo' : 'lineTo'](
      xAxis.convertPointToPixel(point.x),
      yAxis.convertPointToPixel(point.y)
    ));

    // Loop through the points of data adding them to the path array
    $Array.forEach(points.reverse(), point => chart.lineTo(
      xAxis.convertPointToPixel(point.x),
      zeroCoordinate
    ));

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
