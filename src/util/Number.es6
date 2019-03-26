import EJSC from '../EJSC.es6';
import $Variable from './Variable.es6';

/**
 * Houses all of the utility methods for dealing with numbers.
 *
 * @class EJSC.Number
 * @private
 * @since 3.0.0
 */
export default EJSC.Number = new class {
  /**
   * Clamps number within the inclusive lower and upper bounds.
   *
   * @example
   *
   *   EJSC.Number.clamp(-10, -5, 5);
   *   // => -5
   *
   *   EJSC.Number.clamp(10, -5, 5);
   *   // => 5
   *
   * @method capitalize
   * @param {Number} number The number to clamp
   * @param {Number} lower The lower bound
   * @param {Number} uppser The upper bound
   * @return {String} The clamped number
   * @since 3.0.0
   */
  clamp(number, lower, upper) {
    // Return the clamped number
    return this.max(lower, this.min(upper, number));
  }

  /**
   * Computes the maximum value of array.
   * If array is empty or falsey, undefined is returned.
   *
   * @example
   *
   *   EJSC.Number.max(4, 2, 8, 6);
   *   // => 8
   *
   *   EJSC.Number.max();
   *   // => null
   *
   * @method max
   * @param {...Array} numbers The numbers to iterate over
   * @return {Number} The maximum value
   * @since 3.0.0
   */
  max(...numbers) {
    // Define some local variables
    let max = null;

    // Loop through the arguments
    numbers.forEach(value => {
      // If there is no current max, or the new value is greater than the current max
      if ($Variable.isNil(max) || max < value) {
        // Update the max
        max = value;
      }
    });

    // Return the max
    return max;
  }

  /**
   * Computes the minimum value of array.
   * If array is empty or falsey, undefined is returned.
   *
   * @example
   *
   *   EJSC.Number.min(4, 2, 8, 6);
   *   // => 2
   *
   *   EJSC.Number.min();
   *   // => null
   *
   * @method min
   * @param {...Array} numbers The numbers to iterate over
   * @return {Number} The minimum value
   * @since 3.0.0
   */
  min(...numbers) {
    // Define some local variables
    let min = null;

    // Loop through the arguments
    numbers.forEach(value => {
      // If there is no current min, or the new value is less than the current min
      if ($Variable.isNil(min) || min > value) {
        // Update the min
        min = value;
      }
    });

    // Return the min
    return min;
  }

  /**
   * Computes number rounded to precision.
   *
   * @example
   *
   *   EJSC.Number.round(4.006);
   *   // => 4
   *
   *   EJSC.Number.round(4.006, 2);
   *   // => 4.01
   *
   *   EJSC.Number.round(4060, -2);
   *   // => 4100
   *
   * @method round
   * @param {Number} number The number to round
   * @param {Number} [precision=0] The precision to round to
   * @return {Number} The rounded number
   * @since 3.0.0
   */
  round(number, precision = 0) {
    // Return the rounded number
    return Number(Math.round(number + 'e' + precision) + 'e-' + precision);
  }
}();
