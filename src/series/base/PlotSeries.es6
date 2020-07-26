import $Array from '../../util/Array.es6';
import $String from '../../util/String.es6';
import EJSC from '../../EJSC.es6';
import Series from './Series.es6';

/**
 * Defines a series that will plot its data using the chart's axes.
 *
 * @class EJSC.PlotSeries
 * @extends EJSC.Series
 * @private
 * @since @todo
 */
export default EJSC['sparkline'].PlotSeries = class PlotSeries extends Series {
  /**
   * Defines the spacing around the series.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Number} spacing
   * @default 0
   * @since @todo
   */

  // getter
  getSpacing() {
    // Return the current spacing
    return this.spacing;
  }

  // setter
  setSpacing(spacing) {
    // Update the current spacing
    this.spacing = spacing;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the x axis to draw on.
   *
   * Valid values are: 'bottom', 'top'.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {String} xAxis
   * @default 'bottom'
   * @since @todo
   */

  // getter
  getXAxis() {
    // Return the current x axis
    return this.xAxis;
  }

  // setter
  setXAxis(xAxis) {
    // Update the current x axis
    this.xAxis = xAxis;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the y axis to draw on.
   *
   * Valid values are: 'left', 'right'.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {String} yAxis
   * @default 'left'
   * @since @todo
   */

  // getter
  getYAxis() {
    // Return the current y axis
    return this.yAxis;
  }

  // setter
  setYAxis(yAxis) {
    // Update the current y axis
    this.yAxis = yAxis;

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
    this.spacing = 0;
    this.xAxis = 'bottom';
    this.yAxis = 'left';
  }

  /**
   * Calculates the extremes for the series based on its data.
   *
   * @method calculateExtremes
   * @private
   * @return {Object} The new extremes
   * @since @todo
   */
  calculateExtremes() {
    // Define some local variables
    let extremes = {
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
   * @since @todo
   */
  getVisiblePoints() {
    // Return the list of visible points
    return $Array.filter(this.data, point => this.isPointVisible(point));
  }

  /**
   * Returns a reference to the x axis
   *
   * @method referenceXAxis
   * @private
   * @return {EJSC['sparkline'].Axis} The x axis
   * @since @todo
   */
  referenceXAxis() {
    // Return a reference to the x axis
    return this.chart['axis' + $String.capitalize(this.xAxis)];
  }

  /**
   * Returns a reference to the y axis
   *
   * @method referenceXAxis
   * @private
   * @return {EJSC['sparkline'].Axis} The y axis
   * @since @todo
   */
  referenceYAxis() {
    // Return a reference to the y axis
    return this.chart['axis' + $String.capitalize(this.yAxis)];
  }
};
