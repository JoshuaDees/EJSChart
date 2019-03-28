/*!
 * Emprise JavaScript Charts v3.0.0 http://www.ejschart.com/
 * Copyright (C) 2006-2019 Emprise Corporation. All Rights Reserved.
 *
 * WARNING: This software program is protected by copyright law
 * and international treaties. Unauthorized reproduction or
 * distribution of this program, or any portion of it, may result
 * in severe civil and criminal penalties, and will be prosecuted
 * to the maximum extent possible under the law.
 *
 * See http://www.ejschart.com/license.html for full license.
!*/

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(3);
__webpack_require__(13);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(2);
__webpack_require__(19);
__webpack_require__(26);
__webpack_require__(25);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(22);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(14);
__webpack_require__(27);
__webpack_require__(9);
__webpack_require__(4);
__webpack_require__(8);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Class2 = __webpack_require__(3);

var _Class3 = _interopRequireDefault(_Class2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _String = __webpack_require__(8);

var _String2 = _interopRequireDefault(_String);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Holds the code common to all Axis types.
 *
 * @class EJSC.Axis
 * @extends EJSC.Class
 * @constructor
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Axis = function (_Class) {
  _inherits(Axis, _Class);

  function Axis() {
    _classCallCheck(this, Axis);

    return _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).apply(this, arguments));
  }

  _createClass(Axis, [{
    key: 'getBorder',

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
    value: function getBorder() {
      // Return the current border
      return this.border;
    }

    // setter

  }, {
    key: 'setBorder',
    value: function setBorder(border, apply) {
      // Update the current border
      _Object2.default.merge(this.border, border);

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

  }, {
    key: 'getCaption',
    value: function getCaption() {
      // Return the current caption
      return this.caption;
    }

    // setter

  }, {
    key: 'setCaption',
    value: function setCaption(caption, apply) {
      // Update the current caption
      _Object2.default.merge(this.caption, caption);

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

  }, {
    key: 'getExtremes',
    value: function getExtremes() {
      // Return the current extremes
      return this.extremes;
    }

    // setter

  }, {
    key: 'setExtremes',
    value: function setExtremes(extremes, apply) {
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

  }, {
    key: 'getGrid',
    value: function getGrid() {
      // Return the current grid
      return this.grid;
    }

    // setter

  }, {
    key: 'setGrid',
    value: function setGrid(grid, apply) {
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

  }, {
    key: 'getMajorTicks',
    value: function getMajorTicks() {
      // Return the current major ticks
      return this.majorTicks;
    }

    // setter

  }, {
    key: 'setMajorTicks',
    value: function setMajorTicks(majorTicks, apply) {
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

  }, {
    key: 'getPadding',
    value: function getPadding() {
      // Return the current padding
      return this.padding;
    }

    // setter

  }, {
    key: 'setPadding',
    value: function setPadding(padding, apply) {
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

  }, {
    key: 'getReverse',
    value: function getReverse() {
      // Return the current reverse
      return this.reverse;
    }

    // setter

  }, {
    key: 'setReverse',
    value: function setReverse(reverse, apply) {
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

  }, {
    key: 'getSize',
    value: function getSize() {
      // Return the current size
      return this.size;
    }

    // setter

  }, {
    key: 'setSize',
    value: function setSize(size, apply) {
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

  }, {
    key: 'getVisible',
    value: function getVisible() {
      // Return the current visible
      return this.visible;
    }

    // setter

  }, {
    key: 'setVisible',
    value: function setVisible(visible, apply) {
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

  }, {
    key: 'getZeroPlane',
    value: function getZeroPlane() {
      // Return the current zeroPlane
      return this.zeroPlane;
    }

    // setter

  }, {
    key: 'setZeroPlane',
    value: function setZeroPlane(zeroPlane, apply) {
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

  }, {
    key: 'getZoom',
    value: function getZoom() {
      // Return the current zoom
      return this.zoom;
    }

    // setter

  }, {
    key: 'setZoom',
    value: function setZoom(zoom, apply) {
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
     * @property {EJSC.Chart} chart
     * @protected
     * @default null
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getChart',
    value: function getChart() {
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

  }, {
    key: 'init',
    value: function init() {
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

  }, {
    key: 'calculateDrawArea',
    value: function calculateDrawArea() {
      // Grab some local pointers
      var chart = this.chart;
      var chartDrawArea = chart.drawArea;
      var drawArea = _Object2.default.merge(this.drawArea, chartDrawArea);

      // Declare some local variables
      var bottom = void 0;
      var left = void 0;
      var right = void 0;
      var top = void 0;

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

      _Object2.default.merge(drawArea, {
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

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {}
    // Placeholder


    /**
     * TODO:
     *
     * @method calculateScale
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'calculateScale',
    value: function calculateScale() {
      // Grab some local pointers
      var drawArea = this.drawArea;
      var extremes = this.extremes;
      var orientation = this.orientation;
      var zoom = this.zoom;

      // Define some local variables
      var pointMin = zoom.min || extremes.min;
      var pointMax = zoom.max || extremes.max;
      var pixelMin = orientation === 'vertical' ? drawArea.top : drawArea.left;
      var pixelMax = orientation === 'vertical' ? drawArea.bottom : drawArea.right;

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

  }, {
    key: 'calculateTicks',
    value: function calculateTicks() {
      // Return the list of ticks
      return [];
    }

    // TODO:

  }, {
    key: 'convertLinearToPoint',
    value: function convertLinearToPoint(linear) {
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

  }, {
    key: 'convertPixelToPoint',
    value: function convertPixelToPoint(pixel) {
      // Return the point
      return pixel;
    }

    // TODO:

  }, {
    key: 'convertPointToLinear',
    value: function convertPointToLinear(point) {
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

  }, {
    key: 'convertPointToPixel',
    value: function convertPointToPixel(point) {
      // Return the pixel
      return point;
    }

    // TODO:

  }, {
    key: 'draw',
    value: function draw() {
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

  }, {
    key: 'drawBorder',
    value: function drawBorder() {
      // Grab some local pointers
      var chart = this.chart;
      var drawArea = this.drawArea;
      var bottom = drawArea.bottom;
      var left = drawArea.left;
      var right = drawArea.right;
      var top = drawArea.top;
      var border = this.border;
      var lineWidth = border.style.lineWidth;
      var bottomLineWidth = chart.axisBottom.isVisible() ? chart.axisBottom.border.style.lineWidth : 0;
      var leftLineWidth = chart.axisLeft.isVisible() ? chart.axisLeft.border.style.lineWidth : 0;
      var rightLineWidth = chart.axisRight.isVisible() ? chart.axisRight.border.style.lineWidth : 0;
      var topLineWidth = chart.axisTop.isVisible() ? chart.axisTop.border.style.lineWidth : 0;

      // Define some local variables
      var x1 = void 0;
      var y1 = void 0;
      var x2 = void 0;
      var y2 = void 0;

      // If the border's not visible, don't draw it
      if (!border.visible) {
        return;
      }

      // Determine the coordinates based on the axis' side
      switch (this.side) {
        case 'bottom':
          x1 = left - leftLineWidth;
          y1 = top + lineWidth / 2;
          x2 = right + rightLineWidth;
          y2 = top + lineWidth / 2;
          break;

        case 'left':
          x1 = right - lineWidth / 2;
          y1 = top - topLineWidth;
          x2 = right - lineWidth / 2;
          y2 = bottom + bottomLineWidth;
          break;

        case 'right':
          x1 = left + lineWidth / 2;
          y1 = top - topLineWidth;
          x2 = left + lineWidth / 2;
          y2 = bottom + bottomLineWidth;
          break;

        case 'top':
          x1 = left - leftLineWidth;
          y1 = bottom - lineWidth / 2;
          x2 = right + rightLineWidth;
          y2 = bottom - lineWidth / 2;
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

  }, {
    key: 'drawCaption',
    value: function drawCaption() {
      // Grab some local pointers
      var drawArea = this.drawArea;
      var caption = this.caption;

      // Define some local variables
      var text = _Variable2.default.isNull(caption.text) ? _String2.default.capitalize(this.side) + ' Axis' : caption.text;
      var x = void 0;
      var y = void 0;

      // If the caption's not visible, don't draw it
      if (!caption.visible) {
        return;
      }

      // Calculate the coordinates based on the axis' side
      switch (this.side) {
        case 'bottom':
          x = drawArea.left + (drawArea.right - drawArea.left) / 2;
          y = drawArea.bottom - 10;
          break;

        case 'left':
          x = drawArea.left + 10;
          y = drawArea.top + (drawArea.bottom - drawArea.top) / 2;
          break;

        case 'right':
          x = drawArea.right - 10;
          y = drawArea.top + (drawArea.bottom - drawArea.top) / 2;
          break;

        case 'top':
          x = drawArea.left + (drawArea.right - drawArea.left) / 2;
          y = drawArea.top + 10;
          break;
      }

      // Determine the default rotation for the caption
      var verticalRotation = this.side === 'left' ? -90 : 90;
      var defaultRotation = this.orientation === 'horizontal' ? 0 : verticalRotation;

      // Draw the caption
      this.chart.text(text, x, y, _Object2.default.merge({
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

  }, {
    key: 'drawGrid',
    value: function drawGrid(ticks) {
      // Grab some local pointers
      var axis = this;
      var chart = axis.chart;
      var chartDrawArea = chart.drawArea;
      var gridStyle = axis.grid.style;

      // Loop through the ticks
      ticks.forEach(function (tick) {
        // Define some local variables
        var pixel = _Number2.default.round(axis.convertPointToPixel(tick));
        var x1 = void 0;
        var x2 = void 0;
        var y1 = void 0;
        var y2 = void 0;

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

  }, {
    key: 'drawMajorTicks',
    value: function drawMajorTicks(ticks) {
      // Grab some local pointers
      var axis = this;
      var chart = axis.chart;
      var drawArea = axis.drawArea;
      var majorTicks = axis.majorTicks;
      var majorTicksStyle = majorTicks.style;

      // Loop through the ticks
      ticks.forEach(function (tick) {
        // Define some local variables
        var pixel = _Number2.default.round(axis.convertPointToPixel(tick));
        var x1 = void 0;
        var x2 = void 0;
        var y1 = void 0;
        var y2 = void 0;

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

  }, {
    key: 'drawTicks',
    value: function drawTicks(ticks) {
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
      ticks.forEach(function (tick) {
        // Define some local variables
        var pixel = _Number2.default.round(axis.convertPointToPixel(tick));
        var text = _Number2.default.round(tick, 12);
        var x = void 0;
        var y = void 0;
        var align = void 0;
        var baseline = void 0;

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
          textAlign: align,
          textBaseline: baseline
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

  }, {
    key: 'drawZeroPlane',
    value: function drawZeroPlane() {
      // Grab some local pointers
      var chart = this.chart;
      var chartDrawArea = chart.drawArea;
      var zeroPlane = this.zeroPlane;
      var coordinate = zeroPlane.coordinate;
      var zoom = this.getCurrentZoom();

      // Define some local variables
      var x1 = void 0;
      var y1 = void 0;
      var x2 = void 0;
      var y2 = void 0;

      // If the zero plane is not visible, there's nothing to draw
      if (!zeroPlane.visible || coordinate < zoom.min || coordinate > zoom.max) {
        return;
      }

      // Calculate the coordinates based on the aixs' orientation
      switch (this.orientation) {
        case 'horizontal':
          x1 = _Number2.default.round(this.convertPointToPixel(coordinate)) + 0.5;
          x2 = _Number2.default.round(this.convertPointToPixel(coordinate)) + 0.5;
          y1 = chartDrawArea.top + chart.axisTop.getOffsetSize();
          y2 = chartDrawArea.bottom - chart.axisBottom.getOffsetSize();
          break;

        case 'vertical':
          x1 = chartDrawArea.left + chart.axisLeft.getOffsetSize();
          x2 = chartDrawArea.right - chart.axisRight.getOffsetSize();
          y1 = _Number2.default.round(this.convertPointToPixel(coordinate)) + 0.5;
          y2 = _Number2.default.round(this.convertPointToPixel(coordinate)) + 0.5;
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

  }, {
    key: 'getCurrentZoom',
    value: function getCurrentZoom(spacing) {
      // Grab some local pointers
      var zoom = this.zoom;
      var extremes = this.extremes;
      var scale = this.scale;

      // Update some variables with default values
      spacing = spacing || 0;

      // Calculate the current zoom
      var currentZoom = {
        min: (zoom.min || extremes.min) - spacing * scale,
        max: (zoom.max || extremes.max) + spacing * scale
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

  }, {
    key: 'getOffsetSize',
    value: function getOffsetSize() {
      // Determine the size of the axis if shown
      var size = this.isVisible() ? this.size : 0;

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

  }, {
    key: 'getVisibleSeries',
    value: function getVisibleSeries() {
      var _this2 = this;

      // Grab the list of visible attached series
      var visibleSeries = this.chart.series.filter(function (series) {
        return _this2.orientation === 'horizontal' && series.xAxis === _this2.side && series.isVisible() || _this2.orientation === 'vertical' && series.yAxis === _this2.side && series.isVisible();
      });

      // Return the list of visible series
      return visibleSeries;
    }

    // TODO:

  }, {
    key: 'hasVisibleSeries',
    value: function hasVisibleSeries() {
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

  }, {
    key: 'isVisible',
    value: function isVisible() {
      // Determine if the axis is visible
      var visible = _Variable2.default.isNil(this.visible) ? this.hasVisibleSeries() : this.visible;

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

  }, {
    key: 'prepare',
    value: function prepare(chart, side) {
      // Update the axis properties
      _Object2.default.merge(this, {
        chart: chart,
        side: side,
        orientation: _EJSC2.default.Axis.orientations[side]
      });

      // Update the size if needed
      if (_Variable2.default.isNil(this.size)) {
        this.size = _EJSC2.default.Axis.sizes[this.orientation];
      }
    }

    /**
     * Fires when a property of the class has changed.
     *
     * @method update
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'update',
    value: function update() {
      // Redraw the chart
      if (_Object2.default.has(this, 'chart.redraw')) {
        this.chart.redraw();
      }
    }
  }]);

  return Axis;
}(_Class3.default);

// Define the default values for orientation


_EJSC2.default.Axis.orientations = {
  bottom: 'horizontal',
  left: 'vertical',
  right: 'vertical',
  top: 'horizontal'
};

// Define the default values for size
_EJSC2.default.Axis.sizes = {
  horizontal: 45,
  vertical: 70
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the code for the EJSChart project.
 *
 * @module EJSC
 * @since 3.0.0
 */
exports.default = window.EJSC = new (function () {
  _createClass(EJSC, [{
    key: 'prepare',

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
    value: function prepare(callback) {
      // Add the callback function to the prepared list
      if (callback && {}.toString.call(callback) === '[object Function]') {
        this.prepared.push(callback);
      }
    }

    // constructor

  }]);

  function EJSC() {
    _classCallCheck(this, EJSC);

    // Initialize some private properties
    this.prepared = [];

    // Attach the load method to the window load event
    if (window.attachEvent) {
      window.attachEvent('onload', this.load.bind(this));
    } else {
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


  _createClass(EJSC, [{
    key: 'load',
    value: function load() {
      var _this = this;

      // Run all of the prepared callback functions
      this.prepared.forEach(function (callback) {
        return callback.call(_this);
      });
    }
  }]);

  return EJSC;
}())();



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _String = __webpack_require__(8);

var _String2 = _interopRequireDefault(_String);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Holds the base functionality of all constructable classes.
 *
 * @class EJSC.Class
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Class = function () {
  /**
   * Defines if the class is currently listening for changes.
   *
   * @property {Boolean} listening
   * @default true
   * @since 3.0.0
   */

  // constructor
  function Class() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Class);

    // Initialize the properties
    this.init();

    // Apply the given options
    this.apply(options);
  }

  /**
   * Applies new options to the class.
   *
   * @example
   *
   *   // Create a class
   *   var myClass = new EJSC.SomeClass();
   *
   *   // Apply some new options
   *   myClass.apply({
   *     newProperty: 'newValue'
   *   });
   *
   * @method apply
   * @public
   * @param {Object} [options={}] The options to apply
   * @since 3.0.0
   */


  _createClass(Class, [{
    key: 'apply',
    value: function apply() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Store listening
      var listening = this.listening;

      // Stop listening
      this.listening = false;

      // Loop through each of the options
      Object.entries(options).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            value = _ref2[1];

        // Grab the setter
        var setter = _this['set' + _String2.default.upperFirst(name)];

        // Use the setter if defined
        if (setter) {
          // Call the setter
          setter.call(_this, value, false);
        }

        // Otherwise use merge
        else {
            // Merge the object into the class
            _Object2.default.merge(_this, _defineProperty({}, name, value));
          }
      });

      // Restore listening
      this.listening = listening;
    }

    /**
     * Initializes the variable properties of the class.
     *
     * @method init
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'init',
    value: function init() {
      // Initialize some private properties
      this.listening = true;
    }
  }]);

  return Class;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Array = __webpack_require__(5);

var _Array2 = _interopRequireDefault(_Array);

var _Collection = __webpack_require__(6);

var _Collection2 = _interopRequireDefault(_Collection);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with objects.
 *
 * @class EJSC.Object
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Object = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'has',

    /**
     * Checks if path is a direct property of object.
     *
     * @example
     *
     *   var object = { a: { b: 2 } };
     *
     *   EJSC.Object.has(object, 'a');
     *   // => true
     *
     *   EJSC.Object.has(object, 'a.b');
     *   // => true
     *
     *   EJSC.Object.has(object, ['a', 'b']);
     *   // => true
     *
     *   EJSC.Object.has(object, 'c');
     *   // => false
     *
     * @method has
     * @param {Object} object The object to query
     * @param {Array|String} path The path to check
     * @return {Boolean} If path exists
     * @since 3.0.0
     */
    value: function has(object, path) {
      // Make sure the path is in array form
      path = _Variable2.default.isString(path) ? path.split('.') : path;

      // Define some local variables
      var owner = object;
      var has = true;

      // Loop through each of the parts of the path
      path.forEach(function (step) {
        // If the next step exists
        if (owner[step]) {
          // Move to the next piece
          owner = owner[step];

          // Return true to continue the loop
          return true;
        }

        // If the next step doesn't exist
        else {
            // Mark has as false
            has = false;

            // Return false to stop the loop
            return false;
          }
      });

      // Rreturn if the object has the path
      return has;
    }

    /**
     * This method is like EJSC.Object.assign except that it recursively merges own and inherited
     * enumerable string keyed properties of source objects into the destination object.
     * Source properties that resolve to undefined are skipped if a destination value exists.
     * Array and plain object properties are merged recursively.
     * Other objects and value types are overridden by assignment.
     * Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * @example
     *
     *   // @todo
     *
     * @method max
     * @param {Object} object The destination object
     * @param {Object} ...sources The source objects
     * @return {Object} The object
     * @since 3.0.0
     */

  }, {
    key: 'merge',
    value: function merge(object) {
      var _this = this;

      // Make sure destination is defined
      object = object || {};

      // Loop through each of the sources

      for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }

      _Array2.default.without(sources, null, undefined).forEach(function (source) {
        // Loop through each of the properties of the current source
        _Collection2.default.forEach(source, function (variable, name) {
          // Deep copy the property from the source to the destination
          if (_Variable2.default.isArray(variable)) {
            _this.merge(object[name] = object[name] || [], variable);
          } else if (_Variable2.default.isPlainObject(variable)) {
            _this.merge(object[name] = object[name] || {}, variable);
          } else {
            object[name] = _Variable2.default.isUndefined(variable) ? object[name] : variable;
          }
        });
      });

      // Return the destination object
      return object;
    }
  }]);

  return _class;
}())();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with arrays.
 *
 * @class EJSC.Array
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Array = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'compact',

    /**
     * Creates an array with all falsey values removed.
     * The values false, null, 0, "", undefined, and NaN are falsey.
     *
     * @example
     *
     *   EJSC.Array.compact([0, 1, false, 2, '', 3]);
     *   // => [1, 2, 3]
     *
     * @method compact
     * @param {Array} array The array to compact
     * @return {Array} The new array of filtered values
     * @since 3.0.0
     */
    value: function compact(array) {
      // Returned the compacted array
      return this.without(array, false, null, 0, '', undefined, NaN);
    }

    /**
     * Creates a slice of array from start up to, but not including, end.
     *
     * @example
     *
     *   // TODO: example
     *
     * @method slice
     * @param {Array} array The array to slice
     * @param {Number} [start=0] The start position
     * @param {Number} [end=array.length] The end position
     * @return {Array} The slice of array
     * @since 3.0.0
     */

  }, {
    key: 'slice',
    value: function slice(array) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length;

      // Return the sliced array
      return array && [].slice.call(array, start, end);
    }

    /**
     * Creates an array excluding all given values using SameValueZero for equality comparisons.
     *
     * @example
     *
     *   EJSC.Array.without([2, 1, 2, 3], 1, 2);
     *   // => [3]
     *
     * @method without
     * @param {Array} array The array to inspect
     * @param {*} [...values] The values to exclude
     * @return {Array} The new array of filtered values
     * @since 3.0.0
     */

  }, {
    key: 'without',
    value: function without(array) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      // Define some variables
      var results = [];

      // Loop through the items
      array.forEach(function (value) {
        // If the current item does not need to be removed, push it onto the results array
        if (!values.includes(value)) {
          results.push(value);
        }
      });

      // Return the results array
      return results;
    }
  }]);

  return _class;
}())();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with collections.
 *
 * @class EJSC.Collection
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Collection = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'filter',

    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
     * The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @example
     *
     *   var users = [
     *     { user: 'barney', age: 36, active: true },
     *     { user: 'fred', age: 40, active: false }
     *   ];
     *
     *   EJSC.Collection.filter(users, o => { return !o.active; });
     *   // => objects for ['fred']
     *
     *   // The 'matches' iteratee shorthand.
     *   EJSC.Collection.filter(users, { age: 36, active: true });
     *   // => objects for ['barney']
     *
     *   // The 'matchesProperty' iteratee shorthand.
     *   EJSC.Collection.filter(users, ['active', false]);
     *   // => objects for ['fred']
     *
     *   // The 'property' iteratee shorthand.
     *   EJSC.Collection.filter(users, 'active');
     *   // => objects for ['barney']
     *
     * // TODO: EJSC.Collection.matches iteratee shorthand
     * // TODO: EJSC.Collection.matchesProperty iteratee shorthand
     * // TODO: EJSC.Collection.property iteratee shorthand
     *
     * @method filter
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} predicate The function invoked per iteration
     * @return {Array|Object} The new filterd collection
     * @since 3.0.0
     */
    value: function filter(collection, predicate) {
      // Start with the filtered result as the collection
      var results = collection;

      // Handle arrays
      if (_Variable2.default.isArray(collection)) {
        // Restart with a blank array
        results = [];

        // Loop through the collection adding each item that matches the predicate to the results
        this.forEach(collection, function (value, index) {
          if (predicate(value, index, collection)) {
            results.push(value);
          }
        });
      }

      // Handle objects
      else if (_Variable2.default.isObject(collection)) {
          // Restart with a blank object
          results = {};

          // Loop through the collection adding each item that matches the predicate to the results
          this.forEach(collection, function (value, name) {
            if (predicate(value, name, collection)) {
              results[name] = value;
            }
          });
        }

      // Return the filtered results
      return results;
    }

    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @example
     *
     *   var users = [
     *     { user: 'barney', age: 36, active: true },
     *     { user: 'fred', age: 40, active: false },
     *     { user: 'pebbles', age: 1, active: true }
     *   ];
     *
     *   EJSC.Collection.find(users, function(o) { return o.age < 40; });
     *   // => object for 'barney'
     *
     *   // The 'matches' iteratee shorthand.
     *   EJSC.Collection.find(users, { age: 1, active: true });
     *   // => object for 'pebbles'
     *
     *   // The 'matchesProperty' iteratee shorthand.
     *   EJSC.Collection.find(users, ['active', false]);
     *   // => object for 'fred'
     *
     *   // The 'property' iteratee shorthand.
     *   EJSC.Collection.find(users, 'active');
     *   // => object for 'barney'
     *
     * @method find
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} predicate The function invoked per iteration
     * // TODO: @param {Number} [fromIndex=0] The index to search from
     * @return {*} The matched element, else undefined
     * @since 3.0.0
     */

  }, {
    key: 'find',
    value: function find(collection, predicate /* , fromIndex = 0 */) {
      // Start with the matched result as undefined
      var result = void 0;

      // Loop through the collection
      this.forEach(collection, function (value, id) {
        // If the predicate passes
        if (predicate(value, id, collection)) {
          // Set the result to the current value
          result = value;

          // Return false to stop the loop
          return false;
        }

        // Return true to continue the loop
        return true;
      });

      // Return the matched result
      return result;
    }

    /**
     * Iterates over elements of collection and invokes iteratee for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning false.
     *
     * @example
     *
     *   EJSC.Collection.forEach([1, 2], function(value) {
     *     console.log(value);
     *   });
     *   // => Logs '1' then '2'.
     *
     *   EJSC.Collection.forEach({ a: 1, b: 2 }, function(value, key) {
     *     console.log(key);
     *   });
     *   // => Logs 'a' then 'b' (iteration order is not guaranteed).
     *
     * @method forEach
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} iteratee The function invoked per iteration
     * @return {Array|Object} The collection
     * @since 3.0.0
     */

  }, {
    key: 'forEach',
    value: function forEach(collection, iteratee) {
      // Handle arrays
      if (_Variable2.default.isArray(collection)) {
        // Loop through the collection calling the callback function for each item
        for (var index = 0; index < collection.length; index++) {
          if (iteratee(collection[index], index, collection) === false) {
            break;
          }
        }
      }

      // Handle everything else
      else if (_Variable2.default.isObject(collection)) {
          // Loop through the collection calling the callback function for each item
          for (var name in collection) {
            if (iteratee(collection[name], name, collection) === false) {
              break;
            }
          }
        }

      // Return the collection
      return collection;
    }

    /**
     * Checks if value is in collection.
     * If collection is a string, it's checked for a substring of value.
     * Otherwise SameValueZero is used for equality comparisons.
     * If fromIndex is negative, it's used as the offset from the end of collection.
     *
     * @example
     *
     *   EJSC.Collection.includes([1, 2, 3], 1);
     *   // => true
     *
     *   EJSC.Collection.includes([1, 2, 3], 1, 2);
     *   // => false
     *
     *   EJSC.Collection.includes({ a: 1, b: 2 }, 1);
     *   // => true
     *
     *   EJSC.Collection.includes('abcd', 'bc');
     *   // => true
     *
     * @method includes
     * @param {Array|Object|String} collection The collection to inspect
     * @param {*} value The value to search for
     * @param {Number} [fromIndex=0] The index to search from
     * @return {Boolean} If value is found
     * @since 3.0.0
     */

  }, {
    key: 'includes',
    value: function includes(collection, value) {
      var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      // Start with the found flag as false
      var found = false;

      // Handle a string
      if (_Variable2.default.isString(collection)) {
        // Store if the value string was found in the collection string
        found = collection.indexOf(value) > -1;
      }

      // Handle an array
      else if (_Variable2.default.isArray(collection)) {
          // Loop through the collection and set the flag If the given value is found
          collection.slice(fromIndex).forEach(function (val) {
            if (val === value) {
              found = true;
            }
          });
        }

        // Handle everything else
        else {
            // Loop through the collection and set the flag If the given value is found
            this.forEach(collection, function (val) {
              if (val === value) {
                found = true;
              }
            });
          }

      // Return the found flag
      return found;
    }

    /**
     * Creates an array of values by running each element in collection thru iteratee.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     *
     * @example
     *
     *   function square(n) {
     *     return n * n;
     *   }
     *
     *   EJSC.Collection.map([4, 8], square);
     *   // => [16, 64]
     *
     *   EJSC.Collection.map({ a: 4, b: 8 }, square);
     *   // => [16, 64] (iteration order is not guaranteed)
     *
     *   var users = [
     *     { user: 'barney' },
     *     { user: 'fred' }
     *   ];
     *
     *   // The 'property' iteratee shorthand.
     *   EJSC.Collection.map(users, 'user');
     *   // => ['barney', 'fred']
     *
     * @method map
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} iteratee The function invoked per iteration
     * @return {Array} The new mapped array
     * @since 3.0.0
     */

  }, {
    key: 'map',
    value: function map(collection, iteratee) {
      // Start with a blank results array
      var results = [];

      // Iterate over each item adding its iteratee result to the results array
      this.forEach(collection, function (value, id) {
        results.push(iteratee(value, id, collection));
      });

      // Return the results array
      return results;
    }
  }]);

  return _class;
}())();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with variables.
 *
 * @class EJSC.Variable
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Variable = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'isArguments',

    /**
     * Checks if value is likely an arguments object.
     *
     * @example
     *
     *   EJSC.Variable.isArguments(function() { return arguments; }());
     *   // => true
     *
     *   EJSC.Variable.isArguments([1, 2, 3]);
     *   // => false
     *
     * @method isArguments
     * @param {*} value The value to test
     * @return {Boolean} If value is an arguments array
     * @since 3.0.0
     */
    value: function isArguments(value) {
      // Return if value is an arguments array
      return value && value.hasOwnProperty('callee') && !value.propertyIsEnumerable('callee');
    }

    /**
     * Checks if value is classified as an Array object.
     *
     * @example
     *
     *   EJSC.Variable.isArray([1, 2, 3]);
     *   // => true
     *
     *   EJSC.Variable.isArray(document.body.children);
     *   // => false
     *
     *   EJSC.Variable.isArray('abc');
     *   // => false
     *
     *   EJSC.Variable.isArray(function() {});
     *   // => false
     *
     * @method isArray
     * @param {*} value The value to test
     * @return {Boolean} If value is an array
     * @since 3.0.0
     */

  }, {
    key: 'isArray',
    value: function isArray(value) {
      // Return if value is an array
      return value && value instanceof Array && !this.isArguments(value);
    }

    /**
     * Checks if value is likely a DOM element.
     *
     * @example
     *
     *   EJSC.Variable.isElement(document.body);
     *   // => true
     *
     *   EJSC.Variable.isElement('<body>');
     *   // => false
     *
     * @method isElement
     * @param {*} value The value to test
     * @return {Boolean} If value is a DOM element
     * @since 3.0.0
     */

  }, {
    key: 'isElement',
    value: function isElement(value) {
      // Return if value is a DOM element
      return value && this.isObjectLike(value) && value.nodeType === 1 && !this.isPlainObject(value);
    }

    /**
     * Checks if value is classified as a Function object.
     *
     * @example
     *
     *   EJSC.Variable.isFunction(function() {});
     *   // => true
     *
     *   EJSC.Variable.isFunction(/abc/);
     *   // => false
     *
     * @method isFunction
     * @param {*} value  The value to test
     * @return {Boolean} If value is a function
     * @since 3.0.0
     */

  }, {
    key: 'isFunction',
    value: function isFunction(value) {
      // Return if value is a function
      return value && {}.toString.call(value) === '[object Function]';
    }

    /**
     * Checks if value is null or undefined.
     *
     * @example
     *
     *   EJSC.Variable.isNil(null);
     *   // => true
     *
     *   EJSC.Variable.isNil(void 0);
     *   // => true
     *
     *   EJSC.Variable.isNil(NaN);
     *   // => false
     *
     * @method isNil
     * @param {*} value The value to check
     * @return {Boolean} If value is nullish.
     * @since 3.0.0
     */

  }, {
    key: 'isNil',
    value: function isNil(value) {
      // Return if value is null or undefined
      return this.isNull(value) || this.isUndefined(value);
    }

    /**
     * Checks if value is null.
     *
     * @example
     *
     *   EJSC.Variable.isNull(null);
     *   // => true
     *
     *   EJSC.Variable.isNull(void 0);
     *   // => false
     *
     * @method isNull
     * @param {*} value The value to check
     * @return {Boolean} If value is null.
     * @since 3.0.0
     */

  }, {
    key: 'isNull',
    value: function isNull(value) {
      // Return if value is null
      return value === null;
    }

    /**
     * Checks if value is the language type of Object.
     *
     * @example
     *
     *   EJSC.Variable.isObject({});
     *   // => true
     *
     *   EJSC.Variable.isObject([1, 2, 3]);
     *   // => true
     *
     *   EJSC.Variable.isObject(function() {});
     *   // => true
     *
     *   EJSC.Variable.isObject(null);
     *   // => false
     *
     * @method isObject
     * @param {*} value The value to check
     * @return {Boolean} If value is an object.
     * @since 3.0.0
     */

  }, {
    key: 'isObject',
    value: function isObject(value) {
      // Return if value is an object
      return value && ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
    }

    /**
     * Checks if value is object-like.
     * A value is object-like if it's not null and has a typeof result of "object".
     *
     * @example
     *
     *   EJSC.Variable.isObjectLike({});
     *   // => true
     *
     *   EJSC.Variable.isObjectLike([1, 2, 3]);
     *   // => true
     *
     *   EJSC.Variable.isObjectLike(function() {});
     *   // => false
     *
     *   EJSC.Variable.isObjectLike(null);
     *   // => false
     *
     * @method isObjectLike
     * @param {*} value The value to check
     * @return {Boolean} If value is object-like.
     * @since 3.0.0
     */

  }, {
    key: 'isObjectLike',
    value: function isObjectLike(value) {
      // Return if value is object-like
      return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
    }

    /**
     * Checks if value is a plain object.
     *
     * @example
     *
     *   EJSC.function Foo() {
     *     this.a = 1;
     *   }
     *
     *   EJSC.Variable.isPlainObject(new Foo);
     *   // => false
     *
     *   EJSC.Variable.isPlainObject([1, 2, 3]);
     *   // => false
     *
     *   EJSC.Variable.isPlainObject({ x: 0, y: 0 });
     *   // => true
     *
     *   EJSC.Variable.isPlainObject(Object.create(null));
     *   // => true
     *
     * @method isPlainObject
     * @param {*} value The value to test
     * @return {Boolean} If value is a plain object
     * @since 3.0.0
     */

  }, {
    key: 'isPlainObject',
    value: function isPlainObject(value) {
      // Return if value is a plain object
      return value && value.constructor === Object;
    }

    /**
     * Checks if the variable is a string.
     *
     * @example
     *
     *   EJSC.Variable.isString('abc');
     *   // => true
     *
     *   EJSC.Variable.isString(1);
     *   // => false
     *
     * @method isString
     * @param {*} value The value to test
     * @return {Boolean} If value is a string
     * @since 3.0.0
     */

  }, {
    key: 'isString',
    value: function isString(value) {
      // Return if value is a string
      return value && typeof value === 'string';
    }

    /**
     * Checks if value is undefined.
     *
     * @example
     *
     *   EJSC.Variable.isUndefined(void 0);
     *   // => true
     *
     *   EJSC.Variable.isUndefined(null);
     *   // => false
     *
     * @method isUndefined
     * @param {*} value The value to check
     * @return {Boolean} If value is undefined.
     * @since 3.0.0
     */

  }, {
    key: 'isUndefined',
    value: function isUndefined(value) {
      // Return if value is undefined
      return value === function () {
        // noop
      }();
    }
  }]);

  return _class;
}())();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with strings.
 *
 * @class EJSC.String
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.String = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'capitalize',

    /**
     * Converts the first character of string to upper case and the remaining to lower case.
     *
     * @example
     *
     *   EJSC.String.capitalize('FRED');
     *   // => 'Fred'
     *
     * @method capitalize
     * @param {String} string The string to capitalize
     * @return {String} The capitalized string
     * @since 3.0.0
     */
    value: function capitalize(string) {
      // Return the capitalized string
      return string && string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase();
    }

    /**
     * Converts the first character of string to upper case.
     *
     * @example
     *
     *   EJSC.String.upperFirst('fred');
     *   // => 'Fred'
     *
     *   EJSC.String.upperFirst('FRED');
     *   // => 'FRED'
     *
     * @method upperFirst
     * @param {String} string The string to convert
     * @return {String} The converted string
     * @since 3.0.0
     */

  }, {
    key: 'upperFirst',
    value: function upperFirst(string) {
      // Return the string with the first character in upper case
      return string && string.substr(0, 1).toUpperCase() + string.substr(1);
    }
  }]);

  return _class;
}())();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with numbers.
 *
 * @class EJSC.Number
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Number = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'clamp',

    /**
     * Clamps number within the inclusive lower and upper bounds.
     *
     * @example
     *
     *   EJSC.Number.clamp(-10, -5, 5);
     *   // => -5
     *
     *   EJSC.Number.clamp(10, -5, 5);
     *   // => 5
     *
     * @method capitalize
     * @param {Number} number The number to clamp
     * @param {Number} lower The lower bound
     * @param {Number} uppser The upper bound
     * @return {String} The clamped number
     * @since 3.0.0
     */
    value: function clamp(number, lower, upper) {
      // Return the clamped number
      return this.max(lower, this.min(upper, number));
    }

    /**
     * Computes the maximum value of array.
     * If array is empty or falsey, undefined is returned.
     *
     * @example
     *
     *   EJSC.Number.max(4, 2, 8, 6);
     *   // => 8
     *
     *   EJSC.Number.max();
     *   // => null
     *
     * @method max
     * @param {...Array} numbers The numbers to iterate over
     * @return {Number} The maximum value
     * @since 3.0.0
     */

  }, {
    key: 'max',
    value: function max() {
      // Define some local variables
      var max = null;

      // Loop through the arguments

      for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
      }

      numbers.forEach(function (value) {
        // If there is no current max, or the new value is greater than the current max
        if (_Variable2.default.isNil(max) || max < value) {
          // Update the max
          max = value;
        }
      });

      // Return the max
      return max;
    }

    /**
     * Computes the minimum value of array.
     * If array is empty or falsey, undefined is returned.
     *
     * @example
     *
     *   EJSC.Number.min(4, 2, 8, 6);
     *   // => 2
     *
     *   EJSC.Number.min();
     *   // => null
     *
     * @method min
     * @param {...Array} numbers The numbers to iterate over
     * @return {Number} The minimum value
     * @since 3.0.0
     */

  }, {
    key: 'min',
    value: function min() {
      // Define some local variables
      var min = null;

      // Loop through the arguments

      for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        numbers[_key2] = arguments[_key2];
      }

      numbers.forEach(function (value) {
        // If there is no current min, or the new value is less than the current min
        if (_Variable2.default.isNil(min) || min > value) {
          // Update the min
          min = value;
        }
      });

      // Return the min
      return min;
    }

    /**
     * Computes number rounded to precision.
     *
     * @example
     *
     *   EJSC.Number.round(4.006);
     *   // => 4
     *
     *   EJSC.Number.round(4.006, 2);
     *   // => 4.01
     *
     *   EJSC.Number.round(4060, -2);
     *   // => 4100
     *
     * @method round
     * @param {Number} number The number to round
     * @param {Number} [precision=0] The precision to round to
     * @return {Number} The rounded number
     * @since 3.0.0
     */

  }, {
    key: 'round',
    value: function round(number) {
      var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // Return the rounded number
      return Number(Math.round(number + 'e' + precision) + 'e-' + precision);
    }
  }]);

  return _class;
}())();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Axis2 = __webpack_require__(1);

var _Axis3 = _interopRequireDefault(_Axis2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TODO:
 *
 * @class EJSC.LinearAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.LinearAxis = function (_Axis) {
  _inherits(LinearAxis, _Axis);

  function LinearAxis() {
    _classCallCheck(this, LinearAxis);

    return _possibleConstructorReturn(this, (LinearAxis.__proto__ || Object.getPrototypeOf(LinearAxis)).apply(this, arguments));
  }

  _createClass(LinearAxis, [{
    key: 'calculateCross',

    /* not-sparkline:start */
    value: function calculateCross(point1, point2, coordinate) {
      // Define some local variables
      var x = coordinate;
      var y = coordinate;
      var x1 = point1.x,
          y1 = point1.y;
      var x2 = point2.x,
          y2 = point2.y;

      // Determine the cross points based on the side

      switch (this.orientation) {
        case 'horizontal':
          x = (coordinate - y1) / (y2 - y1) * (x2 - x1) + x1;
          break;

        case 'vertical':
          y = (coordinate - x1) / (x2 - x1) * (y2 - y1) + y1;
          break;
      }

      // Return the cross coordinates
      return { x: x, y: y };
    }
    /* not-sparkline:end */

    /**
     * Calculates the extremes for the axis.
     *
     * @method calculateExtremes
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {
      // Grab some local pointers
      var drawArea = this.drawArea,
          orientation = this.orientation,
          padding = this.padding,
          extremes = this.extremes;

      var visibleSeries = this.getVisibleSeries();

      // Define some local variables
      var dataPoint = orientation === 'vertical' ? 'y' : 'x';
      var spacing = 0;
      var min = null;
      var max = null;
      var scale = void 0;

      // Reset the extremes
      _Object2.default.merge(extremes, { min: min, max: max });

      // If there are no visible series, we can't calculate the extremes
      if (visibleSeries.length <= 0) {
        return;
      }

      // Loop through each of the visible series
      visibleSeries.forEach(function (series) {
        // Calculate the min and max range
        series.data.forEach(function (point) {
          series.dataPoints[dataPoint].forEach(function (property) {
            // Calculate the extremes
            min = _Number2.default.min(min, point[property]);
            max = _Number2.default.max(max, point[property]);
          });
        });

        // Calculate the series spacing
        spacing = _Number2.default.max(spacing, series.calculateSpacing());
      });

      // Add the series spacing to the padding
      padding += spacing - 1;

      // Determine the scale based on the axis' orientation
      switch (orientation) {
        case 'horizontal':
          scale = (max - min) / (drawArea.right - drawArea.left - padding * 2);
          break;

        case 'vertical':
          scale = (max - min) / (drawArea.bottom - drawArea.top - padding * 2);
          break;
      }

      // Update the extremes with padding
      min = min - scale * padding;
      max = max + scale * padding;

      // Store the extremes
      _Object2.default.merge(extremes, { min: min, max: max });
    }

    /**
     * Calculates the axis' ticks based on the attached series' data.
     *
     * @method calculateTicks
     * @private
     * @return {Array} The list of ticks
     * @since 3.0.0
     */

  }, {
    key: 'calculateTicks',
    value: function calculateTicks() {
      // Grab some local pointers
      var zoom = this.getCurrentZoom();

      // Define some local variables
      var min = zoom.min,
          max = zoom.max;

      var range = max - min;
      var interval = Math.pow(10, Math.floor(Math.log10(range)));
      var count = 3;
      var increment = void 0;
      var start = void 0;
      var i = void 0;
      var ticks = [];

      // Set up the increment
      if (range / interval >= count) {
        increment = interval;
      } else if (range / (interval / 2) >= count) {
        increment = interval / 2;
      } else {
        increment = interval / 5;
      }

      // Calculate the starting point
      start = Math.ceil(min / increment) * increment;

      // Build the list of ticks
      for (i = start; i <= max; i += increment) {
        ticks.push(i);
      }

      // Return the list of ticks
      return ticks;
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

  }, {
    key: 'convertPixelToPoint',
    value: function convertPixelToPoint(pixel) {
      // Grab some local pointers
      var drawArea = this.drawArea;
      var zoom = this.getCurrentZoom();

      // Define some local variables
      var pixelMin = void 0;
      var pixelMax = void 0;
      var pixelDif = void 0;
      var pixelPerc = void 0;
      var pointMin = zoom.min,
          pointMax = zoom.max;

      var pointDif = pointMax - pointMin;
      var point = null;

      // There needs to be a current zoom to convert
      if (pointMin !== null && pointMax !== null) {
        // Calculate the coordinate based on the axis' orientation
        switch (this.orientation) {
          case 'horizontal':
            pixelMin = drawArea.left;
            pixelMax = drawArea.right - 1;
            pixelDif = pixelMax - pixelMin;
            pixelPerc = (pixel - pixelMin) / pixelDif;

            if (this.reverse === false) {
              point = pointMin + pointDif * pixelPerc;
            } else {
              point = pointMax - pointDif * pixelPerc;
            }

            break;

          case 'vertical':
            pixelMin = drawArea.top;
            pixelMax = drawArea.bottom - 1;
            pixelDif = pixelMax - pixelMin;
            pixelPerc = (pixel - pixelMin) / pixelDif;

            if (this.reverse === false) {
              point = pointMax - pointDif * pixelPerc;
            } else {
              point = pointMin + pointDif * pixelPerc;
            }

            break;
        }
      }

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

  }, {
    key: 'convertPointToPixel',
    value: function convertPointToPixel(point) {
      // Grab some local pointers
      var drawArea = this.drawArea;
      var zoom = this.getCurrentZoom();

      // Define some local variables
      var pointMin = zoom.min,
          pointMax = zoom.max;

      var pointPerc = (point - pointMin) / (pointMax - pointMin);
      var pixelMin = void 0;
      var pixelMax = void 0;
      var pixelDif = void 0;
      var pixel = null;

      // There needs to be a current zoom to convert
      if (pointMin !== null && pointMax !== null) {
        // Determine the coordinate based on the axis' orientation
        switch (this.orientation) {
          case 'horizontal':
            pixelMin = drawArea.left;
            pixelMax = drawArea.right - 1;
            pixelDif = pixelMax - pixelMin;

            if (this.reverse === false) {
              pixel = pixelMin + pixelDif * pointPerc;
            } else {
              pixel = pixelMax - pixelDif * pointPerc;
            }

            break;

          case 'vertical':
            pixelMin = drawArea.top;
            pixelMax = drawArea.bottom - 1;
            pixelDif = pixelMax - pixelMin;

            if (this.reverse === false) {
              pixel = pixelMax - pixelDif * pointPerc;
            } else {
              pixel = pixelMin + pixelDif * pointPerc;
            }

            break;
        }
      }

      // Return the pixel
      return pixel;
    }
  }]);

  return LinearAxis;
}(_Axis3.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Axis2 = __webpack_require__(1);

var _Axis3 = _interopRequireDefault(_Axis2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TODO:
 *
 * @class EJSC.LogarithmicAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.LogarithmicAxis = function (_Axis) {
  _inherits(LogarithmicAxis, _Axis);

  function LogarithmicAxis() {
    _classCallCheck(this, LogarithmicAxis);

    return _possibleConstructorReturn(this, (LogarithmicAxis.__proto__ || Object.getPrototypeOf(LogarithmicAxis)).apply(this, arguments));
  }

  _createClass(LogarithmicAxis, [{
    key: 'getBase',

    // getter
    value: function getBase() {
      // Return the current base
      return this.base;
    }

    // setter

  }, {
    key: 'setBase',
    value: function setBase(base, apply) {
      // Update the current base
      this.base = base;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(LogarithmicAxis.prototype.__proto__ || Object.getPrototypeOf(LogarithmicAxis.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.base = 10;

      // Initialize some private properties
      this.logPoints = {
        maxPositive: null,
        minPositive: null,
        zeroValue: null,
        maxNegative: null,
        minNegative: null
      };
    }

    // TODO:

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {
      // Grab some local pointers
      var drawArea = this.drawArea,
          orientation = this.orientation,
          padding = this.padding,
          extremes = this.extremes,
          logPoints = this.logPoints;

      var visibleSeries = this.getVisibleSeries();

      // Define some local variables
      var dataPoint = orientation === 'vertical' ? 'y' : 'x';
      var spacing = 0;
      var min = null;
      var max = null;
      var maxPositive = null;
      var minPositive = null;
      var zeroValue = null;
      var maxNegative = null;
      var minNegative = null;
      var scale = void 0;
      var linearMin = void 0;
      var linearMax = void 0;

      // Reset the extremes
      _Object2.default.merge(extremes, {
        min: null,
        max: null
      });

      // Reset the log points
      _Object2.default.merge(logPoints, {
        maxPositive: null,
        minPositive: null,
        zeroValue: null,
        maxNegative: null,
        minNegative: null
      });

      // If there are no visible series, we can't calculate the extremes
      if (visibleSeries.length <= 0) {
        return;
      }

      // Loop through each of the visible series
      visibleSeries.forEach(function (series) {
        // Calculate the min and max range
        series.data.forEach(function (point) {
          series.dataPoints[dataPoint].forEach(function (property) {
            // Calculate the extremes
            min = _Number2.default.min(min, point[property]);
            max = _Number2.default.max(max, point[property]);

            // Calculate the log points
            if (point[property] > 0) {
              maxPositive = _Number2.default.max(maxPositive, point[property]);
              minPositive = _Number2.default.min(minPositive, point[property]);
            } else if (point[property] === 0) {
              zeroValue = 0;
            } else if (point[property] < 0) {
              maxNegative = _Number2.default.max(maxNegative, point[property]);
              minNegative = _Number2.default.min(minNegative, point[property]);
            }
          });
        });

        // Calculate the series spacing
        spacing = _Number2.default.max(spacing, series.calculateSpacing());
      });

      if (!_Variable2.default.isNil(zeroValue) || !_Variable2.default.isNil(minPositive) && !_Variable2.default.isNil(maxNegative)) {
        // Make sure the zero value is defined
        zeroValue = 0;

        // Move minPositive and maxNegative to closest power
        minPositive = this.convertPowerToPoint(Math.floor(this.convertPointToPower(minPositive)));
        maxNegative = -this.convertPowerToPoint(Math.floor(this.convertPointToPower(-maxNegative)));
      }

      // Reset the log points
      _Object2.default.merge(logPoints, { maxPositive: maxPositive, minPositive: minPositive, zeroValue: zeroValue, maxNegative: maxNegative, minNegative: minNegative });

      // Add the series spacing to the padding
      padding += spacing - 1;

      linearMin = this.convertPointToLinear(min);
      linearMax = this.convertPointToLinear(max);

      // Determine the scale based on the axis' orientation
      switch (orientation) {
        case 'horizontal':
          scale = (linearMax - linearMin) / (drawArea.right - drawArea.left - padding * 2);
          break;

        case 'vertical':
          scale = (linearMax - linearMin) / (drawArea.bottom - drawArea.top - padding * 2);
          break;
      }

      // Update the extremes with padding
      min = this.convertLinearToPoint(linearMin - scale * padding);
      max = this.convertLinearToPoint(linearMax + scale * padding);

      // Store the extremes
      _Object2.default.merge(extremes, { min: min, max: max });
    }

    // TODO:

  }, {
    key: 'calculateTicks',
    value: function calculateTicks() {
      // Grab some local pointers
      var zoom = this.getCurrentZoom();
      var min = this.convertPointToLinear(zoom.min);
      var max = this.convertPointToLinear(zoom.max);

      // Define some local variables
      var ticks = [];
      var i = void 0;

      // Loop through adding a tick at each power
      for (i = Math.ceil(min); i <= Math.floor(max); i++) {
        ticks.push(this.convertLinearToPoint(i));
      }

      // Return the list of ticks
      return ticks;
    }

    // TODO:

  }, {
    key: 'convertLinearToPoint',
    value: function convertLinearToPoint(linear) {
      // TODO:
      var _logPoints = this.logPoints,
          minPositive = _logPoints.minPositive,
          maxNegative = _logPoints.maxNegative;

      // TODO:

      var point = void 0;

      // Convert 0 to 0
      if (linear === 0) {
        point = 0;
      }

      // TODO:
      else if (linear > 0 && linear < 1) {}
        // TODO


        // TODO:
        else if (linear < 0 && linear > -1) {}
          // TODO:


          // TODO
          else if (linear >= 1) {
              point = this.convertPowerToPoint(linear - 1 + this.convertPointToPower(minPositive));
            }

            // TODO:
            else if (linear <= -1) {
                point = -this.convertPowerToPoint(-linear - 1 + this.convertPointToPower(-maxNegative));
              }

      // Return the point value
      return point;
    }

    // TODO:

  }, {
    key: 'convertPixelToPoint',
    value: function convertPixelToPoint(pixel) {
      // Grab some local pointers
      var drawArea = this.drawArea;
      var zoom = this.getCurrentZoom();

      // Define some local variables
      var pixelMin = void 0;
      var pixelMax = void 0;
      var pixelDif = void 0;
      var pixelPerc = void 0;
      var linearMin = this.convertPointToLinear(zoom.min);
      var linearMax = this.convertPointToLinear(zoom.max);
      var linearDif = linearMax - linearMin;
      var point = null;

      // There needs to be a current zoom to convert
      if (linearMin !== null && linearMax !== null) {
        // Calculate the coordinate based on the axis' orientation
        switch (this.orientation) {
          case 'horizontal':
            pixelMin = drawArea.left;
            pixelMax = drawArea.right - 1;
            pixelDif = pixelMax - pixelMin;
            pixelPerc = (pixel - pixelMin) / pixelDif;

            if (this.reverse === false) {
              point = this.convertLinearToPoint(linearMin + linearDif * pixelPerc);
            } else {
              point = this.convertLinearToPoint(linearMax - linearDif * pixelPerc);
            }

            break;

          case 'vertical':
            pixelMin = drawArea.top;
            pixelMax = drawArea.bottom - 1;
            pixelDif = pixelMax - pixelMin;
            pixelPerc = (pixel - pixelMin) / pixelDif;

            if (this.reverse === false) {
              point = this.convertLinearToPoint(linearMax - linearDif * pixelPerc);
            } else {
              point = this.convertLinearToPoint(linearMin + linearDif * pixelPerc);
            }

            break;
        }
      }

      // Return the point
      return point;
    }

    // TODO:

  }, {
    key: 'convertPointToLinear',
    value: function convertPointToLinear(point) {
      // TODO:
      var _logPoints2 = this.logPoints,
          minPositive = _logPoints2.minPositive,
          maxNegative = _logPoints2.maxNegative;

      // TODO:

      var linear = void 0;

      // Convert 0 to 0
      if (point === 0) {
        linear = 0;
      }

      // TODO:
      else if (point > 0 && point < minPositive) {}
        // TODO:


        // TODO:
        else if (point < 0 && point > maxNegative) {}
          // TODO:


          // Calculate the power difference for positive values above minPositive
          else if (point >= minPositive) {
              linear = this.convertPointToPower(point) - this.convertPointToPower(minPositive) + 1;
            }

            // Calculate the power difference for negative values below maxNegative
            else if (point <= maxNegative) {
                linear = -(this.convertPointToPower(-point) - this.convertPointToPower(-maxNegative) + 1);
              }

      // Return the linear value
      return linear;
    }

    // TODO:

  }, {
    key: 'convertPointToPixel',
    value: function convertPointToPixel(point) {
      // Grab some local pointers
      var drawArea = this.drawArea;
      var zoom = this.getCurrentZoom();

      // Define some local variables
      var linearMin = this.convertPointToLinear(zoom.min);
      var linearMax = this.convertPointToLinear(zoom.max);
      var linearPerc = (this.convertPointToLinear(point) - linearMin) / (linearMax - linearMin);
      var pixelMin = void 0;
      var pixelMax = void 0;
      var pixelDif = void 0;
      var pixel = null;

      // There needs to be a current zoom to convert
      if (linearMin !== null && linearMax !== null) {
        // Determine the coordinate based on the axis' orientation
        switch (this.orientation) {
          case 'horizontal':
            pixelMin = drawArea.left;
            pixelMax = drawArea.right - 1;
            pixelDif = pixelMax - pixelMin;

            if (this.reverse === false) {
              pixel = pixelMin + pixelDif * linearPerc;
            } else {
              pixel = pixelMax - pixelDif * linearPerc;
            }

            break;

          case 'vertical':
            pixelMin = drawArea.top;
            pixelMax = drawArea.bottom - 1;
            pixelDif = pixelMax - pixelMin;

            if (this.reverse === false) {
              pixel = pixelMax - pixelDif * linearPerc;
            } else {
              pixel = pixelMin + pixelDif * linearPerc;
            }

            break;
        }
      }

      // Return the pixel
      return pixel;
    }

    // TODO:

  }, {
    key: 'convertPointToPower',
    value: function convertPointToPower(point) {
      // Calculate the power value
      var power = Math.log(point) / Math.log(this.base);

      // Return the power value
      return power;
    }

    // TODO:

  }, {
    key: 'convertPowerToPoint',
    value: function convertPowerToPoint(power) {
      // Calculate the point value
      var point = Math.pow(this.base, power);

      // Return the point value
      return point;
    }
  }]);

  return LogarithmicAxis;
}(_Axis3.default);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Drawing2 = __webpack_require__(13);

var _Drawing3 = _interopRequireDefault(_Drawing2);

var _DOM = __webpack_require__(14);

var _DOM2 = _interopRequireDefault(_DOM);

var _String = __webpack_require__(8);

var _String2 = _interopRequireDefault(_String);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Defines a basic chart that can display a variety of series types on it.
 *
 * A container must be defined in the config options in order for the chart to be rendered to the page.
 *
 * @example
 *
 *   // Create a chart sending in the id of the container
 *   var chart = new EJSC.Chart('chart-container');
 *
 *   // Create a chart sending in a reference to the container's element
 *   var chart = new EJSC.Chart(document.getElementById('chart-container'));
 *
 * @class EJSC.Chart
 * @extends EJSC.Drawing
 * @constructor
 * @param {DOMElement|String} container The container to render the chart in
 * @param {Object} [options] The config options to apply to the chart
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Chart = function (_Drawing) {
  _inherits(Chart, _Drawing);

  _createClass(Chart, [{
    key: 'getAxisBottom',

    /* not-sparkline:start */
    /**
     * Defines the bottom axis for the chart.
     *
     * @example
     *
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the bottom axis by sending in the config options
     *     axisBottom: { ... }
     *   });
     *
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the bottom axis by sending in an Axis class
     *     axisBottom: new EJSC.LinearAxis({ ... })
     *   });
     *
     * @attribute {EJSC.Axis|Object} axisBottom
     * @default null
     * @since 3.0.0
     */

    // getter
    value: function getAxisBottom() {
      // Return the current axisBottom
      return this.axisBottom;
    }

    // setter

  }, {
    key: 'setAxisBottom',
    value: function setAxisBottom(axisBottom, apply) {
      // Make sure the axis is actually an axis
      if (!(axisBottom instanceof _EJSC2.default.Axis)) {
        axisBottom = new _EJSC2.default.LinearAxis(axisBottom);
      }

      // Prepare the axis
      axisBottom.prepare(this, 'bottom');

      // Store the new axisBottom
      this.axisBottom = axisBottom;

      // Redraw the chart if needed
      if (apply !== false) {
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
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the left axis by sending in the config options
     *     axisLeft: { ... }
     *   });
     *
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the left axis by sending in an Axis class
     *     axisLeft: new EJSC.LinearAxis({ ... })
     *   });
     *
     * @attribute {EJSC.Axis|Object} axisLeft
     * @default null
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getAxisLeft',
    value: function getAxisLeft() {
      // Return the current axisLeft
      return this.axisLeft;
    }

    // setter

  }, {
    key: 'setAxisLeft',
    value: function setAxisLeft(axisLeft, apply) {
      // Make sure the axis is actually an axis
      if (!(axisLeft instanceof _EJSC2.default.Axis)) {
        axisLeft = new _EJSC2.default.LinearAxis(axisLeft);
      }

      // Prepare the axis
      axisLeft.prepare(this, 'left');

      // Store the new axisLeft
      this.axisLeft = axisLeft;

      // Redraw the chart if needed
      if (apply !== false) {
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
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the right axis by sending in the config options
     *     axisRight: { ... }
     *   });
     *
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the right axis by sending in an Axis class
     *     axisRight: new EJSC.LinearAxis({ ... })
     *   });
     *
     * @attribute {EJSC.Axis|Object} axisRight
     * @default null
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getAxisRight',
    value: function getAxisRight() {
      // Return the current axisRight
      return this.axisRight;
    }

    // setter

  }, {
    key: 'setAxisRight',
    value: function setAxisRight(axisRight, apply) {
      // Make sure the axis is actually an axis
      if (!(axisRight instanceof _EJSC2.default.Axis)) {
        axisRight = new _EJSC2.default.LinearAxis(axisRight);
      }

      // Prepare the axis
      axisRight.prepare(this, 'right');

      // Store the new axisRight
      this.axisRight = axisRight;

      // Redraw the chart if needed
      if (apply !== false) {
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
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the top axis by sending in the config options
     *     axisTop: { ... }
     *   });
     *
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the top axis by sending in an Axis class
     *     axisTop: new EJSC.LinearAxis({ ... })
     *   });
     *
     * @attribute {EJSC.Axis|Object} axisTop
     * @default null
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getAxisTop',
    value: function getAxisTop() {
      // Return the current axisTop
      return this.axisTop;
    }

    // setter

  }, {
    key: 'setAxisTop',
    value: function setAxisTop(axisTop, apply) {
      // Make sure the axis is actually an axis
      if (!(axisTop instanceof _EJSC2.default.Axis)) {
        axisTop = new _EJSC2.default.LinearAxis(axisTop);
      }

      // Prepare the axis
      axisTop.prepare(this, 'top');

      // Store the new axisTop
      this.axisTop = axisTop;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }
    /* not-sparkline:end */

    // TODO:

    // getter

  }, {
    key: 'getBackground',
    value: function getBackground() {
      // Return the current background
      return this.background;
    }

    // setter

  }, {
    key: 'setBackground',
    value: function setBackground(background, apply) {
      // Store the new background
      this.background = background;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Defines the default colors to apply to new series.
     *
     * @example
     *
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the default colors as [red, green, blue]
     *     colors: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']
     *   });
     *
     * @attribute {Array} colors
     * @default [...]
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getColors',
    value: function getColors() {
      // Return the current colors
      return this.colors;
    }

    // setter

  }, {
    key: 'setColors',
    value: function setColors(colors, apply) {
      // Store the new colors
      this.colors = colors;

      // Redraw the chart if needed
      if (apply !== false) {
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
     *   var chart = new EJSC.Chart('chart-container', {
     *     // Define the title as 'My Chart'
     *     title: 'My Chart'
     *   });
     *
     * @attribute {String} title
     * @default 'Emprise JavaScript Charts'
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getTitle',
    value: function getTitle() {
      // Return the current title
      return this.title;
    }

    // setter

  }, {
    key: 'setTitle',
    value: function setTitle(title, apply) {
      // Store the new title
      this.title = title;

      // Redraw the chart if needed
      if (apply !== false) {
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
     *   var chart = new EJSC.Chart('chart-container', {
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
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getTitlebar',
    value: function getTitlebar() {
      // Return the current titlebar
      return this.titlebar;
    }

    // setter

  }, {
    key: 'setTitlebar',
    value: function setTitlebar(titlebar, apply) {
      // Update the current titlebar
      this.update(this.titlebar, titlebar);

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }
    /* not-sparkline:end */

    /* not-sparkline:start */
    /**
     * Defines the user zooming.
     *
     * @example
     *
     *   // TODO: Example
     *
     * @attribute {EJSC.UserZoom|Object} zoom
     * @default null
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getZoom',
    value: function getZoom() {
      // Return the current zoom
      return this.zoom;
    }

    // setter

  }, {
    key: 'setZoom',
    value: function setZoom(zoom, apply) {
      // Turn the zoom into a user zoom if needed
      if (!(zoom instanceof _EJSC2.default.UserZoom)) {
        zoom = new _EJSC2.default.UserZoom(zoom);
      }

      // Prepare the zoom
      zoom.prepare(this);

      // Update the current zoom
      this.zoom = zoom;

      // Redraw the chart if needed
      if (apply !== false) {
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
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getSeries',
    value: function getSeries() {
      // Return the current series
      return this.series;
    }

    /**
     * Holds the list of axis property names.
     *
     * @property {Array} axisList
     * @private
     * @default ['axisBottom', 'axisLeft', 'axisRight', 'axisTop']
     * @since 3.0.0
     */

    /**
     * Defines the next index to use to choose a color.
     *
     * @property {Integer} colorIndex
     * @private
     * @default 0
     * @since 3.0.0
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
     * @since 3.0.0
     */

    /**
     * Holds the list of axis side names.
     *
     * @property {Array} sidesList
     * @private
     * @default ['bottom', 'left', 'righ', 'top']
     * @since 3.0.0
     */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleClick',
    value: function handleClick() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleGlobalMouseMove',
    value: function handleGlobalMouseMove() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleGlobalMouseUp',
    value: function handleGlobalMouseUp() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() /* event */{}
    // TODO:

    /* not-sparkline:end */

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'handleMouseWheel',
    value: function handleMouseWheel() /* event */{}
    // TODO:

    /* not-sparkline:end */

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
     *   // Create a chart in the element with the id 'chart-container'
     *   var chart = new EJSC.Chart(document.getElementById('chart-container'));
     *
     *   // Add a scatter series to the chart
     *   var series1 = chart.addSeries(
     *     new EJSC.ScatterSeries(...)
     *   );
     *
     * @method addSeries
     * @param {EJSC.Series} series The series to add to the chart
     * @param {Boolean} [redraw=true] Whether to redraw the chart or not
     * @return {EJSC.Series} The series that was added
     * @since 3.0.0
     */

  }, {
    key: 'addSeries',
    value: function addSeries(series, redraw) {
      // If the series is not actually a series, back out
      if (!(series instanceof _EJSC2.default.Series)) {
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
     *   var chart = new EJSC.Chart('chart-container');
     *
     *   // Add a scatter series to the chart without redrawing the chart
     *   var series1 = chart.addSeries(
     *     new EJSC.ScatterSeries(...),
     *     false
     *   );
     *
     *   // Add a line series to the chart without redrawing the chart
     *   var series2 = chart.addSeries(
     *     new EJSC.LineSeries(...),
     *     false
     *   );
     *
     *   // Redraw the chart
     *   chart.redraw();
     *
     * @method redraw
     * @since 3.0.0
     */

  }, {
    key: 'redraw',
    value: function redraw() {
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

  }]);

  function Chart(container, options) {
    _classCallCheck(this, Chart);

    // Prepare the chart
    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, container, options));
    // super


    _this.prepare();

    // Redraw the chart
    _this.redraw();
    return _this;
  }

  // init


  _createClass(Chart, [{
    key: 'init',
    value: function init() {
      // Initialize some public properties
      this.axisBottom = null;
      this.axisLeft = null;
      this.axisRight = null;
      this.axisTop = null;
      this.background = 'rgba(0, 0, 0, 0)';
      this.colors = ['rgb(150, 184, 211)', 'rgb(205, 171, 66)', 'rgb(139, 167, 55)', 'rgb(204, 136, 92)', 'rgb(59, 144, 144)', 'rgb(181, 94, 94)', 'rgb(144, 100, 144)', 'rgb(109, 136, 79)', 'rgb(197, 190, 104)', 'rgb(59, 144, 187)', 'rgb(140, 48, 51)', 'rgb(151, 135, 169)', 'rgb(191, 132, 72)', 'rgb(206, 173, 136)', 'rgb(159, 153, 57)', 'rgb(209, 130, 139)', 'rgb(205, 197, 51)', 'rgb(55, 106, 155)', 'rgb(203, 143, 71)', 'rgb(178, 87, 56)', 'rgb(53, 115, 53)', 'rgb(120, 90, 59)'];

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
      this.zoom = null;
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
     * @since 3.0.0
     */

  }, {
    key: 'drawAxes',
    value: function drawAxes() {
      var _this2 = this;

      // Draw the axes
      this.axisList.forEach(function (axis) {
        _this2[axis].draw();
      });

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
     * @since 3.0.0
     */

  }, {
    key: 'drawBackground',
    value: function drawBackground() {
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
     * @since 3.0.0
     */

  }, {
    key: 'drawSeries',
    value: function drawSeries() {
      // Begin clipping the drawing area
      this.beginClip(this.drawArea.left, this.drawArea.top, this.drawArea.right - this.drawArea.left, this.drawArea.bottom - this.drawArea.top);

      // Loop through the visible series and draw each
      this.getVisibleSeries().forEach(function (series) {
        series.draw();
      });

      // End clipping the drawing area
      this.endClip();
    }

    /* not-sparkline:start */
    /**
     * Draws the titlebar to the chart.
     *
     * @method drawTitlebar
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'drawTitlebar',
    value: function drawTitlebar() {
      // If the titlebar isn't visible, don't do anything
      if (this.titlebar.visible && this.title) {
        // Begin clipping the drawing area
        this.beginClip(this.drawArea.left + this.titlebar.padding, this.drawArea.top, this.drawArea.right - this.titlebar.padding * 2, this.titlebar.height);

        // Draw the title
        this.text(this.title, this.titlebar.padding, this.titlebar.lineHeight / 2, {
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

    // TODO:

  }, {
    key: 'getNextColor',
    value: function getNextColor() {
      // Grab the next available color
      var color = this.colors[this.colorIndex++];

      // Reset the color index if needed
      if (this.colorIndex === this.colors.length) {
        this.colorIndex = 0;
      }

      // Return the selected color
      return color;
    }

    // TODO:

  }, {
    key: 'getVisibleSeries',
    value: function getVisibleSeries() {
      // Get the list of visible series
      var visibleSeries = this.series.filter(function (series) {
        return series.isVisible();
      });

      // Return the list of visible series
      return visibleSeries;
    }

    // TODO:

  }, {
    key: 'prepare',
    value: function prepare() {
      /* not-sparkline:start */
      // Attach the listeners
      this.prepareListeners();
      /* not-sparkline:end */

      this.prepareAxes();
    }

    // TODO:

  }, {
    key: 'prepareAxes',
    value: function prepareAxes() {
      var _this3 = this;

      // Loop through each of the sides
      this.sidesList.forEach(function (side) {
        // Create some temporary variables
        var axis = 'axis' + _String2.default.capitalize(side);

        // Turn the axis into a class if not already one
        if (!(_this3[axis] instanceof _EJSC2.default.Axis)) {
          _this3[axis] = new _EJSC2.default.LinearAxis(_this3[axis]);
        }

        // Prepare the axis
        _this3[axis].prepare(_this3, side);
      });
    }

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'prepareListeners',
    value: function prepareListeners() {
      // Grab the engine's element
      var element = this.engine.element;
      var $element = (0, _DOM2.default)(element);
      var $document = (0, _DOM2.default)(document);

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
    }
    /* not-sparkline:end */

    // TODO:

  }, {
    key: 'resetDrawArea',
    value: function resetDrawArea() {
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
     * @since 3.0.0
     */

  }, {
    key: 'update',
    value: function update() {
      // Redraw the chart
      this.redraw();
    }
  }]);

  return Chart;
}(_Drawing3.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Class2 = __webpack_require__(3);

var _Class3 = _interopRequireDefault(_Class2);

var _DOM = __webpack_require__(14);

var _DOM2 = _interopRequireDefault(_DOM);

var _Collection = __webpack_require__(6);

var _Collection2 = _interopRequireDefault(_Collection);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * // TODO:
 *
 * @class EJSC.Drawing
 * @constructor
 * @param {Element|String} The container element or id
 * @param {Object} [options={}] The config options
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Drawing = function (_Class) {
  _inherits(Drawing, _Class);

  _createClass(Drawing, [{
    key: 'getContainer',

    /**
     * Defines the container element to render the drawing in.
     *
     * @example
     *
     *   // Create a chart sending in the id of the container
     *   let chart = new EJSC['.sparkline'].Chart('chart-container');
     *
     *   // Create a chart sending in a reference to the container's element
     *   let chart = new EJSC['.sparkline'].Chart(document.getElementById('chart-container'));
     *
     * @attribute {Element|String} container
     * @default null
     * @required
     * @since 3.0.0
     */

    // getter
    value: function getContainer() {
      return this.container;
    }

    // setter

  }, {
    key: 'setContainer',
    value: function setContainer(container) {
      // Save the new container
      this.container = (0, _DOM2.default)(container)[0];

      // Move the engine's element into the container
      if (_Object2.default.has(this, 'engine.element')) {
        this.container.appendChild(this.engine.element);
      }

      // Run any update methods if needed
      if (this.listening && this.engine) {
        this.resize();
      }
    }

    /**
     * Holds a pointer to the rendering engine.
     *
     * @property {EJSC.Engine} engine
     * @private
     * @since 3.0.0
     */

    /**
     * Holds the coordinates of the last point.
     *
     * @property {Array} lastPoint
     * @private
     * @since 3.0.0
     */

    /**
     * Holds the coordinates of the last control point.
     *
     * @property {Array} lastControlPoint
     * @private
     * @since 3.0.0
     */

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'arc',
    value: function arc(cx, cy, radius, startAngle, endAngle, counterClockwise) {
      // Append to current path
      this.engine.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);

      // Build needed variables
      var lastX = cx + radius * Math.cos(endAngle);
      var lastY = cy + radius * Math.sin(endAngle);

      // Update last points
      this.lastPoint = [lastX, lastY];
      this.lastControlPoint = [null, null];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'arcTo',
    value: function arcTo(cpx, cpy, x, y, radius) {
      // Append to current path
      this.engine.arcTo(cpx, cpy, x, y, radius);

      // Grab last points
      var lastX = this.lastPoint[0];
      var lastY = this.lastPoint[1];

      // Find the angle of each section
      var firstAngle = Math.PI / 2 - Math.atan2(cpy - lastY, cpx - lastX);
      var secondAngle = Math.PI / 2 - Math.atan2(cpy - y, cpx - x);
      var centerAngle = (firstAngle + secondAngle) / 2;

      // Find the length of the triangle's hypotenuse
      var hypotenuse = radius / Math.sin(0 - Math.abs(centerAngle - firstAngle));
      var adjacent = Math.sqrt(hypotenuse * hypotenuse - radius * radius);

      // Get the cross coordinates for the circle's points
      lastX = cpx - Math.sin(secondAngle) * adjacent;
      lastY = cpy - Math.cos(secondAngle) * adjacent;

      // Update last point
      this.lastPoint = [lastX, lastY];
      this.lastControlPoint = [cpx, cpy];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'beginClip',
    value: function beginClip(left, top, width, height) {
      // Call the engine's beginClip method
      this.engine.beginClip(left, top, width, height);

      // Return the drawing for chainability
      return this;
    }

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'beginPath',
    value: function beginPath() {
      // Call engine's method
      this.engine.beginPath();

      // Clear old variables
      this.lastPoint = [null, null];
      this.lastControlPoint = [null, null];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      // Append to current path
      this.engine.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

      // Update last points
      this.lastPoint = [x, y];
      this.lastControlPoint = [cp2x, cp2y];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply to the circle
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'circle',
    value: function circle(cx, cy, radius, styles) {
      // Call the engine's circle method
      this.engine.circle(cx, cy, radius, _Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Clears the canvas.
     *
     * @method clear
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'clear',
    value: function clear() {
      // Call engine's method
      this.engine.clear();

      // Return the drawing for chainability
      return this;
    }

    /**
     * Closes the current path.
     *
     * @method clear
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'closePath',
    value: function closePath() {
      // Append to current path
      this.engine.closePath();

      // Return the drawing for chainability
      return this;
    }

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply to the fill
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw(styles) {
      // Call the engine's draw method
      this.engine.draw(_Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The set of attributes to apply to the ellipse
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'ellipse',
    value: function ellipse(cx, cy, rx, ry, styles) {
      // Call the engine's ellipse method
      this.engine.ellipse(cx, cy, rx, ry, _Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'endClip',
    value: function endClip() {
      // Call the engine's endClip method
      this.engine.endClip();

      // Return the drawing for chainability
      return this;
    }

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply to the fill
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'fill',
    value: function fill(styles) {
      // Call the engine's fill method
      this.engine.fill(_Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'horizontalTo',
    value: function horizontalTo(x) {
      // Append to current path
      this.engine.horizontalTo(x);

      // Update last points
      this.lastPoint[0] = x;
      this.lastControlPoint = [null, null];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} attributes The set of attributes to apply to the line
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'line',
    value: function line(x1, y1, x2, y2, styles) {
      // Call the engine's line method
      this.engine.line(x1, y1, x2, y2, _Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'lineTo',
    value: function lineTo(x, y) {
      // Append to current path
      this.engine.lineTo(x, y);

      // Update last points
      this.lastPoint = [x, y];
      this.lastControlPoint = [null, null];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @return {Number} The width of the text
     * @since 3.0.0
     */

  }, {
    key: 'measureText',
    value: function measureText(text, styles) {
      // Call the engine's measureText method
      return this.engine.measureText(text, _Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));
    }

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      // Append to current path
      this.engine.moveTo(x, y);

      // Update last points
      this.lastPoint = [x, y];
      this.lastControlPoint = [null, null];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo(cpx, cpy, x, y) {
      // Append to current path
      this.engine.quadraticCurveTo(cpx, cpy, x, y);

      // Update last points
      this.lastPoint = [x, y];
      this.lastControlPoint = [cpx, cpy];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply to the rectangle
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'rect',
    value: function rect(x, y, width, height, styles) {
      // Call the engine's rect method
      this.engine.rect(x, y, width, height, _Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} [width] The new width for the canvas
     * @param {Integer} [height] The new height for the canvas
     * @since 3.0.0
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      // Resize the drawing engine
      this.engine.resize(width || this.container.clientWidth, height || this.container.clientHeight);

      // Redraw the drawing
      this.draw();
    }

    /**
     * Draws a bezier curve stemming from a control point from a previous bezier curve.
     *
     * @method smoothBezierCurveTo
     * @param {Number} cpx The x coordinate of the next control point
     * @param {Number} cpy The y coordinate of the next control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'smoothBezierCurveTo',
    value: function smoothBezierCurveTo(cpx, cpy, x, y) {
      // Build needed variables
      var cp1x = _Variable2.default.isNull(this.lastControlPoint[0]) ? null : 2 * this.lastPoint[0] - this.lastControlPoint[0];
      var cp1y = _Variable2.default.isNull(this.lastControlPoint[1]) ? null : 2 * this.lastPoint[1] - this.lastControlPoint[1];

      // Call internal method
      if (_Variable2.default.isNull(cp1x) || _Variable2.default.isNull(cp1y)) {
        this.quadraticCurveTo(cpx, cpy, x, y);
      } else {
        this.bezierCurveTo(cp1x, cp1y, cpx, cpy, x, y);
      }

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a quadratic curve stemming from a control point from a previous quadratic curve.
     *
     * @method smoothQuadraticCurveTo
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'smoothQuadraticCurveTo',
    value: function smoothQuadraticCurveTo(x, y) {
      // Build needed variables
      var cpx = _Variable2.default.isNull(this.lastControlPoint[0]) ? null : 2 * this.lastPoint[0] - this.lastControlPoint[0];
      var cpy = _Variable2.default.isNull(this.lastControlPoint[1]) ? null : 2 * this.lastPoint[1] - this.lastControlPoint[1];

      // Call internal method
      if (_Variable2.default.isNull(cpx) || _Variable2.default.isNull(cpy)) {
        this.lineTo(x, y);
      } else {
        this.quadraticCurveTo(cpx, cpy, x, y);
      }

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} attributes The set of attributes to apply to the stroke
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'stroke',
    value: function stroke(styles) {
      // Call the engine's stroke method
      this.engine.stroke(_Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply to the text
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'text',
    value: function text(_text, x, y, styles) {
      // Call the engine's text method
      this.engine.text(_text, x, y, _Object2.default.merge({}, _EJSC2.default.Engine.defaults, styles));

      // Return the drawing for chainability
      return this;
    }

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'verticalTo',
    value: function verticalTo(y) {
      // Append to current path
      this.engine.verticalTo(y);

      // Update last points
      this.lastPoint[1] = y;
      this.lastControlPoint = [null, null];

      // Return the drawing for chainability
      return this;
    }

    /**
     * Holds the list of actions for the current path.
     *
     * @property {Array} path
     * @private
     * @since 3.0.0
     */

    // constructor

  }]);

  function Drawing(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Drawing);

    // Select the rendering engine
    var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, options));
    // super


    _this.selectEngine();

    // Set the container
    _this.setContainer(container);

    // TOOD: remove this.resize() as it should be done in this.setContainer()
    // Resize the drawing
    _this.resize();
    return _this;
  }

  // init


  _createClass(Drawing, [{
    key: 'init',
    value: function init() {
      // Initialize some public properties
      this.container = null;

      // Initialize some private properties
      this.engine = null;
      this.lastPoint = [null, null];
      this.lastControlPoint = [null, null];
      this.path = [];
    }

    /**
     * Selects the engine to use for the drawing.
     *
     * @method selectEngine
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'selectEngine',
    value: function selectEngine() {
      // Find and select the first supported engine
      if (_Variable2.default.isNil(this.engine)) {
        this.engine = new (_Collection2.default.find(_EJSC2.default.Drawing.engines, function (engine) {
          return engine.isSupported();
        }))();
      }

      // Link the engine back to the drawing
      if (this.engine) {
        this.engine.link(this);
      }
    }

    /**
     * Adds a new drawing engine to the list of available engines.
     *
     * @method choose
     * @static
     * @private
     * @param {String} name Then engine name
     * @param {EJSC.Engine} engine The drawing engine
     * @since 3.0.0
     */

  }], [{
    key: 'register',
    value: function register(name, engine) {
      Drawing.engines[name] = engine;
    }
  }]);

  return Drawing;
}(_Class3.default);

/**
 * Holds the default styles for drawings.
 *
 * @property {Object} defaults
 * @static
 * @protected
 * @since 3.0.0
 */


_EJSC2.default.Drawing.defaults = {
  fillStyle: 'rgba(0, 0, 0)',
  font: '10px Verdana',
  lineCap: 'butt', // butt, round, square
  lineDash: [],
  lineJoin: 'miter', // miter, round, bevel
  strokeStyle: 'rgb(0, 0, 0)',
  strokeOpacity: 1,
  textAlign: 'left', // left, right, center[, start, end]
  textBaseline: 'middle', // top, middle, bottom[, alphabetic, hanging, ideographic]
  textRotation: 0
};

/**
 * Holds the list of available drawing engines.
 *
 * @property {Object} engines
 * @static
 * @private
 * @since 3.0.0
 */
_EJSC2.default.Drawing.engines = {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with DOM elements.
 *
 * @class EJSC.dom
 * @private
 * @param {Array|Element|String} selector The CSS selector or DOM element
 * @since 3.0.0
 */
var _DOM_ = function () {
  _createClass(_DOM_, [{
    key: 'find',

    /**
     * Holds the list of elements to be manipulated.
     *
     *
     * @property {Array} elements
     * @private
     * @since 3.0.0
     */

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector or element.
     *
     * @example
     *
     *   // TODO: example
     *
     * @method find
     * @param {Array|Element|String} selector The CSS selector or DOM element
     * @return {Array} The matching elements
     * @chainable
     * @since 3.0.0
     */
    value: function find(selector) {
      // Declare some local variables
      var elements = [];

      // Convert the selector to an array if it's not already
      if (!_Variable2.default.isArray(selector)) {
        selector = [selector];
      }

      // Loop through the selectors
      selector.forEach(function (selection) {
        // If the current selector is a DOM element
        if (_Variable2.default.isElement(selection)) {
          // TODO: Make sure this element is a child of one of the existing elements in this.elements
          // Append the element to the list of matches
          elements.push(selection);
        }

        // TODO: Handle strings
        else if (_Variable2.default.isString(selection)) {
            // TODO: Handle strings
          }
      });

      // Fix the elements list
      this.elements = this.fix(elements);

      // Return the new list of elements
      return this.elements;
    }

    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @example
     *
     *   // TODO: example
     *
     * @method on
     * @param {Array|String} events The event(s) to listen for
     * @param {Function} callback The function to call when the event occurs
     * @return {Array} The list of element
     * @chainable
     * @since 3.0.0
     */

  }, {
    key: 'on',
    value: function on(events, callback) {
      // Convert the events to an array if it's not already
      if (!_Variable2.default.isArray(events)) {
        events = [events];
      }

      // Loop through each of the elements
      this.elements.forEach(function (element) {
        // Loop through each of the events
        events.forEach(function (event) {
          // Attach the event handler function for the current event to the current element
          if (element.attachEvent) {
            element.attachEvent('on' + event, callback.bind(element));
          } else {
            element.addEventListener(event, callback.bind(element), true);
          }
        });
      });

      // Return the new list of elements
      return this.elements;
    }

    // constructor

  }]);

  function _DOM_(selector) {
    _classCallCheck(this, _DOM_);

    // Initialize some private properties
    this.elements = [];

    // Find the given elements
    this.elements = this.find(selector);

    // Return the new list of elements
    return this.elements;
  }

  /**
   * Fixes the list of elements to include all of the class' methods.
   *
   * @method fix
   * @private
   * @param {Array} elements The list of elements
   * @return {Array} The fixed list of elements
   * @since 3.0.0
   */


  _createClass(_DOM_, [{
    key: 'fix',
    value: function fix(elements) {
      var _this = this;

      // Loop through each method in this class and attach it to the list of elements
      ['find', 'fix', 'on'].forEach(function (name) {
        elements[name] = _this[name].bind(_this);
      });

      // Return the fixed list of elements
      return elements;
    }
  }]);

  return _DOM_;
}();

exports.default = _EJSC2.default.DOM = function (selector) {
  return new _DOM_(selector);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Drawing = __webpack_require__(13);

var _Drawing2 = _interopRequireDefault(_Drawing);

var _Engine2 = __webpack_require__(16);

var _Engine3 = _interopRequireDefault(_Engine2);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Defines the CANVAS rendering engine for EJSCharts.
 *
 * @class EJSC.Canvas
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Canvas = function (_Engine) {
  _inherits(Canvas, _Engine);

  _createClass(Canvas, [{
    key: 'arc',

    /**
     * Holds a pointer to the drawing context for the canvas.
     *
     * @property {CanvasRenderingContext2D} ctx
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    value: function arc(cx, cy, radius, startAngle, endAngle, counterClockwise) {
      // Call the canvas' arc method
      this.ctx.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);
    }

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */

  }, {
    key: 'arcTo',
    value: function arcTo(cpx, cpy, x, y, radius) {
      // Call the canvas' arcTo method
      this.ctx.arcTo(cpx, cpy, x, y, radius);
    }

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */

  }, {
    key: 'beginClip',
    value: function beginClip(left, top, width, height) {
      // Set the new clip area
      this.ctx.save();
      this.ctx.rect(left, top, width, height);
      this.ctx.clip();
    }

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */

  }, {
    key: 'beginPath',
    value: function beginPath() {
      // Call the canvas' clearPath method
      this.ctx.beginPath();
    }

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      // Call the canvas' bezierCurveTo method
      this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'circle',
    value: function circle(x, y, radius, styles) {
      // Apply the given styles
      this.stylize(styles);

      // Draw the circle
      this.ctx.beginPath();
      this.ctx.arc(x + 0.5, y + 0.5, radius, 0, 2 * Math.PI, false);

      // Fill the path
      this.ctx.fill();

      // Stroke the path if needed
      if (styles.strokeStyle !== 'none') {
        this.ctx.stroke();
      }

      // Reset the styles
      this.unstylize();
    }

    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'clear',
    value: function clear() {
      // Clear the canvas
      this.ctx.clearRect(0, 0, this.element.offsetWidth, this.element.offsetWidth);
    }

    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'closePath',
    value: function closePath() {
      // Call the canvas' closePath method
      this.ctx.closePath();
    }

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw(styles) {
      // Apply the given styles
      this.stylize(styles);

      // Fill the path
      this.ctx.fill();

      // Stroke the path if needed
      if (styles.strokeStyle !== 'none') {
        this.ctx.stroke();
      }

      // Reset the styles
      this.unstylize();
    }

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'ellipse',
    value: function ellipse(cx, cy, rx, ry, styles) {
      // Apply the given styles
      this.stylize(styles);

      // Update the y radius to match SVG/VML
      var yr = ry * (4 / 3);

      // Draw the ellipse
      this.ctx.beginPath();
      this.ctx.moveTo(cx - rx, cy);
      this.ctx.bezierCurveTo(cx - rx, cy - yr, cx + rx, cy - yr, cx + rx, cy);
      this.ctx.bezierCurveTo(cx + rx, cy + yr, cx - rx, cy + yr, cx - rx, cy);
      this.ctx.closePath();

      // Fill the path
      this.ctx.fill();

      // Stroke the path if needed
      if (styles.strokeStyle !== 'none') {
        this.ctx.stroke();
      }

      // Reset the styles
      this.unstylize();
    }

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */

  }, {
    key: 'endClip',
    value: function endClip() {
      // Clear the current clip area
      this.ctx.restore();
    }

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'fill',
    value: function fill(styles) {
      // Apply the given styles
      this.stylize(styles);

      // Fill in the path
      this.ctx.fill();

      // Reset the styles
      this.unstylize();
    }

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'horizontalTo',
    value: function horizontalTo(x) {
      // Call the internal lineTo method
      this.lineTo(x, this.drawing.lastPoint[1]);
    }

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'line',
    value: function line(x1, y1, x2, y2, styles) {
      // Apply the given styles
      this.stylize(styles);

      // Draw the line
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);

      // Stroke the path if needed
      if (styles.strokeStyle !== 'none') {
        this.ctx.stroke();
      }

      // Reset the styles
      this.unstylize();
    }

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'lineTo',
    value: function lineTo(x, y) {
      // Call the canvas' lineTo method
      this.ctx.lineTo(x, y);
    }

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'measureText',
    value: function measureText(text, styles) {
      // Apply the given styles
      this.stylize(styles);

      // Calculate the measurement
      var measurement = this.ctx.measureText(text);

      // Reset the styles
      this.unstylize();

      // Return the measurement
      return measurement;
    }

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */

  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      // Call the canvas' moveTo method
      this.ctx.moveTo(x, y);
    }

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo(cpx, cpy, x, y) {
      // Call the canvas' bezierCurveTo method
      this.ctx.quadraticCurveTo(cpx, cpy, x, y);
    }

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'rect',
    value: function rect(x, y, width, height, styles) {
      // Apply the given styles
      this.stylize(styles);

      // Build the rectangle
      this.ctx.beginPath();
      this.ctx.rect(x, y, width, height);

      // Fill the path
      this.ctx.fill();

      // Stroke the path if needed
      if (styles.strokeStyle !== 'none') {
        this.ctx.stroke();
      }

      // Reset the styles
      this.unstylize();
    }

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      // Resize the canvas
      this.element.setAttribute('width', width);
      this.element.setAttribute('height', height);
    }

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'stroke',
    value: function stroke(styles) {
      // Apply the given styles
      this.stylize(styles);

      // Stroke the path if needed
      if (styles.strokeStyle !== 'none') {
        this.ctx.stroke();
      }

      // Reset the styles
      this.unstylize();
    }

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'text',
    value: function text(_text, x, y, styles) {
      // Apply the given styles
      this.stylize(styles);

      // Draw the text
      if (styles.textRotation) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(styles.textRotation * (Math.PI / 180));
        this.ctx.fillText(_text, 0, 0);
        this.ctx.restore();
      } else {
        this.ctx.fillText(_text, x, y);
      }
    }

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'verticalTo',
    value: function verticalTo(y) {
      // Call the internal lineTo method
      this.lineTo(this.drawing.lastPoint[0], y);
    }

    // constructor

  }]);

  function Canvas() {
    _classCallCheck(this, Canvas);

    // Create the CANVAS element
    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));
    // super


    _this.element = document.createElement('CANVAS');

    // Grab the 2D drawing context
    _this.ctx = _this.element.getContext('2d');
    return _this;
  }

  // init


  _createClass(Canvas, [{
    key: 'init',
    value: function init() {
      // super
      _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'init', this).call(this);

      // Initialize some private properties
      this.ctx = null;
    }

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Array} path The path to draw
     * @since 3.0.0
     */

  }, {
    key: 'drawPath',
    value: function drawPath(path) {
      var _this2 = this;

      // Run path methods
      path.forEach(function (segment) {
        segment[0].apply(_this2, segment[1]);
      });
    }

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} [styles={}] The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'stylize',
    value: function stylize() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Apply the default and user styles to the context
      _Object2.default.merge(this.ctx, _Drawing2.default.defaults, styles);

      // Set the line dash
      this.ctx.setLineDash(styles.lineDash || []);
    }

    /**
     * Applies the default styles to the drawing context.
     *
     * @method unstylize
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'unstylize',
    value: function unstylize() {
      // Apply the default styles to the context
      _Object2.default.merge(this.ctx, _Drawing2.default.defaults);

      // Clear the line dash
      this.ctx.setLineDash([]);
    }
  }]);

  return Canvas;
}(_Engine3.default);

/**
 * Determines if the browser supports CANVAS.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports CANVAS
 * @since 3.0.0
 */


_EJSC2.default.Canvas.isSupported = function () {
  // Create a CANVAS element
  var canvas = document.createElement('canvas');

  // Return if the element supports Canvas
  return canvas.getContext && canvas.getContext('2d');
};

// Register the engine
_Drawing2.default.register('Canvas', _EJSC2.default.Canvas);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Class2 = __webpack_require__(3);

var _Class3 = _interopRequireDefault(_Class2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Defines the abstract class for rendering engines for EJSCharts.
 *
 * @class EJSC.Engine
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Engine = function (_Class) {
  _inherits(Engine, _Class);

  function Engine() {
    _classCallCheck(this, Engine);

    return _possibleConstructorReturn(this, (Engine.__proto__ || Object.getPrototypeOf(Engine)).apply(this, arguments));
  }

  _createClass(Engine, [{
    key: 'arc',

    /**
     * The owner drawing.
     *
     * @property {EJSC.Drawing} drawing
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Holds a pointer to the engine's dom element.
     *
     * @property {DOMElement} element
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    value: function arc() /* cx, cy, radius, startAngle, endAngle, counterClockwise */{}
    // Placeholder


    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */

  }, {
    key: 'arcTo',
    value: function arcTo() /* cpx, cpy, x, y, radius */{}
    // Placeholder


    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */

  }, {
    key: 'beginClip',
    value: function beginClip() /* left, top, width, height */{}
    // Placeholder


    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */

  }, {
    key: 'beginPath',
    value: function beginPath() {}
    // Placeholder


    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo() /* cp1x, cp1y, cp2x, cp2y, x, y */{}
    // Placeholder


    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} cx The x coordinate for the center of the circle
     * @param {Number} cy The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'circle',
    value: function circle() /* cx, cy, radius, styles */{}
    // Placeholder


    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'clear',
    value: function clear() {}
    // Placeholder


    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'closePath',
    value: function closePath() {}
    // Placeholder


    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() /* styles */{}
    // Placeholder


    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'ellipse',
    value: function ellipse() /* cx, cy, rx, ry, styles */{}
    // Placeholder


    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */

  }, {
    key: 'endClip',
    value: function endClip() {}
    // Placeholder


    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'fill',
    value: function fill() /* styles */{}
    // Placeholder


    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'horizontalTo',
    value: function horizontalTo() /* x */{}
    // Placeholder


    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'line',
    value: function line() /* x1, y1, x2, y2, styles */{}
    // Placeholder


    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'lineTo',
    value: function lineTo() /* x, y */{}
    // Placeholder


    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'measureText',
    value: function measureText() /* text, styles */{}
    // Placeholder


    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */

  }, {
    key: 'moveTo',
    value: function moveTo() /* x, y */{}
    // Placeholder


    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo() /* cpx, cpy, x, y */{}
    // Placeholder


    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'rect',
    value: function rect() /* x, y, width, height, styles */{}
    // Placeholder


    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */

  }, {
    key: 'resize',
    value: function resize() /* width, height */{}
    // Placeholder


    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'stroke',
    value: function stroke() /* styles */{}
    // Placeholder


    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'text',
    value: function text() /* text, x, y, styles */{}
    // Placeholder


    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'verticalTo',
    value: function verticalTo() /* y */{}
    // Placeholder


    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(Engine.prototype.__proto__ || Object.getPrototypeOf(Engine.prototype), 'init', this).call(this);

      // Initialize some private properties
      this.drawing = null;
      this.element = null;
    }

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Array} path The path to draw
     * @since 3.0.0
     */

  }, {
    key: 'drawPath',
    value: function drawPath() /* path */{}
    // Placeholder


    // TODO:

  }, {
    key: 'link',
    value: function link(drawing) {
      // Link back to the drawing
      this.drawing = drawing;
    }

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @return {Object}
     * @since 3.0.0
     */

  }, {
    key: 'stylize',
    value: function stylize() /* styles */{
      // Placeholder
    }
  }]);

  return Engine;
}(_Class3.default);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Drawing = __webpack_require__(13);

var _Drawing2 = _interopRequireDefault(_Drawing);

var _Engine2 = __webpack_require__(16);

var _Engine3 = _interopRequireDefault(_Engine2);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Defines the SVG rendering engine for EJSCharts.
 *
 * @class EJSC.SVG
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
exports.default = _EJSC2.default.SVG = function (_Engine) {
  _inherits(SVG, _Engine);

  _createClass(SVG, [{
    key: 'arc',

    /**
     * Holds a pointer to the engine's background dom element.
     *
     * @property {DOM.Element} background.
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Holds a current clip id.
     *
     * @property {String} clipId
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Holds the current clip index.
     *
     * @property {Integer} clipIndex
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Holds a pointer to the engine's definitions dom element.
     *
     * @property {DOM.Element} definitions
     * @private
     * @default null
     * @since 3.0.0
     */

    /**
     * Holds the current drawing path.
     *
     * @property {Array} path
     * @private
     * @default []
     * @since 3.0.0
     */

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    value: function arc(cx, cy, radius, startAngle, endAngle, counterClockwise) {
      // Define needed points
      var x1 = cx + radius * Math.cos(startAngle);
      var y1 = cy + radius * Math.sin(startAngle);
      var x2 = cx + radius * Math.cos(endAngle);
      var y2 = cy + radius * Math.sin(endAngle);

      // Determine the direction from the angles
      var direction = startAngle < endAngle ? 0 : 1;

      // Define the arc flags
      var largeArc = counterClockwise ? 1 - direction : direction;
      var sweep = counterClockwise ? 0 : 1;

      // Move to starting point
      this.path.push((_Variable2.default.isNull(this.drawing.lastPoint[0]) ? 'M' : 'L') + ' ' + x1 + ',' + y1);

      // Append to path object
      this.path.push('A ' + radius + ',' + radius + ' ' + 0 + ' ' + largeArc + ' ' + sweep + ' ' + x2 + ',' + y2);
    }

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */

  }, {
    key: 'arcTo',
    value: function arcTo(cpx, cpy, x, y, radius) {
      // Grab last points
      var x0 = this.drawing.lastPoint[0];
      var y0 = this.drawing.lastPoint[1];

      // Find the angle of each section
      var firstAngle = Math.PI / 2 - Math.atan2(cpy - y0, cpx - x0);
      var secondAngle = Math.PI / 2 - Math.atan2(cpy - y, cpx - x);
      var centerAngle = (firstAngle + secondAngle) / 2;

      // Find the length of the triangle's hypotenuse
      var hypotenuse = radius / Math.sin(-Math.abs(centerAngle - firstAngle));
      var adjacent = Math.sqrt(hypotenuse * hypotenuse - radius * radius);

      // Get the center coordinates for the circle
      var cx = cpx + Math.sin(centerAngle) * hypotenuse;
      var cy = cpy + Math.cos(centerAngle) * hypotenuse;

      // Get the cross coordinates for the circle's points
      var cx1 = cpx - Math.sin(firstAngle) * adjacent;
      var cy1 = cpy - Math.cos(firstAngle) * adjacent;
      var cx2 = cpx - Math.sin(secondAngle) * adjacent;
      var cy2 = cpy - Math.cos(secondAngle) * adjacent;

      // Build the new angles
      var startAngle = Math.atan2(cy1 - cy, cx1 - cx);
      var endAngle = Math.atan2(cy2 - cy, cx2 - cx);

      // Draw the connecting line
      this[_Variable2.default.isNull(this.drawing.lastPoint[0]) ? 'moveTo' : 'lineTo'](cx1, cy1);

      // Draw the arc
      this.arc(cx, cy, radius, startAngle, endAngle, firstAngle > secondAngle);
    }

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */

  }, {
    key: 'beginClip',
    value: function beginClip(x, y, width, height) {
      // Build the clip id
      var clipId = 'clip-' + this.clipIndex++;

      // Create the clip definition
      var clipPath = this.definitions.appendChild(this.createElement('clipPath', {
        id: clipId
      }));

      // Append the clip area
      clipPath.appendChild(this.createElement('rect', {
        x: x,
        y: y,
        width: width,
        height: height
      }));

      // Store the clip id
      this.clipId = clipId;
    }

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */

  }, {
    key: 'beginPath',
    value: function beginPath() {
      // Reset the current path
      this.path = [];
    }

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      // Append to path object
      this.path.push('C ' + cp1x + ',' + cp1y + ' ' + cp2x + ',' + cp2y + ' ' + x + ',' + y);
    }

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'circle',
    value: function circle(cx, cy, radius, styles) {
      // Create the circle element
      this.element.appendChild(this.createElement('circle', _Object2.default.merge(this.stylize(styles), {
        cx: cx,
        cy: cy,
        r: radius
      })));
    }

    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'clear',
    value: function clear() {
      // Clear out all of the elements (except for the definitions and background)
      while (this.element.childNodes.length > 2) {
        this.element.removeChild(this.element.lastChild);
      }

      // Clear out all of the definitions
      while (this.definitions.childNodes.length > 0) {
        this.definitions.removeChild(this.definitions.lastChild);
      }

      // Clear out the clip variables
      this.clipId = null;
      this.clipIndex = 0;
    }

    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'closePath',
    value: function closePath() {
      // Append to path object
      this.path.push('Z');
    }

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw(styles) {
      this.drawPath(this.stylize(styles));
    }

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'ellipse',
    value: function ellipse(cx, cy, rx, ry, styles) {
      // Create the ellipse element
      this.element.appendChild(this.createElement('ellipse', _Object2.default.merge(this.stylize(styles), {
        cx: cx,
        cy: cy,
        rx: rx,
        ry: ry
      })));
    }

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */

  }, {
    key: 'endClip',
    value: function endClip() {
      // Clear the clip id
      this.clipId = null;
    }

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'fill',
    value: function fill(styles) {
      this.drawPath(_Object2.default.merge(this.stylize(styles), {
        strokeStyle: 'transparent'
      }));
    }

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'horizontalTo',
    value: function horizontalTo(x) {
      // Append to path object
      this.path.push('H ' + x);
    }

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'line',
    value: function line(x1, y1, x2, y2, styles) {
      // Create the line element
      this.element.appendChild(this.createElement('line', _Object2.default.merge(this.stylize(styles), {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      })));
    }

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'lineTo',
    value: function lineTo(x, y) {
      // Append to path object
      this.path.push('L ' + x + ',' + y);
    }

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'measureText',
    value: function measureText(text, styles) {
      // TODO:
      return [text, styles];
    }

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */

  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      // Append to path object
      this.path.push('M ' + x + ',' + y);
    }

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo(cpx, cpy, x, y) {
      // Append to path object
      this.path.push('Q ' + cpx + ',' + cpy + ' ' + x + ',' + y);
    }

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'rect',
    value: function rect(x, y, width, height, styles) {
      // Create the rect element
      this.element.appendChild(this.createElement('rect', _Object2.default.merge(this.stylize(styles), {
        x: x,
        y: y,
        width: width,
        height: height
      })));
    }

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      // Set the width and height attributes of the main element
      this.element.setAttribute('width', width);
      this.element.setAttribute('height', height);

      // Set the viewbox attribute of the main element
      this.element.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

      // Set the width and height attributes of the background element
      this.background.setAttribute('width', width);
      this.background.setAttribute('height', height);
    }

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'stroke',
    value: function stroke(styles) {
      // Stroke the path
      this.drawPath(_Object2.default.merge(this.stylize(styles), {
        fillStyle: 'transparent'
      }));
    }

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'text',
    value: function text(_text, x, y, styles) {
      // Build the correct styles object
      styles = _Object2.default.merge({}, this.stylize(styles), {
        strokeStyle: 'none',
        x: x,
        y: y
      });

      // Create the text element
      var el = this.element.appendChild(this.createElement('text', styles));
      el.setAttribute('transform', 'rotate(' + styles.textRotation + ' ' + x + ' ' + y + ')');
      el.appendChild(document.createTextNode(_text));
    }

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'verticalTo',
    value: function verticalTo(y) {
      // Append to path object
      this.path.push('V ' + y);
    }

    // constructor

  }]);

  function SVG() {
    _classCallCheck(this, SVG);

    // Create a document fragment to temporarily hold the DOM Elements
    var _this = _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).call(this));
    // super


    var frag = document.createDocumentFragment();

    // Create the main element
    _this.element = frag.appendChild(_this.createElement('svg', {
      'xmlns': _EJSC2.default.SVG.xmlns,
      'version': '1.1'
    }));
    _this.element.setAttributeNS(_EJSC2.default.SVG.xmlns, 'xmlns:xlink', _EJSC2.default.SVG.xlink);

    // Create the definitions element
    _this.definitions = _this.element.appendChild(_this.createElement('defs'));

    // Create the background element
    _this.background = _this.element.appendChild(_this.createElement('rect', {
      x: 0,
      y: 0,
      fill: 'transparent'
    }));

    // Create a global stylesheet (only once) to restrict user selection
    _EJSC2.default.SVG.buildStylesheet();
    return _this;
  }

  // init


  _createClass(SVG, [{
    key: 'init',
    value: function init() {
      // Initialize some private properties
      this.background = null;
      this.clipId = null;
      this.clipIndex = 0;
      this.definitions = null;
      this.path = [];
    }

    /**
     * Creates an SVG elemen.
     *
     * @method createElement
     * @param {String} tagName The type of element to create
     * @param {Object} attributes The attributes to add to the element
     * @return {DOM.Element}
     * @since 3.0.0
     */

  }, {
    key: 'createElement',
    value: function createElement(tagName, attributes) {
      // Create an element using the given tagName
      var el = document.createElementNS(_EJSC2.default.SVG.svgns, tagName);

      // Set the given attributes to the element
      for (var i in attributes) {
        // If this is direct css
        if (i === 'css') {
          el.style.cssText = attributes[i];
        }

        // If this is the font attribute, set it using CSS
        else if (i === 'font') {
            el.style.cssText = 'font: ' + attributes.font + ' !important;';
          }

          // If this is the text-align attribute
          else if (i === 'textAlign') {
              el.setAttribute('text-anchor', {
                'left': 'start',
                'center': 'middle',
                'right': 'end'
              }[attributes[i]]);
            }

            // If this is the rotate attribute, don't set it
            else if (i === 'textRotation') {}
              // Do nothing


              // If this is the text-baseline attribute, set it using custom attributes
              else if (i === 'textBaseline') {
                  el.style.dominantBaseline = {
                    'top': 'hanging',
                    'middle': 'middle',
                    'bottom': 'baseline'
                  }[attributes[i]];
                }

                // If this is the same as the default attribute
                else if (attributes[i] === _Drawing2.default.defaults[i] && i !== 'strokeStyle' && i !== 'fillStyle') {}
                  // Do nothing


                  // Set the attribute to the element
                  else {
                      el.setAttribute(_EJSC2.default.SVG.styles[i] || i, attributes[i]);
                    }
      }

      if (this.clipId !== null) {
        el.setAttribute('clip-path', 'url(#' + this.clipId + ')');
      }

      // Return the element
      return el;
    }

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'drawPath',
    value: function drawPath(styles) {
      // Create the path element
      this.element.appendChild(this.createElement('path', _Object2.default.merge(this.stylize(styles), {
        d: this.path.join(' ')
      })));
    }

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @return {Object}
     * @since 3.0.0
     */

  }, {
    key: 'stylize',
    value: function stylize(styles) {
      // Apply the default and user styles to the context
      return _Object2.default.merge({}, _Drawing2.default.defaults, styles);
    }
  }]);

  return SVG;
}(_Engine3.default);

// TODO:


_EJSC2.default.SVG.css = 'svg { overflow: hidden; } svg, svg * { user-select: none; -moz-user-select: none; -webkit-user-select: none; }';

/**
 * Defines the style conversion names.
 *
 * @property {Object} styles
 * @private
 * @static
 * @since 3.0.0
 */
_EJSC2.default.SVG.styles = {
  fillStyle: 'fill',
  font: 'font',
  lineCap: 'stroke-linecap',
  lineDash: 'stroke-dasharray',
  lineJoin: 'stroke-linejoin',
  lineWidth: 'stroke-width',
  strokeStyle: 'stroke',
  textAlign: 'text-align',
  textBaseline: 'text-baseline',
  textRotation: 'text-rotation'
};

/**
 * Defines the stylesheet that holds the global SVG styles.
 *
 * @property {StyleSheet} stylesheet
 * @private
 * @static
 * @default null
 * @since 3.0.0
 */
_EJSC2.default.SVG.stylesheet = null;

/**
 * Defines the SVG namespace.
 *
 * @property {String} svgns
 * @private
 * @static
 * @default 'http://www.w3.org/2000/svg'
 * @since 3.0.0
 */
_EJSC2.default.SVG.svgns = 'http://www.w3.org/2000/svg';

/**
 * Defines the XML namespace.
 *
 * @property {String} xmlns
 * @private
 * @static
 * @default 'http://www.w3.org/2000/xmlns/'
 * @since 3.0.0
 */
_EJSC2.default.SVG.xmlns = 'http://www.w3.org/2000/xmlns/';

/**
 * Defines the Xlink namespace.
 *
 * @property {String} xlink
 * @private
 * @static
 * @default 'http://www.w3.org/2000/xlink'
 * @since 3.0.0
 */
_EJSC2.default.SVG.xlink = 'http://www.w3.org/1999/xlink';

/**
 * Builds the default SVG stylesheet.
 *
 * @method buildStylesheet
 * @private
 * @static
 * @since 3.0.0
 */
_EJSC2.default.SVG.buildStylesheet = function () {
  // Only run once
  if (_Variable2.default.isNull(_EJSC2.default.SVG.stylesheet)) {
    // Grab the page header
    var head = document.head || document.getElementsByTagName('head')[0];

    // Create the stylesheet
    var stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';

    // Set the CSS
    if (stylesheet.styleSheet) {
      stylesheet.styleSheet.cssText = _EJSC2.default.SVG.css;
    } else {
      stylesheet.appendChild(document.createTextNode(_EJSC2.default.SVG.css));
    }

    // Append the styleshet to the page header
    head.appendChild(stylesheet);

    // Save the stylesheet
    _EJSC2.default.SVG.stylesheet = stylesheet;
  }
};

/**
 * Determines if the browser supports SVG.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports SVG
 * @since 3.0.0
 */
_EJSC2.default.SVG.isSupported = function () {
  return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
};

// Register the engine
_Drawing2.default.register('SVG', _EJSC2.default.SVG);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Engine2 = __webpack_require__(16);

var _Engine3 = _interopRequireDefault(_Engine2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Util from '../../util/Util.es6';
// import Drawing from '../Drawing.es6';


/**
 * Defines the VML rendering engine for EJSCharts.
 *
 * @class EJSC.VML
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
exports.default = _EJSC2.default.VML = function (_Engine) {
  _inherits(VML, _Engine);

  _createClass(VML, [{
    key: 'arc',

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    value: function arc() /* cx, cy, r, startAngle, endAngle, counterClockwise */{}
    // TODO:


    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */

  }, {
    key: 'arcTo',
    value: function arcTo() /* cpx, cpy, x, y, radius */{}
    // TODO:


    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */

  }, {
    key: 'beginClip',
    value: function beginClip() /* x, y, width, height */{}
    // TODO:


    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */

  }, {
    key: 'beginPath',
    value: function beginPath() {}
    // TODO:


    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo() /* cp1x, cp1y, cp2x, cp2y, x, y */{}
    // TODO:


    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'circle',
    value: function circle() /* cx, cy, radius, styles */{}
    // TODO:


    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'clear',
    value: function clear() {}
    // TODO:


    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */

  }, {
    key: 'closePath',
    value: function closePath() {}
    // TODO:


    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Array} path The coordinates of the path
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() /* path, styles */{}
    // TODO:


    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'ellipse',
    value: function ellipse() /* cx, cy, rx, ry, styles */{}
    // TODO:


    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */

  }, {
    key: 'endClip',
    value: function endClip() {}
    // TODO:


    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'fill',
    value: function fill() /* styles */{}
    // TODO:


    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'horizontalTo',
    value: function horizontalTo() /* x */{}
    // TODO:


    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'line',
    value: function line() /* x1, y1, x2, y2, styles */{}
    // TODO:


    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'lineTo',
    value: function lineTo() /* x, y */{}
    // TODO:


    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'measureText',
    value: function measureText() /* text, styles */{}
    // TODO:


    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */

  }, {
    key: 'moveTo',
    value: function moveTo() /* x, y */{}
    // TODO:


    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */

  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo() /* cpx, cpy, x, y */{}
    // TODO:


    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'rect',
    value: function rect() /* x, y, width, height, styles */{}
    // TODO:


    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */

  }, {
    key: 'resize',
    value: function resize() /* width, height */{}
    // TODO:


    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Array} path The path
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'stroke',
    value: function stroke() /* styles */{}
    // TODO:


    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */

  }, {
    key: 'text',
    value: function text() /* text, x, y, styles */{}
    // TODO:


    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */

  }, {
    key: 'verticalTo',
    value: function verticalTo() /* y */{}
    // TODO:


    // constructor

  }]);

  function VML() {
    _classCallCheck(this, VML);

    // super
    return _possibleConstructorReturn(this, (VML.__proto__ || Object.getPrototypeOf(VML)).call(this));

    // TODO:
  }

  /**
   * Draws the given path.
   *
   * @method drawPath
   * @private
   * @param {Array} path The path to draw
   * @since 3.0.0
   */


  _createClass(VML, [{
    key: 'drawPath',
    value: function drawPath() /* path, styles */{}
    // TODO:


    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @return {Object}
     * @since 3.0.0
     */

  }, {
    key: 'stylize',
    value: function stylize() /* styles */{
      // TODO:
    }
  }]);

  return VML;
}(_Engine3.default);

/**
 * Determines if the browser supports VML.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports VML
 * @since 3.0.0
 */


_EJSC2.default.VML.isSupported = function () {
  // Define the support variable
  var supportsVML = false;

  // Build a container div and insert a shape into it
  var div = document.body.appendChild(document.createElement('div'));
  div.innerHTML = '<v:shape id="vml_flag1" adj="1" />';

  // Grab the shape and set it's behavior
  var shape = div.firstChild;
  shape.style.behavior = 'url(#default#VML)';

  // Determine if VML is supported
  supportsVML = shape ? _typeof(shape.adj) === 'object' : true;

  // Remove the un-needed node
  div.parentNode.removeChild(div);

  // Return if VML is supported
  return supportsVML;
};

// Register the engine
// EJSC.Drawing.register('VML', EJSC.VML);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _LineSeries2 = __webpack_require__(20);

var _LineSeries3 = _interopRequireDefault(_LineSeries2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * // TODO:
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC.AreaSeries
 * @extends EJSC.LineSeries
 * @constructor
 * @since 3.0.0
 */
exports.default = _EJSC2.default.AreaSeries = function (_LineSeries) {
  _inherits(AreaSeries, _LineSeries);

  function AreaSeries() {
    _classCallCheck(this, AreaSeries);

    return _possibleConstructorReturn(this, (AreaSeries.__proto__ || Object.getPrototypeOf(AreaSeries)).apply(this, arguments));
  }

  _createClass(AreaSeries, [{
    key: 'getArea',

    /**
     * Defines the styles for the area fill.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {Object} area
     * @property {String} area.fillStyle The background color of the area fill. (Default: null)
     * @since 3.0.0
     */

    // getter
    value: function getArea() {
      // Return the current area
      return this.area;
    }

    // setter

  }, {
    key: 'setArea',
    value: function setArea(area, apply) {
      // Update the current area
      _Object2.default.merge(this.area, area);

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Defines the zero coordinate for the series.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {Number} zeroCoordinate
     * @default 0
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getZeroCoordinate',
    value: function getZeroCoordinate() {
      // Return the current zero coordinate
      return this.zeroCoordinate;
    }

    // setter

  }, {
    key: 'setZeroCoordinate',
    value: function setZeroCoordinate(zeroCoordinate, apply) {
      // Update the current zero coordinate
      this.zeroCoordinate = zeroCoordinate;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(AreaSeries.prototype.__proto__ || Object.getPrototypeOf(AreaSeries.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.area = {
        fillStyle: null
      };
      this.zeroCoordinate = 0;
    }

    /**
     * Calculates the extremes for the series based off of its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The calculated extremes
     * @since 3.0.0
     */

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {
      // Grab some local pointers
      var extremes = this.point.calculateExtremes(this.handler.data);
      var zeroCoordinate = this.zeroCoordinate;

      // Update extremes to the zero coordinate
      extremes.yMin = _Number2.default.min(extremes.yMin, zeroCoordinate);
      extremes.yMax = _Number2.default.max(extremes.yMax, zeroCoordinate);

      // Return the extremes
      return extremes;
    }

    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() {
      // Grab some local pointers
      var chart = this.chart;
      var xAxis = this.referenceXAxis();
      var yAxis = this.referenceYAxis();
      var yAxisZoom = yAxis.getCurrentZoom();
      var zeroCoordinate = yAxis.convertPointToPixel(_Number2.default.clamp(this.zeroCoordinate, yAxisZoom.min, yAxisZoom.max));
      var points = this.buildPath();

      // Start at the first point
      chart.beginPath();

      // Loop through the points of data adding them to the path array
      points.forEach(function (point, index) {
        chart[index === 0 ? 'moveTo' : 'lineTo'](xAxis.convertPointToPixel(point.x), yAxis.convertPointToPixel(point.y));
      });

      // Loop through the points of data adding them to the path array
      points.reverse().forEach(function (point) {
        chart.lineTo(xAxis.convertPointToPixel(point.x), zeroCoordinate);
      });

      // Close the path
      chart.closePath();

      // Fill in the path
      chart.fill(_Object2.default.merge({}, this.area, {
        fillStyle: this.area.fillStyle || this.setOpacity(this.color, 0.5)
      }));

      // Draw the line
      _get(AreaSeries.prototype.__proto__ || Object.getPrototypeOf(AreaSeries.prototype), 'draw', this).call(this);
    }
  }]);

  return AreaSeries;
}(_LineSeries3.default);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _ScatterSeries2 = __webpack_require__(21);

var _ScatterSeries3 = _interopRequireDefault(_ScatterSeries2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * // TODO:
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC.LineSeries
 * @extends EJSC.ScatterSeries
 * @constructor
 * @since 3.0.0
 */
exports.default = _EJSC2.default.LineSeries = function (_ScatterSeries) {
  _inherits(LineSeries, _ScatterSeries);

  function LineSeries() {
    _classCallCheck(this, LineSeries);

    return _possibleConstructorReturn(this, (LineSeries.__proto__ || Object.getPrototypeOf(LineSeries)).apply(this, arguments));
  }

  _createClass(LineSeries, [{
    key: 'getLine',

    /**
     * Defines the style options for the drawn line.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {Object} line
     * @property {Integer} line.lineWidth Defines the width of the line. (Default: 1)
     * @property {String} line.strokeStyle Defines the color of the line. (Default: null)
     * @since 3.0.0
     */

    // getter
    value: function getLine() {
      // Return the current line
      return this.line;
    }

    // setter

  }, {
    key: 'setLine',
    value: function setLine(line, apply) {
      // Update the current line
      _Object2.default.merge(this.line, line);

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Determines if the drawing routine should draw as steps.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {Boolean} step
     * @default false
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getStep',
    value: function getStep() {
      // Return the current step
      return this.step;
    }

    // setter

  }, {
    key: 'setStep',
    value: function setStep(step, apply) {
      // Update the current step
      this.step = step;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(LineSeries.prototype.__proto__ || Object.getPrototypeOf(LineSeries.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.line = {
        lineWidth: 1,
        strokeStyle: null
      };
      this.step = false;
    }

    /**
     * Builds the drawing path.
     *
     * @method buildPath
     * @private
     * @return {Array} The path to draw
     * @since 3.0.0
     */

  }, {
    key: 'buildPath',
    value: function buildPath() {
      // Grab some local pointers
      var step = this.step;
      var path = [];

      // Build the drawing path
      this.data.forEach(function (point, index) {
        // Add the previous step (if needed)
        if (index > 0 && step) {
          path.push({
            x: point.x,
            y: path[path.length - 1].y
          });
        }

        // Add the current point to the path
        path.push({
          x: point.x,
          y: point.y
        });
      });

      /* not-sparkline:start */
      // Clip the path
      path = this.clipPath(path);
      /* not-sparkline:end */

      // Return the path
      return path;
    }

    /**
     * Calculates the spacing needed for the series.
     *
     * @method calculateSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */

  }, {
    key: 'calculateSpacing',
    value: function calculateSpacing() {
      // Define some local variables
      var pointSpacing = this.points.visible ? _get(LineSeries.prototype.__proto__ || Object.getPrototypeOf(LineSeries.prototype), 'calculateSpacing', this).call(this) : 0;
      var lineSpacing = Math.ceil(this.line.width / 2);

      // Return the larger spacing
      return _Number2.default.max(pointSpacing, lineSpacing);
    }

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'clipPath',
    value: function clipPath(path) {
      // Grab some local pointers
      var isPointInBounds = this.isPointInBounds;
      var spacing = this.calculateSpacing();
      var xAxis = this.referenceXAxis();
      var xAxisZoom = xAxis.getCurrentZoom(spacing);
      var xMin = xAxisZoom.xMin,
          xMax = xAxisZoom.xMax;

      var yAxis = this.referenceYAxis();
      var yAxisZoom = yAxis.getCurrentZoom(spacing);
      var yMin = yAxisZoom.yMin,
          yMax = yAxisZoom.yMax;

      // Define some local variables

      var clip = [];
      var lastPoint = void 0;
      var lastPointInBounds = void 0;

      // Loop through each of the data points
      path.forEach(function (point, index) {
        // Define some local variables
        var pointIsInBounds = isPointInBounds(point, xAxisZoom, yAxisZoom);
        var xMinCross = void 0;
        var xMaxCross = void 0;
        var yMinCross = void 0;
        var yMaxCross = void 0;

        // If this is not the first point, we need to figure out any cross points
        if (index > 0) {
          // Calculate each cross point
          xMaxCross = xAxis.calculateCross(lastPoint, point, xMax);
          xMinCross = xAxis.calculateCross(lastPoint, point, xMin);
          yMaxCross = yAxis.calculateCross(lastPoint, point, yMax);
          yMinCross = yAxis.calculateCross(lastPoint, point, yMin);

          /* eslint-disable max-depth */
          // If this point and the next are both in bounds
          if (pointIsInBounds && lastPointInBounds) {}
          // Do nothing...


          // If this segment goes left to right
          else if (lastPoint.x < point.x) {
              if (lastPoint.y < point.y) {
                if (xMinCross.y >= lastPoint.y && xMinCross.y <= point.y) {
                  if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                    clip.push({
                      x: xMin,
                      y: xMinCross.y,
                      d: 'a'
                    });
                  } else if (xMinCross.y < yMin && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                    clip.push({
                      x: xMin,
                      y: yMin,
                      d: 'b'
                    });
                  } else if (xMinCross.y > yMax && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                    clip.push({
                      x: xMin,
                      y: yMax,
                      d: 'b'
                    });
                  }
                }

                if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x) {
                  if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                    clip.push({
                      x: yMinCross.x,
                      y: yMin,
                      d: 'c'
                    });
                  }
                }

                if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x) {
                  if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                    clip.push({
                      x: yMaxCross.x,
                      y: yMax,
                      d: 'd'
                    });
                  }
                }

                if (xMaxCross.y >= lastPoint.y && xMaxCross.y <= point.y) {
                  if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                    clip.push({
                      x: xMax,
                      y: xMaxCross.y,
                      d: 'e'
                    });
                  } else if (xMaxCross.y < yMin && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                    clip.push({
                      x: xMax,
                      y: yMin,
                      d: 'f'
                    });
                  } else if (xMaxCross.y > yMax && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                    clip.push({
                      x: xMax,
                      y: yMax,
                      d: 'f'
                    });
                  }
                }
              }

              // If this segment goes directly right
              else if (lastPoint.y === point.y) {
                  // TODO:
                } else if (lastPoint.y > point.y) {
                  if (xMinCross.y <= lastPoint.y && xMinCross.y >= point.y) {
                    if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                      clip.push({
                        x: xMin,
                        y: xMinCross.y,
                        d: 'g'
                      });
                    } else if (xMinCross.y < yMin && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                      clip.push({
                        x: xMin,
                        y: yMin,
                        d: 'h'
                      });
                    } else if (xMinCross.y > yMax && xMinCross.x >= lastPoint.x && xMinCross.x <= point.x) {
                      clip.push({
                        x: xMin,
                        y: yMax,
                        d: 'h'
                      });
                    }
                  }

                  if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x) {
                    if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                      clip.push({
                        x: yMaxCross.x,
                        y: yMax,
                        d: 'i'
                      });
                    }
                  }

                  if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x) {
                    if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                      clip.push({
                        x: yMinCross.x,
                        y: yMin,
                        d: 'j'
                      });
                    }
                  }

                  if (xMaxCross.y <= lastPoint.y && xMaxCross.y >= point.y) {
                    if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                      clip.push({
                        x: xMax,
                        y: xMaxCross.y,
                        d: 'k'
                      });
                    } else if (xMaxCross.y < yMin && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                      clip.push({
                        x: xMax,
                        y: yMin,
                        d: 'l'
                      });
                    } else if (xMaxCross.y > yMax && xMaxCross.x >= lastPoint.x && xMaxCross.x <= point.x) {
                      clip.push({
                        x: xMax,
                        y: yMax,
                        d: 'l'
                      });
                    }
                  }
                }
            }

            // If this segment goes directly up or down
            else if (lastPoint.x === point.x) {
                // If this segment goes directly up
                if (lastPoint.y < point.y) {
                  // If this segment crosses the y min value, clip it and add it to the path
                  if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x && yMax >= lastPoint.y && yMax <= point.y) {
                    if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                      clip.push({
                        x: yMinCross.x,
                        y: yMin,
                        d: 'direct up - y min cross'
                      });
                    }
                  }

                  // If this segment crosses the y max value, clip it and add it to the path
                  if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x && yMax >= lastPoint.y && yMax <= point.y) {
                    if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                      clip.push({
                        x: yMaxCross.x,
                        y: yMax,
                        d: 'direct up - y max cross'
                      });
                    }
                  }
                }

                // If the points are exactly the same
                else if (lastPoint.y === point.y) {}
                  // Do nothing...


                  // If this segment goes directly down
                  else if (lastPoint.y > point.y) {
                      // If this segment crosses the y max value, clip it and add it to the path
                      if (yMaxCross.x >= lastPoint.x && yMaxCross.x <= point.x && yMax <= lastPoint.y && yMax >= point.y) {
                        if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                          clip.push({
                            x: yMaxCross.x,
                            y: yMax,
                            d: 'direct down - y max cross'
                          });
                        }
                      }

                      // If this segment crosses the y min value, clip it and add it to the path
                      if (yMinCross.x >= lastPoint.x && yMinCross.x <= point.x && yMin <= lastPoint.y && yMin >= point.y) {
                        if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                          clip.push({
                            x: yMinCross.x,
                            y: yMin,
                            d: 'direct down - y min cross'
                          });
                        }
                      }
                    }
              }

              // If this segment goes right to left
              else if (lastPoint.x > point.x) {
                  if (lastPoint.y < point.y) {
                    if (xMaxCross.y >= lastPoint.y && xMaxCross.y <= point.y) {
                      if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                        clip.push({
                          x: xMax,
                          y: xMaxCross.y,
                          d: 'm'
                        });
                      } else if (xMaxCross.y < yMin && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                        clip.push({
                          x: xMax,
                          y: yMin,
                          d: 'n'
                        });
                      } else if (xMaxCross.y > yMax && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                        clip.push({
                          x: xMax,
                          y: yMax,
                          d: 'n'
                        });
                      }
                    }

                    if (yMinCross.x <= lastPoint.x && yMinCross.x >= point.x) {
                      if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                        clip.push({
                          x: yMinCross.x,
                          y: yMin,
                          d: 'o'
                        });
                      }
                    }

                    if (yMaxCross.x <= lastPoint.x && yMaxCross.x >= point.x) {
                      if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                        clip.push({
                          x: yMaxCross.x,
                          y: yMax,
                          d: 'p'
                        });
                      }
                    }

                    if (xMinCross.y >= lastPoint.y && xMinCross.y <= point.y) {
                      if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                        clip.push({
                          x: xMin,
                          y: xMinCross.y,
                          d: 'q'
                        });
                      } else if (xMinCross.y < yMin && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                        clip.push({
                          x: xMin,
                          y: yMin,
                          d: 'r'
                        });
                      } else if (xMinCross.y > yMax && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                        clip.push({
                          x: xMin,
                          y: yMax,
                          d: 'r'
                        });
                      }
                    }
                  }

                  // If this segment goes directly left
                  else if (lastPoint.y === point.y) {
                      // TODO:
                    } else if (lastPoint.y > point.y) {
                      if (xMaxCross.y <= lastPoint.y && xMaxCross.y >= point.y) {
                        if (xMaxCross.y >= yMin && xMaxCross.y <= yMax) {
                          clip.push({
                            x: xMax,
                            y: xMaxCross.y,
                            d: 's'
                          });
                        } else if (xMaxCross.y < yMin && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                          clip.push({
                            x: xMax,
                            y: yMin,
                            d: 't'
                          });
                        } else if (xMaxCross.y > yMax && xMaxCross.x <= lastPoint.x && xMaxCross.x >= point.x) {
                          clip.push({
                            x: xMax,
                            y: yMax,
                            d: 't'
                          });
                        }
                      }

                      if (yMaxCross.x <= lastPoint.x && yMaxCross.x >= point.x) {
                        if (yMaxCross.x >= xMin && yMaxCross.x <= xMax) {
                          clip.push({
                            x: yMaxCross.x,
                            y: yMax,
                            d: 'u'
                          });
                        }
                      }

                      if (yMinCross.x <= lastPoint.x && yMinCross.x >= point.x) {
                        if (yMinCross.x >= xMin && yMinCross.x <= xMax) {
                          clip.push({
                            x: yMinCross.x,
                            y: yMin,
                            d: 'v'
                          });
                        }
                      }

                      if (xMinCross.y <= lastPoint.y && xMinCross.y >= point.y) {
                        if (xMinCross.y >= yMin && xMinCross.y <= yMax) {
                          clip.push({
                            x: xMin,
                            y: xMinCross.y,
                            d: 'w'
                          });
                        } else if (xMinCross.y < yMin && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                          clip.push({
                            x: xMin,
                            y: yMin,
                            d: 'x'
                          });
                        } else if (xMinCross.y > yMax && xMinCross.x <= lastPoint.x && xMinCross.x >= point.x) {
                          clip.push({
                            x: xMin,
                            y: yMax,
                            d: 'x'
                          });
                        }
                      }
                    }
                }
          /* eslint-enable max-depth */
        }

        // Clamp and push the current point onto the clip
        clip.push({
          x: _Number2.default.clamp(point.x, xMin, xMax),
          y: _Number2.default.clamp(point.y, yMin, yMax),
          d: 'direct to point'
        });

        // Update the last point and if it's in bounds
        lastPoint = point;
        lastPointInBounds = isPointInBounds(lastPoint, xAxisZoom, yAxisZoom);
      });

      // console.log(JSON.stringify(clip));

      return clip;
    }
    /* not-sparkline:end */

    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() {
      // Grab some local pointers
      var chart = this.chart;
      var xAxis = this.referenceXAxis();
      var yAxis = this.referenceYAxis();
      var points = this.buildPath();

      // Begin the drawing path
      chart.beginPath();

      // Loop through the points of data adding them to the path array
      points.forEach(function (point, index) {
        chart[index === 0 ? 'moveTo' : 'lineTo'](xAxis.convertPointToPixel(point.x), yAxis.convertPointToPixel(point.y));
      });

      // Draw the line
      chart.stroke(_Object2.default.merge({}, this.line, {
        strokeStyle: this.line.strokeStyle || this.color
      }));

      // Draw the points if needed
      if (this.points.visible === true) {
        _get(LineSeries.prototype.__proto__ || Object.getPrototypeOf(LineSeries.prototype), 'draw', this).call(this);
      }
    }

    /* not-sparkline:start */
    // TODO:

  }, {
    key: 'isPointInBounds',
    value: function isPointInBounds(point, xAxisZoom, yAxisZoom) {
      // Return if the given point is inside the current zoom area
      return point.x >= xAxisZoom.min && point.x <= xAxisZoom.max && point.y >= yAxisZoom.min && point.y <= yAxisZoom.max;
    }
    /* not-sparkline:end */

  }]);

  return LineSeries;
}(_ScatterSeries3.default);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _XYSeries2 = __webpack_require__(22);

var _XYSeries3 = _interopRequireDefault(_XYSeries2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * // TODO:
 *
 * @example
 *
 *   // TODO:
 *
 * @class EJSC.ScatterSeries
 * @extends EJSC.XYSeries
 * @constructor
 * @since 3.0.0
 */
exports.default = _EJSC2.default.ScatterSeries = function (_XYSeries) {
  _inherits(ScatterSeries, _XYSeries);

  function ScatterSeries() {
    _classCallCheck(this, ScatterSeries);

    return _possibleConstructorReturn(this, (ScatterSeries.__proto__ || Object.getPrototypeOf(ScatterSeries)).apply(this, arguments));
  }

  _createClass(ScatterSeries, [{
    key: 'getPoints',

    /**
     * Defines the style options for the points.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {Object} points
     * @property {String} points.shape Defines the shape of the points. (Default: 'circle') (Values: 'box', 'circle', 'diamond', 'triangle')
     * @property {Integer} points.size Defines the size of the points. (Default: 5)
     * @property {Object} points.style
     * @property {String} points.style.fillStyle Defines the fill color. (Default: null)
     * @property {Integer} points.style.lineWidth Defines the width of the line. (Default: 2)
     * @property {String} points.style.strokeStyle Defines the color of the line. (Default: null)
     * @property {Boolean} points.visible Defines if the points should be drawn. Only applies to child classes of ScatterSeries. (Default: false)
     * @since 3.0.0
     */

    // getter
    value: function getPoints() {
      // Return the current points
      return this.points;
    }

    // setter

  }, {
    key: 'setPoints',
    value: function setPoints(points, apply) {
      // Update the current points
      _Object2.default.merge(this.points, points);

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(ScatterSeries.prototype.__proto__ || Object.getPrototypeOf(ScatterSeries.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.points = {
        shape: 'circle',
        size: 5,
        style: {
          fillStyle: null,
          lineWidth: 2,
          strokeStyle: null
        },
        visible: false
      };
    }

    /**
     * Calculates the extremes for the series based on its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The new extremes
     * @since 3.0.0
     */

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {
      // Define some local variables
      var extremes = {
        xMin: null,
        xMax: null,
        yMin: null,
        yMax: null
      };

      // Loop through the associated data
      this.data.forEach(function (point) {
        // Update the xMin value if needed
        _Object2.default.merge(extremes, {
          xMin: _Number2.default.min(extremes.xMin, point.x),
          xMax: _Number2.default.max(extremes.xMax, point.x),
          yMin: _Number2.default.min(extremes.yMin, point.y),
          yMax: _Number2.default.max(extremes.yMax, point.y)
        });
      });

      // Return the extremes
      return extremes;
    }

    /**
     * Calculates the spacing needed for the series.
     *
     * @method calculateSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */

  }, {
    key: 'calculateSpacing',
    value: function calculateSpacing() {
      // Grab some local pointers
      var points = this.points;

      // Determine the spacing needed for the series
      var spacing = Math.ceil(points.size + points.style.lineWidth / 2);

      // Return the spacing needed for the series
      return spacing;
    }

    /**
     * Draws the series.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() {
      // Grab some local pointers
      var chart = this.chart,
          points = this.points,
          color = this.color;

      // Define some local variables

      var xAxis = this.referenceXAxis();
      var yAxis = this.referenceYAxis();
      var style = _Object2.default.merge({}, points.style);
      var size = points.size;

      // Fill in missing colors if needed
      style.fillStyle = style.fillStyle || this.setOpacity(color, 0.5);
      style.strokeStyle = style.strokeStyle || color;

      // Draw the visible points
      this.getVisiblePoints().forEach(function (point) {
        // Define the pixel values
        var dx = xAxis.convertPointToPixel(point.x) + 0.5;
        var dy = yAxis.convertPointToPixel(point.y) + 0.5;

        // Determine what shape to draw
        switch (points.shape) {
          // Draw the rect
          case 'box':
            chart.rect(dx - size, dy - size, size * 2, size * 2, style);
            break;

          // Draw the circle
          case 'circle':
            chart.circle(dx, dy, size, style);
            break;

          // Draw the diamond
          case 'diamond':
            chart.beginPath();
            chart.moveTo(dx, dy - size);
            chart.lineTo(dx - size, dy);
            chart.lineTo(dx, dy + size);
            chart.lineTo(dx + size, dy);
            chart.lineTo(dx, dy - size);
            chart.draw(style);
            break;

          // Draw the triangle
          case 'triangle':
            chart.beginPath();
            chart.moveTo(dx, dy - size);
            chart.lineTo(dx - size, dy + size);
            chart.lineTo(dx + size, dy + size);
            chart.lineTo(dx, dy - size);
            chart.draw(style);
            break;
        }
      });
    }

    /**
     * Determines if a point is currently visible or not.
     *
     * @method isPointVisible
     * @private
     * @param {Array<Number, Number>} point The point to determine
     * @return {Boolean} If the point is currently visible or not
     * @since 3.0.0
     */

  }, {
    key: 'isPointVisible',
    value: function isPointVisible(point) {
      // Grab some local pointers
      var spacing = this.calculateSpacing();
      var xAxisZoom = this.referenceXAxis().getCurrentZoom(spacing);
      var yAxisZoom = this.referenceYAxis().getCurrentZoom(spacing);

      // Determine if the point should be drawn or not
      var isPointVisible = _Variable2.default.isNil(point.x) === false && _Variable2.default.isNil(point.y) === false && point.x >= xAxisZoom.min && point.x <= xAxisZoom.max && point.y >= yAxisZoom.min && point.y <= yAxisZoom.max;

      // Return if the point should be drawn or not
      return isPointVisible;
    }
  }]);

  return ScatterSeries;
}(_XYSeries3.default);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _PlotSeries = __webpack_require__(23);

var _PlotSeries2 = _interopRequireDefault(_PlotSeries);

var _DataSeries2 = __webpack_require__(25);

var _DataSeries3 = _interopRequireDefault(_DataSeries2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TODO;
 *
 * @class EJSC.XYSeries
 * @extends EJSC.PlotSeries
 * @uses EJSC.DataSeries
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.XYSeries = function (_DataSeries) {
  _inherits(XYSeries, _DataSeries);

  function XYSeries() {
    _classCallCheck(this, XYSeries);

    return _possibleConstructorReturn(this, (XYSeries.__proto__ || Object.getPrototypeOf(XYSeries)).apply(this, arguments));
  }

  _createClass(XYSeries, [{
    key: 'init',

    // TODO: document XYSeries.dataPoints

    // init
    value: function init() {
      // super
      _get(XYSeries.prototype.__proto__ || Object.getPrototypeOf(XYSeries.prototype), 'init', this).call(this);

      // Initialize some private properties
      this.dataPoints = {
        x: ['x'],
        y: ['y']
      };
    }
  }]);

  return XYSeries;
}((0, _DataSeries3.default)(_PlotSeries2.default));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Series2 = __webpack_require__(24);

var _Series3 = _interopRequireDefault(_Series2);

var _String = __webpack_require__(8);

var _String2 = _interopRequireDefault(_String);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Defines a series that will plot its data using the chart's axes.
 *
 * @class EJSC.PlotSeries
 * @extends EJSC.Series
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.PlotSeries = function (_Series) {
  _inherits(PlotSeries, _Series);

  function PlotSeries() {
    _classCallCheck(this, PlotSeries);

    return _possibleConstructorReturn(this, (PlotSeries.__proto__ || Object.getPrototypeOf(PlotSeries)).apply(this, arguments));
  }

  _createClass(PlotSeries, [{
    key: 'getSpacing',

    // TODO:

    // getter
    value: function getSpacing() {
      // Return the current spacing
      return this.spacing;
    }

    // setter

  }, {
    key: 'setSpacing',
    value: function setSpacing(spacing, apply) {
      // Update the current spacing
      this.spacing = spacing;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }
    /**
     * Defines the x axis to draw on.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {String} xAxis
     * @default 'bottom'
     * @values 'bottom', 'top'
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getXAxis',
    value: function getXAxis() {
      // Return the current x axis
      return this.xAxis;
    }

    // setter

  }, {
    key: 'setXAxis',
    value: function setXAxis(xAxis, apply) {
      // Update the current x axis
      this.xAxis = xAxis;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Defines the y axis to draw on.
     *
     * @example
     *
     *   // TODO:
     *
     * @attribute {String} yAxis
     * @default 'left'
     * @values 'left', 'right'
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getYAxis',
    value: function getYAxis() {
      // Return the current y axis
      return this.yAxis;
    }

    // setter

  }, {
    key: 'setYAxis',
    value: function setYAxis(yAxis, apply) {
      // Update the current y axis
      this.yAxis = yAxis;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(PlotSeries.prototype.__proto__ || Object.getPrototypeOf(PlotSeries.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.spacing = 0;
      this.xAxis = 'bottom';
      this.yAxis = 'left';
    }

    /**
     * Calculates the extremes for the series based on its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The new extremes
     * @since 3.0.0
     */

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {
      // Define some local variables
      var extremes = {
        xMin: null,
        xMax: null,
        yMin: null,
        yMax: null
      };

      // Return the extremes
      return extremes;
    }

    /**
     * Returns the list of visible points.
     *
     * @method getVisiblePoints
     * @private
     * @return {Array} The list of visible points
     * @since 3.0.0
     */

  }, {
    key: 'getVisiblePoints',
    value: function getVisiblePoints() {
      var _this2 = this;

      // Get the list of visible points
      var visiblePoints = this.data.filter(function (point) {
        return _this2.isPointVisible(point);
      });

      // Return the list of visible points
      return visiblePoints;
    }

    /**
     * Returns a reference to the x axis
     *
     * @method referenceXAxis
     * @private
     * @return {EJSC.Axis} The x axis
     * @since 3.0.0
     */

  }, {
    key: 'referenceXAxis',
    value: function referenceXAxis() {
      // Return a reference to the x axis
      return this.chart['axis' + _String2.default.capitalize(this.xAxis)];
    }

    /**
     * Returns a reference to the y axis
     *
     * @method referenceXAxis
     * @private
     * @return {EJSC.Axis} The y axis
     * @since 3.0.0
     */

  }, {
    key: 'referenceYAxis',
    value: function referenceYAxis() {
      // Return a reference to the y axis
      return this.chart['axis' + _String2.default.capitalize(this.yAxis)];
    }
  }]);

  return PlotSeries;
}(_Series3.default);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _Class2 = __webpack_require__(3);

var _Class3 = _interopRequireDefault(_Class2);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Holds all of the common code to all of the series.
 *
 * @class EJSC.Series
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Series = function (_Class) {
  _inherits(Series, _Class);

  function Series() {
    _classCallCheck(this, Series);

    return _possibleConstructorReturn(this, (Series.__proto__ || Object.getPrototypeOf(Series)).apply(this, arguments));
  }

  _createClass(Series, [{
    key: 'getColor',

    /**
     * Defines the color of the series.
     *
     * @attribute {String} color
     * @default null
     * @since 3.0.0
     */

    // getter
    value: function getColor() {
      // Return the current color
      return this.color;
    }

    // setter

  }, {
    key: 'setColor',
    value: function setColor(color, apply) {
      // Update the current color
      this.color = color;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Defines the title of the series.
     *
     * @attribute {String} title
     * @default null
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getTitle',
    value: function getTitle() {
      // Return the current title
      return this.title;
    }

    // setter

  }, {
    key: 'setTitle',
    value: function setTitle(title, apply) {
      // Update the current title
      this.title = title;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Defines if the series if visible or not.
     *
     * @attribute {Boolean} visible
     * @default true
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getVisible',
    value: function getVisible() {
      // Return the current visible
      return this.visible;
    }

    // setter

  }, {
    key: 'setVisible',
    value: function setVisible(visible, apply) {
      // Store the current visible
      this.visible = visible;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Holds a pointer to this series' owner chart.
     *
     * @property {EJSC.Chart} chart
     * @private
     * @default null
     * @since 3.0.0
     */

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(Series.prototype.__proto__ || Object.getPrototypeOf(Series.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.color = null;
      this.title = null;
      this.visible = true;

      // Initialize some private properties
      this.chart = null;
    }

    /**
     * Draws the series to its owner chart's drawing engine.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() {}
    // Placeholder


    /**
     * Determines if the series is visible or not.
     *
     * @method isVisible
     * @private
     * @return {Boolean} If the series is visible or not
     * @since 3.0.0
     */

  }, {
    key: 'isVisible',
    value: function isVisible() {
      // Return if this series is visible or not
      return this.visible;
    }

    /**
     * Links the series to its owner chart.
     *
     * @method prepare
     * @private
     * @param {EJSC.Chart} chart The owner chart
     * @param {Object} options Default options to apply if not defined
     * @since 3.0.0
     */

  }, {
    key: 'prepare',
    value: function prepare(chart, options) {
      // Store the owner chart
      this.chart = chart;

      // Update any options that haven't been defined
      _Object2.default.merge(this, options);
    }

    // TODO: document Series.setOpacity

  }, {
    key: 'setOpacity',
    value: function setOpacity(color, opacity) {
      // Return the string with the updated opacity
      return color.replace(/^rgba?\(/, 'rgba(').replace(/\)$/, ',' + opacity + ')').replace(/\s/g, '').split(',').slice(0, 3).join(',') + ',' + opacity + ')';
    }

    /**
     * Fires when a property of the class has changed.
     *
     * @method update
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'update',
    value: function update() {
      // Redraw the chart
      if (_Object2.default.has(this, 'chart.redraw')) {
        this.chart.redraw();
      }
    }
  }]);

  return Series;
}(_Class3.default);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Defines a series that requires data.
 *
 * @class EJSC.DataSeries
 * @extends EJSC.Class
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.DataSeries = function (superclass) {
  return function (_superclass) {
    _inherits(DataSeries, _superclass);

    // TODO: document this.data

    // constructor
    function DataSeries(data, options) {
      _classCallCheck(this, DataSeries);

      // Store and prepare the data handler
      var _this = _possibleConstructorReturn(this, (DataSeries.__proto__ || Object.getPrototypeOf(DataSeries)).call(this, options));
      // super


      _this.data = data;
      return _this;
    }

    // init


    _createClass(DataSeries, [{
      key: 'init',
      value: function init() {
        // super
        _get(DataSeries.prototype.__proto__ || Object.getPrototypeOf(DataSeries.prototype), 'init', this).call(this);

        // Initialize some private properties
        this.data = [];
      }
    }]);

    return DataSeries;
  }(superclass);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

var _ScatterSeries2 = __webpack_require__(21);

var _ScatterSeries3 = _interopRequireDefault(_ScatterSeries2);

var _Number = __webpack_require__(9);

var _Number2 = _interopRequireDefault(_Number);

var _Object = __webpack_require__(4);

var _Object2 = _interopRequireDefault(_Object);

var _Variable = __webpack_require__(7);

var _Variable2 = _interopRequireDefault(_Variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = _EJSC2.default.BarSeries = function (_ScatterSeries) {
  _inherits(BarSeries, _ScatterSeries);

  function BarSeries() {
    _classCallCheck(this, BarSeries);

    return _possibleConstructorReturn(this, (BarSeries.__proto__ || Object.getPrototypeOf(BarSeries)).apply(this, arguments));
  }

  _createClass(BarSeries, [{
    key: 'getBar',

    /**
     * Defines the styles for the bar.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} bar
     * @property {Number} bar.size The amount of available space the bars should take up. (Default: 0.8)
     * @property {Object} bar.style
     * @property {String} bar.style.fillStyle The background color of the bar. (Default: null)
     * @property {Integer} bar.style.lineWidth The border width of the bar. (Default: 1)
     * @property {String} bar.style.strokeStyle The border color of the bar. (Default: null)
     * @since 3.0.0
     */

    // getter
    value: function getBar() {
      // Return the current bar
      return this.bar;
    }

    // setter

  }, {
    key: 'setBar',
    value: function setBar(bar, apply) {
      // Update the current bar
      _Object2.default.merge(this.bar, bar);

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    /**
     * Defines the zero coordinate for the series.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Number} zeroCoordinate
     * @default 0
     * @since 3.0.0
     */

    // getter

  }, {
    key: 'getZeroCoordinate',
    value: function getZeroCoordinate() {
      // Return the current zeroCoordinate
      return this.zeroCoordinate;
    }

    // setter

  }, {
    key: 'setZeroCoordinate',
    value: function setZeroCoordinate(zeroCoordinate, apply) {
      // Update the current zeroCoordinate
      this.zeroCoordinate = zeroCoordinate;

      // Redraw the chart if needed
      if (apply !== false) {
        this.update();
      }
    }

    // init

  }, {
    key: 'init',
    value: function init() {
      // super
      _get(BarSeries.prototype.__proto__ || Object.getPrototypeOf(BarSeries.prototype), 'init', this).call(this);

      // Initialize some public properties
      this.bar = {
        size: 0.8,
        style: {
          fillStyle: null,
          lineWidth: 1,
          strokeStyle: null
        }
      };
      this.zeroCoordinate = 0;
    }

    /**
     * Calculates the boundary points for a bar in the series.
     *
     * @method calculateBarPoints
     * @private
     * @return {Object} The boundary points
     * @since 3.0.0
     */

  }, {
    key: 'calculateBarPoints',
    value: function calculateBarPoints(point) {
      // Grab some local pointers
      var barSize = this.calculateBarSize();
      var zeroCoordinate = this.zeroCoordinate;

      // Return the bar points
      var barPoints = {
        xMax: point.x + barSize / 2,
        xMin: point.x - barSize / 2,
        yMax: _Number2.default.max(point.y, zeroCoordinate),
        yMin: _Number2.default.min(point.y, zeroCoordinate)
      };

      return barPoints;
    }

    /**
     * Calculates the boundary pixels for a bar in the series.
     *
     * @method calculateBarPixels
     * @private
     * @return {Object} The boundary pixels
     * @since 3.0.0
     */

  }, {
    key: 'calculateBarPixels',
    value: function calculateBarPixels(point) {
      // Grab some local pointers
      var xAxis = this.referenceXAxis();
      var yAxis = this.referenceYAxis();
      var spacing = this.getSpacing();
      var xAxisZoom = xAxis.getCurrentZoom(spacing);
      var yAxisZoom = yAxis.getCurrentZoom(spacing);
      var barPoints = this.calculateBarPoints(point);
      var temp = void 0;

      // Calculate the bar pixels
      var barPixels = {
        xMax: xAxis.convertPointToPixel(_Number2.default.min(barPoints.xMax, xAxisZoom.max)),
        xMin: xAxis.convertPointToPixel(_Number2.default.max(barPoints.xMin, xAxisZoom.min)),
        yMax: yAxis.convertPointToPixel(_Number2.default.min(barPoints.yMax, yAxisZoom.max)),
        yMin: yAxis.convertPointToPixel(_Number2.default.max(barPoints.yMin, yAxisZoom.min))
      };

      // Reverse the x values if needed
      if (barPixels.xMax < barPixels.xMin) {
        temp = barPixels.xMax;
        barPixels.xMax = barPixels.xMin;
        barPixels.xMin = temp;
      }

      // Reverse the y values if needed
      if (barPixels.yMax < barPixels.yMin) {
        temp = barPixels.yMax;
        barPixels.yMax = barPixels.yMin;
        barPixels.yMin = temp;
      }

      // Return the bar pixels
      return barPixels;
    }

    /**
     * Calculates the size (width) for a bar in the series.
     *
     * @method calculateBarPixels
     * @private
     * @return {Number} The size of the bar
     * @since 3.0.0
     */

  }, {
    key: 'calculateBarSize',
    value: function calculateBarSize() {
      // Grab some local pointers
      var data = this.data;

      // Define some local variables
      var xs = [];
      var barSize = 1;

      // If there are more than 1 points, determine the min distance between the points
      if (data.length > 1) {
        // Add each point's x value to the array
        data.forEach(function (point) {
          xs.push(point.x);
        });

        // Sort the array
        xs.sort();

        // Find the minimum difference
        xs.forEach(function (x, index) {
          if (index === 0) {
            barSize = null;
          } else {
            barSize = _Number2.default.min(barSize, x - xs[index - 1]);
          }
        });
      }

      // Finalize the bar size
      barSize = barSize * this.bar.size;

      // Return the bar size
      return barSize;
    }

    /**
     * Calculates the extremes for the series based off of its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object<Number xMin, Number xMax, Number yMin, Number yMin>} The calculated extremes
     * @since 3.0.0
     */

  }, {
    key: 'calculateExtremes',
    value: function calculateExtremes() {
      // Grab some local pointers
      var extremes = _get(BarSeries.prototype.__proto__ || Object.getPrototypeOf(BarSeries.prototype), 'calculateExtremes', this).call(this);
      var barSize = this.calculateBarSize();
      var zeroCoordinate = this.zeroCoordinate;

      // Update extremes to the zero coordinate
      extremes.yMin = _Number2.default.min(extremes.yMin, zeroCoordinate);
      extremes.yMax = _Number2.default.max(extremes.yMax, zeroCoordinate);

      // Update extremes to the bar size
      extremes.xMin -= barSize / 2;
      extremes.xMax += barSize / 2;

      // Return the extremes
      return extremes;
    }

    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */

  }, {
    key: 'draw',
    value: function draw() {
      var _this2 = this;

      // Grab some local pointers
      var chart = this.chart,
          color = this.color,
          bar = this.bar;

      // Define the drawing style

      var style = _Object2.default.merge({}, bar.style, {
        fillStyle: bar.fillStyle || this.setOpacity(color, 0.5),
        strokeStyle: bar.strokeStyle || color
      });

      // Loop through the visible points
      this.getVisiblePoints().forEach(function (point) {
        // Calculate the bar points
        var barPixels = _this2.calculateBarPixels(point);

        // Draw the bar
        chart.rect(Math.round(barPixels.xMin) + 0.5, Math.round(barPixels.yMin) + 0.5, Math.round(barPixels.xMax - barPixels.xMin), Math.round(barPixels.yMax - barPixels.yMin), style);
      });

      // Draw the points if needed
      if (this.points.visible === true) {
        _get(BarSeries.prototype.__proto__ || Object.getPrototypeOf(BarSeries.prototype), 'draw', this).call(this);
      }
    }

    /**
     * Calculates the spacing needed for the series.
     *
     * @method getSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */

  }, {
    key: 'getSpacing',
    value: function getSpacing() {
      // Declare some local variables
      var pointSpacing = this.points.visible ? _get(BarSeries.prototype.__proto__ || Object.getPrototypeOf(BarSeries.prototype), 'getSpacing', this).call(this) : 0;
      var lineSpacing = Math.ceil(this.bar.style.lineWidth / 2);

      // Calculate the spacing
      var spacing = _Number2.default.max(pointSpacing, lineSpacing);

      // Return the spacing
      return spacing;
    }

    /**
     * Determines if the given point is in range of the cursor or not.
     *
     * @method isPointInRange
     * @private
     * @param {EJSC.Point} point The point
     * @param {MouseEvent} event The mouse event
     * @return {Boolean} If the point is in range or not
     * @since 3.0.0
     */

  }, {
    key: 'isPointInRange',
    value: function isPointInRange(point, event) {
      // Grab some local pointers
      var chart = this.chart;
      var chartPixels = chart.getChartPixels(event);
      var cursorX = chartPixels.x,
          cursorY = chartPixels.y;

      var spacing = this.getSpacing();
      var barPixels = this.calculateBarPixels(point);

      // Determine if the bar is in range of the cursor
      var barInRange = cursorX >= barPixels.xMin - spacing - 5 && cursorX <= barPixels.xMax + spacing + 5 && cursorY >= barPixels.yMin - spacing - 5 && cursorY <= barPixels.yMax + spacing + 5;

      // Determine if the point is in range of the cursor
      var pointInRange = this.points.visible ? _get(BarSeries.prototype.__proto__ || Object.getPrototypeOf(BarSeries.prototype), 'isPointInRange', this).call(this, point, event) : false;

      // Return if the bar or the point (if shown) is in range of the cursor
      return barInRange || pointInRange;
    }

    /**
     * Determines if a point is currently visible or not.
     *
     * @method isPointVisible
     * @private
     * @param {Array<Number, Number>} point The point to determine
     * @return {Boolean} If the point is currently visible or not
     * @since 3.0.0
     */

  }, {
    key: 'isPointVisible',
    value: function isPointVisible(point) {
      // Grab some local pointers
      var spacing = this.getSpacing();
      var xAxisZoom = this.referenceXAxis().getCurrentZoom(spacing);
      var yAxisZoom = this.referenceYAxis().getCurrentZoom(spacing);
      var barPoints = this.calculateBarPoints(point);

      // Determine if the bar is visible or not
      var barVisible = _Variable2.default.isNil(point.x) === false && _Variable2.default.isNil(point.y) === false && barPoints.xMax >= xAxisZoom.min && barPoints.xMin <= xAxisZoom.max && barPoints.yMax >= yAxisZoom.min && barPoints.yMin <= yAxisZoom.max;

      // Determine if the point is visible or not
      var pointVisible = this.points.visible ? _get(BarSeries.prototype.__proto__ || Object.getPrototypeOf(BarSeries.prototype), 'isPointVisible', this).call(this, point) : false;

      // Return if this bar or the point (if shown) is visible or not
      return barVisible || pointVisible;
    }
  }]);

  return BarSeries;
}(_ScatterSeries3.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EJSC = __webpack_require__(2);

var _EJSC2 = _interopRequireDefault(_EJSC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Houses all of the utility methods for dealing with variables.
 *
 * @class EJSC.Math
 * @private
 * @since 3.0.0
 */
exports.default = _EJSC2.default.Math = new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'distance',

    /**
     * Calculates the distance between two points.
     *
     * @example
     *
     *   // TODO: example
     *
     * @method distance
     * @param {Array} point1 The first point
     * @param {Array} point2 The second point
     * @return {Number} The distance
     * @since 3.0.0
     */
    value: function distance(point1, point2) {
      // Return the calculated distance
      return Math.sqrt(Math.pow(Math.abs(point2[0] - point1[0]), 2) + Math.pow(Math.abs(point2[1] - point1[1]), 2));
    }

    /**
     * Converts radians to degrees.
     *
     * @example
     *
     *   // TODO: example
     *
     * @method toDegrees
     * @param {Number} radians The radians
     * @return {Number} The degrees
     * @since 3.0.0
     */

  }, {
    key: 'toDegrees',
    value: function toDegrees(radians) {
      // Return the converted degrees
      return radians / Math.PI * 180;
    }

    /**
     * Converts degrees to radians.
     *
     * @example
     *
     *   // TODO: example
     *
     * @method toRadians
     * @param {Number} degrees The degrees
     * @return {Number} The radians
     * @since 3.0.0
     */

  }, {
    key: 'toRadians',
    value: function toRadians(degrees) {
      // Return the converted radians
      return degrees / 180 * Math.PI;
    }
  }]);

  return _class;
}())();

/***/ })
/******/ ]);