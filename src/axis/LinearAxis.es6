import $Array from '../util/Array.es6';
import $Object from '../util/Object.es6';
import $Number from '../util/Number.es6';
import EJSC from '../EJSC.es6';
import Axis from './base/Axis.es6';

/**
 * LinearAxis is an axis using a linear scale.
 *
 * @example
 *   ```
 *   // TODO:
 *   ```
 *
 * @class EJSC.LinearAxis
 * @extends EJSC.Axis
 * @constructor
 * @param {Object} options The config options
 * @since @todo
 */
export default EJSC['sparkline'].LinearAxis = class LinearAxis extends Axis {
  /* not-sparkline:start */
  /**
   * Calculates where a line segment between two given points croses the axis at a given coordinate.
   *
   * @method calculateCross
   * @private
   * @param {Object} point1 The first point
   * @param {Object} point2 The second point
   * @param {Number} coordinate The coordinate to cross at
   * @return {Object} The crossed coordinates
   * @since @todo
   */
  calculateCross(point1, point2, coordinate) {
    // Define some local variables
    let x = coordinate;
    let y = coordinate;
    let { x: x1, y: y1 } = point1;
    let { x: x2, y: y2 } = point2;

    // Determine the cross points based on the side
    switch (this.orientation) {
      case 'horizontal':
        x = (((coordinate - y1) / (y2 - y1)) * (x2 - x1)) + x1;
        break;

      case 'vertical':
        y = (((coordinate - x1) / (x2 - x1)) * (y2 - y1)) + y1;
        break;
    }

    // Return the cross coordinates
    return { x, y };
  }
  /* not-sparkline:end */

  /**
   * Calculates the extremes for the axis.
   *
   * @method calculateExtremes
   * @private
   * @since @todo
   */
  calculateExtremes() {
    // Grab some local pointers
    let { drawArea, orientation, padding, extremes } = this;

    // Define some local variables
    let dataPoint = orientation === 'vertical' ? 'y' : 'x';

    // Reset the extremes
    $Object.merge(extremes, {
      min: null,
      max: null
    });

    // Loop through each of the visible series
    $Array(this.getVisibleSeries())
      .filter(series => $Object.has(series, 'calculateExtremes'))
      .forEach(series => {
        // Calculate the series' extremes
        let seriesExtremes = series.calculateExtremes();

        // Update the min and max range
        let min = seriesExtremes[dataPoint + 'Min'];
        let max = seriesExtremes[dataPoint + 'Max'];

        // Calculate the series spacing
        let spacing = series.calculateSpacing();
        let paddingMin = padding + spacing[dataPoint + 'Max'] - 1;
        let paddingMax = padding + spacing[dataPoint + 'Min'] - 1;

        // Determine the scale based on the axis' orientation
        let scale;
        switch (orientation) {
          case 'horizontal':
            scale = ((max - min) / (drawArea.right - drawArea.left - (paddingMin + paddingMax)));
            break;

          case 'vertical':
            scale = ((max - min) / (drawArea.bottom - drawArea.top - (paddingMin + paddingMax)));
            break;
        }

        // Update the values with padding
        min = min - (scale * paddingMin);
        max = max + (scale * paddingMax);

        // Update the extremes
        $Object.merge(extremes, {
          min: $Number.min(extremes.min, min),
          max: $Number.max(extremes.max, max)
        });
      });
  }

  /**
   * Calculates the axis' ticks based on the attached series' data.
   *
   * @method calculateTicks
   * @private
   * @return {Array} The list of ticks
   * @since @todo
   */
  calculateTicks() {
    // Grab some local pointers
    let zoom = this.getCurrentZoom();

    // Define some local variables
    let { min, max } = zoom;
    let range = max - min;
    let interval = Math.pow(10, Math.floor(Math.log10(range)));
    let count = 3;
    let increment;
    let start;
    let i;
    let ticks = [];

    // Set up the increment
    if (range / interval >= count) {
      increment = interval;
    }
    else if (range / (interval / 2) >= count) {
      increment = interval / 2;
    }
    else {
      increment = interval / 5;
    }

    // Calculate the starting point
    start = Math.ceil(min / increment) * increment;

    // Build the list of ticks
    for (i = start; i <= max; i += increment) {
      ticks.push(i);
    }

    // Return the list of ticks
    return ticks;
  }

  /**
   * Converts from chart pixel to point.
   *
   * @method convertPixelToPoint
   * @private
   * @param {Number} pixel The pixel to convert
   * @return {Number} The point
   * @since @todo
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
    let { min: pointMin, max: pointMax } = zoom;
    let pointDif = pointMax - pointMin;
    let point = null;

    // There needs to be a current zoom to convert
    if (pointMin !== null && pointMax !== null) {
      // Calculate the coordinate based on the axis' orientation
      switch (this.orientation) {
        case 'horizontal':
          pixelMin = drawArea.left;
          pixelMax = drawArea.right - 1;
          pixelDif = pixelMax - pixelMin;
          pixelPerc = ((pixel - pixelMin) / pixelDif);

          if (this.reverse === false) {
            point = pointMin + (pointDif * pixelPerc);
          }
          else {
            point = pointMax - (pointDif * pixelPerc);
          }

          break;

        case 'vertical':
          pixelMin = drawArea.top;
          pixelMax = drawArea.bottom - 1;
          pixelDif = pixelMax - pixelMin;
          pixelPerc = ((pixel - pixelMin) / pixelDif);

          if (this.reverse === false) {
            point = pointMax - (pointDif * pixelPerc);
          }
          else {
            point = pointMin + (pointDif * pixelPerc);
          }

          break;
      }
    }

    // Return the point
    return point;
  }

  /**
   * Converts from chart point to pixel.
   *
   * @method convertPointToPixel
   * @private
   * @param {Number} point The point to convert
   * @return {Number} The pixel
   * @since @todo
   */
  convertPointToPixel(point) {
    // Grab some local pointers
    let drawArea = this.drawArea;
    let zoom = this.getCurrentZoom();

    // Define some local variables
    let { min: pointMin, max: pointMax } = zoom;
    let pointPerc = ((point - pointMin) / (pointMax - pointMin));
    let pixelMin;
    let pixelMax;
    let pixelDif;
    let pixel = null;

    // There needs to be a current zoom to convert
    if (pointMin !== null && pointMax !== null) {
      // Determine the coordinate based on the axis' orientation
      switch (this.orientation) {
        case 'horizontal':
          pixelMin = drawArea.left;
          pixelMax = drawArea.right - 1;
          pixelDif = pixelMax - pixelMin;

          if (this.reverse === false) {
            pixel = pixelMin + (pixelDif * pointPerc);
          }
          else {
            pixel = pixelMax - (pixelDif * pointPerc);
          }

          break;

        case 'vertical':
          pixelMin = drawArea.top;
          pixelMax = drawArea.bottom - 1;
          pixelDif = pixelMax - pixelMin;

          if (this.reverse === false) {
            pixel = pixelMax - (pixelDif * pointPerc);
          }
          else {
            pixel = pixelMin + (pixelDif * pointPerc);
          }

          break;
      }
    }

    // Return the pixel
    return pixel;
  }
};
