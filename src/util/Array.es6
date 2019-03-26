import EJSC from '../EJSC.es6';

/**
 * Houses all of the utility methods for dealing with arrays.
 *
 * @class EJSC.Array
 * @private
 * @since 3.0.0
 */
export default EJSC.Array = new class {
  /**
   * Creates an array with all falsey values removed.
   * The values false, null, 0, "", undefined, and NaN are falsey.
   *
   * @example
   *
   *   EJSC.Array.compact([0, 1, false, 2, '', 3]);
   *   // => [1, 2, 3]
   *
   * @method compact
   * @param {Array} array The array to compact
   * @return {Array} The new array of filtered values
   * @since 3.0.0
   */
  compact(array) {
    // Returned the compacted array
    return this.without(array, false, null, 0, '', undefined, NaN);
  }

  /**
   * Creates a slice of array from start up to, but not including, end.
   *
   * @example
   *
   *   // TODO: example
   *
   * @method slice
   * @param {Array} array The array to slice
   * @param {Number} [start=0] The start position
   * @param {Number} [end=array.length] The end position
   * @return {Array} The slice of array
   * @since 3.0.0
   */
  slice(array, start = 0, end = array.length) {
      // Return the sliced array
      return array && [].slice.call(array, start, end);
  }

  /**
   * Creates an array excluding all given values using SameValueZero for equality comparisons.
   *
   * @example
   *
   *   EJSC.Array.without([2, 1, 2, 3], 1, 2);
   *   // => [3]
   *
   * @method without
   * @param {Array} array The array to inspect
   * @param {*} [...values] The values to exclude
   * @return {Array} The new array of filtered values
   * @since 3.0.0
   */
  without(array, ...values) {
      // Define some variables
      let results = [];

      // Loop through the items
      array.forEach(value => {
        // If the current item does not need to be removed, push it onto the results array
        if (!values.includes(value)) {
          results.push(value);
        }
      });

      // Return the results array
      return results;
  }
}();
