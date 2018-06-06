import EJSC from '../EJSC.es6';
import Axis from './base/Axis.es6';
import Util from '../util/Util.es6';

/**
 * TODO:
 *
 * @class EJSC['sparkline'].LinearAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
export default EJSC['sparkline'].LinearAxis = class LinearAxis extends Axis {
  /* not-sparkline:start */
  calculateCross(point1, point2, coordinate) {
    // Define some local variables
    var x = coordinate;
    var y = coordinate;
    var x1 = point1.x;
    var y1 = point1.y;
    var x2 = point2.x;
    var y2 = point2.y;

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
    return {
      x: x,
      y: y
    };
  }
  /* not-sparkline:end */

  /**
   * Calculates the extremes for the axis.
   *
   * @method calculateExtremes
   * @private
   * @since 3.0.0
   */
  calculateExtremes() {
    // Grab some local pointers
    var drawArea = this.drawArea;
    var orientation = this.orientation;
    var padding = this.padding;
    var extremes = this.extremes;
    var visibleSeries = this.getVisibleSeries();

    // Define some local variables
    var dataPoint = orientation === 'vertical' ? 'y' : 'x';
    var spacing = 0;
    var min = null;
    var max = null;
    var scale;

    // Reset the extremes
    Util.merge(extremes, {
      min: null,
      max: null
    });

    // If there are no visible series, we can't calculate the extremes
    if (visibleSeries.length <= 0) {
      return;
    }

    // Loop through each of the visible series
    Util.forEach(visibleSeries, function(series) {
      // Calculate the min and max range
      Util.forEach(series.data, function(point) {
        Util.forEach(series.dataPoints[dataPoint], function(property) {
          min = Util.min([min, point[property]]);
          max = Util.max([max, point[property]]);
        });
      });

      // Calculate the series spacing
      spacing = Util.max([spacing, series.calculateSpacing()]);
    });

    // Add the series spacing to the padding
    padding += spacing - 1;

    // Determine the scale based on the axis' orientation
    switch (orientation) {
      case 'horizontal':
        scale = ((max - min) / (drawArea.right - drawArea.left - (padding * 2)));
        break;

      case 'vertical':
        scale = ((max - min) / (drawArea.bottom - drawArea.top - (padding * 2)));
        break;
    }

    // Update the extremes with the padding
    Util.merge(extremes, {
      min: min - (scale * padding),
      max: max + (scale * padding)
    });
  }

  /**
   * Calculates the axis' ticks based on the attached series' data.
   *
   * @method calculateTicks
   * @private
   * @return {Array} The list of ticks
   * @since 3.0.0
   */
  calculateTicks() {
    // Grab some local pointers
    var zoom = this.getCurrentZoom();

    // Define some local variables
    var min = zoom.min;
    var max = zoom.max;
    var range = max - min;
    var interval = Math.pow(10, Math.floor(Math.log10(range)));
    var count = 3;
    var increment;
    var start;
    var i;
    var ticks = [];

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
   * @since 3.0.0
   */
  convertPixelToPoint(pixel) {
    // Grab some local pointers
    var drawArea = this.drawArea;
    var zoom = this.getCurrentZoom();

    // Define some local variables
    var pixelMin;
    var pixelMax;
    var pixelDif;
    var pixelPerc;
    var pointMin = zoom.min;
    var pointMax = zoom.max;
    var pointDif = pointMax - pointMin;
    var point = null;

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
   * @since 3.0.0
   */
  convertPointToPixel(point) {
    // Grab some local pointers
    var drawArea = this.drawArea;
    var zoom = this.getCurrentZoom();

    // Define some local variables
    var pointMin = zoom.min;
    var pointMax = zoom.max;
    var pointPerc = ((point - pointMin) / (pointMax - pointMin));
    var pixelMin;
    var pixelMax;
    var pixelDif;
    var pixel = null;

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
