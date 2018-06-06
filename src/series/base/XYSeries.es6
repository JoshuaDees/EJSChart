import EJSC from '../../EJSC.es6';
import PlotSeries from './PlotSeries.es6';
import DataSeries from './DataSeries.es6';

/**
 * TODO;
 *
 * @class EJSC['sparkline'].XYSeries
 * @extends EJSC['sparkline'].PlotSeries
 * @uses EJSC['sparkline'].DataSeries
 * @private
 * @since 3.0.0
 */
export default EJSC['sparkline'].XYSeries = class XYSeries extends DataSeries(PlotSeries) {
  // TODO: document XYSeries.dataPoints

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
