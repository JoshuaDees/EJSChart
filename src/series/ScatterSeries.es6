import $Array from '../util/Array.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import EJSC from '../EJSC.es6';
import XYSeries from './base/XYSeries.es6';

/**
 * ScatterSeries is rendered by drawing a styled point for each x,y coordinate in the dataset.
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC['sparkline'].ScatterSeries
 * @extends EJSC['sparkline'].XYSeries
 * @constructor
 * @param {Array} data The data array
 * @param {Object} options The config options
 * @since @todo
 */
export default EJSC['sparkline'].ScatterSeries = class ScatterSeries extends XYSeries {
  /**
   * Defines the style options for the points.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} points
   * @property {String} points.shape Defines the shape of the points. (Default: 'circle') (Values: 'box', 'circle', 'diamond', 'triangle')
   * @property {Integer} points.size Defines the size of the points. (Default: 5)
   * @property {Object} points.style
   * @property {String} points.style.fillStyle Defines the fill color. (Default: null)
   * @property {Integer} points.style.lineWidth Defines the width of the line. (Default: 2)
   * @property {String} points.style.strokeStyle Defines the color of the line. (Default: null)
   * @property {Boolean} points.visible Defines if the points should be drawn. Only applies to child classes of ScatterSeries. (Default: false)
   * @since @todo
   */

  // getter
  getPoints() {
    // Return the current points
    return this.points;
  }

  // setter
  setPoints(points) {
    // Update the current points
    $Object.merge(this.points, points);

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
    this.points = {
      shape: 'circle',
      size: 5,
      style: {
        fillStyle: null,
        lineWidth: 2,
        strokeStyle: null
      },
      visible: false
    };
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
    // Return the calculated extremes
    return $Array.transform(this.data, (extremes, point) => $Object.merge(extremes, {
      xMin: $Number.min(extremes.xMin, point.x),
      xMax: $Number.max(extremes.xMax, point.x),
      yMin: $Number.min(extremes.yMin, point.y),
      yMax: $Number.max(extremes.yMax, point.y)
    }), {
      xMin: null,
      xMax: null,
      yMin: null,
      yMax: null
    });
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
    // Grab some local pointers
    let points = this.points;

    // Define some local variables
    let spacing = Math.ceil(points.size + (points.style.lineWidth / 2));

    // Return the spacing needed for the series
    return {
      xMin: spacing,
      xMax: spacing,
      yMin: spacing,
      yMax: spacing
    };
  }

  /**
   * Draws the series.
   *
   * @method draw
   * @private
   * @since @todo
   */
  draw() {
    // Grab some local pointers
    let { chart, points, color } = this;

      // Define some local variables
    let xAxis = this.referenceXAxis();
    let yAxis = this.referenceYAxis();
    let style = $Object.merge({}, points.style);
    let size = points.size;

    // Fill in missing colors if needed
    style.fillStyle = style.fillStyle || this.setOpacity(color, 0.5);
    style.strokeStyle = style.strokeStyle || color;

    // Draw the visible points
    $Array.forEach(this.getVisiblePoints(), point => {
      // Define the pixel values
      let dx = xAxis.convertPointToPixel(point.x) + 0.5;
      let dy = yAxis.convertPointToPixel(point.y) + 0.5;

      // Determine what shape to draw
      switch (points.shape) {
        // Draw the rect
        case 'box':
          chart.rect(dx - size, dy - size, size * 2, size * 2, style);
          break;

        // Draw the circle
        case 'circle':
          chart.circle(dx, dy, size, style);
          break;

        // Draw the diamond
        case 'diamond':
          chart.beginPath();
          chart.moveTo(dx, dy - size);
          chart.lineTo(dx - size, dy);
          chart.lineTo(dx, dy + size);
          chart.lineTo(dx + size, dy);
          chart.lineTo(dx, dy - size);
          chart.draw(style);
          break;

        // Draw the triangle
        case 'triangle':
          chart.beginPath();
          chart.moveTo(dx, dy - size);
          chart.lineTo(dx - size, dy + size);
          chart.lineTo(dx + size, dy + size);
          chart.lineTo(dx, dy - size);
          chart.draw(style);
          break;
      }
    });
  }

  /**
   * Determines if a point is currently visible or not.
   *
   * @method isPointVisible
   * @private
   * @param {Array<Number, Number>} point The point to determine
   * @return {Boolean} If the point is currently visible or not
   * @since @todo
   */
  isPointVisible(point,
    xAxisZoom = this.referenceXAxis().getCurrentZoom(this.calculateSpacing()),
    yAxisZoom = this.referenceYAxis().getCurrentZoom(this.calculateSpacing())
  ) {
    // Return if the point is visible in the current zoom
    return (
      $Object.isNil(point.x) === false &&
      $Object.isNil(point.y) === false &&
      point.x >= xAxisZoom.min &&
      point.x <= xAxisZoom.max &&
      point.y >= yAxisZoom.min &&
      point.y <= yAxisZoom.max
    );
  }
};
