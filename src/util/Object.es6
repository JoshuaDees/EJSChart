import { identity, noop } from './_Helpers.es6';
import $Array from './Array.es6';

// TODO: $Object documentation
let $Object = (object) => new class {
  // constructor
  constructor($object) {
    this.result = $object;
  }

  /**
   * Iterates over elements of object, returning an array of all elements predicate returns truthy for.
   * The predicate is invoked with three arguments: (value, key, object).
   *
   * @example
   *
   *   $Object({ a: 0, b: 1, c: 2 }).filter((value, key, object) => value > 0).result;
   *   // => { b: 1, c: 2 }
   *
   * @method filter
   * @param {Function} predicate The function invoked per iteration
   * @chainable
   * @since @todo
   */
  filter(predicate = identity) {
    // Use Object.entries to convert to an array, then use the built in filter method
    this.result = Object.entries(this.result)
      .filter(([key, value]) => predicate(value, key, this.result))
      .reduce((accumulator, [key, value]) => {
        accumulator[key] = value;
        return accumulator;
      }, {});

    // Chain
    return this;
  }

  /**
   * Iterates over elements of object and invokes iteratee for each element.
   * The iteratee is invoked with three arguments: (value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning false.
   *
   * @example
   *
   *   $Object({ a: 1, b: 2 }).forEach((value, key, object) => console.log(key));
   *   // => Logs 'a' then 'b' (iteration order is not guaranteed).
   *
   * @method forEach
   * @param {Function} predicate The function invoked per iteration
   * @since @todo
   */
  forEach(predicate) {
    // Use Object.entries to convert to an array, then use the built in forEach method
    Object.entries(this.result)
      .forEach(([key, value]) => predicate(value, key, this.result));

    // Chain
    return this;
  }

  // TODO: Object.protype.getProperty documentation
  getProperty(path) {
    let value = null;

    if ($Object.has(this.result, path)) {
      // Define some local variables
      path = ($Object.isString(path) ? path.replace(/[[\]]/g, '').split('.') : path);
      value = this.result;

      // Loop through each of the parts of the path
      $Array(path).forEach(step => {
        // Move to the next piece
        value = value[step];
      });
    }

    // Return the final value
    return value;
  }

  /**
   * Checks if path is a direct property of object.
   *
   * @example
   *
   *   $Object({ a: { b: 2 } }).has('a');
   *   // => true
   *
   *   $Object({ a: { b: 2 } }).has('a.b');
   *   // => true
   *
   *   $Object({ a: { b: 2 } }).has(['a', 'b']);
   *   // => true
   *
   *   $Object({ a: { b: 2 } }).has('c');
   *   // => false
   *
   * @method has
   * @param {Array|String} path The path to check
   * @return {Boolean} If path exists
   * @since @todo
   */
  has(path) {
    // Make sure the path is in array form
    path = ($Object.isString(path) ? path.replace(/[[\]]/g, '').split('.') : path);

    // Define some local variables
    let owner = this.result;
    let has = true;

    // Loop through each of the parts of the path
    $Array(path).forEach(step => {
      // If the next step exists
      if (!$Object.isNil(owner[step])) {
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

  // TODO: Object.protype.invoke documentation
  invoke(path, ...args) {
    let steps = ($Object.isString(path) ? path.replace(/[[\]]/g, '').split('.') : path);
    let method = $Object.getProperty(this.result, path);
    let reference = $Object.getProperty(this.result, $Array.slice(steps, 0, steps.length - 1));

    if ($Object.isFunction(method)) {
      return method.apply(reference, args);
    }

    return undefined;
  }
}(object);

/**
 * Iterates over elements of object, returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, key, object).
 *
 * @example
 *
 *   $Object.filter({ a: 0, b: 1, c: 2 }, (value, key, object) => value > 0);
 *   // => { b: 1, c: 2 }
 *
 * @static
 * @method filter
 * @param {Object} object The object to iterate over
 * @param {Function} [predicate=identity] The function invoked per iteration
 * @return {Object} The filtered values
 * @since @todo
 */
$Object.filter = (object, predicate = identity) => object && $Object(object).filter(predicate).result;

/**
 * Iterates over elements of object and invokes iteratee for each element.
 * The iteratee is invoked with three arguments: (value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning false.
 *
 * @example
 *
 *   $Object.forEach({ a: 1, b: 2 }, (value, key, object) => console.log(key));
 *   // => Logs 'a' then 'b' (iteration order is not guaranteed).
 *
 * @static
 * @method forEach
 * @param {Object} object The object to iterate over
 * @param {Function} [predicate=identity] The function invoked per iteration
 * @since @todo
 */
$Object.forEach = (object, predicate = identity) => object && $Object(object).forEach(predicate);

// TODO: Object.getProperty documentation
$Object.getProperty = (object, path) => object && $Object(object).getProperty(path);

/**
 * Checks if path is a direct property of object.
 *
 * @example
 *
 *   $Object.has({ a: { b: 2 } }, 'a');
 *   // => true
 *
 *   $Object.has({ a: { b: 2 } }, 'a.b');
 *   // => true
 *
 *   $Object.has({ a: { b: 2 } }, ['a', 'b']);
 *   // => true
 *
 *   $Object.has({ a: { b: 2 } }, 'c');
 *   // => false
 *
 * @static
 * @method has
 * @param {Object} object The object to query
 * @param {Array|String} path The path to check
 * @return {Boolean} If path exists
 * @since @todo
 */
$Object.has = (object, path) => object && $Object(object).has(path);

/**
 * Checks if value is likely an arguments object.
 *
 * @example
 *
 *   $Object.isArguments(function() { return arguments; }());
 *   // => true
 *
 *   $Object.isArguments([1, 2, 3]);
 *   // => false
 *
 * @static
 * @method isArguments
 * @param {*} value The value to test
 * @return {Boolean} If value is an arguments array
 * @since @todo
 */
$Object.isArguments = (value) => !$Object.isNil(value) && value.hasOwnProperty('callee') && !value.propertyIsEnumerable('callee');

/**
 * Checks if value is classified as an Array object.
 *
 * @example
 *
 *   $Object.isArray([1, 2, 3]);
 *   // => true
 *
 *   $Object.isArray(document.body.children);
 *   // => false
 *
 *   $Object.isArray('abc');
 *   // => false
 *
 *   $Object.isArray(function() {});
 *   // => false
 *
 * @static
 * @method isArray
 * @param {*} value The value to test
 * @return {Boolean} If value is an array
 * @since @todo
 */
$Object.isArray = (value) => !$Object.isNil(value) && (value instanceof Array && !$Object.isArguments(value));

/**
 * Checks if value is likely a DOM element.
 *
 * @example
 *
 *   $Object.isElement(document.body);
 *   // => true
 *
 *   $Object.isElement('<body>');
 *   // => false
 *
 * @static
 * @method isElement
 * @param {*} value The value to test
 * @return {Boolean} If value is a DOM element
 * @since @todo
 */
$Object.isElement = (value) => !$Object.isNil(value) && $Object.isObjectLike(value) && value.nodeType === 1 && !$Object.isPlainObject(value);

/**
 * Checks if value is classified as a Function object.
 *
 * @example
 *
 *   $Object.isFunction(function() {});
 *   // => true
 *
 *   $Object.isFunction(/abc/);
 *   // => false
 *
 * @static
 * @method isFunction
 * @param {*} value The value to test
 * @return {Boolean} If value is a function
 * @since @todo
 */
$Object.isFunction = (value) => !$Object.isNil(value) && ({}).toString.call(value) === '[object Function]';

/**
 * Checks if value is null or undefined.
 *
 * @example
 *
 *   $Object.isNil(null);
 *   // => true
 *
 *   $Object.isNil(void 0);
 *   // => true
 *
 *   $Object.isNil(NaN);
 *   // => false
 *
 * @static
 * @method isNil
 * @param {*} value The value to test
 * @return {Boolean} If value is nullish.
 * @since @todo
 */
$Object.isNil = (value) => $Object.isNull(value) || $Object.isUndefined(value);

/**
 * Checks if value is null.
 *
 * @example
 *
 *   $Object.isNull(null);
 *   // => true
 *
 *   $Object.isNull(void 0);
 *   // => false
 *
 * @static
 * @method isNull
 * @param {*} value The value to test
 * @return {Boolean} If value is null.
 * @since @todo
 */
$Object.isNull = (value) => value === null;

// TODO: $Object.isNumber documentation
$Object.isNumber = (value) => !$Object.isNil(value) && (typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]');

/**
 * Checks if value is the language type of Object.
 *
 * @example
 *
 *   $Object.isObject({});
 *   // => true
 *
 *   $Object.isObject([1, 2, 3]);
 *   // => true
 *
 *   $Object.isObject(function() {});
 *   // => true
 *
 *   $Object.isObject(null);
 *   // => false
 *
 * @static
 * @method isObject
 * @param {*} value The value to test
 * @return {Boolean} If value is an object.
 * @since @todo
 */
$Object.isObject = (value) => !$Object.isNil(value) && (typeof value === 'object' || typeof value === 'function');

/**
 * Checks if value is object-like.
 * A value is object-like if it's not null and has a typeof result of "object".
 *
 * @example
 *
 *   $Object.isObjectLike({});
 *   // => true
 *
 *   $Object.isObjectLike([1, 2, 3]);
 *   // => true
 *
 *   $Object.isObjectLike(function() {});
 *   // => false
 *
 *   $Object.isObjectLike(null);
 *   // => false
 *
 * @static
 * @method isObjectLike
 * @param {*} value The value to test
 * @return {Boolean} If value is object-like.
 * @since @todo
 */
$Object.isObjectLike = (value) => !$Object.isNil(value) && typeof value === 'object';

/**
 * Checks if value is a plain object.
 *
 * @example
 *
 *   $Object.isPlainObject(new function() {}());
 *   // => false
 *
 *   $Object.isPlainObject([1, 2, 3]);
 *   // => false
 *
 *   $Object.isPlainObject({ x: 0, y: 0 });
 *   // => true
 *
 *   $Object.isPlainObject(Object.create(null));
 *   // => true
 *
 * @static
 * @method isPlainObject
 * @param {*} value The value to test
 * @return {Boolean} If value is a plain object
 * @since @todo
 */
$Object.isPlainObject = (value) => !$Object.isNil(value) && value.constructor === Object;

/**
 * Checks if the variable is a string.
 *
 * @example
 *
 *   $Object.isString('abc');
 *   // => true
 *
 *   $Object.isString(1);
 *   // => false
 *
 * @static
 * @method isString
 * @param {*} value The value to test
 * @return {Boolean} If value is a string
 * @since @todo
 */
$Object.isString = (value) => !$Object.isNil(value) && typeof value === 'string';

/**
 * Checks if value is undefined.
 *
 * @example
 *
 *   $Object.isUndefined(void 0);
 *   // => true
 *
 *   $Object.isUndefined(null);
 *   // => false
 *
 * @static
 * @method isUndefined
 * @param {*} value The value to test
 * @return {Boolean} If value is undefined.
 * @since @todo
 */
$Object.isUndefined = (value) => value === noop();

/**
 * This method is like $Object.assign except that it recursively merges own and inherited
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
 * @static
 * @method merge
 * @param {Object} object The destination object
 * @param {Object} ...sources The source objects
 * @return {Object} The destination object with merged values
 * @since @todo
 */
$Object.merge = (object, ...sources) => {
  // Loop through each of the sources
  $Array(sources)
    .without(null, undefined)
    .forEach(source => {
      // Loop through each of the properties of the current source
      $Object(source).forEach((value, key) => {
        // Deep copy the property from the source to the destination
        if ($Object.isArray(value)) {
          $Object.merge(object[key] = object[key] || [], value);
        }
        else if ($Object.isPlainObject(value)) {
          $Object.merge(object[key] = object[key] || {}, value);
        }
        else {
          object[key] = ($Object.isUndefined(value) ? object[key] : value);
        }
      });
    });

  // Return the destination object
  return object;
};

export default $Object;
