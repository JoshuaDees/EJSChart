import $Array from './util/Array.es6';
import $Element from './util/Element.es6';
import $Object from './util/Object.es6';

/**
 * @module EJSC
 * @since 1.0.0
 */
/**
 * Top level namespace for all classes and variables used by the Emprise JavaScript Charts package.
 * Use of this namespace prevents variable name collisions with other available JavaScript packages.
 *
 * @static
 * @class EJSC
 * @since 1.0.0
 */
export default window.EJSC = new class EJSC {
  /**
   * Array of prepared functions to be called when the window loads.
   *
   * @private
   * @property {Array} prepared
   * @default []
   * @since 3.0.0
   */

  /**
   * Prepares a callback function to be called when the window loads.
   *
   * @example
   *   ```
   *   // Prepare code for EJSC to run on window load
   *   EJSC.prepare(() => {
   *     // Do something...
   *   });
   *   ```
   *
   * @method prepare
   * @param {Function} callback The callback function
   * @since 3.0.0
   */
  prepare(callback) {
    // Add the callback function to the prepared list
    if ($Object.isFunction(callback)) {
      this.prepared.push(callback);
    }
  }

  // constructor
  constructor() {
    // Initialize the private properties
    this.prepared = [];

    // Attach the load method to the window load event
    $Element.on(window, 'load', this.load.bind(this));
  }

  /**
   * Runs each of the prepared callback functions when the page loads.
   *
   * @private
   * @method load
   * @since 3.0.0
   */
  load() {
    // Run all of the prepared callback functions
    $Array(this.prepared).forEach(callback => callback.call(this));
  }
}();

/* sparkline:start */
/*
 * The namespace for all of the sparkline classes and variables used by the Emprise JavaScript Charts package.
 *
 * @namespace EJSC.sparkline
 * @since @todo
 */
window.EJSC.sparkline = {};
/* sparkline:end */
