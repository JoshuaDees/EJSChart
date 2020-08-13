import EJSC from '../EJSC.es6';
import Inheritable from '../class/Inheritable.es6';

/**
 * The top level Formatter class is used as a base for all label formatters.
 * It defines a format() method as a guide for descendants.
 * The format method is required to be overridden in all descendant classes in order to function properly when used with the chart classes.
 *
 * @private
 * @constructor
 * @class EJSC.Formatter
 * @extends EJSC.Inheritable
 * @param {Object} [options={}] The config options to apply
 * @since 1.0.0
 */
export default EJSC.Formatter = class Formatter extends Inheritable {
  /**
   * Formats the value for display.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @method format
   * @param {*} value The value to format
   * @return {String} The formatted value
   * @since 1.0.0
   */
  format(value) {
    // Return the default value
    return value;
  }
};
