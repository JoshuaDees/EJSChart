import $Array from '../../util/Array.es6';
import $Number from '../../util/Number.es6';
import $Object from '../../util/Object.es6';
import $String from '../../util/String.es6';
import EJSC from '../../EJSC.es6';
import Inheritable from '../../class/Inheritable.es6';
import Formatter from '../../formatter/Formatter.es6';

/**
 * Holds the code common to all Axis types.
 *
 * @class EJSC.Axis
 * @extends EJSC.Inheritable
 * @constructor
 * @private
 * @since @todo
 */
export default EJSC['sparkline'].Axis = class Axis extends Inheritable {
  /* not-sparkline:start */
  /**
   * Defines the border of the axis.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Object} border
   * @property {Object} border.style
   * @property {String} border.style.color The color of the border in rgb, rgba, or hex form (Default: 'rgb(200, 200, 200)')
   * @property {Integer} border.style.width The width of the border (Default: 1)
   * @property {Boolean} border.visible Whether to show the border or not (Default: true)
   * @since @todo
   */

  // getter
  getBorder() {
    // Return the current border
    return this.border;
  }

  // setter
  setBorder(border) {
    // Update the current border
    $Object.merge(this.border, border);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the caption of the axis.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```

   * @attribute {Object} caption
   * @property {Object} caption.style
   * @property {String} caption.style.fillStyle The color of the caption (Default: 'rgb(100, 100, 100)')
   * @property {String} caption.style.font The font of the caption (Default: 'Bold 11px Verdana')
   * @property {String} caption.style.textAlign The horizontal alignment of the caption (Default: 'center') (Values: 'left', 'center', 'right')
   * @property {String} caption.style.textBaseline The vertical baseline of the caption (Default: 'middle') (Values: 'top', 'middle', 'bottom')
   * @property {Boolean} caption.visible If the caption should be displayed (Default: true)
   * @since @todo
   */

  // getter
  getCaption() {
    // Return the current caption
    return this.caption;
  }

  // setter
  setCaption(caption) {
    // Update the current caption
    $Object.merge(this.caption, caption);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Defines the extremes of the axis.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Object} extremes
   * @property {Number} extremes.max The max extreme (Default: null)
   * @property {Number} extremes.min The min extreme (Default: null)
   * @since @todo
   */

  // getter
  getExtremes() {
    // Return the current extremes
    return this.extremes;
  }

  // setter
  setExtremes(extremes) {
    // Update the current extremes
    $Object.merge(this.extremes, extremes);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  // TODO: formatter

  /* not-sparkline:start */
  /**
   * Defines the grid of the axis.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Object} grid
   * @property {Object} grid.style
   * @property {Array} grid.style.lineDash The line dash of the zero plane (Default: [3, 3])
   * @property {Integer} grid.style.lineWidth The width of the zero plane (Default: 1)
   * @property {String} grid.style.strokeStyle The color of the zero plane (Default: 'rgb(230, 230, 230)')
   * @property {Boolean} grid.visible If the grid should be displayed (Default: true)
   * @since @todo
   */

  // getter
  getGrid() {
    // Return the current grid
    return this.grid;
  }

  // setter
  setGrid(grid) {
    // Update the current grid
    $Object.merge(this.grid, grid);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the major ticks to be displayed on the axis.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Object} majorTicks
   * @property {Integer} majorTicks.size The size of the major ticks (Default: 5)
   * @property {Object} majorTicks.style
   * @property {Integer} majorTicks.style.lineWidth The width of the major ticks (Default: 1)
   * @property {String} majorTicks.style.strokeStyle The color of the major ticks (Default: 'rgb(200, 200, 200)')
   * @property {Boolean} majorTicks.visible If the major ticks should be displayed (Default: true)
   * @since @todo
   */

  // getter
  getMajorTicks() {
    // Return the current major ticks
    return this.majorTicks;
  }

  // setter
  setMajorTicks(majorTicks) {
    // Update the current major ticks
    $Object.merge(this.majorTicks, majorTicks);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /**
   * Defines the padding between the ends of the axis and the start and end of the data displayed when zoomed out.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Integer} padding
   * @default 5
   * @since @todo
   */

  // getter
  getPadding() {
    // Return the current padding
    return this.padding;
  }

  // setter
  setPadding(padding) {
    // Update the current padding
    this.padding = padding;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Defines if the order of the ticks on the axis are reversed or not.
   *
   * @example
   *   ```
   *   // TODO:
   *   ```
   *
   * @attribute {Boolean} reverse
   * @default false
   * @since @todo
   */

  // getter
  getReverse() {
    // Return the current reverse
    return this.reverse;
  }

  // setter
  setReverse(reverse) {
    // Update the current reverse
    this.reverse = reverse;

    // Redraw the chart if needed
    if (this.listening) {
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
  * @since @todo
  */

  // getter
  getSize() {
    // Return the current size
    return this.size;
  }

  // setter
  setSize(size) {
    // Update the current size
    this.size = size;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines if the axis is visible or not.
   *
   * @attribute {Boolean} visible
   * @default true
   * @since @todo
   */

  // getter
  getVisible() {
    // Return the current visible
    return this.visible;
  }

  // setter
  setVisible(visible) {
    // Update the current size
    this.visible = visible;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Defines the zero plane of the axis.
   *
   * @property {Object} zeroPlane
   * @property {Number} zeroPlane.coordinate The coordinate of the zero plane (Default: 0)
   * @property {Object} zeroPlane.style
   * @property {Integer} zeroPlane.style.lineWidth The width of the zero plane (Default: 1)
   * @property {String} zeroPlane.style.strokeStyle The color of the zero plane (Default: 'rgb(170, 170, 170)')
   * @property {Boolean} zeroPlane.style.visible If the zero plane is visible (Default: false)
   * @since @todo
   */

  // getter
  getZeroPlane() {
    // Return the current zeroPlane
    return this.zeroPlane;
  }

  // setter
  setZeroPlane(zeroPlane) {
    // Update the current zeroPlane
    $Object.merge(this.zeroPlane, zeroPlane);

    // Redraw the chart if needed
    if (this.listening) {
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
   * @since @todo
   */

  // getter
  getZoom() {
    // Return the current zoom
    return this.zoom;
  }

  // setter
  setZoom(zoom) {
    // Update the current zoom
    $Object.merge(this.zoom, zoom);

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
   * Holds a reference to the owner chart.
   *
   * @property {EJSC['sparkline'].Chart} chart
   * @protected
   * @default null
   * @since @todo
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
   * @since @todo
   */

  /**
   * Holds the orientation of the axis.
   *
   * Values: 'horizontal', 'vertical'
   *
   * @property {String} orientation
   * @private
   * @default null
   * @since @todo
   */

  /**
   * Holds the current scale to convert pixels to points.
   *
   * @property {Number} scale
   * @private
   * @default null
   * @since @todo
   */

  /**
   * Holds the side of the axis.
   *
   * Values: 'left', 'top', 'right', 'bottom'
   *
   * @property {String} side
   * @private
   * @default null
   * @since @todo
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
    this.formatter = new Formatter();
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
      visible: true
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
   * @since @todo
   */
  calculateDrawArea() {
    // Grab some local pointers
    let chart = this.chart;
    let chartDrawArea = chart.drawArea;
    let drawArea = $Object.merge(this.drawArea, chartDrawArea);

    // Declare some local variables
    let bottom;
    let left;
    let right;
    let top;

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

    $Object.merge(drawArea, {
      left,
      top,
      right,
      bottom
    });
    /* not-sparkline:end */
  }

  /**
   * Calculates the extremes for the axis.
   *
   * @method calculateExtremes
   * @private
   * @since @todo
   */
  calculateExtremes() {
    // Placeholder
  }

  /**
   * Calculates the scale for the axis.
   *
   * @method calculateScale
   * @private
   * @since @todo
   */
  calculateScale() {
    // Grab some local pointers
    let drawArea = this.drawArea;
    let extremes = this.extremes;
    let orientation = this.orientation;
    let zoom = this.zoom;

    // Define some local variables
    let pointMin = zoom.min || extremes.min;
    let pointMax = zoom.max || extremes.max;
    let pixelMin = (orientation === 'vertical' ? drawArea.top : drawArea.left);
    let pixelMax = (orientation === 'vertical' ? drawArea.bottom : drawArea.right);

    // Calculate the scale
    this.scale = (pointMax - pointMin) / (pixelMax - pixelMin);
  }

  /**
   * Calculates the axis' ticks based on the attached series' data.
   *
   * @method calculateTicks
   * @private
   * @since @todo
   */
  calculateTicks() {
    // Return the list of ticks
    return [];
  }

  /**
   * Converts a linear point to a logarithmic point.
   *
   * @method convertLinearToPoint
   * @private
   * @param {Number} linear The linear point
   * @return {Number} The logarithmic point
   * @since @todo
   */
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
   * @since @todo
   */
  convertPixelToPoint(pixel) {
    // Return the point
    return pixel;
  }

  /**
   * Converts a logarithmic point to a linear point.
   *
   * @method convertPointToLinear
   * @private
   * @param {Number} point The logarithmic point
   * @return {Number} The linear point
   * @since @todo
   */
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
   * @since @todo
   */
  convertPointToPixel(point) {
    // Return the pixel
    return point;
  }

  /**
   * Draws the axis.
   *
   * @method draw
   * @private
   * @since @todo
   */
  draw() {
    // Grab some local pointers
    let chart = this.chart;
    let drawArea = chart.drawArea;
    let bottom = drawArea.bottom - chart.axisBottom.getOffsetSize();
    let left = drawArea.left + chart.axisLeft.getOffsetSize();
    let right = drawArea.right - chart.axisRight.getOffsetSize();
    let top = drawArea.top + chart.axisTop.getOffsetSize();

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
    let ticks = this.calculateTicks();

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
    this.drawMajorTickCaptions(ticks);
    /* not-sparkline:end */
  }

  /* not-sparkline:start */
  /**
   * Draws the axis' border.
   *
   * @method drawBorder
   * @private
   * @since @todo
   */
  drawBorder() {
    // Grab some local pointers
    let chart = this.chart;
    let drawArea = this.drawArea;
    let bottom = drawArea.bottom;
    let left = drawArea.left;
    let right = drawArea.right;
    let top = drawArea.top;
    let border = this.border;
    let lineWidth = border.style.lineWidth;
    let bottomLineWidth = (chart.axisBottom.isVisible() ? chart.axisBottom.border.style.lineWidth : 0);
    let leftLineWidth = (chart.axisLeft.isVisible() ? chart.axisLeft.border.style.lineWidth : 0);
    let rightLineWidth = (chart.axisRight.isVisible() ? chart.axisRight.border.style.lineWidth : 0);
    let topLineWidth = (chart.axisTop.isVisible() ? chart.axisTop.border.style.lineWidth : 0);

    // Define some local variables
    let x1;
    let y1;
    let x2;
    let y2;

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
   * @since @todo
   */
  drawCaption() {
    // Grab some local pointers
    let drawArea = this.drawArea;
    let caption = this.caption;

    // Define some local variables
    let text = ($Object.isNull(caption.text) ? $String.capitalize(this.side) + ' Axis' : caption.text);
    let x;
    let y;

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
    let verticalRotation = (this.side === 'left' ? -90 : 90);
    let defaultRotation = (this.orientation === 'horizontal' ? 0 : verticalRotation);

    // Draw the caption
    this.chart.text(text, x, y, $Object.merge({
      textRotation: defaultRotation
    }, caption.style));
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Draws the axis' grid.
   *
   * @method drawGrid
   * @private
   * @param {Array} ticks The current list of ticks
   * @since @todo
   */
  drawGrid(ticks) {
    // Grab some local pointers
    let axis = this;
    let chart = axis.chart;
    let chartDrawArea = chart.drawArea;
    let gridStyle = axis.grid.style;

    // Loop through the ticks
    $Array.forEach(ticks, tick => {
      // Define some local variables
      let pixel = $Number.round(axis.convertPointToPixel(tick));
      let x1;
      let x2;
      let y1;
      let y2;

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
  /**
   * Draws the axis' tick captions.
   *
   * @method drawMajorTickCaptions
   * @private
   * @param {Array} ticks The current list of ticks
   * @since @todo
   */
  drawMajorTickCaptions(ticks) {
    // Grab some local pointers
    let axis = this;
    let chart = this.chart;
    let drawArea = this.drawArea;
    let majorTickSize = this.majorTicks.size;

    // If no ticks were created, we can't draw anything
    if (ticks.length === 0) {
      return;
    }

    // Loop through the ticks
    $Array.forEach(ticks, tick => {
      // Define some local variables
      let pixel = $Number.round(axis.convertPointToPixel(tick));
      let text = $Number.round(tick, 12);
      let x;
      let y;
      let align;
      let baseline;

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
      chart.text(this.formatter.format(text), x, y, {
        textAlign: align,
        textBaseline: baseline
      });
    });
  }
  /* not-sparkline:end */

  /* not-sparkline:start */
  /**
   * Draws the axis' major ticks.
   *
   * @method drawMajorTicks
   * @private
   * @param {Array} ticks The current list of ticks
   * @since @todo
   */
  drawMajorTicks(ticks) {
    // Grab some local pointers
    let axis = this;
    let chart = axis.chart;
    let drawArea = axis.drawArea;
    let majorTicks = axis.majorTicks;
    let majorTicksStyle = majorTicks.style;

    // Loop through the ticks
    $Array.forEach(ticks, tick => {
      // Define some local variables
      let pixel = $Number.round(axis.convertPointToPixel(tick));
      let x1;
      let x2;
      let y1;
      let y2;

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
   * Draws the axis' zero plane.
   *
   * @method drawZeroPlane
   * @private
   * @since @todo
   */
  drawZeroPlane() {
    // Grab some local pointers
    let chart = this.chart;
    let chartDrawArea = chart.drawArea;
    let zeroPlane = this.zeroPlane;
    let coordinate = zeroPlane.coordinate;
    let zoom = this.getCurrentZoom();

    // Define some local variables
    let x1;
    let y1;
    let x2;
    let y2;

    // If the zero plane is not visible, there's nothing to draw
    if (!zeroPlane.visible || coordinate < zoom.min || coordinate > zoom.max) {
      return;
    }

    // Calculate the coordinates based on the aixs' orientation
    switch (this.orientation) {
      case 'horizontal':
        x1 = $Number.round(this.convertPointToPixel(coordinate)) + 0.5;
        x2 = $Number.round(this.convertPointToPixel(coordinate)) + 0.5;
        y1 = chartDrawArea.top + chart.axisTop.getOffsetSize();
        y2 = chartDrawArea.bottom - chart.axisBottom.getOffsetSize();
        break;

      case 'vertical':
        x1 = chartDrawArea.left + chart.axisLeft.getOffsetSize();
        x2 = chartDrawArea.right - chart.axisRight.getOffsetSize();
        y1 = $Number.round(this.convertPointToPixel(coordinate)) + 0.5;
        y2 = $Number.round(this.convertPointToPixel(coordinate)) + 0.5;
        break;
    }

    // Draw the axis zeroPlane
    if (!$Object.isNil(x1) && !$Object.isNil(y1) && !$Object.isNil(x2) && !$Object.isNil(y2)) {
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
  * @since @todo
  */
  getCurrentZoom(spacing) {
    // Grab some local pointers
    let { extremes, orientation, scale, zoom } = this;

    // Define some local variables
    let dataPoint = orientation === 'vertical' ? 'y' : 'x';

    // Return the current zoom
    return {
      min: (zoom.min || extremes.min) - ($Number.max(0, $Object.getProperty(spacing, dataPoint + 'Min')) * scale),
      max: (zoom.max || extremes.max) + ($Number.max(0, $Object.getProperty(spacing, dataPoint + 'Max')) * scale)
    };
  }

  /**
   * Returns the current offset size of the axis.
   *
   * @method getOffsetSize
   * @private
   * @return {Integer} The offset size of the axis
   * @since @todo
   */
  getOffsetSize() {
    // Return the size
    return (this.isVisible() ? this.size : 0);
  }

  /**
   * Returns the list of visible series attached to the axis.
   *
   * @method getVisibleSeries
   * @private
   * @return {Array} The visible series
   * @since @todo
   */
  getVisibleSeries() {
    // Return the list of visible series
    return $Array.filter(this.chart.series, series => (
      (this.orientation === 'horizontal' && series.xAxis === this.side && series.isVisible()) ||
      (this.orientation === 'vertical' && series.yAxis === this.side && series.isVisible())
    ));
  }

  /**
   * Returns if the axis has currently visible series.
   *
   * @method hasVisibleSeries
   * @private
   * @return {Boolean} If there are visible series
   * @since @todo
   */
  hasVisibleSeries() {
    // Return if there are any visible attached series
    return this.getVisibleSeries().length > 0;
  }

  /**
   * Determines if the axis is currently visible (needs to be drawn).
   *
   * @method isVisible
   * @private
   * @return {Boolean} If the axis is currently visible
   * @since @todo
   */
  isVisible() {
    // Return if the axis is visible
    return ($Object.isNil(this.visible) ? this.hasVisibleSeries() : this.visible);
  }

  /**
   * Links the series to its owner chart.
   *
   * @method prepare
   * @private
   * @param {EJSC.Chart} chart The owner chart
   * @param {String} side The axis' side
   * @since @todo
   */
  prepare(chart, side) {
    // Update the axis properties
    $Object.merge(this, {
      chart,
      side,
      orientation: EJSC['sparkline'].Axis.orientations[side]
    });

    // Update the size if needed
    if ($Object.isNil(this.size)) {
      this.size = EJSC['sparkline'].Axis.sizes[this.orientation];
    }
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
    $Object(this).invoke('chart.redraw');
  }
};

/**
 * Defines the default values for orientation or axes.
 *
 * @property {Object} orientations
 * @property {Number} sizes.bottom (Default: 'horizontal')
 * @property {Number} sizes.left (Default: 'vertical')
 * @property {Number} sizes.right (Default: 'vertical')
 * @property {Number} sizes.top (Default: 'horizontal)
 * @static
 * @private
 * @since @todo
 */
EJSC['sparkline'].Axis.orientations = {
  bottom: 'horizontal',
  left: 'vertical',
  right: 'vertical',
  top: 'horizontal'
};

/**
 * Defines the default values for size of axes.
 *
 * @property {Object} sizes
 * @property {Number} sizes.horizontal (Default: 45)
 * @property {Number} sizes.vertical (Default: 70)
 * @static
 * @private
 * @since @todo
 */
EJSC['sparkline'].Axis.sizes = {
  horizontal: 45,
  vertical: 70
};
