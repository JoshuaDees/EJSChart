/**
 * Holds all of the common code to all of the series.
 *
 * @class EJSC['.sparkline'].Series
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
EJSC['.sparkline'].Series = EJSC.Class.extend({
    /**
     * Defines the color of the series.
     *
     * @attribute {String} color
     * @default null
     * @since 3.0.0
     */
    color: null,

    // Getter
    getColor: function() {
        // Return the current color
        return this.color;
    },

    // Setter
    setColor: function(color, apply) {
        // Update the current color
        this.color = color;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the title of the series.
     *
     * @attribute {String} title
     * @default null
     * @since 3.0.0
     */
    title: null,

    // Getter
    getTitle: function() {
        // Return the current title
        return this.title;
    },

    // Setter
    setTitle: function(title, apply) {
        // Update the current title
        this.title = title;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines if the series if visible or not.
     *
     * @attribute {Boolean} visible
     * @default true
     * @since 3.0.0
     */
    visible: true,

    // Getter
    getVisible: function() {
        // Return the current visible
        return this.visible;
    },

    // Setter
    setVisible: function(visible, apply) {
        // Store the current visible
        this.visible = visible;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Holds a pointer to this series' owner chart.
     *
     * @property {EJSC['.sparkline'].Chart} chart
     * @private
     * @default null
     * @since 3.0.0
     */
    chart: null,

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(options) {
        // Copy the incoming config options
        EJSC._.merge(this, options);

        // Initialize some variables if not defined in the options
        this.title = (this.title === null ? 'Series' : this.title);
    },

    /**
     * Draws the series to its owner chart's drawing engine.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Placeholder
    },

    /**
     * Determines if the series is visible or not.
     *
     * @method isVisible
     * @private
     * @return {Boolean} If the series is visible or not
     * @since 3.0.0
     */
    isVisible: function() {
        // Return if this series is visible or not
        return this.visible;
    },

    /**
     * Links the series to its owner chart.
     *
     * @method prepare
     * @private
     * @param {EJSC.Chart} chart The owner chart
     * @param {Object} options Default options to apply if not defined
     * @since 3.0.0
     */
    prepare: function(chart, options) {
        // Store the owner chart
        this.chart = chart;

        // Update any options that haven't been defined
        EJSC._.merge(this, options);
    },

    /**
     * Fires when a property of the class has changed.
     *
     * @method update
     * @private
     * @since 3.0.0
     */
    update: function() {
        // Redraw the chart
        if (EJSC._.has(this, 'chart.redraw')) {
            this.chart.redraw();
        }
    }
});
