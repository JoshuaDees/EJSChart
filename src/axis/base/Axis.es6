import EJSC from '../../EJSC.es6';
import Class from '../../class/Class.es6';
import Util from '../../util/Util.es6';

/**
 * Holds the code common to all Axis types.
 *
 * @class EJSC['sparkline'].Axis
 * @extends EJSC.Class
 * @constructor
 * @private
 * @since 3.0.0
 */
export default EJSC['sparkline'].Axis = class Axis extends Class {
  /* not-sparkline:start */
  /**
   * Defines the border of the axis.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} border
   * @property {Object} border.style
   * @property {String} border.style.color The color of the border in rgb, rgba, or hex form (Default: 'rgb(200, 200, 200)')
   * @property {Integer} border.style.width The width of the border (Default: 1)
   * @property {Boolean} border.visible Whether to show the border or not (Default: true)
   * @since 3.0.0
   */

  // getter
  getBorder() {
    // Return the current border
    return this.border;
  }

  // setter
  setBorder(border, apply) {
    // Update the current border
    Util.merge(this.border, border);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the caption of the axis.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} caption
   * @property {Object} caption.style
   * @property {String} caption.style.fillStyle The color of the caption (Default: 'rgb(100, 100, 100)')
   * @property {String} caption.style.font The font of the caption (Default: 'Bold 11px Verdana')
   * @property {String} caption.style.textAlign The horizontal alignment of the caption (Default: 'center') (Values: 'left', 'center', 'right')
   * @property {String} caption.style.textBaseline The vertical baseline of the caption (Default: 'middle') (Values: 'top', 'middle', 'bottom')
   * @property {Boolean} caption.visible If the caption should be displayed (Default: true)
   * @since 3.0.0
   */

  // getter
  getCaption() {
    // Return the current caption
    return this.caption;
  }

  // setter
  setCaption(caption, apply) {
    // Update the current caption
    Util.merge(this.caption, caption);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Defines the extremes of the axis.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} extremes
   * @property {Number} caption.max The max extreme (Default: null)
   * @property {Number} caption.min The min extreme (Default: null)
   * @since 3.0.0
   */

  // getter
  getExtremes() {
    // Return the current extremes
    return this.extremes;
  }

  // setter
  setExtremes(extremes, apply) {
    // Update the current extremes
    this.update(this.extremes, extremes);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /* not-sparkline:start */
  /**
   * Defines the grid of the axis.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} grid
   * @property {Object} grid.style
   * @property {Array} grid.style.lineDash The line dash of the zero plane (Default: [3, 3])
   * @property {Integer} grid.style.lineWidth The width of the zero plane (Default: 1)
   * @property {String} grid.style.strokeStyle The color of the zero plane (Default: 'rgb(230, 230, 230)')
   * @property {Boolean} grid.visible If the grid should be displayed (Default: true)
   * @since 3.0.0
   */

  // getter
  getGrid() {
    // Return the current grid
    return this.grid;
  }

  // setter
  setGrid(grid, apply) {
    // Update the current grid
    this.update(this.grid, grid);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * TODO:
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Object} majorTicks
   * @property {Integer} majorTicks.size The size of the major ticks (Default: 5)
   * @property {Object} majorTicks.style
   * @property {Integer} majorTicks.style.lineWidth The width of the major ticks (Default: 1)
   * @property {String} majorTicks.style.strokeStyle The color of the major ticks (Default: 'rgb(200, 200, 200)')
   * @property {Boolean} majorTicks.visible If the major ticks should be displayed (Default: true)
   * @since 3.0.0
   */

  // getter
  getMajorTicks() {
    // Return the current major ticks
    return this.majorTicks;
  }

  // setter
  setMajorTicks(majorTicks, apply) {
    // Update the current major ticks
    this.update(this.majorTicks, majorTicks);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Defines the padding between the ends of the axis and
   * the start and end of the data displayed when zoomed out.
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Integer} padding
   * @default 5
   * @since 3.0.0
   */

  // getter
  getPadding() {
    // Return the current padding
    return this.padding;
  }

  // setter
  setPadding(padding, apply) {
    // Update the current padding
    this.padding = padding;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * TODO:
   *
   * @example
   *
   *   // TODO:
   *
   * @attribute {Boolean} reverse
   * @default false
   * @since 3.0.0
   */

  // getter
  getReverse() {
    // Return the current reverse
    return this.reverse;
  }

  // setter
  setReverse(reverse, apply) {
    // Update the current reverse
    this.reverse = reverse;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /* not-sparkline:start */
  /**
  * Defines the size (height or width) of the axis.
  * If left null, default values will be used.
  *
  * @property {Integer} size
  * @default null
  * @since 3.0.0
  */

  // getter
  getSize() {
    // Return the current size
    return this.size;
  }

  // setter
  setSize(size, apply) {
    // Update the current size
    this.size = size;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  // TODO: visible

  // getter
  getVisible() {
    // Return the current visible
    return this.visible;
  }

  // setter
  setVisible(visible, apply) {
    // Update the current size
    this.visible = visible;

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the zero plane of the axis.
   *
   * @property {Object} zeroPlane
   * @property {Number} coordinate The coordinate of the zero plane (Default: 0)
   * @property {Object} zeroPlane.style
   * @property {Integer} zeroPlane.style.lineWidth The width of the zero plane (Default: 1)
   * @property {String} zeroPlane.style.strokeStyle The color of the zero plane (Default: 'rgb(170, 170, 170)')
   * @property {Boolean} zeroPlane.style.visible If the zero plane is visible (Default: false)
   * @since 3.0.0
   */

  // getter
  getZeroPlane() {
    // Return the current zeroPlane
    return this.zeroPlane;
  }

  // setter
  setZeroPlane(zeroPlane, apply) {
    // Update the current zeroPlane
    this.update(this.zeroPlane, zeroPlane);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Defines the current zoom of the axis.
   *
   * @property {Object} zoom
   * @property {Number} zoom.min The min coordinate (Default: null)
   * @property {Number} zoom.max The max coordinate (Default: null)
   * @since 3.0.0
   */

  // getter
  getZoom() {
    // Return the current zoom
    return this.zoom;
  }

  // setter
  setZoom(zoom, apply) {
    // Update the current zoom
    this.update(this.zoom, zoom);

    // Redraw the chart if needed
    if (apply !== false) {
      this.update();
    }
  }

  /**
   * Holds a reference to the owner chart.
   *
   * @property {EJSC['sparkline'].Chart} chart
   * @protected
   * @default null
   * @since 3.0.0
   */

  // getter
  getChart() {
    return this.chart;
  }

  /**
   * Holds the dimensions for the draw area of this axis.
   *
   * @property {Object} drawArea
   * @property {Number} drawArea.bottom The bottom coordinate of the draw area (Default: null)
   * @property {Number} drawArea.left The left coordinate of the draw area (Default: null)
   * @property {Number} drawArea.right The right coordinate of the draw area (Default: null)
   * @property {Number} drawArea.top The top coordinate of the draw area (Default: null)
   * @private
   * @since 3.0.0
   */

  /**
   * Holds the orientation of the axis.
   * (Values: 'horizontal', 'vertical')
   *
   * @property {String} orientation
   * @private
   * @default null
   * @since 3.0.0
   */

  /**
   * Holds the current scale to convert pixels to points.
   *
   * @property {Number} scale
   * @private
   * @default null
   * @since 3.0.0
   */

  /**
   * Holds the side of the axis.
   * (Values: 'left', 'top', 'right', 'bottom')
   *
   * @property {String} side
   * @private
   * @default null
   * @since 3.0.0
   */

  // init
  init() {
    // Initialize some public properties
    this.extremes = {
      max: null,
      min: null
    };
    this.padding = 5;
    this.reverse = false;
    this.visible = null;
    this.zoom = {
      min: null,
      max: null
    };

    /* not-sparkline:start */
    // Initialize some more public properties
    this.border = {
      style: {
        lineWidth: 1,
        strokeStyle: 'rgb(200, 200, 200)'
      },
      visible: true
    };
    this.caption = {
      style: {
        fillStyle: 'rgb(100, 100, 100)',
        font: 'Bold 11px Verdana',
        textAlign: 'center',
        textBaseline: 'middle'
      },
      text: null,
      visible: true
    };
    this.grid = {
      style: {
        lineDash: [3, 3],
        lineWidth: 1,
        strokeStyle: 'rgb(230, 230, 230)'
      },
      visible: true
    };
    this.majorTicks = {
      size: 5,
      style: {
        lineWidth: 1,
        strokeStyle: 'rgb(200, 200, 200)'
      },
      visible: true
    };
    this.size = null;
    this.zeroPlane = {
      coordinate: 0,
      style: {
        lineWidth: 1,
        strokeStyle: 'rgb(170, 170, 170)'
      },
      visible: false
    };
    /* not-sparkline:end */

    // Initialize some protected properties
    this.chart = null;

    // Initialize some private properties
    this.drawArea = {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
    this.orientation = null;
    this.scale = null;
    this.side = null;
  }

  /**
   * Calculates the draw area for the axis.
   *
   * @method calculateDrawArea
   * @private
   * @since 3.0.0
   */
  calculateDrawArea() {
    // Grab some local pointers
    var chart = this.chart;
    var chartDrawArea = chart.drawArea;
    var drawArea = Util.merge(this.drawArea, chartDrawArea);

    // Declare some local variables
    var bottom;
    var left;
    var right;
    var top;

    /* not-sparkline:start */
    // Update the drawArea based on the axis' side
    switch (this.side) {
      case 'bottom':
        left = chartDrawArea.left + chart.axisLeft.getOffsetSize();
        top = chartDrawArea.bottom - this.size;
        right = chartDrawArea.right - chart.axisRight.getOffsetSize();
        bottom = chartDrawArea.bottom;
        break;

      case 'left':
        left = chartDrawArea.left;
        top = chartDrawArea.top + chart.axisTop.getOffsetSize();
        right = chartDrawArea.left + this.size;
        bottom = chartDrawArea.bottom - chart.axisBottom.getOffsetSize();
        break;

      case 'right':
        left = chartDrawArea.right - this.size;
        top = chartDrawArea.top + chart.axisTop.getOffsetSize();
        right = chartDrawArea.right;
        bottom = chartDrawArea.bottom - chart.axisBottom.getOffsetSize();
        break;

      case 'top':
        left = chartDrawArea.left + chart.axisLeft.getOffsetSize();
        top = chartDrawArea.top;
        right = chartDrawArea.right - chart.axisRight.getOffsetSize();
        bottom = chartDrawArea.top + this.size;
        break;
    }

    Util.merge(drawArea, {
      left: left,
      top: top,
      right: right,
      bottom: bottom
    });
    /* not-sparkline:end */
  }

  /**
   * Calculates the extremes for the axis.
   *
   * @method calculateExtremes
   * @private
   * @since 3.0.0
   */
  calculateExtremes() {
    // Placeholder
  }

  /**
   * TODO:
   *
   * @method calculateScale
   * @private
   * @since 3.0.0
   */
  calculateScale() {
    // Grab some local pointers
    var drawArea = this.drawArea;
    var extremes = this.extremes;
    var orientation = this.orientation;
    var zoom = this.zoom;

    // Define some local variables
    var pointMin = zoom.min || extremes.min;
    var pointMax = zoom.max || extremes.max;
    var pixelMin = (orientation === 'vertical' ? drawArea.top : drawArea.left);
    var pixelMax = (orientation === 'vertical' ? drawArea.bottom : drawArea.right);

    // Calculate the scale
    this.scale = (pointMax - pointMin) / (pixelMax - pixelMin);
  }

  /**
   * Calculates the axis' ticks based on the attached series' data.
   *
   * @method calculateTicks
   * @private
   * @since 3.0.0
   */
  calculateTicks() {
    // Return the list of ticks
    return [];
  }

  // TODO:
  convertLinearToPoint(linear) {
    // Return the linear value
    return linear;
  }

  /**
   * Converts from chart pixel to point.
   *
   * @method convertPixelToPoint
   * @private
   * @param {Number} pixel The pixel to convert
   * @return {Number} The point
   * @since 3.0.0
   */
  convertPixelToPoint(pixel) {
    // Return the point
    return pixel;
  }

  // TODO:
  convertPointToLinear(point) {
    // Return the point
    return point;
  }

  /**
   * Converts from chart point to pixel.
   *
   * @method convertPointToPixel
   * @private
   * @param {Number} point The point to convert
   * @return {Number} The pixel
   * @since 3.0.0
   */
  convertPointToPixel(point) {
    // Return the pixel
    return point;
  }

  // TODO:
  draw() {
    // Grab some local pointers
    var chart = this.chart;
    var drawArea = chart.drawArea;
    var bottom = drawArea.bottom - chart.axisBottom.getOffsetSize();
    var left = drawArea.left + chart.axisLeft.getOffsetSize();
    var right = drawArea.right - chart.axisRight.getOffsetSize();
    var top = drawArea.top + chart.axisTop.getOffsetSize();

    // If this axis is not visible, don't do anything
    if (!this.isVisible()) {
      return;
    }

    // Calculate the draw area
    this.calculateDrawArea();

    // Calculate the extremes
    this.calculateExtremes();

    // Calculate the scale
    this.calculateScale();

    /* not-sparkline:start */
    // Calculate the ticks
    var ticks = this.calculateTicks();

    // TODO: Fix for left/right with lineWidth in canvas
    // Begin clipping to the drawing area
    chart.beginClip(left, top, right - left, bottom - top);

    // Draw the axis grid
    this.drawGrid(ticks);

    // Draw the axis zeroPlane
    this.drawZeroPlane();

    // End the clip
    chart.endClip();

    // Draw the axis border
    this.drawBorder();

    // Draw the major ticks
    this.drawMajorTicks(ticks);

    // Draw the axis caption
    this.drawCaption();

    // TODO: Move before drawCaption
    // Draw the axis ticks
    this.drawTicks(ticks);
    /* not-sparkline:end */
  }

  /* not-sparkline:start */
  /**
   * Draws the axis' border.
   *
   * @method drawBorder
   * @private
   * @since 3.0.0
   */
  drawBorder() {
    // Grab some local pointers
    var chart = this.chart;
    var drawArea = this.drawArea;
    var bottom = drawArea.bottom;
    var left = drawArea.left;
    var right = drawArea.right;
    var top = drawArea.top;
    var border = this.border;
    var lineWidth = border.style.lineWidth;
    var bottomLineWidth = (chart.axisBottom.isVisible() ? chart.axisBottom.border.style.lineWidth : 0);
    var leftLineWidth = (chart.axisLeft.isVisible() ? chart.axisLeft.border.style.lineWidth : 0);
    var rightLineWidth = (chart.axisRight.isVisible() ? chart.axisRight.border.style.lineWidth : 0);
    var topLineWidth = (chart.axisTop.isVisible() ? chart.axisTop.border.style.lineWidth : 0);

    // Define some local variables
    var x1;
    var y1;
    var x2;
    var y2;

    // If the border's not visible, don't draw it
    if (!border.visible) {
      return;
    }

    // Determine the coordinates based on the axis' side
    switch (this.side) {
      case 'bottom':
        x1 = left - leftLineWidth;
        y1 = top + (lineWidth / 2);
        x2 = right + rightLineWidth;
        y2 = top + (lineWidth / 2);
        break;

      case 'left':
        x1 = right - (lineWidth / 2);
        y1 = top - topLineWidth;
        x2 = right - (lineWidth / 2);
        y2 = bottom + bottomLineWidth;
        break;

      case 'right':
        x1 = left + (lineWidth / 2);
        y1 = top - topLineWidth;
        x2 = left + (lineWidth / 2);
        y2 = bottom + bottomLineWidth;
        break;

      case 'top':
        x1 = left - leftLineWidth;
        y1 = bottom - (lineWidth / 2);
        x2 = right + rightLineWidth;
        y2 = bottom - (lineWidth / 2);
        break;
    }

    // Draw the border
    chart.line(x1, y1, x2, y2, border.style);
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Draws the axis' caption.
   *
   * @method drawCaption
   * @private
   * @since 3.0.0
   */
  drawCaption() {
    // Grab some local pointers
    var drawArea = this.drawArea;
    var caption = this.caption;

    // Define some local variables
    var text = (Util.isNull(caption.text) ? Util.capitalize(this.side) + ' Axis' : caption.text);
    var x;
    var y;

    // If the caption's not visible, don't draw it
    if (!caption.visible) {
      return;
    }

    // Calculate the coordinates based on the axis' side
    switch (this.side) {
      case 'bottom':
        x = drawArea.left + ((drawArea.right - drawArea.left) / 2);
        y = drawArea.bottom - 10;
        break;

      case 'left':
        x = drawArea.left + 10;
        y = drawArea.top + ((drawArea.bottom - drawArea.top) / 2);
        break;

      case 'right':
        x = drawArea.right - 10;
        y = drawArea.top + ((drawArea.bottom - drawArea.top) / 2);
        break;

      case 'top':
        x = drawArea.left + ((drawArea.right - drawArea.left) / 2);
        y = drawArea.top + 10;
        break;
    }

    // Determine the default rotation for the caption
    var verticalRotation = (this.side === 'left' ? -90 : 90);
    var defaultRotation = (this.orientation === 'horizontal' ? 0 : verticalRotation);

    // Draw the caption
    this.chart.text(text, x, y, Util.merge({
      textRotation: defaultRotation
    }, caption.style));
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Draws the axis' grid.
   *
   * @method drawTicks
   * @private
   * @param {Array} ticks The current list of ticks
   * @since 3.0.0
   */
  drawGrid(ticks) {
    // Grab some local pointers
    var axis = this;
    var chart = axis.chart;
    var chartDrawArea = chart.drawArea;
    var gridStyle = axis.grid.style;

    // Loop through the ticks
    Util.forEach(ticks, function(tick) {
      // Define some local variables
      var pixel = Util.round(axis.convertPointToPixel(tick));
      var x1;
      var x2;
      var y1;
      var y2;

      // Calculte the coordinates based on the axis' orientation
      switch (axis.orientation) {
        case 'horizontal':
          x1 = pixel + 0.5;
          x2 = pixel + 0.5;
          y1 = chartDrawArea.top + chart.axisTop.getOffsetSize();
          y2 = chartDrawArea.bottom - chart.axisBottom.getOffsetSize();
          break;

        case 'vertical':
          x1 = chartDrawArea.left + chart.axisLeft.getOffsetSize();
          x2 = chartDrawArea.right - chart.axisRight.getOffsetSize();
          y1 = pixel + 0.5;
          y2 = pixel + 0.5;
          break;
      }

      // Draw the grid line
      chart.line(x1, y1, x2, y2, gridStyle);
    });
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  drawMajorTicks(ticks) {
    // Grab some local pointers
    var axis = this;
    var chart = axis.chart;
    var drawArea = axis.drawArea;
    var majorTicks = axis.majorTicks;
    var majorTicksStyle = majorTicks.style;

    // Loop through the ticks
    Util.forEach(ticks, function(tick) {
      // Define some local variables
      var pixel = Util.round(axis.convertPointToPixel(tick));
      var x1;
      var x2;
      var y1;
      var y2;

      // Calculte the coordinates based on the axis' orientation
      switch (axis.side) {
        case 'bottom':
          x1 = pixel + 0.5;
          x2 = pixel + 0.5;
          y1 = drawArea.top;
          y2 = drawArea.top + majorTicks.size;
          break;

        case 'left':
          x1 = drawArea.right - majorTicks.size;
          x2 = drawArea.right;
          y1 = pixel + 0.5;
          y2 = pixel + 0.5;
          break;

        case 'right':
          x1 = drawArea.left;
          x2 = drawArea.left + majorTicks.size;
          y1 = pixel + 0.5;
          y2 = pixel + 0.5;
          break;

        case 'top':
          x1 = pixel + 0.5;
          x2 = pixel + 0.5;
          y1 = drawArea.bottom - majorTicks.size;
          y2 = drawArea.bottom;
          break;
      }

      // Draw the grid line
      chart.line(x1, y1, x2, y2, majorTicksStyle);
    });
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Draws the axis' tick marks.
   *
   * @method drawTicks
   * @private
   * @param {Array} ticks The current list of ticks
   * @since 3.0.0
   */
  drawTicks(ticks) {
    // Grab some local pointers
    var axis = this;
    var chart = this.chart;
    var drawArea = this.drawArea;
    var majorTickSize = this.majorTicks.size;

    // If no ticks were created, we can't draw anything
    if (ticks.length === 0) {
      return;
    }

    // Loop through the ticks
    Util.forEach(ticks, function(tick) {
      // Define some local variables
      var pixel = Util.round(axis.convertPointToPixel(tick));
      var text = Util.round(tick, 12);
      var x;
      var y;
      var align;
      var baseline;

      // Calculate the coordinates based on the axis' side
      switch (axis.side) {
        case 'bottom':
          x = pixel;
          y = drawArea.top + 5 + majorTickSize;
          align = 'center';
          baseline = 'top';
          break;

        case 'left':
          x = drawArea.right - 5 - majorTickSize;
          y = pixel;
          align = 'right';
          baseline = 'middle';
          break;

        case 'right':
          x = drawArea.left + 5 + majorTickSize;
          y = pixel;
          align = 'left';
          baseline = 'middle';
          break;

        case 'top':
          x = pixel;
          y = drawArea.bottom - 5 - majorTickSize;
          align = 'center';
          baseline = 'bottom';
          break;
      }

      // Draw the text
      chart.text(text, x, y, {
        'textAlign': align,
        'textBaseline': baseline
      });
    });
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Draws the axis' zeroPlane.
   *
   * @method drawZeroPlane
   * @private
   * @since 3.0.0
   */
  drawZeroPlane() {
    // Grab some local pointers
    var chart = this.chart;
    var chartDrawArea = chart.drawArea;
    var zeroPlane = this.zeroPlane;
    var coordinate = zeroPlane.coordinate;
    var zoom = this.getCurrentZoom();

    // Define some local variables
    var x1;
    var y1;
    var x2;
    var y2;

    // If the zero plane is not visible, there's nothing to draw
    if (!zeroPlane.visible || coordinate < zoom.min || coordinate > zoom.max) {
      return;
    }

    // Calculate the coordinates based on the aixs' orientation
    switch (this.orientation) {
      case 'horizontal':
        x1 = Util.round(this.convertPointToPixel(coordinate)) + 0.5;
        x2 = Util.round(this.convertPointToPixel(coordinate)) + 0.5;
        y1 = chartDrawArea.top + chart.axisTop.getOffsetSize();
        y2 = chartDrawArea.bottom - chart.axisBottom.getOffsetSize();
        break;

      case 'vertical':
        x1 = chartDrawArea.left + chart.axisLeft.getOffsetSize();
        x2 = chartDrawArea.right - chart.axisRight.getOffsetSize();
        y1 = Util.round(this.convertPointToPixel(coordinate)) + 0.5;
        y2 = Util.round(this.convertPointToPixel(coordinate)) + 0.5;
        break;
    }

    // Draw the axis zeroPlane
    if (x1 && y1 && x2 && y2) {
      chart.line(x1, y1, x2, y2, zeroPlane.style);
    }
  }
  /* not-sparkline:end */

  /**
  * Returns the current zoom (plus given spacing) of the axis.
  *
  * @method getCurrentZoom
  * @private
  * @param {Integer} spacing The additional spacing to include
  * @since 3.0.0
  */
  getCurrentZoom(spacing) {
    // Grab some local pointers
    var zoom = this.zoom;
    var extremes = this.extremes;
    var scale = this.scale;

    // Update some variables with default values
    spacing = spacing || 0;

    // Calculate the current zoom
    var currentZoom = {
      min: (zoom.min || extremes.min) - (spacing * scale),
      max: (zoom.max || extremes.max) + (spacing * scale)
    };

    // Return the current zoom
    return currentZoom;
  }

  /**
   * Returns the current offset size of the axis.
   *
   * @method getOffsetSize
   * @private
   * @return {Integer} The offset size of the axis
   * @since 3.0.0
   */
  getOffsetSize() {
    // Determine the size of the axis if shown
    var size = (this.isVisible() ? this.size : 0);

    // Return the size
    return size;
  }

  /**
   * Returns the list of visible series attached to the axis.
   *
   * @method getVisibleSeries
   * @private
   * @return {Array} The visible series
   * @since 3.0.0
   */
  getVisibleSeries() {
    // Grab the list of visible attached series
    var visibleSeries = Util.filter(this.chart.series, (series) => {
      return (
        (this.orientation === 'horizontal' && series.xAxis === this.side && series.isVisible()) ||
        (this.orientation === 'vertical' && series.yAxis === this.side && series.isVisible())
      );
    });

    // Return the list of visible series
    return visibleSeries;
  }

  // TODO:
  hasVisibleSeries() {
    // Determine if there are any visible attached series
    var hasVisibleSeries = this.getVisibleSeries().length > 0;

    // Return if there are any visible attached series
    return hasVisibleSeries;
  }

  /**
   * Determines if the axis is currently visible (needs to be drawn).
   *
   * @method isVisible
   * @private
   * @return {Boolean} If the axis is currently visible
   * @since 3.0.0
   */
  isVisible() {
    // Determine if the axis is visible
    var visible = (Util.isNil(this.visible) ? this.hasVisibleSeries() : this.visible);

    // Return if the axis is visible
    return visible;
  }

  /**
   * Links the series to its owner chart.
   *
   * @method prepare
   * @private
   * @param {EJSC.Chart} chart The owner chart
   * @param {String} side The axis' side
   * @since 3.0.0
   */
  prepare(chart, side) {
    // Update the axis properties
    Util.merge(this, {
      chart: chart,
      side: side,
      orientation: EJSC['sparkline'].Axis.orientations[side]
    });

    // Update the size if needed
    if (Util.isNil(this.size)) {
      this.size = EJSC['sparkline'].Axis.sizes[this.orientation];
    }
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

// Define the default values for orientation
EJSC['sparkline'].Axis.orientations = {
  bottom: 'horizontal',
  left: 'vertical',
  right: 'vertical',
  top: 'horizontal'
};

// Define the default values for size
EJSC['sparkline'].Axis.sizes = {
  horizontal: 45,
  vertical: 70
};
