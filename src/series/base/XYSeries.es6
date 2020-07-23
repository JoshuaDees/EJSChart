import EJSC from '../../EJSC.es6';
import PlotSeries from './PlotSeries.es6';
import DataSeries from './DataSeries.es6';

/**
 * Holds the common properties of series types that use XY data.
 *
 * @class EJSC['sparkline'].XYSeries
 * @extends EJSC['sparkline'].PlotSeries
 * @uses EJSC['sparkline'].DataSeries
 * @private
 * @since @todo
 */
export default EJSC['sparkline'].XYSeries = class XYSeries extends DataSeries(PlotSeries) {
  /**
  * Holds the list of data points for each axis type.
  *
  * @property {Array} dataPoints
  * @private
  * @default { x: ['x'], y: ['y'] }
  * @since @todo
  */

  // init
  init() {
    // super
    super.init();

    // Initialize some private properties
    this.dataPoints = {
      x: ['x'],
      y: ['y']
    };
  }
};
