import EJSC from '../EJSC.es6';

/**
 * Houses all of the utility methods for dealing with variables.
 *
 * @class EJSC.Math
 * @private
 * @since 3.0.0
 */
export default EJSC.Math = new class {
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
  distance(point1, point2) {
    // Return the calculated distance
    return Math.sqrt(
      Math.pow(Math.abs(point2[0] - point1[0]), 2) +
      Math.pow(Math.abs(point2[1] - point1[1]), 2)
    );
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
  toDegrees(radians) {
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
  toRadians(degrees) {
    // Return the converted radians
    return degrees / 180 * Math.PI;
  }
}();
