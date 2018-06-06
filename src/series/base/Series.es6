import EJSC from '../../EJSC.es6';
import Class from '../../class/Class.es6';
import Util from '../../util/Util.es6';

/**
 * Holds all of the common code to all of the series.
 *
 * @class EJSC['sparkline'].Series
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
export default EJSC['sparkline'].Series = class Series extends Class {
  /**
   * Defines the color of the series.
   *
   * @attribute {String} color
   * @default null
   * @since 3.0.0
   */

  // getter
  getColor() {
    // Return the current color
    return this.color;
  }

  // setter
  setColor(color, apply) {
    // Update the current color
    this.color = color;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * Defines the title of the series.
   *
   * @attribute {String} title
   * @default null
   * @since 3.0.0
   */

  // getter
  getTitle() {
    // Return the current title
    return this.title;
  }

  // setter
  setTitle(title, apply) {
    // Update the current title
    this.title = title;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * Defines if the series if visible or not.
   *
   * @attribute {Boolean} visible
   * @default true
   * @since 3.0.0
   */

  // getter
  getVisible() {
    // Return the current visible
    return this.visible;
  }

  // setter
  setVisible(visible, apply) {
    // Store the current visible
    this.visible = visible;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * Holds a pointer to this series' owner chart.
   *
   * @property {EJSC['sparkline'].Chart} chart
   * @private
   * @default null
   * @since 3.0.0
   */

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
   * @since 3.0.0
   */
  draw() {
    // Placeholder
  }

  /**
   * Determines if the series is visible or not.
   *
   * @method isVisible
   * @private
   * @return {Boolean} If the series is visible or not
   * @since 3.0.0
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
   * @param {EJSC.Chart} chart The owner chart
   * @param {Object} options Default options to apply if not defined
   * @since 3.0.0
   */
  prepare(chart, options) {
    // Store the owner chart
    this.chart = chart;

    // Update any options that haven't been defined
    Util.merge(this, options);
  }

  // TODO: document Series.setOpacity
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
   * @since 3.0.0
   */
  update() {
    // Redraw the chart
    if (Util.has(this, 'chart.redraw')) {
      this.chart.redraw();
    }
  }
};
