/**
 * Houses all of the code for the EJSChart project.
 *
 * @module EJSC
 * @since 3.0.0
 */
window.EJSC = (window.EJSC || new function() {
    /**
     * Holds the callback functions to run when the window loads.
     *
     * @property {Array} prepared
     * @private
     * @default []
     * @since 3.0.0
     */
    this.prepared = [];

    /**
     * Prepares a callback function to be called when the window loads.
     *
     * @method prepare
     * @param {Function} callback The callback function
     * @since 3.0.0
     */
    this.prepare = function(callback) {
        // Add the callback function to the list
        this.prepared.push(callback);
    };

    /**
     * Initializes the EJSC namespace.
     *
     * @method __construct
     * @private
     * @since 3.0.0
     */
    this.__construct = function() {
        // Attach the load method to the page load event
        if (window.attachEvent) {
            window.attachEvent('onload', this.load.bind(this));
        }
        else {
            window.addEventListener('load', this.load.bind(this), true);
        }
    };

    /**
     * Runs all of the prepared callback functions when the page loads.
     *
     * @method load
     * @private
     * @since 3.0.0
     */
    this.load = function() {
        // Run all of the prepared callback functions
        this._.forEach(this.prepared, function(callback) {
            callback.call(this);
        }, this);
    };

    // Initialize the module
    this.__construct();
}());
