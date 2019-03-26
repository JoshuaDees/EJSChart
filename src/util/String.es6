import EJSC from '../EJSC.es6';

/**
 * Houses all of the utility methods for dealing with strings.
 *
 * @class EJSC.String
 * @private
 * @since 3.0.0
 */
export default EJSC.String = new class {
  /**
   * Converts the first character of string to upper case and the remaining to lower case.
   *
   * @example
   *
   *   EJSC.String.capitalize('FRED');
   *   // => 'Fred'
   *
   * @method capitalize
   * @param {String} string The string to capitalize
   * @return {String} The capitalized string
   * @since 3.0.0
   */
  capitalize(string) {
    // Return the capitalized string
    return string && (string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase());
  }

  /**
   * Converts the first character of string to upper case.
   *
   * @example
   *
   *   EJSC.String.upperFirst('fred');
   *   // => 'Fred'
   *
   *   EJSC.String.upperFirst('FRED');
   *   // => 'FRED'
   *
   * @method upperFirst
   * @param {String} string The string to convert
   * @return {String} The converted string
   * @since 3.0.0
   */
  upperFirst(string) {
      // Return the string with the first character in upper case
      return string && (string.substr(0, 1).toUpperCase() + string.substr(1));
  }
}();
