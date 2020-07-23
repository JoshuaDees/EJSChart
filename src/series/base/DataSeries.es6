import EJSC from '../../EJSC.es6';

/**
 * Defines a series that requires data.
 *
 * @class EJSC['sparkline'].DataSeries
 * @extends TODO:
 * @private
 * @constructor
 * @param {Array} data The data array
 * @param {Object} options The config options
 * @since @todo
 */
export default EJSC['sparkline'].DataSeries = (superclass) => class DataSeries extends superclass {
  /**
   * Holds the data for the series.
   *
   * This is required, and therefore defined outside of the options array in the constructor.
   *
   * @example
   *
   *   // Create a chart in the element with the id 'chart-container'
   *   let chart = new EJSC['sparkline'].Chart('chart-container');
   *
   *   // Define a new LineSeries with a data set
   *   let series = new EJSC['sparkline'].LineSeries([[0, 0], [1, 2], [2, 1]]);
   *
   *   // Update the data set
   *   series.setData([[0, 1], [1, 2], [2, 0]]);
   *
   *   // Log out the current data set
   *   console.log(series.getData());
   *   // => [[0, 1], [1, 2], [2, 0]]
   *
   * @property {Array} data
   * @default []
   * @since @todo
   */

  // getter
  getData() {
    // Return the current data
    return this.data;
  }

  // setter
  setData(data) {
    // Store the new data
    this.data = data;

    // Redraw the chart if needed
    if (this.listening) {
      this.update();
    }
  }

  /**
  * Holds the list of data points for each axis type.
  *
  * @property {Object} dataPoints
  * @private
  * @default {}
  * @since @todo
  */

  // constructor
  constructor(data, options) {
    // super
    super(options);

    // Store and prepare the data handler
    this.data = data;
  }

  // init
  init() {
    // super
    super.init();

    // Initialize some public properties
    this.data = [];

    // Initialize some private properties
    this.dataPoints = {};
  }
};
