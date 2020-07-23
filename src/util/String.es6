// TODO: $String documentation
let $String = (string) => new class {
  // constructor
  constructor($string) {
    this.result = $string;
  }

  /**
  * Converts the first character of string to upper case and the remaining to lower case.
  *
  * @example
  *
  *   $String('FRED').capitalize().result;
  *   // => 'Fred'
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
   * Converts the first character of string to upper case.
   *
   * @example
   *
   *   $String('fred').upperFirst().result;
   *   // => 'Fred'
   *
   *   $String('FRED').upperFirst().result;
   *   // => 'FRED'
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
*
*   $String.capitalize('FRED');
*   // => 'Fred'
*
* @static
* @method capitalize
* @return {String} The capitalized value
* @since @todo
*/
$String.capitalize = (string) => string && $String(string).capitalize().result;

/**
 * Converts the first character of string to upper case.
 *
 * @example
 *
 *   $String.upperFirst('fred');
 *   // => 'Fred'
 *
 *   $String.upperFirst('FRED');
 *   // => 'FRED'
 *
 * @static
 * @method upperFirst
 * @return {String} The upper cased value
 * @since @todo
 */
$String.upperFirst = (string) => string && $String(string).upperFirst().result;

export default $String;
