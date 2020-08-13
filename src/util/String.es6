// TODO: $String documentation
/**
 * @class $String
 * @private
 */
let $String = (string) => new class {
  // constructor
  constructor($string) {
    this.result = $string;
  }

  /**
  * Converts the first character of string to upper case and the remaining to lower case.
  *
  * @example
  *   ```
  *   $String('FRED').capitalize().result;
  *   // => 'Fred'
  *   ```
  *
  * @method capitalize
  * @chainable
  * @since @todo
  */
  capitalize() {
    // Return the capitalized string
    this.result = this.result.substr(0, 1).toUpperCase() + this.result.substr(1).toLowerCase();

    // Chain
    return this;
  }

  /**
  * Pads string on the right side if it's shorter than length.
  * Padding characters are truncated if they exceed length.
  *
  * @example
  *   ```
  *   $String('abc').padEnd(6).result;
  *   // => 'abc   '
  *
  *   $String('abc').padEnd(6, '_-').result;
  *   // => 'abc_-_'
  *
  *   $String('abc').padEnd(3).result;
  *   // => 'abc'
  *   ```
  *
  * @method padEnd
  * @param {String} [length=0] The padding length
  * @param {String} [chars=' '] The string used as padding
  * @chainable
  * @since @todo
  */
  padEnd(length = 0, chars = ' ') {
    // Pad the end of the string
    while (this.result.length < length) {
      // TODO: Fix to truncate if needed
      this.result += chars;
    }

    // Chain
    return this;
  }

  // TODO:
  padStart(length = 0, chars = ' ') {
    // Pad the end of the string
    while (this.result.length < length) {
      // TODO: Fix to truncate if needed
      this.result = chars + this.result;
    }

    // Chain
    return this;
  }

  /**
   * Converts the first character of string to upper case.
   *
   * @example
   *   ```
   *   $String('fred').upperFirst().result;
   *   // => 'Fred'
   *
   *   $String('FRED').upperFirst().result;
   *   // => 'FRED'
   *   ```
   *
   * @method upperFirst
   * @chainable
   * @since @todo
   */
  upperFirst() {
    // Return the string with the first character in upper case
    this.result = this.result.substr(0, 1).toUpperCase() + this.result.substr(1);

    // Chain
    return this;
  }
}(string);

/**
* Converts the first character of string to upper case and the remaining to lower case.
*
* @example
*   ```
*   $String.capitalize('FRED');
*   // => 'Fred'
*   ```
*
* @static
* @method capitalize
* @param {String} string The string to capitalize
* @return {String} The capitalized value
* @since @todo
*/
$String.capitalize = (string) => string && $String(string).capitalize().result;

/**
* Pads string on the right side if it's shorter than length.
* Padding characters are truncated if they exceed length.
*
* @example
*   ```
*   $String.padEnd('abc', 6);
*   // => 'abc   '
*
*   $String.padEnd('abc', 6, '_-');
*   // => 'abc_-_'
*
*   $String.padEnd('abc', 3);
*   // => 'abc'
*   ```
*
* @static
* @method padEnd
* @param {String} string The string to pad
* @param {String} [length=0] The padding length
* @param {String} [chars=' '] The string used as padding
* @chainable
* @since @todo
*/
$String.padEnd = (string, length = 0, chars = ' ') => string && $String(string).padEnd(length, chars).result;

$String.padStart = (string, length = 0, chars = ' ') => string && $String(string).padStart(length, chars).result;

/**
 * Converts the first character of string to upper case.
 *
 * @example
 *   ```
 *   $String.upperFirst('fred');
 *   // => 'Fred'
 *
 *   $String.upperFirst('FRED');
 *   // => 'FRED'
 *   ```
 *
 * @static
 * @method upperFirst
 * @param {String} string The string to convert
 * @return {String} The upper cased value
 * @since @todo
 */
$String.upperFirst = (string) => string && $String(string).upperFirst().result;

export default $String;
