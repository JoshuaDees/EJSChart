import $Array from '../util/Array.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import EJSC from '../EJSC.es6';
import Axis from './base/Axis.es6';

/**
 * LogarithmicAxis is an axis using a logarithmic scale.
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC['sparkline'].LogarithmicAxis
 * @extends EJSC.Axis
 * @constructor
 * @param {Object} options The config options
 * @private
 * @since // TODO:
 */
export default EJSC['sparkline'].LogarithmicAxis = class LogarithmicAxis extends Axis {
  /**
   * Defines the base for the logarithmic scale.
   *
   * @attribute {Number} base
   * @default 10
   * @since // TODO:
   */

  // getter
  getBase() {
    // Return the current base
    return this.base;
  }

  // setter
  setBase(base) {
    // Update the current base
    this.base = base;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   *
   *
   * @property {Object} logPoints
   * @property {Number} logPoints.maxPositive (Default: null)
   * @property {Number} logPoints.minPositive (Default: null)
   * @property {Number} logPoints.zeroValue (Default: null)
   * @property {Number} logPoints.maxNegative (Default: null)
   * @property {Number} logPoints.minNegative (Default: null)
   * @private
   * @since // TODO:
   */

  // init
  init() {
    // super
    super.init();

    // Initialize some public properties
    this.base = 10;

    // Initialize some private properties
    this.logPoints = {
      maxPositive: null,
      minPositive: null,
      zeroValue: null,
      maxNegative: null,
      minNegative: null
    };
  }

  /**
   * Calculates the extremes for the axis.
   *
   * @method calculateExtremes
   * @private
   * @since // TODO:
   */
  calculateExtremes() {
    // Grab some local pointers
    let { drawArea, orientation, padding, extremes, logPoints } = this;
    let visibleSeries = this.getVisibleSeries();

    // Define some local variables
    let dataPoint = orientation === 'vertical' ? 'y' : 'x';
    let spacing = 0;
    let min = null;
    let max = null;
    let maxPositive = null;
    let minPositive = null;
    let zeroValue = null;
    let maxNegative = null;
    let minNegative = null;
    let scale;
    let linearMin;
    let linearMax;

    // Reset the extremes
    $Object.merge(extremes, {
      min: null,
      max: null
    });

    // Reset the log points
    $Object.merge(logPoints, {
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
    $Array.forEach(visibleSeries, series => {
      // Calculate the min and max range
      $Array.forEach(series.data, point => {
        $Object(series.dataPoints[dataPoint]).forEach(property => {
          // Calculate the extremes
          min = $Number.min(min, point[property]);
          max = $Number.max(max, point[property]);

          // Calculate the log points
          if (point[property] > 0) {
            maxPositive = $Number.max(maxPositive, point[property]);
            minPositive = $Number.min(minPositive, point[property]);
          }
          else if (point[property] === 0) {
            zeroValue = 0;
          }
          else if (point[property] < 0) {
            maxNegative = $Number.max(maxNegative, point[property]);
            minNegative = $Number.min(minNegative, point[property]);
          }
        });
      });

      // Calculate the series spacing
      spacing = $Number.max(spacing, series.calculateSpacing());
    });

    if (!$Object.isNil(zeroValue) || (!$Object.isNil(minPositive) && !$Object.isNil(maxNegative))) {
      // Make sure the zero value is defined
      zeroValue = 0;

      // Move minPositive and maxNegative to closest power
      minPositive = this.convertPowerToPoint(Math.floor(this.convertPointToPower(minPositive)));
      maxNegative = -this.convertPowerToPoint(Math.floor(this.convertPointToPower(-maxNegative)));
    }

    // Reset the log points
    $Object.merge(logPoints, { maxPositive, minPositive, zeroValue, maxNegative, minNegative });

    // Add the series spacing to the padding
    padding += spacing - 1;

    linearMin = this.convertPointToLinear(min);
    linearMax = this.convertPointToLinear(max);

    // Determine the scale based on the axis' orientation
    switch (orientation) {
      case 'horizontal':
        scale = ((linearMax - linearMin) / (drawArea.right - drawArea.left - (padding * 2)));
        break;

      case 'vertical':
        scale = ((linearMax - linearMin) / (drawArea.bottom - drawArea.top - (padding * 2)));
        break;
    }

    // Update the extremes with padding
    min = this.convertLinearToPoint(linearMin - (scale * padding));
    max = this.convertLinearToPoint(linearMax + (scale * padding));

    // Store the extremes
    $Object.merge(extremes, { min, max });
  }

    /**
     * Calculates the axis' ticks based on the attached series' data.
     *
     * @method calculateTicks
     * @private
     * @return {Array} The list of ticks
     * @since // TODO:
     */
  calculateTicks() {
    // Grab some local pointers
    let zoom = this.getCurrentZoom();
    let min = this.convertPointToLinear(zoom.min);
    let max = this.convertPointToLinear(zoom.max);

    // Define some local variables
    let ticks = [];
    let i;

    // Loop through adding a tick at each power
    for (i = Math.ceil(min); i <= Math.floor(max); i++) {
      ticks.push(this.convertLinearToPoint(i));
    }

    // Return the list of ticks
    return ticks;
  }

  /**
   * Converts a linear point to a logarithmic point.
   *
   * @method convertLinearToPoint
   * @private
   * @param {Number} linear The linear point
   * @return {Number} The logarithmic point
   * @since // TODO:
   */
  convertLinearToPoint(linear) {
    // TODO:
    let { minPositive, maxNegative } = this.logPoints;

    // TODO:
    let point;

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
  }

  /**
   * Converts a chart pixel to a logarithmic point.
   *
   * @method convertPixelToPoint
   * @private
   * @param {Number} pixel The chart pixel
   * @return {Number} The logarithmic point
   * @since // TODO:
   */
  convertPixelToPoint(pixel) {
    // Grab some local pointers
    let drawArea = this.drawArea;
    let zoom = this.getCurrentZoom();

    // Define some local variables
    let pixelMin;
    let pixelMax;
    let pixelDif;
    let pixelPerc;
    let linearMin = this.convertPointToLinear(zoom.min);
    let linearMax = this.convertPointToLinear(zoom.max);
    let linearDif = linearMax - linearMin;
    let point = null;

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
  }

  /**
   * Converts a logarithmic point to a linear point.
   *
   * @method convertPointToLinear
   * @private
   * @param {Number} point The logarithmic point
   * @return {Number} The linear point
   * @since // TODO:
   */
  convertPointToLinear(point) {
    // TODO:
    let { minPositive, maxNegative } = this.logPoints;

    // TODO:
    let linear;

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
  }

  /**
   * Converts a logarithmic point to a chart pixel.
   *
   * @method convertPointToPixel
   * @private
   * @param {Number} point The logarithmic point
   * @return {Number} The chart pixel
   * @since // TODO:
   */
  convertPointToPixel(point) {
    // Grab some local pointers
    let drawArea = this.drawArea;
    let zoom = this.getCurrentZoom();

    // Define some local variables
    let linearMin = this.convertPointToLinear(zoom.min);
    let linearMax = this.convertPointToLinear(zoom.max);
    let linearPerc = ((this.convertPointToLinear(point) - linearMin) / (linearMax - linearMin));
    let pixelMin;
    let pixelMax;
    let pixelDif;
    let pixel = null;

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
  }

  /**
   * Converts a logarithmic point to a power of the base.
   *
   * @method convertPointToPower
   * @private
   * @param {Number} point The logarithmic point
   * @return {Number} The poser of the base
   * @since // TODO:
   */
  convertPointToPower(point) {
    // Return the power value
    return Math.log(point) / Math.log(this.base);
  }

  /**
   * Converts a logarithmic point to a power of the base.
   *
   * @method convertPowerToPoint
   * @private
   * @param {Number} power The poser of the base
   * @return {Number} The logarithmic point
   * @since // TODO:
   */
  convertPowerToPoint(power) {
    // Return the point value
    return Math.pow(this.base, power);
  }
};
