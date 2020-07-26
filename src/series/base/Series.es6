import $Object from '../../util/Object.es6';
import EJSC from '../../EJSC.es6';
import Inheritable from '../../class/Inheritable.es6';

/**
 * Holds all of the common code to all of the series.
 *
 * @class EJSC.Series
 * @private
 * @extends EJSC.Inheritable
 * @since @todo
 */
export default EJSC['sparkline'].Series = class Series extends Inheritable {
  /**
   * Defines the color of the series.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {String} color
   * @default null
   * @since @todo
   */

  // getter
  getColor() {
    // Return the current color
    return this.color;
  }

  // setter
  setColor(color) {
    // Update the current color
    this.color = color;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the title of the series.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {String} title
   * @default null
   * @since @todo
   */

  // getter
  getTitle() {
    // Return the current title
    return this.title;
  }

  // setter
  setTitle(title) {
    // Update the current title
    this.title = title;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines if the series if visible or not.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Boolean} visible
   * @default true
   * @since @todo
   */

  // getter
  getVisible() {
    // Return the current visible
    return this.visible;
  }

  // setter
  setVisible(visible) {
    // Store the current visible
    this.visible = visible;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Holds a pointer to this series' owner chart.
   *
   * @property {EJSC['sparkline'].Chart} chart
   * @default null
   * @since @todo
   */

  // getter
  getChart() {
    // Return the current chart
    return this.chart;
  }

  // init
  init() {
    // super
    super.init();

    // Initialize some public properties
    this.color = null;
    this.title = null;
    this.visible = true;

    // Initialize some private properties
    this.chart = null;
  }

  /**
   * Draws the series to its owner chart's drawing engine.
   *
   * @method draw
   * @private
   * @since @todo
   */
  draw() {
    // no-op
  }

  /**
   * Determines if the series is visible or not.
   *
   * @method isVisible
   * @private
   * @return {Boolean} If the series is visible or not
   * @since @todo
   */
  isVisible() {
    // Return if this series is visible or not
    return this.visible;
  }

  /**
   * Links the series to its owner chart.
   *
   * @method prepare
   * @private
   * @param {EJSC['sparkline'].Chart} chart The owner chart
   * @param {Object} options Default options to apply if not defined
   * @since @todo
   */
  prepare(chart, options) {
    // Store the owner chart
    this.chart = chart;

    // Update any options that haven't been defined
    $Object.merge(this, options);
  }

  /**
   * Sets the given opacity of a given color.
   *
   * @method setOpacity
   * @private
   * @param {String} color The color
   * @param {Number} opacity The opacity
   * @return {String} The final color
   * @since @todo
   */
  setOpacity(color, opacity) {
    // Return the string with the updated opacity
    return color
      .replace(/^rgba?\(/, 'rgba(')
      .replace(/\)$/, ',' + opacity + ')')
      .replace(/\s/g, '')
      .split(',')
      .slice(0, 3)
      .join(',') + ',' + opacity + ')';
  }

  /**
   * Fires when a property of the class has changed.
   *
   * @method update
   * @private
   * @since @todo
   */
  update() {
    // Redraw the chart
    $Object(this).invoke('chart.redraw');
  }
};
