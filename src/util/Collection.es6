import EJSC from '../EJSC.es6';
import $Variable from './Variable.es6';

/**
 * Houses all of the utility methods for dealing with collections.
 *
 * @class EJSC.Collection
 * @private
 * @since 3.0.0
 */
export default EJSC.Collection = new class {
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
  filter(collection, predicate) {
    // Start with the filtered result as the collection
    let results = collection;

    // Handle arrays
    if ($Variable.isArray(collection)) {
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
    else if ($Variable.isObject(collection)) {
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
  forEach(collection, iteratee) {
    // Handle arrays
    if ($Variable.isArray(collection)) {
      // Loop through the collection calling the callback function for each item
      for (let index = 0; index < collection.length; index++) {
        if (iteratee(collection[index], index, collection) === false) {
          break;
        }
      }
    }

    // Handle everything else
    else if ($Variable.isObject(collection)) {
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
  includes(collection, value, fromIndex = 0) {
    // Start with the found flag as false
    let found = false;

    // Handle a string
    if ($Variable.isString(collection)) {
      // Store if the value string was found in the collection string
      found = collection.indexOf(value) > -1;
    }

    // Handle an array
    else if ($Variable.isArray(collection)) {
      // Loop through the collection and set the flag If the given value is found
      collection.slice(fromIndex).forEach(val => {
        if (val === value) {
          found = true;
        }
      });
    }

    // Handle everything else
    else {
      // Loop through the collection and set the flag If the given value is found
      this.forEach(collection, val => {
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
}();
