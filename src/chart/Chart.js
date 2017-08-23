/**
 * Defines a basic chart that can display a variety of series types on it.
 *
 * A container must be defined in the config options in order for the chart to be rendered to the page.
 *
 * @example
 *
 *     // Create a chart sending in the id of the container
 *     var chart = new EJSC['.sparkline'].Chart('chart-container');
 *
 *     // Create a chart sending in a reference to the container's element
 *     var chart = new EJSC['.sparkline'].Chart(document.getElementById('chart-container'));
 *
 * @class EJSC['.sparkline'].Chart
 * @extends EJSC.Drawing
 * @constructor
 * @param {DOMElement|String} container The container to render the chart in
 * @param {Object} [options] The config options to apply to the chart
 * @since 3.0.0
 */
EJSC['.sparkline'].Chart = EJSC.Drawing.extend({
    /* {{ remove-if-sparkline }} */
    /**
     * Defines the bottom axis for the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the bottom axis by sending in the config options
     *         axisBottom: { ... }
     *     });
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the bottom axis by sending in an Axis class
     *         axisBottom: new EJSC['.sparkline'].LinearAxis({ ... })
     *     });
     *
     * @attribute {EJSC['.sparkline'].Axis|Object} axisBottom
     * @default null
     * @since 3.0.0
     */
    axisBottom: null,

    // Getter
    getAxisBottom: function() {
        // Return the current axisBottom
        return this.axisBottom;
    },

    // Setter
    setAxisBottom: function(axisBottom, apply) {
        // Make sure the axis is actually an axis
        if (!(axisBottom instanceof EJSC['.sparkline'].Axis)) {
            axisBottom = new EJSC['.sparkline'].LinearAxis(axisBottom);
        }

        // Prepare the axis
        axisBottom.prepare(this, 'bottom');

        // Store the new axisBottom
        this.axisBottom = axisBottom;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    /**
     * Defines the left axis for the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the left axis by sending in the config options
     *         axisLeft: { ... }
     *     });
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the left axis by sending in an Axis class
     *         axisLeft: new EJSC['.sparkline'].LinearAxis({ ... })
     *     });
     *
     * @attribute {EJSC['.sparkline'].Axis|Object} axisLeft
     * @default null
     * @since 3.0.0
     */
    axisLeft: null,

    // Getter
    getAxisLeft: function() {
        // Return the current axisLeft
        return this.axisLeft;
    },

    // Setter
    setAxisLeft: function(axisLeft, apply) {
        // Make sure the axis is actually an axis
        if (!(axisLeft instanceof EJSC['.sparkline'].Axis)) {
            axisLeft = new EJSC['.sparkline'].LinearAxis(axisLeft);
        }

        // Prepare the axis
        axisLeft.prepare(this, 'left');

        // Store the new axisLeft
        this.axisLeft = axisLeft;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    /**
     * Defines the right axis for the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the right axis by sending in the config options
     *         axisRight: { ... }
     *     });
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the right axis by sending in an Axis class
     *         axisRight: new EJSC['.sparkline'].LinearAxis({ ... })
     *     });
     *
     * @attribute {EJSC['.sparkline'].Axis|Object} axisRight
     * @default null
     * @since 3.0.0
     */
    axisRight: null,

    // Getter
    getAxisRight: function() {
        // Return the current axisRight
        return this.axisRight;
    },

    // Setter
    setAxisRight: function(axisRight, apply) {
        // Make sure the axis is actually an axis
        if (!(axisRight instanceof EJSC['.sparkline'].Axis)) {
            axisRight = new EJSC['.sparkline'].LinearAxis(axisRight);
        }

        // Prepare the axis
        axisRight.prepare(this, 'right');

        // Store the new axisRight
        this.axisRight = axisRight;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    /**
     * Defines the top axis for the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the top axis by sending in the config options
     *         axisTop: { ... }
     *     });
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the top axis by sending in an Axis class
     *         axisTop: new EJSC['.sparkline'].LinearAxis({ ... })
     *     });
     *
     * @attribute {EJSC['.sparkline'].Axis|Object} axisTop
     * @default null
     * @since 3.0.0
     */
    axisTop: null,

    // Getter
    getAxisTop: function() {
        // Return the current axisTop
        return this.axisTop;
    },

    // Setter
    setAxisTop: function(axisTop, apply) {
        // Make sure the axis is actually an axis
        if (!(axisTop instanceof EJSC['.sparkline'].Axis)) {
            axisTop = new EJSC['.sparkline'].LinearAxis(axisTop);
        }

        // Prepare the axis
        axisTop.prepare(this, 'top');

        // Store the new axisTop
        this.axisTop = axisTop;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },
    /* {{ /remove-if-sparkline }} */

    // TODO:
    background: 'rgba(0, 0, 0, 0)',

    // Getter
    getBackground: function() {
        // Return the current background
        return this.background;
    },

    // Setter
    setBackground: function(background, apply) {
        // Store the new background
        this.background = background;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the default colors to apply to new series.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the default colors as [red, green, blue]
     *         colors: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']
     *     });
     *
     * @attribute {Array} colors
     * @default [...]
     * @since 3.0.0
     */
    colors: [
        'rgb(150, 184, 211)',
        'rgb(205, 171, 66)',
        'rgb(139, 167, 55)',
        'rgb(204, 136, 92)',
        'rgb(59, 144, 144)',
        'rgb(181, 94, 94)',
        'rgb(144, 100, 144)',
        'rgb(109, 136, 79)',
        'rgb(197, 190, 104)',
        'rgb(59, 144, 187)',
        'rgb(140, 48, 51)',
        'rgb(151, 135, 169)',
        'rgb(191, 132, 72)',
        'rgb(206, 173, 136)',
        'rgb(159, 153, 57)',
        'rgb(209, 130, 139)',
        'rgb(205, 197, 51)',
        'rgb(55, 106, 155)',
        'rgb(203, 143, 71)',
        'rgb(178, 87, 56)',
        'rgb(53, 115, 53)',
        'rgb(120, 90, 59)'
    ],

    // Getter
    getColors: function() {
        // Return the current colors
        return this.colors;
    },

    // Setter
    setColors: function(colors, apply) {
        // Store the new colors
        this.colors = colors;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the title to display at the top of the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Define the title as 'My Chart'
     *         title: 'My Chart'
     *     });
     *
     * @attribute {String} title
     * @default 'Emprise JavaScript Charts'
     * @since 3.0.0
     */
    title: 'Emprise JavaScript Charts',

    // Getter
    getTitle: function() {
        // Return the current title
        return this.title;
    },

    // Setter
    setTitle: function(title, apply) {
        // Store the new title
        this.title = title;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /* {{ remove-if-sparkline }} */
    /**
     * Defines the styles for the titlebar.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container', {
     *         // Center align the title
     *         titlebar: {
     *             align: 'center'
     *         }
     *     }};
     *
     * @attribute {Object} titlebar
     * @property {String} titlebar.align The horizontal alignment of the text in the titlebar (Default: 'left')
     * @property {String} titlebar.baseline The vertical alignment of the text in the titlebar (Default: 'middle')
     * @property {String} titlebar.color The color of the text in the titlebar (Default: 'rgb(102, 102, 102)')
     * @property {String} titlebar.font The font of the text in the titlebar (Default: 'Bold 11px Verdana')
     * @property {Integer} titlebar.height The height of the titlebar (Default: 20)
     * @property {Integer} titlebar.lineHeight The line-height of the text in the titlebar (Default: 20)
     * @property {Integer} titlebar.padding The horizontal padding of the titlebar (Default: 5)
     * @property {Boolean} titlebar.visible If the titlebar is visible or not (Default: true)
     * @since 3.0.0
     */
    titlebar: {
        align: 'left',
        baseline: 'middle',
        color: 'rgb(102, 102, 102)',
        font: 'Bold 11px Verdana',
        height: 20,
        lineHeight: 20,
        padding: 5,
        visible: true
    },

    // Getter
    getTitlebar: function() {
        // Return the current titlebar
        return this.titlebar;
    },

    // Setter
    setTitlebar: function(titlebar, apply) {
        // Update the current titlebar
        this.update(this.titlebar, titlebar);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    /**
     * Defines the user zooming.
     *
     * @example
     *
     *     // TODO: Example
     *
     * @attribute {EJSC.UserZoom|Object} zoom
     * @default null
     * @since 3.0.0
     */
    zoom: null,

    // Getter
    getZoom: function() {
        // Return the current zoom
        return this.zoom;
    },

    // Setter
    setZoom: function(zoom, apply) {
        // Turn the zoom into a user zoom if needed
        if (!(zoom instanceof EJSC.UserZoom)) {
            zoom = new EJSC.UserZoom(zoom);
        }

        // Prepare the zoom
        zoom.prepare(this);

        // Update the current zoom
        this.zoom = zoom;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },
    /* {{ /remove-if-sparkline }} */

    /**
     * Holds the list of series attached to the chart.
     *
     * @property {Array} series
     * @protected
     * @default []
     * @since 3.0.0
     */
    series: [],

    // Getter
    getSeries: function() {
        // Return the current series
        return this.series;
    },

    /**
     * Holds the list of axis property names.
     *
     * @property {Array} axisList
     * @private
     * @default ['axisBottom', 'axisLeft', 'axisRight', 'axisTop']
     * @since 3.0.0
     */
    axisList: ['axisBottom', 'axisLeft', 'axisRight', 'axisTop'],

    /**
     * Defines the next index to use to choose a color.
     *
     * @property {Integer} colorIndex
     * @private
     * @default 0
     * @since 3.0.0
     */
    colorIndex: 0,

    /**
     * Holds the coordinates that the chart can draw in.
     *
     * @property {Object} drawArea
     * @property {Integer} drawArea.bottom The bottom coordinate of the chart's draw area (Default: null)
     * @property {Integer} drawArea.left The left coordinate of the chart's draw area (Default: null)
     * @property {Integer} drawArea.right The right coordinate of the chart's draw area (Default: null)
     * @property {Integer} drawArea.top The top coordinate of the chart's draw area (Default: null)
     * @private
     * @since 3.0.0
     */
    drawArea: {
        bottom: null,
        left: null,
        right: null,
        top: null
    },

    /**
     * Holds the list of axis side names.
     *
     * @property {Array} sidesList
     * @private
     * @default ['bottom', 'left', 'righ', 'top']
     * @since 3.0.0
     */
    sidesList: ['bottom', 'left', 'right', 'top'],

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleClick: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleGlobalMouseMove: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleGlobalMouseUp: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleKeyDown: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleKeyUp: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleMouseDown: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleMouseMove: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleMouseUp: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /* {{ remove-if-sparkline }} */
    // TODO:
    handleMouseWheel: function(/* event */) {
        // TODO:
    },
    /* {{ /remove-if-sparkline }} */

    /**
     * Adds a new series to the chart.
     * Optionally (true by default) redraws the chart.
     *
     * **Note:** If you are adding multiple series at one time,
     * you may wish to not redraw the chart until all of
     * the series have been added to speed things up.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart(document.getElementById('chart-container'));
     *
     *     // Add a scatter series to the chart
     *     var series1 = chart.addSeries(
     *         new EJSC['.sparkline'].ScatterSeries(...)
     *     );
     *
     * @method addSeries
     * @param {EJSC['.sparkline'].Series} series The series to add to the chart
     * @param {Boolean} [redraw=true] Whether to redraw the chart or not
     * @return {EJSC['.sparkline'].Series} The series that was added
     * @since 3.0.0
     */
    addSeries: function(series, redraw) {
        // If the series is not actually a series, back out
        if (!(series instanceof EJSC['.sparkline'].Series)) {
            return null;
        }

        // Prepare the series
        series.prepare(this, {
            color: this.getNextColor()
        });

        // Add the series to the array
        this.series.push(series);

        // Redraw the chart
        if (redraw !== false) {
            this.redraw();
        }

        // Return the series
        return series;
    },

    /**
     * Redraws the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC['.sparkline'].Chart('chart-container');
     *
     *     // Add a scatter series to the chart without redrawing the chart
     *     var series1 = chart.addSeries(
     *         new EJSC['.sparkline'].ScatterSeries(...),
     *         false
     *     );
     *
     *     // Add a line series to the chart without redrawing the chart
     *     var series2 = chart.addSeries(
     *         new EJSC['.sparkline'].LineSeries(...),
     *         false
     *     );
     *
     *     // Redraw the chart
     *     chart.redraw();
     *
     * @method redraw
     * @since 3.0.0
     */
    redraw: function() {
        // Reset the draw area
        this.resetDrawArea();

        // Clear the drawing
        this.clear();

        // Draw the background
        this.drawBackground();

        /* {{ remove-if-sparkline }} */
        // Draw the titlebar
        this.drawTitlebar();
        /* {{ /remove-if-sparkline }} */

        // Draw the axes
        this.drawAxes();

        // Draw the series
        this.drawSeries();

        /* {{ remove-if-sparkline }} */
        // Draw the hint
        // TODO: this.drawHint();
        /* {{ /remove-if-sparkline }} */

        /* {{ remove-if-sparkline }} */
        // Draw the zoombox
        // TODO: this.zoom.draw();
        /* {{ /remove-if-sparkline }} */
    },

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * @param {String|DOMElement} container The container (or id) to render the chart to
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(container, options) {
        // Call the _super method
        this._super(container, options);

        // Prepare the chart
        this.prepare();

        // Redraw the chart
        this.redraw();
    },

    /**
     * Draws each of the axis to the chart.
     * Updates the draw area according to the axes sizes.
     *
     * @method drawAxes
     * @private
     * @since 3.0.0
     */
    drawAxes: function() {
        // Grab a local reference to the chart
        var chart = this;

        // Draw the axes
        EJSC._.forEach(this.axisList, function(axis) {
            chart[axis].draw();
        });

        /* {{ remove-if-sparkline }} */
        // Update the draw area
        this.drawArea.bottom -= this.axisBottom.getOffsetSize();
        this.drawArea.left += this.axisLeft.getOffsetSize();
        this.drawArea.right -= this.axisRight.getOffsetSize();
        this.drawArea.top += this.axisTop.getOffsetSize();
        /* {{ /remove-if-sparkline }} */
    },

    /**
     * Draws the background of the chart.
     *
     * @method drawBackground
     * @private
     * @since 3.0.0
     */
    drawBackground: function() {
        // Draw a rectangle that covers the whole draw area
        this.rect(0, 0, this.drawArea.right, this.drawArea.bottom, {
            fillStyle: this.background,
            strokeStyle: 'none'
        });
    },

    /**
     * Loops through each of the visible series and draw them to the chart.
     *
     * @method drawSeries
     * @private
     * @since 3.0.0
     */
    drawSeries: function() {
        // Begin clipping the drawing area
        this.beginClip(
            this.drawArea.left,
            this.drawArea.top,
            this.drawArea.right - this.drawArea.left,
            this.drawArea.bottom - this.drawArea.top
        );

        // Loop through the visible series and draw each
        EJSC._.forEach(this.getVisibleSeries(), function(series) {
            series.draw();
        });

        // End clipping the drawing area
        this.endClip();
    },

    /* {{ remove-if-sparkline }} */
    /**
     * Draws the titlebar to the chart.
     *
     * @method drawTitlebar
     * @private
     * @since 3.0.0
     */
    drawTitlebar: function() {
        // If the titlebar isn't visible, don't do anything
        if (this.titlebar.visible && this.title) {
            // Begin clipping the drawing area
            this.beginClip(
                this.drawArea.left + this.titlebar.padding,
                this.drawArea.top,
                this.drawArea.right - (this.titlebar.padding * 2),
                this.titlebar.height
            );

            // Draw the title
            this.text(
                this.title,
                this.titlebar.padding,
                this.titlebar.lineHeight / 2,
            {
                font: this.titlebar.font,
                fillStyle: this.titlebar.color,
                textAlign: this.titlebar.align,
                textBaseline: this.titlebar.baseline
            });

            // End clipping the drawing area
            this.endClip();

            // Update the draw area
            this.drawArea.top += this.titlebar.height;
        }
    },
    /* {{ /remove-if-sparkline }} */

    // TODO:
    getNextColor: function() {
        // Grab the next available color
        var color = this.colors[this.colorIndex++];

        // Reset the color index if needed
        if (this.colorIndex === this.colors.length) {
            this.colorIndex = 0;
        }

        // Return the selected color
        return color;
    },

    // TODO:
    getVisibleSeries: function() {
        // Return the list of visible series
        return EJSC._.filter(this.series, function(series) {
            return series.isVisible();
        });
    },

    // TODO:
    prepare: function() {
        /* {{ remove-if-sparkline }} */
        // Attach the listeners
        this.prepareListeners();
        /* {{ /remove-if-sparkline }} */

        this.prepareAxes();
    },

    // TODO:
    prepareAxes: function() {
        var chart = this;

        // Loop through each of the sides
        EJSC._.forEach(this.sidesList, function(side) {
            // Create some temporary variables
            var axis = 'axis' + EJSC._.capitalize(side);

            // Turn the axis into a class if not already one
            if (!(chart[axis] instanceof EJSC['.sparkline'].Axis)) {
                chart[axis] = new EJSC['.sparkline'].LinearAxis(chart[axis]);
            }

            // Prepare the axis
            chart[axis].prepare(chart, side);
        });
    },

    /* {{ remove-if-sparkline }} */
    // TODO:
    prepareListeners: function() {
        // Grab the engine's element
        var element = this.engine.element;
        var $element = EJSC.$(element);
        var $document = EJSC.$(document);

        // Set the tabIndex so the chart can gain focus
        element.tabIndex = 0;
        element.style.outline = 'none';

        // Add local event listeners
        $element.on('click', this.handleClick.bind(this));
        $element.on('keydown', this.handleKeyDown.bind(this));
        $element.on('keyup', this.handleKeyUp.bind(this));
        $element.on('mousedown', this.handleMouseDown.bind(this));
        $element.on('mousemove', this.handleMouseMove.bind(this));
        $element.on('mouseup', this.handleMouseUp.bind(this));
        $element.on(['mousewheel', 'DOMMouseScroll'], this.handleMouseWheel.bind(this));

        // Add global event listeners
        $document.on('mousemove', this.handleGlobalMouseMove.bind(this));
        $document.on('mouseup', this.handleGlobalMouseUp.bind(this));
    },
    /* {{ /remove-if-sparkline }} */

    // TODO:
    resetDrawArea: function() {
        // Reset the current draw area
        this.drawArea = {
            left: 0,
            top: 0,
            right: this.container.clientWidth,
            bottom: this.container.clientHeight
        };
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
        this.redraw();
    }
});
