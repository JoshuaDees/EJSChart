import $Number from '../util/Number.es6';
import $Object from '../util/Object.es6';
import $String from '../util/String.es6';
import EJSC from '../EJSC.es6';
import Formatter from './Formatter.es6';

/**
 * Use this formatter when you want more control over the display of numeric values in your charts.
 * It can be applied to the chart axis as well as series hints.
 *
 * @example
 *   ```
 *   // Create a basic NumberFormatter
 *   new EJSC.NumberFormatter();
 *
 *   // Create a NumberFormatter that forces 2 decimals to be displayed
 *   new EJSC.NumberFormatter({
 *     minimumDecimals: 2
 *   });
 *   ```
 *
 * @constructor
 * @class EJSC.NumberFormatter
 * @extends EJSC.Formatter
 * @param {Object} [options={}] The config options to apply
 * @since 1.0.0
 */
export default EJSC.NumberFormatter = class NumberFormatter extends Formatter {
  /**
   * Defines the currency alignment.
   *
   * Valid values: 'left', 'right'
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the currency alignment to 'right'
   *   new EJSC.NumberFormatter({
   *     // currencyAlign: 'left',
   *     currencySymbol: '$'
   *   });
   *   // 0.1234 -> $0.1234
   *
   *   // Create a NumberFormatter that sets the currency alignment to 'right'
   *   new EJSC.NumberFormatter({
   *     currencyAlign: 'right',
   *     currencySymbol: '$'
   *   });
   *   // 0.1234 -> 0.1234$
   *   ```
   *
   * @attribute {String} currencyAlign
   * @default 'left'
   * @since 3.0.0
   */

  // getter
  getCurrencyAlign() {
    // Return the current currency align
    return this.currencyAlign;
  }

  // setter
  setCurrencyAlign(currencyAlign) {
    // Update the current currency align
    this.currencyAlign = currencyAlign;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the currency position.
   *
   * Valid values: 'inner', 'outer'
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the currency position to 'inner'
   *   new EJSC.NumberFormatter({
   *     currencyPosition: 'inner',
   *     currencySymbol: '$'
   *   });
   *   // -0.1234 -> -$0.1234
   *
   *   // Create a NumberFormatter that keeps the currency position as 'outer'
   *   new EJSC.NumberFormatter({
   *     // currencyPosition: 'outer',
   *     currencySymbol: '$'
   *   });
   *   // -0.1234 -> $-0.1234
   *   ```
   *
   * @attribute {String} currencyPosition
   * @default 'outer'
   * @since 3.0.0
   */

  // getter
  getCurrencyPosition() {
    // Return the current currency position
    return this.currencySymbol;
  }

  // setter
  setCurrencyPosition(currencyPosition) {
    // Update the current currency position
    this.currencyPosition = currencyPosition;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the currency symbol.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the currency symbol to ','
   *   new EJSC.NumberFormatter({
   *     currencySymbol: '$'
   *   });
   *   // 0.1234 -> $0.1234
   *   ```
   *
   * @attribute {String} currencySymbol
   * @default ''
   * @since 3.0.0
   */

  // getter
  getCurrencySymbol() {
    // Return the current currency symbol
    return this.currencySymbol;
  }

  // setter
  setCurrencySymbol(currencySymbol) {
    // Update the current currency symbol
    this.currencySymbol = currencySymbol;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the symbol to place before the decimals.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that switches the decimal symbol to ','
   *   new EJSC.NumberFormatter({
   *     decimalSymbol: ','
   *   });
   *   // 0.1234 -> 0,1234
   *   ```
   *
   * @attribute {String} decimalSymbol
   * @default '.'
   * @since 3.0.0
   */

  // getter
  getDecimalSymbol() {
    // Return the current decimal symbol
    return this.decimalSymbol;
  }

  // setter
  setDecimalSymbol(decimalSymbol) {
    // Update the current decimal symbol
    this.decimalSymbol = decimalSymbol;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the maximum decimals of the formatter.
   *
   * Valid values are 0-14.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that allows a maximum of 2 decimals
   *   new EJSC.NumberFormatter({
   *     maximumDecimals: 2
   *   });
   *   // 0.1234 -> 0.12
   *   ```
   *
   * @attribute {Integer} maximumDecimals
   * @default 14
   * @since 3.0.0
   */

  // getter
  getMaximumDecimals() {
    // Return the current maximum decimals
    return this.maximumDecimals;
  }

  // setter
  setMaximumDecimals(maximumDecimals) {
    // Update the current maximum decimals
    this.maximumDecimals = maximumDecimals;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the minimum decimals of the formatter.
   *
   * Valid values are 0-14.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that allows a minimum of 2 decimals
   *   new EJSC.NumberFormatter({
   *     minimumDecimals: 6
   *   });
   *   // 0.1234 -> 0.123400
   *   ```
   *
   * @attribute {Integer} minimumDecimals
   * @default 0
   * @since 3.0.0
   */

  // getter
  getMinimumDecimals() {
    // Return the current minimum decimals
    return this.minimumDecimals;
  }

  // setter
  setMinimumDecimals(minimumDecimals) {
    // Update the current minimum decimals
    this.minimumDecimals = minimumDecimals;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the prefix to use for negative numbers.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the prefix for negative numbers to '('
   *   new EJSC.NumberFormatter({
   *     negativePrefix: '('
   *   });
   *   // -0.1234 -> (0.1234
   *   ```
   *
   * @attribute {String} negativePrefix
   * @default '-'
   * @since 3.0.0
   */

  // getter
  getNegativePrefix() {
    // Return the current negative prefix
    return this.negativePrefix;
  }

  // setter
  setNegativePrefix(negativePrefix) {
    // Update the current negative prefix
    this.negativePrefix = negativePrefix;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the suffix to use for negative numbers.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the suffix for negative numbers to ')'
   *   new EJSC.NumberFormatter({
   *     negativeSuffix: ')'
   *   });
   *   // -0.1234 -> -0.1234)
   *   ```
   *
   * @attribute {String} negativeSuffix
   * @default ''
   * @since 3.0.0
   */

  // getter
  getNegativeSuffix() {
    // Return the current negative suffix
    return this.negativeSuffix;
  }

  // setter
  setNegativeSuffix(negativeSuffix) {
    // Update the current negative suffix
    this.negativeSuffix = negativeSuffix;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the prefix to use for positive numbers.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the prefix for positive numbers to '('
   *   new EJSC.NumberFormatter({
   *     positivePrefix: '('
   *   });
   *   // 0.1234 -> (0.1234
   *   ```
   *
   * @attribute {String} positivePrefix
   * @default '-'
   * @since 3.0.0
   */

  // getter
  getPositivePrefix() {
    // Return the current positive prefix
    return this.positivePrefix;
  }

  // setter
  setPositivePrefix(positivePrefix) {
    // Update the current positive prefix
    this.positivePrefix = positivePrefix;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the suffix to use for positive numbers.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the suffix for positive numbers to ')'
   *   new EJSC.NumberFormatter({
   *     positiveSuffix: ')'
   *   });
   *   // 0.1234 -> 0.1234)
   *   ```
   *
   * @attribute {String} positiveSuffix
   * @default ''
   * @since 3.0.0
   */

  // getter
  getPositiveSuffix() {
    // Return the current positive suffix
    return this.positiveSuffix;
  }

  // setter
  setPositiveSuffix(positiveSuffix) {
    // Update the current positive suffix
    this.positiveSuffix = positiveSuffix;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the symbol to use for separating the whole value into thousands.
   *
   * @example
   *   ```
   *   // Create a NumberFormatter that sets the thousands symbol to ','
   *   new EJSC.NumberFormatter({
   *     thousandsSymbol: ','
   *   });
   *   // 1234 -> 1,234
   *   ```
   *
   * @attribute {String} thousandsSymbol
   * @default ''
   * @since 3.0.0
   */

  // getter
  getThousandsSymbol() {
    // Return the current thousands symbol
    return this.thousandsSymbol;
  }

  // setter
  setThousandsSymbol(thousandsSymbol) {
    // Update the current thousands symbol
    this.thousandsSymbol = thousandsSymbol;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  // init
  init() {
    // super
    super.init();

    // Initialize some public properties
    this.currencyAlign = 'left';
    this.currencyPosition = 'inner';
    this.currencySymbol = '';
    this.decimalSymbol = '.';
    this.maximumDecimals = 14;
    this.minimumDecimals = 0;
    this.negativePrefix = '-';
    this.negativeSuffix = '';
    this.positivePrefix = '';
    this.positiveSuffix = '';
    this.thousandsSymbol = '';
  }

  /**
   * Formats the value for display.
   *
   * @method format
   * @param {*} value The value to format
   * @return {String} The formatted value
   * @since 1.0.0
   */
  format(value) {
    // Make sure the value is a number
    if (!$Object.isNumber(value)) {
      // TODO: error out
    }

    // Define some local variables
    let thousandsPattern = /(\d+)(\d{3})/;

    // Grab the parts of the number
    let isNegative = value < 0;
    let wholeValue = Math.floor(Math.abs(value));
    let decimalValue = $Number.round(Math.abs(value) - wholeValue, 14);

    // Convert parts of the number to strings
    wholeValue = wholeValue.toString();

    // Apply the thousands symbol
    if (this.thousandsSymbol !== '') {
      while (thousandsPattern.test(wholeValue)) {
        wholeValue = wholeValue.replace(thousandsPattern, '$1' + this.thousandsSymbol + '$2');
      }
    }

    // Apply the maximum decimals
    decimalValue = $Number.round(decimalValue, this.maximumDecimals);

    // Apply the minimum decimals
    if (decimalValue || this.minimumDecimals) {
      decimalValue = $String.padEnd(decimalValue.toString().replace(/^.+\./, ''), this.minimumDecimals, '0');
    }
    else {
      decimalValue = '';
    }

    // Return the final value
    return ([
      (this.currencyPosition === 'outer' && this.currencyAlign === 'left' ? this.currencySymbol : ''),
      (isNegative ? this.negativePrefix : this.positivePrefix),
      (this.currencyPosition === 'inner' && this.currencyAlign === 'left' ? this.currencySymbol : ''),
      wholeValue,
      (decimalValue ? this.decimalSymbol + decimalValue : ''),
      (this.currencyPosition === 'inner' && this.currencyAlign === 'right' ? this.currencySymbol : ''),
      (isNegative ? this.negativeSuffix : this.positiveSuffix),
      (this.currencyPosition === 'outer' && this.currencyAlign === 'right' ? this.currencySymbol : '')
    ]).join('');
  }
};
