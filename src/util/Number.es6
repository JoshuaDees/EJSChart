import $Array from './Array.es6';
import $Object from './Object.es6';

// TODO: $Number documentation
/**
 * @class $Number
 * @private
 */
let $Number = (number) => new class {
  // constructor
  constructor($number) {
    this.result = $number;
  }

  /**
   * Clamps number within the inclusive lower and upper bounds.
   *
   * @example
   *   ```
   *   $Number(-10).clamp(-5, 5).result;
   *   // => -5
   *
   *   $Number(10).clamp(-5, 5).result;
   *   // => 5
   *   ```
   *
   * @method clamp
   * @param {Number} lower The lower bound
   * @param {Number} uppser The upper bound
   * @chainable
   * @since @todo
   */
  clamp(lower, upper) {
    // Return the clamped number
    this.result = $Number.max(lower, $Number.min(upper, this.result));

    // Chain
    return this;
  }

  /**
   * Computes number rounded to precision.
   *
   * @example
   *   ```
   *   $Number(4.006).round().result;
   *   // => 4
   *
   *   $Number(4.006).round(2).result;
   *   // => 4.01
   *
   *   $Number(4060).round(-2).result;
   *   // => 4100
   *   ```
   *
   * @method round
   * @param {Number} [precision=0] The precision to round to
   * @chainable
   * @since @todo
   */
  round(precision = 0) {
    // Return the rounded number
    this.result = Number(Math.round(this.result + 'e' + precision) + 'e' + (-precision));

    // Chain
    return this;
  }
}(number);

/**
 * Clamps number within the inclusive lower and upper bounds.
 *
 * @example
 *   ```
 *   $Number.clamp(-10, -5, 5);
 *   // => -5
 *
 *   $Number.clamp(10, -5, 5);
 *   // => 5
 *   ```
 *
 * @static
 * @method clamp
 * @param {Number} number The number to clamp
 * @param {Number} lower The lower bound
 * @param {Number} uppser The upper bound
 * @return {Number} The clamped value
 * @since @todo
 */
$Number.clamp = (number, lower, upper) => number && $Number(number).clamp(lower, upper).result;

/**
 * Computes the maximum value of array.
 * If array is empty or falsey, undefined is returned.
 *
 * @example
 *   ```
 *   $Number.max(4, 2, 8, 6);
 *   // => 8
 *
 *   $Number.max();
 *   // => null
 *   ```
 *
 * @static
 * @method max
 * @param {...Array} numbers The numbers to iterate over
 * @return {Number} The maximum value
 * @since @todo
 */
$Number.max = (...numbers) => {
    // Determine the max
    let max = $Array(numbers)
      .filter(value => !isNaN(value) && $Object.isNumber(value))
      .sort((a, b) => a - b)
      .last();

    // Return the max
    return $Object.isNil(max) ? null : max;
};

/**
 * Computes the minimum value of array.
 * If array is empty or falsey, undefined is returned.
 *
 * @example
 *   ```
 *   $Number.min(4, 2, 8, 6);
 *   // => 2
 *
 *   $Number.min();
 *   // => null
 *   ```
 *
 * @static
 * @method min
 * @param {...Array} numbers The numbers to iterate over
 * @return {Number} The minimum value
 * @since @todo
 */
$Number.min = (...numbers) => {
  // Determine the min
  let min = $Array(numbers)
    .filter(value => !isNaN(value) && $Object.isNumber(value))
    .sort((a, b) => a - b)
    .first();

  // Return the min
  return $Object.isNil(min) ? null : min;
};

/**
 * Computes number rounded to precision.
 *
 * @example
 *   ```
 *   $Number.round(4.006);
 *   // => 4
 *
 *   $Number.round(4.006, 2);
 *   // => 4.01
 *
 *   $Number.round(4060, -2);
 *   // => 4100
 *   ```
 *
 * @static
 * @method round
 * @param {Number} number The number to round
 * @param {Number} [precision=0] The precision to round to
 * @return {Number} The rounded value
 * @since @todo
 */
$Number.round = (number, precision = 0) => number && $Number(number).round(precision).result;

export default $Number;
