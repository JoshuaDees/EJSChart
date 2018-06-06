import EJSC from '../EJSC.es6';

/**
 * Houses all of the utility methods for dealing with variables.
 *
 * @class EJSC.Util
 * @private
 * @since 3.0.0
 */
export default EJSC.Util = new class {
  /**
   * Converts the first character of string to upper case and the remaining to lower case.
   *
   * @example
   *
   *   EJSC.Util.capitalize('FRED');
   *   // => 'Fred'
   *
   * @method capitalize
   * @param {String} string The string to capitalize
   * @return {String} The capitalized string
   * @since 3.0.0
   */
  capitalize(string) {
    // Return the capitalized string
    return string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase();
  }

  /**
   * Clamps number within the inclusive lower and upper bounds.
   *
   * @example
   *
   *   EJSC.Util.clamp(-10, -5, 5);
   *   // => -5
   *
   *   EJSC.Util.clamp(10, -5, 5);
   *   // => 5
   *
   * @method capitalize
   * @param {Number} number The number to clamp
   * @param {Number} lower The lower bound
   * @param {Number} uppser The upper bound
   * @return {String} The clamped number
   * @since 3.0.0
   */
  clamp(number, lower, upper) {
    // Return the clamped number
    return this.max([lower, this.min([upper, number])]);
  }

  /**
   * Creates an array with all falsey values removed.
   * The values false, null, 0, "", undefined, and NaN are falsey.
   *
   * @example
   *
   *   EJSC.Util.compact([0, 1, false, 2, '', 3]);
   *   // => [1, 2, 3]
   *
   * @method compact
   * @param {Array} array The array to compact
   * @return {Array} The new array of filtered values
   * @since 3.0.0
   */
  compact(array) {
    // Returned the compacted array
    return this.without(array, false, null, 0, '', undefined, NaN);
  }

  /**
   * Checks value to determine whether a default value should be returned in its place.
   * The defaultValue is returned if value is NaN, null, or undefined.
   *
   * @example
   *
   *   EJSC.Util.defaultTo(1, 10);
   *   // => 1
   *
   *   EJSC.Util.defaultTo(undefined, 10);
   *   // => 10
   *
   * @method defaultTo
   * @param {*} value The value to check
   * @param {*} defaultValue The default value
   * @return {*} The resolved value
   * @since 3.0.0
   */
  defaultTo(value, defaultValue) {
    // Return the resolved value
    return this.isUndefined(value) === false ? value : defaultValue;
  }

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
   *   EJSC.Util.filter(users, function(o) { return !o.active; });
   *   // => objects for ['fred']
   *
   *   // The 'matches' iteratee shorthand.
   *   EJSC.Util.filter(users, { age: 36, active: true });
   *   // => objects for ['barney']
   *
   *   // The 'matchesProperty' iteratee shorthand.
   *   EJSC.Util.filter(users, ['active', false]);
   *   // => objects for ['fred']
   *
   *   // The 'property' iteratee shorthand.
   *   EJSC.Util.filter(users, 'active');
   *   // => objects for ['barney']
   *
   * // TODO: EJSC.Util.matches iteratee shorthand
   * // TODO: EJSC.Util.matchesProperty iteratee shorthand
   * // TODO: EJSC.Util.property iteratee shorthand
   *
   * @method filter
   * @param {Array|Object} collection The collection to iterate over
   * @param {Function} predicate The function invoked per iteration
   * @return {Array|Object} The new filterd collection
   * @since 3.0.0
   */
  filter(collection, predicate) {
    // Start with the filtered result as the collection
    let results = collection;

    // Handle arrays
    if (this.isArray(collection)) {
      // Restart with a blank array
      results = [];

      // Loop through the collection adding each item that matches the predicate to the results
      this.forEach(collection, (value, index) => {
        if (predicate(value, index, collection)) {
          results.push(value);
        }
      });
    }

    // Handle objects
    else if (this.isObject(collection)) {
      // Restart with a blank object
      results = {};

      // Loop through the collection adding each item that matches the predicate to the results
      this.forEach(collection, (value, name) => {
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
   *   EJSC.Util.find(users, function(o) { return o.age < 40; });
   *   // => object for 'barney'
   *
   *   // The 'matches' iteratee shorthand.
   *   EJSC.Util.find(users, { age: 1, active: true });
   *   // => object for 'pebbles'
   *
   *   // The 'matchesProperty' iteratee shorthand.
   *   EJSC.Util.find(users, ['active', false]);
   *   // => object for 'fred'
   *
   *   // The 'property' iteratee shorthand.
   *   EJSC.Util.find(users, 'active');
   *   // => object for 'barney'
   *
   * @method find
   * @param {Array|Object} collection The collection to iterate over
   * @param {Function} predicate The function invoked per iteration
   * // TODO: @param {Number} [fromIndex=0] The index to search from
   * @return {*} The matched element, else undefined
   * @since 3.0.0
   */
  find(collection, predicate /* , fromIndex = 0 */) {
    // Start with the matched result as undefined
    let result;

    // Loop through the collection
    this.forEach(collection, (value, id) => {
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
   *   EJSC.Util.forEach([1, 2], function(value) {
   *     console.log(value);
   *   });
   *   // => Logs '1' then '2'.
   *
   *   EJSC.Util.forEach({ a: 1, b: 2 }, function(value, key) {
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
  forEach(collection, iteratee) {
    // Handle arrays
    if (this.isArray(collection)) {
      // Loop through the collection calling the callback function for each item
      for (let index = 0; index < collection.length; index++) {
        if (iteratee(collection[index], index, collection) === false) {
          break;
        }
      }
    }

    // Handle everything else
    else if (this.isObject(collection)) {
      // Loop through the collection calling the callback function for each item
      for (let name in collection) {
        if (iteratee(collection[name], name, collection) === false) {
          break;
        }
      }
    }

    // Return the collection
    return collection;
  }

  /**
   * Checks if path is a direct property of object.
   *
   * @example
   *
   *   var object = { a: { b: 2 } };
   *
   *   EJSC.Util.has(object, 'a');
   *   // => true
   *
   *   EJSC.Util.has(object, 'a.b');
   *   // => true
   *
   *   EJSC.Util.has(object, ['a', 'b']);
   *   // => true
   *
   *   EJSC.Util.has(object, 'c');
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
    path = (this.isString(path) ? path.split('.') : path);

    // Define some local variables
    let owner = object;
    let has = true;

    // Loop through each of the parts of the path
    this.forEach(path, (step) => {
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
   * Checks if value is in collection.
   * If collection is a string, it's checked for a substring of value.
   * Otherwise SameValueZero is used for equality comparisons.
   * If fromIndex is negative, it's used as the offset from the end of collection.
   *
   * @example
   *
   *   EJSC.Util.includes([1, 2, 3], 1);
   *   // => true
   *
   *   EJSC.Util.includes([1, 2, 3], 1, 2);
   *   // => false
   *
   *   EJSC.Util.includes({ a: 1, b: 2 }, 1);
   *   // => true
   *
   *   EJSC.Util.includes('abcd', 'bc');
   *   // => true
   *
   * @method includes
   * @param {Array|Object|String} collection The collection to inspect
   * @param {*} value The value to search for
   * @param {Number} [fromIndex=0] The index to search from
   * @return {Boolean} If value is found
   * @since 3.0.0
   */
  includes(collection, value, fromIndex = 0) {
    // Start with the found flag as false
    let found = false;

    // Handle a string
    if (this.isString(collection)) {
      // Store if the value string was found in the collection string
      found = collection.indexOf(value) > -1;
    }

    // Handle an array
    else if (this.isArray(collection)) {
      // Loop through the collection and set the flag If the given value is found
      this.forEach(this.slice(collection, fromIndex), (val) => {
        if (val === value) {
          found = true;
        }
      });
    }

    // Handle everything else
    else {
      // Loop through the collection and set the flag If the given value is found
      this.forEach(collection, (val) => {
        if (val === value) {
          found = true;
        }
      });
    }

    // Return the found flag
    return found;
  }

  /**
   * Checks if value is likely an arguments object.
   *
   * @example
   *
   *   EJSC.Util.isArguments(function() { return arguments; }());
   *   // => true
   *
   *   EJSC.Util.isArguments([1, 2, 3]);
   *   // => false
   *
   * @method isArguments
   * @param {*} value The value to test
   * @return {Boolean} If value is an arguments array
   * @since 3.0.0
   */
  isArguments(value) {
    // Return if value is an arguments array
    return value && value.hasOwnProperty('callee') && !value.propertyIsEnumerable('callee');
  }

  /**
   * Checks if value is classified as an Array object.
   *
   * @example
   *
   *   EJSC.Util.isArray([1, 2, 3]);
   *   // => true
   *
   *   EJSC.Util.isArray(document.body.children);
   *   // => false
   *
   *   EJSC.Util.isArray('abc');
   *   // => false
   *
   *   EJSC.Util.isArray(function() {});
   *   // => false
   *
   * @method isArray
   * @param {*} value The value to test
   * @return {Boolean} If value is an array
   * @since 3.0.0
   */
  isArray(value) {
    // Return if value is an array
    return value && (value instanceof Array && !this.isArguments(value));
  }

  /**
   * Checks if value is likely a DOM element.
   *
   * @example
   *
   *   EJSC.Util.isElement(document.body);
   *   // => true
   *
   *   EJSC.Util.isElement('<body>');
   *   // => false
   *
   * @method isElement
   * @param {*} value The value to test
   * @return {Boolean} If value is a DOM element
   * @since 3.0.0
   */
  isElement(value) {
    // Return if value is a DOM element
    return value && this.isObjectLike(value) && value.nodeType === 1 && !this.isPlainObject(value);
  }

  /**
   * Checks if value is classified as a Function object.
   *
   * @example
   *
   *   EJSC.Util.isFunction(function() {});
   *   // => true
   *
   *   EJSC.Util.isFunction(/abc/);
   *   // => false
   *
   * @method isFunction
   * @param {*} value  The value to test
   * @return {Boolean} If value is a function
   * @since 3.0.0
   */
  isFunction(value) {
    // Return if value is a function
    return value && ({}).toString.call(value) === '[object Function]';
  }

  /**
   * Checks if value is null or undefined.
   *
   * @example
   *
   *   EJSC.Util.isNil(null);
   *   // => true
   *
   *   EJSC.Util.isNil(void 0);
   *   // => true
   *
   *   EJSC.Util.isNil(NaN);
   *   // => false
   *
   * @method isNil
   * @param {*} value The value to check
   * @return {Boolean} If value is nullish.
   * @since 3.0.0
   */
  isNil(value) {
    // Return if value is null or undefined
    return this.isNull(value) || this.isUndefined(value);
  }

  /**
   * Checks if value is null.
   *
   * @example
   *
   *   EJSC.Util.isNull(null);
   *   // => true
   *
   *   EJSC.Util.isNull(void 0);
   *   // => false
   *
   * @method isNull
   * @param {*} value The value to check
   * @return {Boolean} If value is null.
   * @since 3.0.0
   */
  isNull(value) {
    // Return if value is null
    return value === null;
  }

  /**
   * Checks if value is the language type of Object.
   *
   * @example
   *
   *   EJSC.Util.isObject({});
   *   // => true
   *
   *   EJSC.Util.isObject([1, 2, 3]);
   *   // => true
   *
   *   EJSC.Util.isObject(function() {});
   *   // => true
   *
   *   EJSC.Util.isObject(null);
   *   // => false
   *
   * @method isObject
   * @param {*} value The value to check
   * @return {Boolean} If value is an object.
   * @since 3.0.0
   */
  isObject(value) {
    // Return if value is an object
    return value && (typeof value === 'object' || typeof value === 'function');
  }

  /**
   * Checks if value is object-like.
   * A value is object-like if it's not null and has a typeof result of "object".
   *
   * @example
   *
   *   EJSC.Util.isObjectLike({});
   *   // => true
   *
   *   EJSC.Util.isObjectLike([1, 2, 3]);
   *   // => true
   *
   *   EJSC.Util.isObjectLike(function() {});
   *   // => false
   *
   *   EJSC.Util.isObjectLike(null);
   *   // => false
   *
   * @method isObjectLike
   * @param {*} value The value to check
   * @return {Boolean} If value is object-like.
   * @since 3.0.0
   */
  isObjectLike(value) {
    // Return if value is object-like
    return value && typeof value === 'object';
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
   *   EJSC.Util.isPlainObject(new Foo);
   *   // => false
   *
   *   EJSC.Util.isPlainObject([1, 2, 3]);
   *   // => false
   *
   *   EJSC.Util.isPlainObject({ x: 0, y: 0 });
   *   // => true
   *
   *   EJSC.Util.isPlainObject(Object.create(null));
   *   // => true
   *
   * @method isPlainObject
   * @param {*} value The value to test
   * @return {Boolean} If value is a plain object
   * @since 3.0.0
   */
  isPlainObject(value) {
    // Return if value is a plain object
    return value && value.constructor === Object;
  }

  /**
   * Checks if the variable is a string.
   *
   * @example
   *
   *   EJSC.Util.isString('abc');
   *   // => true
   *
   *   EJSC.Util.isString(1);
   *   // => false
   *
   * @method isString
   * @param {*} value The value to test
   * @return {Boolean} If value is a string
   * @since 3.0.0
   */
  isString(value) {
    // Return if value is a string
    return value && typeof value === 'string';
  }

  /**
   * Checks if value is undefined.
   *
   * @example
   *
   *   EJSC.Util.isUndefined(void 0);
   *   // => true
   *
   *   EJSC.Util.isUndefined(null);
   *   // => false
   *
   * @method isUndefined
   * @param {*} value The value to check
   * @return {Boolean} If value is undefined.
   * @since 3.0.0
   */
  isUndefined(value) {
    // Return if value is undefined
    return value === (function() {
      // noop
    }());
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
   *   EJSC.Util.map([4, 8], square);
   *   // => [16, 64]
   *
   *   EJSC.Util.map({ a: 4, b: 8 }, square);
   *   // => [16, 64] (iteration order is not guaranteed)
   *
   *   var users = [
   *     { user: 'barney' },
   *     { user: 'fred' }
   *   ];
   *
   *   // The 'property' iteratee shorthand.
   *   EJSC.Util.map(users, 'user');
   *   // => ['barney', 'fred']
   *
   * @method map
   * @param {Array|Object} collection The collection to iterate over
   * @param {Function} iteratee The function invoked per iteration
   * @return {Array} The new mapped array
   * @since 3.0.0
   */
  map(collection, iteratee) {
    // Start with a blank results array
    let results = [];

    // Iterate over each item adding its iteratee result to the results array
    this.forEach(collection, (value, id) => {
      results.push(iteratee(value, id, collection));
    });

    // Return the results array
    return results;
  }

  /**
   * Computes the maximum value of array.
   * If array is empty or falsey, undefined is returned.
   *
   * @example
   *
   *   EJSC.Util.max([4, 2, 8, 6]);
   *   // => 8
   *
   *   EJSC.Util.max([]);
   *   // => undefined
   *
   * @method max
   * @param {Array} array The array to iterate over
   * @return {Number} The maximum value
   * @since 3.0.0
   */
  max(array) {
    // Define some local variables
    let max = null;

    // Loop through the arguments
    this.forEach(array, (value) => {
      // If there is no current max, or the new value is greater than the current max
      if (this.isNil(max) || max < value) {
        // Update the max
        max = value;
      }
    });

    // Return the max
    return max;
  }

  /**
   * This method is like EJSC.Util.assign except that it recursively merges own and inherited
   * enumerable string keyed properties of source objects into the destination object.
   * Source properties that resolve to undefined are skipped if a destination value exists.
   * Array and plain object properties are merged recursively.
   * Other objects and value types are overridden by assignment.
   * Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * @example
   *
   *   EJSC.Util.max([4, 2, 8, 6]);
   *   // => 8
   *
   *   EJSC.Util.max([]);
   *   // => undefined
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
    this.forEach(this.without(sources, null, undefined), (source) => {
      // Loop through each of the properties of the current source
      this.forEach(source, (variable, name) => {
        // Deep copy the property from the source to the destination
        if (this.isArray(variable)) {
          this.merge(object[name] = object[name] || [], variable);
        }
        else if (this.isPlainObject(variable)) {
          this.merge(object[name] = object[name] || {}, variable);
        }
        else {
          object[name] = (this.isUndefined(variable) ? object[name] : variable);
        }
      });
    });

    // Return the destination object
    return object;
  }

  /**
   * Computes the minimum value of array.
   * If array is empty or falsey, undefined is returned.
   *
   * @example
   *
   *   EJSC.Util.min([4, 2, 8, 6]);
   *   // => 2
   *
   *   EJSC.Util.min([]);
   *   // => undefined
   *
   * @method min
   * @param {Array} array The array to iterate over
   * @return {Number} The minimum value
   * @since 3.0.0
   */
  min(array) {
    // Define some local variables
    let min = null;

    // Loop through the arguments
    this.forEach(array, (value) => {
      // If there is no current min, or the new value is less than the current min
      if (this.isNil(min) || min > value) {
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
   *   EJSC.Util.round(4.006);
   *   // => 4
   *
   *   EJSC.Util.round(4.006, 2);
   *   // => 4.01
   *
   *   EJSC.Util.round(4060, -2);
   *   // => 4100
   *
   * @method round
   * @param {Number} number The number to round
   * @param {Number} [precision=0] The precision to round to
   * @return {Number} The rounded number
   * @since 3.0.0
   */
  round(number, precision = 0) {
    // Return the rounded number
    return Number(Math.round(number + 'e' + precision) + 'e-' + precision);
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
  slice(array, start = 0, end = array.length) {
      // Return the sliced array
      return array && [].slice.call(array, start, end);
  }

  /**
   * Converts the first character of string to upper case.
   *
   * @example
   *
   *   EJSC.Util.upperFirst('fred');
   *   // => 'Fred'
   *
   *   EJSC.Util.upperFirst('FRED');
   *   // => 'FRED'
   *
   * @method upperFirst
   * @param {String} string The string to convert
   * @return {String} The converted string
   * @since 3.0.0
   */
  upperFirst(string) {
      // Return the string with the first character in upper case
      return string && (string.substr(0, 1).toUpperCase() + string.substr(1));
  }

  /**
   * Creates an array excluding all given values using SameValueZero for equality comparisons.
   *
   * @example
   *
   *   EJSC.Util.without([2, 1, 2, 3], 1, 2);
   *   // => [3]
   *
   * @method without
   * @param {Array} array The array to inspect
   * @param {*} [...values] The values to exclude
   * @return {Array} The new array of filtered values
   * @since 3.0.0
   */
  without(array, ...values) {
      // Define some variables
      let results = [];

      // Loop through the items
      this.forEach(array, (value) => {
        // If the current item does not need to be removed, push it onto the results array
        if (!this.includes(values, value)) {
          results.push(value);
        }
      });

      // Return the results array
      return results;
  }
}();
