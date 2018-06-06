import EJSC from '../../EJSC.es6';

/**
 * Defines a series that requires data.
 *
 * @class EJSC['sparkline'].DataSeries
 * @extends EJSC.Class
 * @private
 * @since 3.0.0
 */
export default EJSC['sparkline'].DataSeries = (superclass) => class DataSeries extends superclass {
  // TODO: document this.data

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

    // Initialize some private properties
    this.data = [];
  }
};
