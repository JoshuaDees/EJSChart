import EJSC from '../EJSC.es6';
import $Array from './Array.es6';
import $Collection from './Collection.es6';
import $Variable from './Variable.es6';

/**
 * Houses all of the utility methods for dealing with objects.
 *
 * @class EJSC.Object
 * @private
 * @since 3.0.0
 */
export default EJSC.Object = new class {
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
  has(object, path) {
    // Make sure the path is in array form
    path = ($Variable.isString(path) ? path.split('.') : path);

    // Define some local variables
    let owner = object;
    let has = true;

    // Loop through each of the parts of the path
    path.forEach(step => {
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
  merge(object, ...sources) {
    // Make sure destination is defined
    object = object || {};

    // Loop through each of the sources
    $Array.without(sources, null, undefined).forEach(source => {
      // Loop through each of the properties of the current source
      $Collection.forEach(source, (variable, name) => {
        // Deep copy the property from the source to the destination
        if ($Variable.isArray(variable)) {
          this.merge(object[name] = object[name] || [], variable);
        }
        else if ($Variable.isPlainObject(variable)) {
          this.merge(object[name] = object[name] || {}, variable);
        }
        else {
          object[name] = ($Variable.isUndefined(variable) ? object[name] : variable);
        }
      });
    });

    // Return the destination object
    return object;
  }
}();
