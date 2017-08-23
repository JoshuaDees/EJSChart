/**
 * Emulates parts of Lodash for use in the EJSChart project.
 *
 * Based off of the Lodash project.
 * https://lodash.com/
 * License: MIT
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC._
 * @private
 * @since 3.0.0
 */
EJSC._ = (window._ || new function() {
    // Constructor
    var _ = {};

    /**
     * Converts the first character of string to upper case and the remaining to lower case.
     *
     * @example
     *
     *     EJSC._.capitalize('FRED');
     *     // => 'Fred'
     *
     * @method capitalize
     * @param {String} string The string to capitalize
     * @return {String} The capitalized string
     * @since 3.0.0
     */
    _.capitalize = function(string) {
        // Upper case the first character and lower case the others
        return string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase();
    };

    // TODO:
    _.clamp = function(number, lower, upper) {
        // TODO:
        return _.max([lower, _.min([upper, number])]);
    };

    /**
     * Creates an array with all falsey values removed.
     * The values false, null, 0, "", undefined, and NaN are falsey.
     *
     * @example
     *
     *     EJSC._.compact([0, 1, false, 2, '', 3]);
     *     // => [1, 2, 3]
     *
     * @method compact
     * @param {Array} array The array to compact
     * @return {Array} The new array of filtered values
     * @since 3.0.0
     */
    _.compact = function(array) {
        // Return a copy of the array without the falsey values
        return _.without(array, false, null, 0, '', undefined, NaN);
    };

    // TODO:
    _.defaultTo = function(value, defaultValue) {
        // TODO:
        return _.isUndefined(value) === false ? value : defaultValue;
    };

    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
     * The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @example
     *
     *     var users = [
     *         { user: 'barney', age: 36, active: true },
     *         { user: 'fred', age: 40, active: false }
     *     ];
     *
     *     EJSC._.filter(users, function(o) { return !o.active; });
     *     // => objects for ['fred']
     *
     *     // The `_.matches` iteratee shorthand.
     *     EJSC._.filter(users, { age: 36, active: true });
     *     // => objects for ['barney']
     *
     *     // The `_.matchesProperty` iteratee shorthand.
     *     EJSC._.filter(users, ['active', false]);
     *     // => objects for ['fred']
     *
     *     // The `_.property` iteratee shorthand.
     *     EJSC._.filter(users, 'active');
     *     // => objects for ['barney']
     *
     * @todo _.matches iteratee shorthand
     * @todo _.matchesProperty iteratee shorthand
     * @todo _.property iteratee shorthand
     *
     * @method filter
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} predicate The function invoked per iteration
     * @return {Array|Object} The new filterd collection
     * @since 3.0.0
     */
    _.filter = function(collection, predicate) {
        // Start with the filtered result as the collection
        var results = collection;

        // Handle arrays
        if (_.isArray(collection)) {
            // Restart with a blank array
            results = [];

            // Loop through the collection adding each item that matches the predicate to the results
            _.forEach(collection, function(value, index) {
                if (predicate(value, index, collection)) {
                    results.push(value);
                }
            });
        }

        // Handle objects
        else if (_.isObject(collection)) {
            // Restart with a blank object
            results = {};

            // Loop through the collection adding each item that matches the predicate to the results
            _.forEach(collection, function(value, name) {
                if (predicate(value, name, collection)) {
                    results[name] = value;
                }
            });
        }

        // Return the filtered results
        return results;
    };

    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @example
     *
     *     var users = [
     *         { user: 'barney', age: 36, active: true },
     *         { user: 'fred', age: 40, active: false },
     *         { user: 'pebbles', age: 1, active: true }
     *     ];
     *
     *     EJSC._.find(users, function(o) { return o.age < 40; });
     *     // => object for 'barney'
     *
     *     // The `_.matches` iteratee shorthand.
     *     EJSC._.find(users, { age: 1, active: true });
     *     // => object for 'pebbles'
     *
     *     // The `_.matchesProperty` iteratee shorthand.
     *     EJSC._.find(users, ['active', false]);
     *     // => object for 'fred'
     *
     *     // The `_.property` iteratee shorthand.
     *     EJSC._.find(users, 'active');
     *     // => object for 'barney'
     *
     * @method find
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} predicate The function invoked per iteration
     * // TODO: @param {Number} fromIndex The index to search from
     * @return {Variable} The matched element, else undefined
     * @since 3.0.0
     */
    _.find = function(collection, predicate /* , fromIndex */) {
        // Start with the matched result as undefined
        var result;

        // Loop through the collection
        _.forEach(collection, function(value, id) {
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
    };

    /**
     * Iterates over elements of collection and invokes iteratee for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning false.
     *
     * @example
     *
     *     EJSC._.forEach([1, 2], function(value) {
     *         console.log(value);
     *     });
     *     // => Logs `1` then `2`.
     *
     *     EJSC._.forEach({ a: 1, b: 2 }, function(value, key) {
     *         console.log(key);
     *     });
     *     // => Logs 'a' then 'b' (iteration order is not guaranteed).
     *
     * @method forEach
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} iteratee The function invoked per iteration
     * @return {Array|Object} The collection
     * @since 3.0.0
     */
    _.forEach = function(collection, iteratee) {
        // Handle arrays
        if (_.isArray(collection)) {
            // Loop through the collection calling the callback function for each item
            for (var index = 0; index < collection.length; index++) {
                if (iteratee(collection[index], index, collection) === false) {
                    break;
                }
            }
        }

        // Handle everything else
        else if (_.isObject(collection)) {
            // Loop through the collection calling the callback function for each item
            for (var name in collection) {
                if (iteratee(collection[name], name, collection) === false) {
                    break;
                }
            }
        }

        // Return the collection
        return collection;
    };

    /**
     * Checks if path is a direct property of object.
     *
     * @example
     *
     *     var object = { a: { b: 2 } };
     *
     *     EJSC._.has(object, 'a');
     *     // => true
     *
     *     EJSC._.has(object, 'a.b');
     *     // => true
     *
     *     EJSC._.has(object, ['a', 'b']);
     *     // => true
     *
     *     EJSC._.has(object, 'c');
     *     // => false
     *
     * @method has
     * @param {Object} object The object to query
     * @param {Array|String} path The path to check
     * @return {Variable} If path exists
     * @since 3.0.0
     */
    _.has = function(object, path) {
        // Make sure the path is in array form
        path = (_.isString(path) ? path.split('.') : path);

        // Define some local variables
        var owner = object;
        var has = true;

        // Loop through each of the parts of the path
        _.forEach(path, function(step) {
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
    };

    /**
     * Checks if value is in collection.
     * If collection is a string, it's checked for a substring of value.
     * Otherwise SameValueZero is used for equality comparisons.
     * If fromIndex is negative, it's used as the offset from the end of collection.
     *
     * @example
     *
     *     EJSC._.includes([1, 2, 3], 1);
     *     // => true
     *
     *     EJSC._.includes([1, 2, 3], 1, 2);
     *     // => false
     *
     *     EJSC._.includes({ a: 1, b: 2 }, 1);
     *     // => true
     *
     *     EJSC._.includes('abcd', 'bc');
     *     // => true
     *
     * @method includes
     * @param {Array|Object|String} collection The collection to inspect
     * @param {Variable} value The value to search for
     * @param {Number} fromIndex The index to search from
     * @return {Boolean} If value is found
     * @since 3.0.0
     */
    _.includes = function(collection, value, fromIndex) {
        fromIndex = fromIndex || 0;

        // Start with the found flag as false
        var found = false;

        // Handle a string
        if (_.isString(collection)) {
            // Store if the value string was found in the collection string
            found = collection.indexOf(value) > -1;
        }

        // Handle an array
        else if (_.isArray(collection)) {
            // Loop through the collection and set the flag If the given value is found
            _.forEach(_.slice(collection, fromIndex), function(val) {
                if (val === value) {
                    found = true;
                }
            });
        }

        // Handle everything else
        else {
            // Loop through the collection and set the flag If the given value is found
            _.forEach(collection, function(val) {
                if (val === value) {
                    found = true;
                }
            });
        }

        // Return the found flag
        return found;
    };

    /**
     * Checks if value is likely an arguments object.
     *
     * @example
     *
     *     EJSC._.isArguments(function() { return arguments; }());
     *     // => true
     *
     *     EJSC._.isArguments([1, 2, 3]);
     *     // => false
     *
     * @method isArray
     * @param {Variable} value The value to check
     * @return {Boolean} If value is an arguments object
     * @since 3.0.0
     */
    _.isArguments = function(value) {
        // Return if the given value is an arguments array
        return value && value.hasOwnProperty('callee') && !value.propertyIsEnumerable('callee');
    };

    /**
     * Checks if value is classified as an Array object.
     *
     * @example
     *
     *     EJSC._.isArray([1, 2, 3]);
     *     // => true
     *
     *     EJSC._.isArray(document.body.children);
     *     // => false
     *
     *     EJSC._.isArray('abc');
     *     // => false
     *
     *     EJSC._.isArray(_.noop);
     *     // => false
     *
     * @method isArray
     * @param {Variable} value The value to check
     * @return {Boolean} If value is an array
     * @since 3.0.0
     */
    _.isArray = function(value) {
        // Return if the given value is an array
        return value && (value instanceof Array || _.isArguments(value));
    };

    /**
     * Checks if value is classified as a Function object.
     *
     * @example
     *
     *     EJSC._.isFunction(_);
     *     // => true
     *
     *     EJSC._.isFunction(/abc/);
     *     // => false
     *
     * @method isFunction
     * @param {Variable} value The value to check
     * @return {Boolean} If value is an function
     * @since 3.0.0
     */
    _.isFunction = function(value) {
        // Return if the given value is a function
        return value && ({}).toString.call(value) === '[object Function]';
    };

    /**
     * Checks if value is null or undefined.
     *
     * @example
     *
     *     EJSC._.isNil(null);
     *     // => true
     *
     *     EJSC._.isNil(void 0);
     *     // => true
     *
     *     EJSC._.isNil(NaN);
     *     // => false
     *
     * @method isNil
     * @param {Variable} value The value to check
     * @return {Boolean} If value is nullish.
     * @since 3.0.0
     */
    _.isNil = function(value) {
        // Return if the given value is null or undefined
        return _.isNull(value) || _.isUndefined(value);
    };

    /**
     * Checks if value is null.
     *
     * @example
     *
     *     EJSC._.isNull(null);
     *     // => true
     *
     *     EJSC._.isNull(void 0);
     *     // => false
     *
     * @method isNull
     * @param {Variable} value The value to check
     * @return {Boolean} If value is null.
     * @since 3.0.0
     */
    _.isNull = function(value) {
        // Return if the given value is null
        return value === null;
    };

    /**
     * Checks if value is the language type of Object.
     *
     * @example
     *
     *     EJSC._.isObject({});
     *     // => true
     *
     *     EJSC._.isObject([1, 2, 3]);
     *     // => true
     *
     *     EJSC._.isObject(_.noop);
     *     // => true
     *
     *     EJSC._.isObject(null);
     *     // => false
     *
     * @method isObject
     * @param {Variable} value The value to check
     * @return {Boolean} If value is an object.
     * @since 3.0.0
     */
    _.isObject = function(value) {
        // Return if the given value is an object
        return value && (typeof value === 'object' || typeof value === 'function');
    };

    /**
     * Checks if value is object-like.
     * A value is object-like if it's not null and has a typeof result of "object".
     *
     * @example
     *
     *     EJSC._.isObjectLike({});
     *     // => true
     *
     *     EJSC._.isObjectLike([1, 2, 3]);
     *     // => true
     *
     *     EJSC._.isObjectLike(_.noop);
     *     // => false
     *
     *     EJSC._.isObjectLike(null);
     *     // => false
     *
     * @method isPlainObject
     * @param {Variable} value The value to check
     * @return {Boolean} If value is a plain object.
     * @since 3.0.0
     */
    _.isObjectLike = function(value) {
        // Return if the given value is object-like
        return value && typeof value === 'object';
    };

    /**
     * Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
     *
     * @example
     *
     *     EJSC.function Foo() {
     *         this.a = 1;
     *     }
     *
     *     EJSC._.isPlainObject(new Foo);
     *     // => false
     *
     *     EJSC._.isPlainObject([1, 2, 3]);
     *     // => false
     *
     *     EJSC._.isPlainObject({ x: 0, y: 0 });
     *     // => true
     *
     *     EJSC._.isPlainObject(Object.create(null));
     *     // => true
     *
     * @method isPlainObject
     * @param {Variable} value The value to check
     * @return {Boolean} If value is a plain object.
     * @since 3.0.0
     */
    _.isPlainObject = function(value) {
        // Return if the given value is a plain object
        return value && value.constructor === Object;
    };

    /**
     * Checks if value is classified as a String primitive or object.
     *
     * @example
     *
     *     EJSC._.isString('abc');
     *     // => true
     *
     *     EJSC._.isString(1);
     *     // => false
     *
     * @method isString
     * @param {Variable} value The value to check
     * @return {Boolean} If value is a string.
     * @since 3.0.0
     */
    _.isString = function(value) {
        // Return if the given value is a string
        return value && typeof value === 'string';
    };

    /**
     * Checks if value is undefined.
     *
     * @example
     *
     *     EJSC._.isUndefined(void 0);
     *     // => true
     *
     *     EJSC._.isUndefined(null);
     *     // => false
     *
     * @method isUndefined
     * @param {Variable} value The value to check
     * @return {Boolean} If value is undefined.
     * @since 3.0.0
     */
    _.isUndefined = function(value) {
        /* eslint-disable no-empty-function */
        // Return if the given value is undefined
        return value === (function() {}());
        /* eslint-enable no-empty-function */
    };

    /**
     * Creates an array of values by running each element in collection thru iteratee.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     *
     * @example
     *
     *     function square(n) {
     *         return n * n;
     *     }
     *
     *     EJSC._.map([4, 8], square);
     *     // => [16, 64]
     *
     *     EJSC._.map({ a: 4, b: 8 }, square);
     *     // => [16, 64] (iteration order is not guaranteed)
     *
     *     var users = [
     *         { user: 'barney' },
     *         { user: 'fred' }
     *     ];
     *
     *     // The `_.property` iteratee shorthand.
     *     EJSC._.map(users, 'user');
     *     // => ['barney', 'fred']
     *
     * @method map
     * @param {Array|Object} collection The collection to iterate over
     * @param {Function} iteratee The function invoked per iteration
     * @return {Array} The new mapped array
     * @since 3.0.0
     */
    _.map = function(collection, iteratee) {
        // Start with a blank results array
        var results = [];

        // Iterate over each item adding its iteratee result to the results array
        _.forEach(collection, function(value, id) {
            results.push(iteratee(value, id, collection));
        });

        // Return the results array
        return results;
    };

    // TODO:
    _.max = function(array) {
        // Define some local variables
        var max = null;

        // Loop through the arguments
        _.forEach(array, function(value) {
            // If there is no current max, or the new value is greater than the current max
            if (_.isNil(max) || max < value) {
                // Update the max
                max = value;
            }
        });

        // Return the max
        return max;
    };

    /**
     * This method is like _.assign except that it recursively merges own and inherited
     * enumerable string keyed properties of source objects into the destination object.
     * Source properties that resolve to undefined are skipped if a destination value exists.
     * Array and plain object properties are merged recursively.
     * Other objects and value types are overridden by assignment.
     * Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * @example
     *
     *     var object = {
     *         a: [{ b: 2 }, { d: 4 }]
     *     };
     *
     *     var other = {
     *         a: [{ c: 3 }, { e: 5 }]
     *     };
     *
     *     EJSC._.merge(object, other);
     *     // => { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] }
     *
     * @method merge
     * @param {Object} destination The destination object
     * @param {Object} ...source The source objects
     * @return {Object} The destination object
     * @since 3.0.0
     */
    _.merge = function(destination) {
        // Make sure destination is defined
        destination = destination || {};

        // Loop through each of the sources
        _.forEach(_.without(_.slice(arguments, 1), null, undefined), function(source) {
            // Loop through each of the properties of the current source
            _.forEach(source, function(value, name) {
                // Deep copy the property from the source to the destination
                if (_.isArray(value)) {
                    _.merge(destination[name] = destination[name] || [], value);
                }
                else if (_.isPlainObject(value)) {
                    _.merge(destination[name] = destination[name] || {}, value);
                }
                else {
                    destination[name] = (_.isUndefined(value) ? destination[name] : value);
                }
            });
        });

        // Return the destination object
        return destination;
    };

    // TODO:
    _.min = function(array) {
        // Define some local variables
        var min = null;

        // Loop through the arguments
        _.forEach(array, function(value) {
            // If there is no current min, or the new value is less than the current min
            if (_.isNil(min) || min > value) {
                // Update the min
                min = value;
            }
        });

        // Return the min
        return min;
    };

    // TODO:
    _.round = function(number, precision) {
        // TODO:
        precision = _.defaultTo(precision, 0);

        // Return the rounded number
        return Number(Math.round(number + 'e' + precision) + 'e-' + precision);
    };

    // TODO:
    _.setOpacity = function(color, opacity) {
        // Return the string with the updated opacity
        return color
            .replace(/^rgba?\(/, 'rgba(')
            .replace(/\)$/, ',' + opacity + ')')
            .replace(/\s/g, '')
            .split(',')
            .slice(0, 3)
            .join(',') + ',' + opacity + ')';
    };

    /**
     * Creates a slice of array from start up to, but not including, end.
     *
     * @example
     *
     *     // TODO:
     *
     * @method slice
     * @param {Array} array The array to slice
     * @param {Number} [start=0] The start position
     * @param {Number} [end=array.length] The end position
     * @return {Array} The slice of array
     * @since 3.0.0
     */
    _.slice = function(array, start, end) {
        // Return the sliced array
        return array && [].slice.call(array, start, end);
    };

    /**
     * Converts the first character of string to upper case.
     *
     * @example
     *
     *     EJSC._.upperFirst('fred');
     *     // => 'Fred'
     *
     *     EJSC._.upperFirst('FRED');
     *     // => 'FRED'
     *
     * @method upperFirst
     * @param {String} The string to convert
     * @return {String} The converted string
     * @since 3.0.0
     */
    _.upperFirst = function(string) {
        // Return the string with the first character in upper case
        return string && (string.substr(0, 1).toUpperCase() + string.substr(1));
    };

    /**
     * Creates an array excluding all given values using SameValueZero for equality comparisons.
     *
     * @example
     *
     *     EJSC._.without([2, 1, 2, 3], 1, 2);
     *     // => [3]
     *
     * @method without
     * @param {Array} array The array to inspect
     * @param {Variable} [...values] The values to exclude
     * @return {Array} The new array of filtered values
     * @since 3.0.0
     */
    _.without = function(array) {
        // Define some variables
        var results = [];
        var removes = _.slice(arguments, 1);

        // Loop through the items
        _.forEach(array, function(value) {
            // If the current item does not need to be removed, push it onto the results array
            if (!_.includes(removes, value)) {
                results.push(value);
            }
        });

        // Return the results array
        return results;
    };

    // Return the class
    return _;
}());
