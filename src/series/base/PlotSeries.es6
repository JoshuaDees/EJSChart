import EJSC from '../../EJSC.es6';
import Series from './Series.es6';
import Util from '../../util/Util.es6';

/**
 * Defines a series that will plot its data using the chart's axes.
 *
 * @class EJSC['sparkline'].PlotSeries
 * @extends EJSC['sparkline'].Series
 * @private
 * @since 3.0.0
 */
export default EJSC['sparkline'].PlotSeries = class PlotSeries extends Series {
  /**
   * Defines the x axis to draw on.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {String} xAxis
   * @default 'bottom'
   * @values 'bottom', 'top'
   * @since 3.0.0
   */

  // getter
  getXAxis() {
    // Return the current x axis
    return this.xAxis;
  }

  // setter
  setXAxis(xAxis, apply) {
    // Update the current x axis
    this.xAxis = xAxis;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * Defines the y axis to draw on.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {String} yAxis
   * @default 'left'
   * @values 'left', 'right'
   * @since 3.0.0
   */

  // getter
  getYAxis() {
    // Return the current y axis
    return this.yAxis;
  }

  // setter
  setYAxis(yAxis, apply) {
    // Update the current y axis
    this.yAxis = yAxis;

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
    this.xAxis = 'bottom';
    this.yAxis = 'left';
  }

  /**
   * Calculates the extremes for the series based on its data.
   *
   * @method calculateExtremes
   * @private
   * @return {Object} The new extremes
   * @since 3.0.0
   */
  calculateExtremes() {
    // Define some local variables
    var extremes = {
      xMin: null,
      xMax: null,
      yMin: null,
      yMax: null
    };

    // Return the extremes
    return extremes;
  }

  /**
   * Returns the list of visible points.
   *
   * @method getVisiblePoints
   * @private
   * @return {Array} The list of visible points
   * @since 3.0.0
   */
  getVisiblePoints() {
    // Return the list of visible points
    return Util.filter(this.data, (point) => {
      return this.isPointVisible(point);
    });
  }

  /**
   * Returns a reference to the x axis
   *
   * @method referenceXAxis
   * @private
   * @return {EJSC['sparkline'].Axis} The x axis
   * @since 3.0.0
   */
  referenceXAxis() {
    // Return a reference to the x axis
    return this.chart['axis' + Util.capitalize(this.xAxis)];
  }

  /**
   * Returns a reference to the y axis
   *
   * @method referenceXAxis
   * @private
   * @return {EJSC['sparkline'].Axis} The y axis
   * @since 3.0.0
   */
  referenceYAxis() {
    // Return a reference to the y axis
    return this.chart['axis' + Util.capitalize(this.yAxis)];
  }
};
