/**
 * Defines a series that requires data.
 *
 * @class EJSC['.sparkline'].DataSeries
 * @extends EJSC.Class
 * @private
 * @since 3.0.0
 */
EJSC['.sparkline'].DataSeries = EJSC.Class.extend({
    // TODO:
    data: [],

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * TODO:
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(data) {
        // Store and prepare the data handler
        this.data = data;
    }
});
