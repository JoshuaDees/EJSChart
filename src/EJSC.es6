/**
 * Houses all of the code for the EJSChart project.
 *
 * @module EJSC
 * @since 3.0.0
 */
export default window.EJSC = new class EJSC {
  /**
   * Holds the list of callback functions to run whne the window loads.
   *
   * @property {Array} prepared
   * @private
   * @default []
   * @since 3.0.0
   */

  /**
   * Prepares a callback function to be called when the window loads.
   *
   * @method prepare
   * @param {Function} callback The callback function
   * @since 3.0.0
   */
  prepare(callback) {
    // Add the callback function to the prepared list
    if (callback && ({}).toString.call(callback) === '[object Function]') {
      this.prepared.push(callback);
    }
  }

  // constructor
  constructor() {
    // Initialize some private properties
    this.prepared = [];

    // Attach the load method to the window load event
    if (window.attachEvent) {
      window.attachEvent('onload', this.load.bind(this));
    }
    else {
      window.addEventListener('load', this.load.bind(this), true);
    }
  }

  /**
   * Runs all of the prepared callback functions when the page loads.
   *
   * @method load
   * @private
   * @since 3.0.0
   */
  load() {
    // Run all of the prepared callback functions
    for (let i = 0; i < this.prepared.length; i++) {
      this.prepared[i].call(this);
    }
  }
}();

/* sparkline:start */
window.EJSC.sparkline = {};
/* sparkline:end */
