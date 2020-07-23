import $Array from '../util/Array.es6';
import $Element from '../util/Element.es6';
import $Object from '../util/Object.es6';
import $String from '../util/String.es6';
import EJSC from '../EJSC.es6';
import Drawing from '../drawing/Drawing.es6';

/**
 * Defines a basic chart that can display a variety of series types on it.
 * A container must be defined in the config options in order for the chart to be rendered to the page.
 *
 * @example
 *
 *   // Create a chart sending in the id of the container
 *   let chart = new EJSC['sparkline'].Chart('chart-container', { ... });
 *
 *   // Create a chart sending in a reference to the container's element
 *   let chart = new EJSC['sparkline'].Chart(document.getElementById('chart-container'), { ... });
 *
 * @class EJSC['sparkline'].Chart
 * @extends EJSC.Drawing
 * @constructor
 * @param {Element|String} container The container to render the chart in
 * @param {Object} [options] The config options to apply to the chart
 * @since @todo
 */
export default EJSC['sparkline'].Chart = class Chart extends Drawing {
  /* not-sparkline:start */
  /**
   * Defines the bottom axis for the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the bottom axis by sending in the config options
   *     axisBottom: { ... }}
   *   });
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the bottom axis by sending in an Axis class
   *     axisBottom: new EJSC['sparkline'].LinearAxis({ ... })
   *   });
   *
   * @attribute {EJSC['sparkline'].Axis|Object} axisBottom
   * @default null
   * @since @todo
   */

  // getter
  getAxisBottom() {
    // Return the current axisBottom
    return this.axisBottom;
  }

  // setter
  setAxisBottom(axisBottom) {
    // Make sure the axis is actually an axis
    if (!(axisBottom instanceof EJSC['sparkline'].Axis)) {
      axisBottom = new EJSC['sparkline'].LinearAxis(axisBottom);
    }

    // Prepare the axis
    axisBottom.prepare(this, 'bottom');

    // Store the new axisBottom
    this.axisBottom = axisBottom;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the left axis for the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the left axis by sending in the config options
   *     axisLeft: { ... }
   *   });
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the left axis by sending in an Axis class
   *     axisLeft: new EJSC['sparkline'].LinearAxis({ ... })
   *   });
   *
   * @attribute {EJSC['sparkline'].Axis|Object} axisLeft
   * @default null
   * @since @todo
   */

  // getter
  getAxisLeft() {
    // Return the current axisLeft
    return this.axisLeft;
  }

  // setter
  setAxisLeft(axisLeft) {
    // Make sure the axis is actually an axis
    if (!(axisLeft instanceof EJSC['sparkline'].Axis)) {
      axisLeft = new EJSC['sparkline'].LinearAxis(axisLeft);
    }

    // Prepare the axis
    axisLeft.prepare(this, 'left');

    // Store the new axisLeft
    this.axisLeft = axisLeft;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the right axis for the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the right axis by sending in the config options
   *     axisRight: { ... }
   *   });
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the right axis by sending in an Axis class
   *     axisRight: new EJSC['sparkline'].LinearAxis({ ... })
   *   });
   *
   * @attribute {EJSC['sparkline'].Axis|Object} axisRight
   * @default null
   * @since @todo
   */

  // getter
  getAxisRight() {
    // Return the current axisRight
    return this.axisRight;
  }

  // setter
  setAxisRight(axisRight) {
    // Make sure the axis is actually an axis
    if (!(axisRight instanceof EJSC['sparkline'].Axis)) {
      axisRight = new EJSC['sparkline'].LinearAxis(axisRight);
    }

    // Prepare the axis
    axisRight.prepare(this, 'right');

    // Store the new axisRight
    this.axisRight = axisRight;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the top axis for the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the top axis by sending in the config options
   *     axisTop: { ... }
   *   });
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the top axis by sending in an Axis class
   *     axisTop: new EJSC['sparkline'].LinearAxis({ ... })
   *   });
   *
   * @attribute {EJSC['sparkline'].Axis|Object} axisTop
   * @default null
   * @since @todo
   */

  // getter
  getAxisTop() {
    // Return the current axisTop
    return this.axisTop;
  }

  // setter
  setAxisTop(axisTop) {
    // Make sure the axis is actually an axis
    if (!(axisTop instanceof EJSC['sparkline'].Axis)) {
      axisTop = new EJSC['sparkline'].LinearAxis(axisTop);
    }

    // Prepare the axis
    axisTop.prepare(this, 'top');

    // Store the new axisTop
    this.axisTop = axisTop;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Defines the color of the chart area background.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Set the background color of the chart to white (using hex)
   *     background: '#ffffff'
   *   });
   *
   * @attribute String background
   * @default 'rgba(0, 0, 0, 0)'
   * @since @todo
   */

  // getter
  getBackground() {
    // Return the current background
    return this.background;
  }

  // setter
  setBackground(background) {
    // Store the new background
    this.background = background;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines the default colors to apply to new series.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the default colors as [red, green, blue]
   *     colors: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']
   *   });
   *
   * @attribute {Array} colors
   * @default [...]
   * @since @todo
   */

  // getter
  getColors() {
    // Return the current colors
    return this.colors;
  }

  // setter
  setColors(colors) {
    // Store the new colors
    this.colors = colors;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /* not-sparkline:start */
  /**
   * Defines the title to display at the top of the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Define the title as 'My Chart'
   *     title: 'My Chart'
   *   });
   *
   * @attribute {String} title
   * @default 'Emprise JavaScript Charts'
   * @since @todo
   */

  // getter
  getTitle() {
    // Return the current title
    return this.title;
  }

  // setter
  setTitle(title) {
    // Store the new title
    this.title = title;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the styles for the titlebar.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container', {
   *     // Center align the title
   *     titlebar: {
   *       align: 'center'
   *     }
   *   }};
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
   * @since @todo
   */

  // getter
  getTitlebar() {
    // Return the current titlebar
    return this.titlebar;
  }

  // setter
  setTitlebar(titlebar) {
    // Update the current titlebar
    $Object.merge(this.titlebar, titlebar);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Holds the list of series attached to the chart.
   *
   * @property {Array} series
   * @protected
   * @default []
   * @since @todo
   */

  // getter
  getSeries() {
    // Return the current series
    return this.series;
  }

  /**
   * Holds the list of axis property names.
   *
   * @property {Array} axisList
   * @private
   * @default ['axisBottom', 'axisLeft', 'axisRight', 'axisTop']
   * @since @todo
   */

  /**
   * Defines the next index to use to choose a color.
   *
   * @property {Integer} colorIndex
   * @private
   * @default 0
   * @since @todo
   */

  /**
   * Holds the coordinates that the chart can draw in.
   *
   * @property {Object} drawArea
   * @property {Integer} drawArea.bottom The bottom coordinate of the chart's draw area (Default: null)
   * @property {Integer} drawArea.left The left coordinate of the chart's draw area (Default: null)
   * @property {Integer} drawArea.right The right coordinate of the chart's draw area (Default: null)
   * @property {Integer} drawArea.top The top coordinate of the chart's draw area (Default: null)
   * @private
   * @since @todo
   */

  /**
   * Holds the list of axis side names.
   *
   * @property {Array} sidesList
   * @private
   * @default ['bottom', 'left', 'righ', 'top']
   * @since @todo
   */

  /* not-sparkline:start */
  /**
   * Handles when the user clicks the mouse button.
   *
   * @method handleClick
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleClick(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Handles when the user presses a key.
   *
   * @method handleKeyDown
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleKeyDown(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Handles when the user releases a key.
   *
   * @method handleKeyUp
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleKeyUp(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Handles when the user presses the mouse button.
   *
   * @method handleMouseDown
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleMouseDown(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Handles when the user moves the mouse.
   *
   * @method handleMouseMove
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleMouseMove(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Handles when the user releases the mouse button.
   *
   * @method handleMouseUp
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleMouseUp(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Handles when the user scrolls the mouse wheel.
   *
   * @method handleMouseWheel
   * @private
   * @param WindowEvent event The window event
   * @since @todo
   */
  handleMouseWheel(/* event */) {
    // TODO:
  }
  /* not-sparkline:end */

  /**
   * Adds a new series to the chart and (optionally) redraws the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart(document.getElementById('chart-container'));
   *
   *   // Add a scatter series to the chart
   *   let series = chart.addSeries(
   *     new EJSC['sparkline'].ScatterSeries(...)
   *   );
   *
   * @method addSeries
   * @param {EJSC['sparkline'].Series} series The series to add to the chart
   * @param {Boolean} [redraw=true] Whether to redraw the chart or not
   * @return {EJSC['sparkline'].Series} The series that was added
   * @since @todo
   */
  addSeries(series, redraw) {
    // If the series is not actually a series, back out
    if (!(series instanceof EJSC['sparkline'].Series)) {
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
  }

  /**
   * Redraws the chart.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container');
   *
   *   // Add a scatter series to the chart without redrawing the chart
   *   let series1 = chart.addSeries(
   *     new EJSC['sparkline'].ScatterSeries(...),
   *     false
   *   );
   *
   *   // Add a line series to the chart without redrawing the chart
   *   let series2 = chart.addSeries(
   *     new EJSC['sparkline'].LineSeries(...),
   *     false
   *   );
   *
   *   // Redraw the chart
   *   chart.redraw();
   *
   * @method redraw
   * @since @todo
   */
  redraw() {
    // Reset the draw area
    this.resetDrawArea();

    // Clear the drawing
    this.clear();

    // Draw the background
    this.drawBackground();

    /* not-sparkline:start */
    // Draw the titlebar
    this.drawTitlebar();
    /* not-sparkline:end */

    // Draw the axes
    this.drawAxes();

    // Draw the series
    this.drawSeries();

    /* not-sparkline:start */
    // Draw the hint
    // TODO: this.drawHint();
    /* not-sparkline:end */

    /* not-sparkline:start */
    // Draw the zoombox
    // TODO: this.zoom.draw();
    /* not-sparkline:end */
  }

  // constructor
  constructor(container, options) {
    // super
    super(container, options);

    // Prepare the chart
    this.prepare();

    // Redraw the chart
    this.redraw();
  }

  // init
  init() {
    // Initialize some public properties
    this.axisBottom = null;
    this.axisLeft = null;
    this.axisRight = null;
    this.axisTop = null;
    this.background = 'rgba(0, 0, 0, 0)';
    this.colors = [
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
    ];

    /* not-sparkline:start */
    // Initialize some more public properties
    this.title = 'Emprise JavaScript Charts';
    this.titlebar = {
      align: 'left',
      baseline: 'middle',
      color: 'rgb(102, 102, 102)',
      font: 'Bold 11px Verdana',
      height: 20,
      lineHeight: 20,
      padding: 5,
      visible: true
    };
    /* not-sparkline:start */

    // Initialize some protected properties
    this.series = [];
    this.axisList = ['axisBottom', 'axisLeft', 'axisRight', 'axisTop'];
    this.colorIndex = 0;
    this.drawArea = {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
    this.sidesList = ['bottom', 'left', 'right', 'top'];
  }

  /**
   * Draws each of the axis to the chart.
   * Updates the draw area according to the axes sizes.
   *
   * @method drawAxes
   * @private
   * @since @todo
   */
  drawAxes() {
    // Draw the axes
    $Array.forEach(this.axisList, axis => this[axis].draw());

    /* not-sparkline:start */
    // Update the draw area
    this.drawArea.bottom -= this.axisBottom.getOffsetSize();
    this.drawArea.left += this.axisLeft.getOffsetSize();
    this.drawArea.right -= this.axisRight.getOffsetSize();
    this.drawArea.top += this.axisTop.getOffsetSize();
    /* not-sparkline:end */
  }

  /**
   * Draws the background of the chart.
   *
   * @method drawBackground
   * @private
   * @since @todo
   */
  drawBackground() {
    // Draw a rectangle that covers the whole draw area
    this.rect(0, 0, this.drawArea.right, this.drawArea.bottom, {
      fillStyle: this.background,
      strokeStyle: 'none'
    });
  }

  /**
   * Loops through each of the visible series and draw them to the chart.
   *
   * @method drawSeries
   * @private
   * @since @todo
   */
  drawSeries() {
    // Begin clipping the drawing area
    this.beginClip(
      this.drawArea.left,
      this.drawArea.top,
      this.drawArea.right - this.drawArea.left,
      this.drawArea.bottom - this.drawArea.top
    );

    // Loop through the visible series and draw each
    $Array.forEach(this.getVisibleSeries(), series => series.draw());

    // End clipping the drawing area
    this.endClip();
  }

  /* not-sparkline:start */
  /**
   * Draws the titlebar to the chart.
   *
   * @method drawTitlebar
   * @private
   * @since @todo
   */
  drawTitlebar() {
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
  }
  /* not-sparkline:end */

  /**
   * Gets the next available series color.
   *
   * @method getNextColor
   * @private
   * @return {String} The next available color
   * @since @todo
   */
  getNextColor() {
    // Grab the next available color
    let color = this.colors[this.colorIndex++];

    // Reset the color index if needed
    if (this.colorIndex === this.colors.length) {
      this.colorIndex = 0;
    }

    // Return the selected color
    return color;
  }

  /**
   * Gets the list of currently visible series.
   *
   * @method getVisibleSeries
   * @private
   * @return {Array} The list of visible series
   * @since @todo
   */
  getVisibleSeries() {
    // Return the list of visible series
    return $Array.filter(this.series, series => series.isVisible());
  }

  /**
   * Prepares the chart for first use.
   *
   * @method prepare
   * @private
   * @since @todo
   */
  prepare() {
    /* not-sparkline:start */
    // Attach the listeners
    this.prepareListeners();
    /* not-sparkline:end */

    this.prepareAxes();
  }

  /**
   * Prepares the chart's axes for first use.
   *
   * @method prepareAxes
   * @private
   * @since @todo
   */
  prepareAxes() {
    // Loop through each of the sides
    $Array.forEach(this.sidesList, side => {
      // Create some temporary variables
      let axis = 'axis' + $String.capitalize(side);

      // Turn the axis into a class if not already one
      if (!(this[axis] instanceof EJSC['sparkline'].Axis)) {
        this[axis] = new EJSC['sparkline'].LinearAxis(this[axis]);
      }

      // Prepare the axis
      this[axis].prepare(this, side);
    });
  }

  /* not-sparkline:start */
  /**
   * Prepares the chart's listeners.
   *
   * @method prepareListeners
   * @private
   * @since @todo
   */
  prepareListeners() {
    // Grab the engine's element
    let element = this.engine.element;

    // Set the tabIndex so the chart can gain focus
    element.tabIndex = 0;
    element.style.outline = 'none';

    // Add local event listeners
    $Element(element)
      .on('click', this.handleClick.bind(this))
      .on('keydown', this.handleKeyDown.bind(this))
      .on('keyup', this.handleKeyUp.bind(this))
      .on('mousedown', this.handleMouseDown.bind(this))
      .on('mousemove', this.handleMouseMove.bind(this))
      .on('mouseup', this.handleMouseUp.bind(this))
      .on(['mousewheel', 'DOMMouseScroll'], this.handleMouseWheel.bind(this));

    // Add global event listeners
    $Element(document)
      .on('mousemove', this.handleMouseMove.bind(this))
      .on('mouseup', this.handleMouseUp.bind(this));
  }
  /* not-sparkline:end */

  /**
   * Resets the stored draw area.
   *
   * @method resetDrawArea
   * @private
   * @since @todo
   */
  resetDrawArea() {
    // Reset the current draw area
    this.drawArea = {
      left: 0,
      top: 0,
      right: this.container.clientWidth,
      bottom: this.container.clientHeight
    };
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
    this.redraw();
  }
};
