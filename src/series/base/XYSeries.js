/**
 * TODO;
 *
 * @class EJSC['.sparkline'].XYSeries
 * @extends EJSC['.sparkline'].PlotSeries
 * @uses EJSC['.sparkline'].DataSeries
 * @private
 * @since 3.0.0
 */
EJSC['.sparkline'].XYSeries = EJSC['.sparkline'].PlotSeries.extend([
    EJSC['.sparkline'].DataSeries
], {
    dataPoints: {
        x: ['x'],
        y: ['y']
    },

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * TODO:
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(data, options) {
        // Call the super method
        this._super(options);

        //
        EJSC.DataSeries.prototype.__construct.call(this, data);
    }
});
