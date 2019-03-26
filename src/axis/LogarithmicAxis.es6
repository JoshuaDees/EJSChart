import EJSC from '../EJSC.es6';
import Axis from './base/Axis.es6';
import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import $Variable from '../util/Variable.es6';

/**
 * TODO:
 *
 * @class EJSC['sparkline'].LogarithmicAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
export default EJSC['sparkline'].LogarithmicAxis = class LogarithmicAxis extends Axis {
  // getter
  getBase() {
    // Return the current base
    return this.base;
  }

  // setter
  setBase(base, apply) {
    // Update the current base
    this.base = base;

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

  // TODO:
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
    visibleSeries.forEach(series => {
      // Calculate the min and max range
      series.data.forEach(point => {
        series.dataPoints[dataPoint].forEach(property => {
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

    if (!$Variable.isNil(zeroValue) || (!$Variable.isNil(minPositive) && !$Variable.isNil(maxNegative))) {
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

  // TODO:
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

  // TODO:
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

  // TODO:
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

  // TODO:
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

  // TODO:
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

  // TODO:
  convertPointToPower(point) {
    // Calculate the power value
    let power = Math.log(point) / Math.log(this.base);

    // Return the power value
    return power;
  }

  // TODO:
  convertPowerToPoint(power) {
    // Calculate the point value
    let point = Math.pow(this.base, power);

    // Return the point value
    return point;
  }
};
