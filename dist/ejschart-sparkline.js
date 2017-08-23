/*!
 * Emprise JavaScript Charts v3.0.0 http://www.ejschart.com/
 * Copyright (C) 2006-2018 Emprise Corporation. All Rights Reserved.
 *
 * WARNING: This software program is protected by copyright law
 * and international treaties. Unauthorized reproduction or
 * distribution of this program, or any portion of it, may result
 * in severe civil and criminal penalties, and will be prosecuted
 * to the maximum extent possible under the law.
 *
 * See http://www.ejschart.com/license.html for full license.
!*/
(function() {
/**
 * Houses all of the code for the EJSChart project.
 *
 * @module EJSC
 * @since 3.0.0
 */
window.EJSC = (window.EJSC || new function() {
    /**
     * Holds the callback functions to run when the window loads.
     *
     * @property {Array} prepared
     * @private
     * @default []
     * @since 3.0.0
     */
    this.prepared = [];

    /**
     * Prepares a callback function to be called when the window loads.
     *
     * @method prepare
     * @param {Function} callback The callback function
     * @since 3.0.0
     */
    this.prepare = function(callback) {
        // Add the callback function to the list
        this.prepared.push(callback);
    };

    /**
     * Initializes the EJSC namespace.
     *
     * @method __construct
     * @private
     * @since 3.0.0
     */
    this.__construct = function() {
        // Attach the load method to the page load event
        if (window.attachEvent) {
            window.attachEvent('onload', this.load.bind(this));
        }
        else {
            window.addEventListener('load', this.load.bind(this), true);
        }
    };

    /**
     * Runs all of the prepared callback functions when the page loads.
     *
     * @method load
     * @private
     * @since 3.0.0
     */
    this.load = function() {
        // Run all of the prepared callback functions
        this._.forEach(this.prepared, function(callback) {
            callback.call(this);
        }, this);
    };

    // Initialize the module
    this.__construct();
}());

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

/**
 * Emulates parts of jQuery for use in the EJSChart project.
 *
 * Based off of the jQuery project.
 * https://jquery.com/
 * License: MIT
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC.$
 * @private
 * @param {String} selector The CSS selector
 * @since 3.0.0
 */
EJSC.$ = (window.$ || new function() {
    // Constructor
    var $ = function(selector) {
        // Return the list of elements that match the selector
        return $.fn.find.call({
            elements: [document]
        }, selector);
    };

    // TODO:
    $.fix = function(matches) {
        // Attach the methods to the list
        EJSC._.forEach($.fn, function(callback, name) {
            matches[name] = callback.bind({
                elements: matches
            });
        });
    };

    // TODO:
    $.query = function(element, selector) {
        // Declare some variables
        var matches = [];

        if (element.querySelectorAll) {
            // Use the built in querySelectorAll method
            matches = EJSC._.slice(element.querySelectorAll(selector));
        }
        else {
            var selectors = selector.split(',');
            var stylesheet = document.createStyleSheet();
            var elements = this.getElementsByTagName('*') || document.all;
            var i;

            // Add each of the selectors to the stylesheet
            for (i = selectors.length; i--;) {
                stylesheet.addRule(selectors[i], 'k:v');
            }

            // Loop through the elements and add any that match the current selector to the list
            for (i = elements.length; i--;) {
                if (elements[i].currentStyle.k) {
                    matches.push(elements[i]);
                }
            }

            // Remove all of the rules from the stylesheet
            for (i = selectors.length; i--;) {
                stylesheet.removeRule(0);
            }
        }

        // Return the list of elements that match the selector
        return matches;
    };

    // TODO:
    $.fn = {
        // TODO:
        find: function(selector) {
            var matches = [];

            // Build the list of matching elements
            if (selector.nodeType /* TODO: === 1*/) {
                matches = [selector];
            }
            else {
                EJSC._.forEach(this.elements, function(element) {
                    matches = matches.concat($.query(element, selector));
                });
            }

            // Attach the methods to the list
            $.fix(matches);

            // Return the list of elements that match the selector
            return matches;
        },

        // TODO:
        on: function(events, callback) {
            EJSC._.forEach(this.elements, function(element) {
                // Define some local variables
                var hasAttachEvent = element.attachEvent;
                var method = (hasAttachEvent ? 'attachEvent' : 'addEventListener');

                // Loop through the events
                EJSC._.forEach((events instanceof Array ? events : [events]), function(event) {
                    // Attach the listener to the event
                    element[method]((hasAttachEvent ? 'on' : '') + event, callback.bind(event), true);
                });
            });
        }
    };

    // Return the class
    return $;
}());

EJSC.math = {
    degreesToRadians: function(degrees) {
        return degrees / 180 * Math.PI;
    },

    distance: function(point1, point2) {
        return Math.sqrt(
            Math.pow(Math.abs(point2[0] - point1[0]), 2) +
            Math.pow(Math.abs(point2[1] - point1[1]), 2)
        );
    },

    radiansToDegrees: function(radians) {
        return radians / Math.PI * 180;
    }
};

/**
 * Includes functionality to extend one class to another.
 *
 * Based off of John Resig's Simple Javascript Inheritance
 * http://johnresig.com/blog/simple-javascript-inheritance/
 * License: MIT
 *
 * @class EJSC.Class
 * @private
 * @static
 * @since 3.0.0
 */
EJSC.Class = (function() {
    // Create a blank class to start with
    var BaseClass = function() {
        // Blank
    };

    // Declare an initializing variable
    var initializing = false;

    /**
     * Extends this class to create a new class.
     *
     * @method extend
     * @static
     * @param {Object} options The new options to apply to the class' prototype
     * @return {Class} The new class
     * @since 3.0.0
     */
    BaseClass.extend = function(uses, options) {
        // TODO:
        if (EJSC._.isArray(uses) === false) {
            options = uses;
            uses = [];
        }

        // Grab a reference to the superclass
        var superclass = this.prototype;

        // Declare how functions are redefined(to include this._super)
        var supersize = function(name, method) {
            // Return the function wrapper including the this._super object
            return function() {
                // Store the old this._super
                var oldSuper = this._super;

                // Set the new this._super
                this._super = superclass[name];

                // Call the method and store the response
                var response = method.apply(this, arguments);

                // Reset the old _super
                this._super = oldSuper;

                // Return the response
                return response;
            };
        };

        // Set initializing to true
        initializing = true;

        // Grab the prototype
        var prototype = new this();

        // Reset initializing to false
        initializing = false;

        if (uses.length > 0) {
            EJSC._.forEach(uses, function(use) {
                EJSC._.forEach(use, function(value, name) {
                    prototype[name] = ((EJSC._.isFunction(value) && EJSC._.isFunction(superclass[name])) ? supersize(name, value) : value);
                });
            });
        }

        // Copy the options to the new class
        EJSC._.forEach(options, function(value, name) {
            prototype[name] = ((EJSC._.isFunction(value) && EJSC._.isFunction(superclass[name])) ? supersize(name, value) : value);
        });

        // Define the new class' constructor
        var Class = function() {
            // Only run if we're not initalizing
            if (!initializing) {
                // Fix the links to arrays and objects
                EJSC._.forEach(this, function(value, name, collection) {
                    if (EJSC._.isArray(value)) {
                        EJSC._.merge(collection[name] = [], prototype[name]);
                    }
                    else if (EJSC._.isPlainObject(value)) {
                        EJSC._.merge(collection[name] = {}, prototype[name]);
                    }
                });

                // Construct the class
                this.__construct.apply(this, arguments);
            }
        };

        // Populate the new class
        Class.prototype = prototype;

        // Fix the link to the constructor in the new class
        Class.prototype.constructor = Class;

        // Make the new class extendable
        Class.extend = BaseClass.extend;

        // Return the new class
        return Class;
    };

    /**
     * Consstructs the class.
     *
     * @method __construct
     * @private
     * @since 3.0.0
     */
    BaseClass.prototype.__construct = function() {
        // Placeholder
    };

    /**
     * Applies new options to the class.
     *
     * @method copyOptions
     * @private
     * @param {Object} options The new options to apply
     * @since 3.0.0
     */
    BaseClass.prototype.copyOptions = function(options) {
        // Grab a reference to this
        var cls = this;

        // Loop through each of the options
        EJSC._.forEach(options, function(value, name) {
            // Grab the setter
            var setter = cls['set' + EJSC._.upperFirst(name)];

            // Use the setter if defined
            if (setter) {
                // Call the setter
                setter.call(cls, value, false);
            }

            // Otherwise use merge
            else {
                // Build a new object with just this option
                var option = {};
                option[name] = value;

                // Merge the object into the class
                EJSC._.merge(cls, option);
            }
        });
    };

    // Return the class
    return BaseClass;
}());

/**
 * Creates an observable event.
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC.Observable
 * @extends EJSC.Class
 * @constructor
 * @since 3.0.0
 */
EJSC.Observable = EJSC.Class.extend({
    /**
     * Holds the list of subscriptions.
     *
     * @property {Array} subscriptions
     * @private
     * @default []
     * @since 3.0.0
     */
    subscriptions: [],

    /**
     * Tells all subscriptions that the event has occured.
     *
     * @example
     *
     *     // TODO:
     *
     * @method publish
     * @since 3.0.0
     */
    publish: function() {
        // Grab the incoming arguments
        var args = EJSC._.slice(arguments);

        // Run each callback that is still attached
        EJSC._.forEach(this.getSubscriptions(), function(subscription) {
            subscription.apply(null, args);
        });
    },

    /**
     * Adds a callback to the list of subscriptions.
     *
     * @example
     *
     *     // TODO:
     *
     * @method subscribe
     * @param {Function} callback The function to call when the event fires
     * @return {Function} The callback function
     * @since 3.0.0
     */
    subscribe: function(callback) {
        // Add the callback to the list
        this.subscriptions.push(callback);

        // Attach the unsubscribe method to the callback
        callback.unsubscribe = this.unsubscribe.bind(this, callback);

        // Return the callback
        return callback;
    },

    /**
     * Unsubscribes a subscription's callback function.
     *
     * @example
     *
     *     // TODO:
     *
     * @method unsubscribe
     * @param {Function} callback The subscription's callback function
     * @since 3.0.0
     */
    unsubscribe: function(callback) {
        EJSC._.forEach(this.subscriptions, function(subscription, index, subscriptions) {
            if (subscription === callback) {
                delete subscriptions[index];
            }
        });
    },

    getSubscriptions: function() {
        // Return the compacted list of subscriptions
        return EJSC._.compact(this.subscriptions);
    }
});

/**
 * Holds the common code for all rendering engine for EJSCharts.
 *
 * @class EJSC.Drawing
 * @extends EJSC.Class
 * @constructor
 * @private
 * @since 3.0.0
 */
EJSC.Drawing = EJSC.Class.extend({
    /**
     * Defines the container element to render the chart in.
     *
     * @example
     *
     *     // Create a chart sending in the id of the container
     *     var chart = new EJSC.sparkline.Chart('chart-container');
     *
     *     // Create a chart sending in a reference to the container's element
     *     var chart = new EJSC.sparkline.Chart(document.getElementById('chart-container'));
     *
     * @attribute {DOMElement|String} container
     * @default null
     * @required
     * @since 3.0.0
     */
    container: null,

    // Getter
    getContainer: function() {
        return this.container;
    },

    // Setter
    setContainer: function(container, apply) {
        // Save the new container
        this.container = (EJSC._.isString(container) ? document.getElementById(container) : container);

        // Move the engine's element into the container
        if (EJSC._.has(this, 'engine.element')) {
            this.container.appendChild(this.engine.element);
        }

        // Run any update methods if needed
        if (apply !== false) {
            this.resize();
        }
    },

    /**
     * Holds a pointer to the rendering engine.
     *
     * @property {EJSC.Engine} engine
     * @private
     * @since 3.0.0
     */
    engine: null,

    /**
     * Holds the coordinates of the last point.
     *
     * @property {Array} lastPoint
     * @private
     * @since 3.0.0
     */
    lastPoint: [null, null],

    /**
     * Holds the coordinates of the last control point.
     *
     * @property {Array} lastControlPoint
     * @private
     * @since 3.0.0
     */
    lastControlPoint: [null, null],

    /**
     * Holds the list of actions for the current path.
     *
     * @property {Array} path
     * @private
     * @since 3.0.0
     */
    path: [],

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @chainable
     * @since 3.0.0
     */
    arc: function(cx, cy, radius, startAngle, endAngle, counterClockwise) {
        // Append to current path
        this.engine.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);

        // Build needed variables
        var lastX = cx + (radius * Math.cos(endAngle));
        var lastY = cy + (radius * Math.sin(endAngle));

        // Update last points
        this.lastPoint = [lastX, lastY];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @chainable
     * @since 3.0.0
     */
    arcTo: function(cpx, cpy, x, y, radius) {
        // Append to current path
        this.engine.arcTo(cpx, cpy, x, y, radius);

        // Grab last points
        var lastX = this.lastPoint[0];
        var lastY = this.lastPoint[1];

        // Find the angle of each section
        var firstAngle = (Math.PI / 2) - Math.atan2((cpy - lastY), (cpx - lastX));
        var secondAngle = (Math.PI / 2) - Math.atan2((cpy - y), (cpx - x));
        var centerAngle = (firstAngle + secondAngle) / 2;

        // Find the length of the triangle's hypotenuse
        var hypotenuse = radius / Math.sin(0 - Math.abs(centerAngle - firstAngle));
        var adjacent = Math.sqrt((hypotenuse * hypotenuse) - (radius * radius));

        // Get the cross coordinates for the circle's points
        lastX = cpx - (Math.sin(secondAngle) * adjacent);
        lastY = cpy - (Math.cos(secondAngle) * adjacent);

        // Update last point
        this.lastPoint = [lastX, lastY];
        this.lastControlPoint = [cpx, cpy];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @chainable
     * @since 3.0.0
     */
    beginClip: function(left, top, width, height) {
        // Call the engine's beginClip method
        this.engine.beginClip(left, top, width, height);

        // Return the drawing for chainability
        return this;
    },

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @chainable
     * @since 3.0.0
     */
    beginPath: function() {
        // Call engine's method
        this.engine.beginPath();

        // Clear old variables
        this.lastPoint = [null, null];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */
    bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y) {
        // Append to current path
        this.engine.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [cp2x, cp2y];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply to the circle
     * @chainable
     * @since 3.0.0
     */
    circle: function(cx, cy, radius, styles) {
        // Call the engine's circle method
        this.engine.circle(cx, cy, radius, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Clears the canvas.
     *
     * @method clear
     * @chainable
     * @since 3.0.0
     */
    clear: function() {
        // Call engine's method
        this.engine.clear();

        // Return the drawing for chainability
        return this;
    },

    /**
     * Closes the current path.
     *
     * @method clear
     * @chainable
     * @since 3.0.0
     */
    closePath: function() {
        // Append to current path
        this.engine.closePath();

        // Return the drawing for chainability
        return this;
    },

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply to the fill
     * @chainable
     * @since 3.0.0
     */
    draw: function(styles) {
        // Call the engine's draw method
        this.engine.draw(EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The set of attributes to apply to the ellipse
     * @chainable
     * @since 3.0.0
     */
    ellipse: function(cx, cy, rx, ry, styles) {
        // Call the engine's ellipse method
        this.engine.ellipse(cx, cy, rx, ry, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @chainable
     * @since 3.0.0
     */
    endClip: function() {
        // Call the engine's endClip method
        this.engine.endClip();

        // Return the drawing for chainability
        return this;
    },

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply to the fill
     * @chainable
     * @since 3.0.0
     */
    fill: function(styles) {
        // Call the engine's fill method
        this.engine.fill(EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @chainable
     * @since 3.0.0
     */
    horizontalTo: function(x) {
        // Append to current path
        this.engine.horizontalTo(x);

        // Update last points
        this.lastPoint[0] = x;
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} attributes The set of attributes to apply to the line
     * @chainable
     * @since 3.0.0
     */
    line: function(x1, y1, x2, y2, styles) {
        // Call the engine's line method
        this.engine.line(x1, y1, x2, y2, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @chainable
     * @since 3.0.0
     */
    lineTo: function(x, y) {
        // Append to current path
        this.engine.lineTo(x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @return {Number} The width of the text
     * @since 3.0.0
     */
    measureText: function(text, styles) {
        // Call the engine's measureText method
        return this.engine.measureText(text, EJSC._.merge({}, EJSC.Engine.defaults, styles));
    },

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @chainable
     * @since 3.0.0
     */
    moveTo: function(x, y) {
        // Append to current path
        this.engine.moveTo(x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */
    quadraticCurveTo: function(cpx, cpy, x, y) {
        // Append to current path
        this.engine.quadraticCurveTo(cpx, cpy, x, y);

        // Update last points
        this.lastPoint = [x, y];
        this.lastControlPoint = [cpx, cpy];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply to the rectangle
     * @chainable
     * @since 3.0.0
     */
    rect: function(x, y, width, height, styles) {
        // Call the engine's rect method
        this.engine.rect(x, y, width, height, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} [width] The new width for the canvas
     * @param {Integer} [height] The new height for the canvas
     * @since 3.0.0
     */
    resize: function(width, height) {
        // Resize the drawing engine
        this.engine.resize(width || this.container.clientWidth, height || this.container.clientHeight);

        // Redraw the drawing
        this.draw();
    },

    /**
     * Draws a bezier curve stemming from a control point from a previous bezier curve.
     *
     * @method smoothBezierCurveTo
     * @param {Number} cpx The x coordinate of the next control point
     * @param {Number} cpy The y coordinate of the next control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */
    smoothBezierCurveTo: function(cpx, cpy, x, y) {
        // Build needed variables
        var cp1x = (EJSC._.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
        var cp1y = (EJSC._.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

        // Call internal method
        if (EJSC._.isNull(cp1x) || EJSC._.isNull(cp1y)) {
            this.quadraticCurveTo(cpx, cpy, x, y);
        }
        else {
            this.bezierCurveTo(cp1x, cp1y, cpx, cpy, x, y);
        }

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a quadratic curve stemming from a control point from a previous quadratic curve.
     *
     * @method smoothQuadraticCurveTo
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @chainable
     * @since 3.0.0
     */
    smoothQuadraticCurveTo: function(x, y) {
        // Build needed variables
        var cpx = (EJSC._.isNull(this.lastControlPoint[0]) ? null : ((2 * this.lastPoint[0]) - this.lastControlPoint[0]));
        var cpy = (EJSC._.isNull(this.lastControlPoint[1]) ? null : ((2 * this.lastPoint[1]) - this.lastControlPoint[1]));

        // Call internal method
        if (EJSC._.isNull(cpx) || EJSC._.isNull(cpy)) {
            this.lineTo(x, y);
        }
        else {
            this.quadraticCurveTo(cpx, cpy, x, y);
        }

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} attributes The set of attributes to apply to the stroke
     * @chainable
     * @since 3.0.0
     */
    stroke: function(styles) {
        // Call the engine's stroke method
        this.engine.stroke(EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply to the text
     * @chainable
     * @since 3.0.0
     */
    text: function(text, x, y, styles) {
        // Call the engine's text method
        this.engine.text(text, x, y, EJSC._.merge({}, EJSC.Engine.defaults, styles));

        // Return the drawing for chainability
        return this;
    },

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @chainable
     * @since 3.0.0
     */
    verticalTo: function(y) {
        // Append to current path
        this.engine.verticalTo(y);

        // Update last points
        this.lastPoint[1] = y;
        this.lastControlPoint = [null, null];

        // Return the drawing for chainability
        return this;
    },

    /**
     * Consstructs the class.
     *
     * @method __construct
     * @private
     * @param {DOMElement|String} The container element or id
     * @param {Object} options The config options
     * @since 3.0.0
     */
    __construct: function(container, options) {
        // Update the options object with the required properties
        options = EJSC._.merge(options, {
            container: container
        });

        // Merge in the options
        this.copyOptions(options);

        // Select the rendering engine
        this.selectEngine();

        // Resize the drawing
        this.resize();
    },

    /**
     * Selects the engine to use for the drawing.
     *
     * @method selectEngine
     * @private
     * @since 3.0.0
     */
    selectEngine: function() {
        // Find and seect the first supported engine
        if (EJSC._.isNil(this.engine)) {
            this.engine = new (EJSC._.find(EJSC.Drawing.engines, function(engine) {
                return engine.isSupported();
            }))();
        }

        // Link the engine back to the drawing
        this.engine.link(this);
    }
});

/**
 * TODO:
 *
 * @property {Object} defaults
 * @static
 * @protected
 * @since 3.0.0
 */
EJSC.Drawing.defaults = {
    fillStyle: 'rgba(0, 0, 0)',
    font: '10px Verdana',
    lineCap: 'butt', // butt, round, square
    lineDash: [],
    lineJoin: 'miter', // miter, round, bevel
    strokeStyle: 'rgb(0, 0, 0)',
    strokeOpacity: 1,
    textAlign: 'left', // left, right, center[, start, end]
    textBaseline: 'middle', // top, middle, bottom[, alphabetic, hanging, ideographic]
    textRotation: 0
};

/**
 * Holds the list of available drawing engines.
 *
 * @property {Object} engines
 * @static
 * @private
 * @since 3.0.0
 */
EJSC.Drawing.engines = {};

/**
 * Adds a new drawing engine to the list of available engines.
 *
 * @method choose
 * @static
 * @private
 * @param {String} name Then engine name
 * @param {EJSC.Engine} engine The drawing engine
 * @since 3.0.0
 */
EJSC.Drawing.register = function(name, engine) {
    // Add the new engine to the list
    EJSC.Drawing.engines[name] = engine;
};

/**
 * Defines the abstract class for rendering engines for EJSCharts.
 *
 * @class EJSC.Engine
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
EJSC.Engine = EJSC.Class.extend({
    /**
     * The owner drawing.
     *
     * @property {EJSC.Drawing} drawing
     * @private
     * @default null
     * @since 3.0.0
     */
    drawing: null,

    /**
     * Holds a pointer to the engine's dom element.
     *
     * @property {DOMElement} element
     * @private
     * @default null
     * @since 3.0.0
     */
    element: null,

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    arc: function(/* cx, cy, radius, startAngle, endAngle, counterClockwise */) {
        // Placeholder
    },

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */
    arcTo: function(/* cpx, cpy, x, y, radius */) {
        // Placeholder
    },

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */
    beginClip: function(/* left, top, width, height */) {
        // Placeholder
    },

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */
    beginPath: function() {
        // Placeholder
    },

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */
    bezierCurveTo: function(/* cp1x, cp1y, cp2x, cp2y, x, y */) {
        // Placeholder
    },

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} cx The x coordinate for the center of the circle
     * @param {Number} cy The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    circle: function(/* cx, cy, radius, styles */) {
        // Placeholder
    },

    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */
    clear: function() {
        // Placeholder
    },

    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */
    closePath: function() {
        // Placeholder
    },

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    draw: function(/* styles */) {
        // Placeholder
    },

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    ellipse: function(/* cx, cy, rx, ry, styles */) {
        // Placeholder
    },

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */
    endClip: function() {
        // Placeholder
    },

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    fill: function(/* styles */) {
        // Placeholder
    },

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */
    horizontalTo: function(/* x */) {
        // Placeholder
    },

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    line: function(/* x1, y1, x2, y2, styles */) {
        // Placeholder
    },

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    lineTo: function(/* x, y */) {
        // Placeholder
    },

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    measureText: function(/* text, styles */) {
        // Placeholder
    },

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */
    moveTo: function(/* x, y */) {
        // Placeholder
    },

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */
    quadraticCurveTo: function(/* cpx, cpy, x, y */) {
        // Placeholder
    },

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    rect: function(/* x, y, width, height, styles */) {
        // Placeholder
    },

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */
    resize: function(/* width, height */) {
        // Placeholder
    },

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    stroke: function(/* styles */) {
        // Placeholder
    },

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    text: function(/* text, x, y, styles */) {
        // Placeholder
    },

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    verticalTo: function(/* y */) {
        // Placeholder
    },

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Array} path The path to draw
     * @since 3.0.0
     */
    drawPath: function(/* path */) {
        // Placeholder
    },

    link: function(drawing) {
        // Link back to the drawing
        this.drawing = drawing;
    },

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @return {Object}
     * @since 3.0.0
     */
    stylize: function(/* styles */) {
        // Placeholder
    }
});

/**
 * Defines the CANVAS rendering engine for EJSCharts.
 *
 * @class EJSC.Canvas
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
EJSC.Canvas = EJSC.Engine.extend({
    /**
     * Holds a pointer to the drawing context for the canvas.
     *
     * @property {CanvasRenderingContext2D} ctx
     * @private
     * @default null
     * @since 3.0.0
     */
    ctx: null,

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    arc: function(cx, cy, radius, startAngle, endAngle, counterClockwise) {
        // Call the canvas' arc method
        this.ctx.arc(cx, cy, radius, startAngle, endAngle, counterClockwise);
    },

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */
    arcTo: function(cpx, cpy, x, y, radius) {
        // Call the canvas' arcTo method
        this.ctx.arcTo(cpx, cpy, x, y, radius);
    },

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */
    beginClip: function(left, top, width, height) {
        // Set the new clip area
        this.ctx.save();
        this.ctx.rect(left, top, width, height);
        this.ctx.clip();
    },

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */
    beginPath: function() {
        // Call the canvas' clearPath method
        this.ctx.beginPath();
    },

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */
    bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y) {
        // Call the canvas' bezierCurveTo method
        this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    },

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    circle: function(x, y, radius, styles) {
        // Apply the given styles
        this.stylize(styles);

        // Draw the circle
        this.ctx.beginPath();
        this.ctx.arc(x + 0.5, y + 0.5, radius, 0, 2 * Math.PI, false);

        // Fill the path
        this.ctx.fill();

        // Stroke the path if needed
        if (styles.strokeStyle !== 'none') {
            this.ctx.stroke();
        }

        // Reset the styles
        this.unstylize();
    },

    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */
    clear: function() {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.element.offsetWidth, this.element.offsetWidth);
    },

    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */
    closePath: function() {
        // Call the canvas' closePath method
        this.ctx.closePath();
    },

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    draw: function(styles) {
        // Apply the given styles
        this.stylize(styles);

        // Fill the path
        this.ctx.fill();

        // Stroke the path if needed
        if (styles.strokeStyle !== 'none') {
            this.ctx.stroke();
        }

        // Reset the styles
        this.unstylize();
    },

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    ellipse: function(cx, cy, rx, ry, styles) {
        // Apply the given styles
        this.stylize(styles);

        // Update the y radius to match SVG/VML
        var yr = ry * (4 / 3);

        // Draw the ellipse
        this.ctx.beginPath();
        this.ctx.moveTo(cx - rx, cy);
        this.ctx.bezierCurveTo(cx - rx, cy - yr, cx + rx, cy - yr, cx + rx, cy);
        this.ctx.bezierCurveTo(cx + rx, cy + yr, cx - rx, cy + yr, cx - rx, cy);
        this.ctx.closePath();

        // Fill the path
        this.ctx.fill();

        // Stroke the path if needed
        if (styles.strokeStyle !== 'none') {
            this.ctx.stroke();
        }

        // Reset the styles
        this.unstylize();
    },

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */
    endClip: function() {
        // Clear the current clip area
        this.ctx.restore();
    },

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    fill: function(styles) {
        // Apply the given styles
        this.stylize(styles);

        // Fill in the path
        this.ctx.fill();

        // Reset the styles
        this.unstylize();
    },

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */
    horizontalTo: function(x) {
        // Declare local variables
        var y;

        // Define needed points
        y = this.drawing.lastPoint[1];

        // Call the internal lineTo method
        this.lineTo(x, y);
    },

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    line: function(x1, y1, x2, y2, styles) {
        // Apply the given styles
        this.stylize(styles);

        // Draw the line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);

        // Stroke the path if needed
        if (styles.strokeStyle !== 'none') {
            this.ctx.stroke();
        }

        // Reset the styles
        this.unstylize();
    },

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    lineTo: function(x, y) {
        // Call the canvas' lineTo method
        this.ctx.lineTo(x, y);
    },

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    measureText: function(text, styles) {
        // Apply the given styles
        this.stylize(styles);

        // Calculate the measurement
        var measurement = this.ctx.measureText(text);

        // Reset the styles
        this.unstylize();

        // Return the measurement
        return measurement;
    },

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */
    moveTo: function(x, y) {
        // Call the canvas' moveTo method
        this.ctx.moveTo(x, y);
    },

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */
    quadraticCurveTo: function(cpx, cpy, x, y) {
        // Call the canvas' bezierCurveTo method
        this.ctx.quadraticCurveTo(cpx, cpy, x, y);
    },

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    rect: function(x, y, width, height, styles) {
        // Apply the given styles
        this.stylize(styles);

        // Build the rectangle
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);

        // Fill the path
        this.ctx.fill();

        // Stroke the path if needed
        if (styles.strokeStyle !== 'none') {
            this.ctx.stroke();
        }

        // Reset the styles
        this.unstylize();
    },

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */
    resize: function(width, height) {
        // Resize the canvas
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);
    },

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    stroke: function(styles) {
        // Apply the given styles
        this.stylize(styles);

        // Stroke the path if needed
        if (styles.strokeStyle !== 'none') {
            this.ctx.stroke();
        }

        // Reset the styles
        this.unstylize();
    },

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    text: function(text, x, y, styles) {
        // Apply the given styles
        this.stylize(styles);

        // Draw the text
        if (styles.textRotation) {
            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate(styles.textRotation * (Math.PI / 180));
            this.ctx.fillText(text, 0, 0);
            this.ctx.restore();
        }
        else {
            this.ctx.fillText(text, x, y);
        }
    },

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    verticalTo: function(y) {
        // Call the internal lineTo method
        this.lineTo(this.drawing.lastPoint[0], y);
    },

    /**
     * Consstructs the class.
     *
     * @method __construct
     * @private
     * @since 3.0.0
     */
    __construct: function() {
        // Create the CANVAS element
        this.element = document.createElement('CANVAS');

        // Grab the 2D drawing context
        this.ctx = this.element.getContext('2d');
    },

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Array} path The path to draw
     * @since 3.0.0
     */
    drawPath: function(path) {
        // Run path methods
        for (var i = 0; i < path.length; i++) {
            this[path[i][0]].apply(this, path[i][1]);
        }
    },

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    stylize: function(styles) {
        // Apply the default and user styles to the context
        EJSC._.merge(this.ctx, EJSC.Drawing.defaults, styles);

        // Set the line dash
        this.ctx.setLineDash((styles || {}).lineDash || []);
    },

    /**
     * Applies the default styles to the drawing context.
     *
     * @method unstylize
     * @private
     * @since 3.0.0
     */
    unstylize: function() {
        // Apply the default styles to the context
        EJSC._.merge(this.ctx, EJSC.Drawing.defaults);

        // Clear the line dash
        this.ctx.setLineDash([]);
    }
});

/**
 * Determines if the browser supports CANVAS.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports CANVAS
 * @since 3.0.0
 */
EJSC.Canvas.isSupported = function() {
    // Create a CANVAS element
    var elem = document.createElement('canvas');

    // Return if the element supports Canvas
    return elem.getContext && elem.getContext('2d');
};

// Register the engine
EJSC.Drawing.register('Canvas', EJSC.Canvas);

/**
 * Defines the SVG rendering engine for EJSCharts.
 *
 * @class EJSC.SVG
 * @constructor
 * @private
 * @extends EJSC.Engine
 * @since 3.0.0
 */
EJSC.SVG = EJSC.Engine.extend({
    /**
     * Holds a pointer to the engine's background dom element.
     *
     * @property {DOM.Element} background.
     * @private
     * @default null
     * @since 3.0.0
     */
    background: null,

    /**
     * Holds a current clip id.
     *
     * @property {String} clipId
     * @private
     * @default null
     * @since 3.0.0
     */
    clipId: null,

    /**
     * Holds the current clip index.
     *
     * @property {Integer} clipIndex
     * @private
     * @default null
     * @since 3.0.0
     */
    clipIndex: 0,

    /**
     * Holds a pointer to the engine's definitions dom element.
     *
     * @property {DOM.Element} definitions
     * @private
     * @default null
     * @since 3.0.0
     */
    definitions: null,

    /**
     * Holds the current drawing path.
     *
     * @property {Array} path
     * @private
     * @default []
     * @since 3.0.0
     */
    path: [],

    /**
     * Draws an arc at a point.
     *
     * @method arc
     * @param {Number} cx The x coordinate of the center
     * @param {Number} cy The y coordinate of the center
     * @param {Number} radius The radius of the arc
     * @param {Number} startAngle The start angle (in radians)
     * @param {Number} endAngle The end angle (in radians)
     * @param {Boolean} counterClockwise Whether to draw this counter-clockwise
     * @since 3.0.0
     */
    arc: function(cx, cy, radius, startAngle, endAngle, counterClockwise) {
        // Define needed points
        var x1 = cx + (radius * Math.cos(startAngle));
        var y1 = cy + (radius * Math.sin(startAngle));
        var x2 = cx + (radius * Math.cos(endAngle));
        var y2 = cy + (radius * Math.sin(endAngle));

        // Determine the direction from the angles
        var direction = (startAngle < endAngle ? 0 : 1);

        // Define the arc flags
        var largeArc = (counterClockwise ? 1 - direction : direction);
        var sweep = (counterClockwise ? 0 : 1);

        // Move to starting point
        this.path.push((EJSC._.isNull(this.drawing.lastPoint[0]) ? 'M' : 'L') + ' ' + x1 + ',' + y1);

        // Append to path object
        this.path.push('A ' + radius + ',' + radius + ' ' + 0 + ' ' + largeArc + ' ' + sweep + ' ' + x2 + ',' + y2);
    },

    /**
     * Draws an arc stemming using a control point to an end point.
     *
     * @method arcTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The x coordinate of the end point
     * @param {Number} y The y coordinate of the end point
     * @param {Number} radius The radius of the arc
     * @since 3.0.0
     */
    arcTo: function(cpx, cpy, x, y, radius) {
        // Grab last points
        var x0 = this.drawing.lastPoint[0];
        var y0 = this.drawing.lastPoint[1];

        // Find the angle of each section
        var firstAngle = (Math.PI / 2) - Math.atan2((cpy - y0), (cpx - x0));
        var secondAngle = (Math.PI / 2) - Math.atan2((cpy - y), (cpx - x));
        var centerAngle = (firstAngle + secondAngle) / 2;

        // Find the length of the triangle's hypotenuse
        var hypotenuse = radius / Math.sin(-Math.abs(centerAngle - firstAngle));
        var adjacent = Math.sqrt((hypotenuse * hypotenuse) - (radius * radius));

        // Get the center coordinates for the circle
        var cx = cpx + (Math.sin(centerAngle) * hypotenuse);
        var cy = cpy + (Math.cos(centerAngle) * hypotenuse);

        // Get the cross coordinates for the circle's points
        var cx1 = cpx - (Math.sin(firstAngle) * adjacent);
        var cy1 = cpy - (Math.cos(firstAngle) * adjacent);
        var cx2 = cpx - (Math.sin(secondAngle) * adjacent);
        var cy2 = cpy - (Math.cos(secondAngle) * adjacent);

        // Build the new angles
        var startAngle = Math.atan2((cy1 - cy), (cx1 - cx));
        var endAngle = Math.atan2((cy2 - cy), (cx2 - cx));

        // Draw the connecting line
        this[(EJSC._.isNull(this.drawing.lastPoint[0]) ? 'moveTo' : 'lineTo')](cx1, cy1);

        // Draw the arc
        this.arc(cx, cy, radius, startAngle, endAngle, firstAngle > secondAngle);
    },

    /**
     * Begins clippig the given area.
     *
     * @method beginClip
     * @param {Number} left The left coordinate of the clip area
     * @param {Number} top The top coordinate of the clip area
     * @param {Number} width The width of the clip area
     * @param {Number} height The height of the clip area
     * @since 3.0.0
     */
    beginClip: function(x, y, width, height) {
        // Build the clip id
        var clipId = 'clip-' + (this.clipIndex++);

        // Create the clip definition
        var clipPath = this.definitions.appendChild(this.createElement('clipPath', {
            id: clipId
        }));

        // Append the clip area
        clipPath.appendChild(this.createElement('rect', {
            x: x,
            y: y,
            width: width,
            height: height
        }));

        // Store the clip id
        this.clipId = clipId;
    },

    /**
     * Begins a new path.
     *
     * @method beginPath
     * @since 3.0.0
     */
    beginPath: function() {
        // Reset the current path
        this.path = [];
    },

    /**
     * Draws a bezier curve.
     *
     * @method bezierCurveTo
     * @param {Number} cp1x The x coordinate of the first control point
     * @param {Number} cp1y The y coordinate of the first control point
     * @param {Number} cp2x The x coordinate of the second control point
     * @param {Number} cp2y The y coordinate of the second control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */
    bezierCurveTo: function(cp1x, cp1y, cp2x, cp2y, x, y) {
        // Append to path object
        this.path.push('C ' + cp1x + ',' + cp1y + ' ' + cp2x + ',' + cp2y + ' ' + x + ',' + y);
    },

    /**
     * Draws a circle on the canvas.
     *
     * @method circle
     * @param {Number} x The x coordinate for the center of the circle
     * @param {Number} y The y coordinate for the center of the circle
     * @param {Number} radius The radius (in px) of the circle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    circle: function(cx, cy, radius, styles) {
        // Create the circle element
        this.element.appendChild(this.createElement('circle', EJSC._.merge(this.stylize(styles), {
            cx: cx,
            cy: cy,
            r: radius
        })));
    },

    /**
     * Clears the canvas.
     *
     * @method clear
     * @since 3.0.0
     */
    clear: function() {
        // Clear out all of the elements (except for the definitions and background)
        while (this.element.childNodes.length > 2) {
            this.element.removeChild(this.element.lastChild);
        }

        // Clear out all of the definitions
        while (this.definitions.childNodes.length > 0) {
            this.definitions.removeChild(this.definitions.lastChild);
        }

        // Clear out the clip variables
        this.clipId = null;
        this.clipIndex = 0;
    },

    /**
     * Closes the current path.
     *
     * @method clear
     * @since 3.0.0
     */
    closePath: function() {
        // Append to path object
        this.path.push('Z');
    },

    /**
     * Fills and strokes the given path on the canvas.
     *
     * @method draw
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    draw: function(styles) {
        this.drawPath(this.stylize(styles));
    },

    /**
     * Draws a ellipse.
     *
     * @method ellipse
     * @param {Number} x The x coordinate to start the ellipse at
     * @param {Number} y The y coordinate to start the ellipse at
     * @param {Number} rx The x radius of the ellipse
     * @param {Number} ry The y radius of the ellipse
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    ellipse: function(cx, cy, rx, ry, styles) {
        // Create the ellipse element
        this.element.appendChild(this.createElement('ellipse', EJSC._.merge(this.stylize(styles), {
            cx: cx,
            cy: cy,
            rx: rx,
            ry: ry
        })));
    },

    /**
     * Ends the current clipping of the canvas' drawing area.
     *
     * @method endClip
     * @since 3.0.0
     */
    endClip: function() {
        // Clear the clip id
        this.clipId = null;
    },

    /**
     * Fills the given path on the canvas.
     *
     * @method fill
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    fill: function(styles) {
        this.drawPath(EJSC._.merge(this.stylize(styles), {
            strokeStyle: 'transparent'
        }));
    },

    /**
     * Draws a horizontal line to a new position.
     *
     * @method horizontalTo
     * @param {Number} x The x coordinate to draw to
     * @since 3.0.0
     */
    horizontalTo: function(x) {
        // Append to path object
        this.path.push('H ' + x);
    },

    /**
     * Draws a line between two points.
     *
     * @method line
     * @param {Number} x1 The x coordinate for the starting point
     * @param {Number} y1 The y coordinate for the starting point
     * @param {Number} x2 The x coordinate for the ending point
     * @param {Number} y2 The y coordinate for the ending point
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    line: function(x1, y1, x2, y2, styles) {
        // Create the line element
        this.element.appendChild(this.createElement('line', EJSC._.merge(this.stylize(styles), {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        })));
    },

    /**
     * Draws a line to a new position.
     *
     * @method lineTo
     * @param {Number} x The x coordinate to draw to
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    lineTo: function(x, y) {
        // Append to path object
        this.path.push('L ' + x + ',' + y);
    },

    /**
     * Measures the width of the given text.
     *
     * @method measureText
     * @param {String} text The text
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    measureText: function(text, styles) {
        // TODO:
        return [text, styles];
    },

    /**
     * Moves the pen to a new position.
     *
     * @method moveTo
     * @param {Number} x The x coordinate to move to
     * @param {Number} y The y coordinate to move to
     * @since 3.0.0
     */
    moveTo: function(x, y) {
        // Append to path object
        this.path.push('M ' + x + ',' + y);
    },

    /**
     * Draws a quadratic curve.
     *
     * @method quadraticCurveTo
     * @param {Number} cpx The x coordinate of the control point
     * @param {Number} cpy The y coordinate of the control point
     * @param {Number} x The end x coordinate of the curve
     * @param {Number} y The end y coordinate of the curve
     * @since 3.0.0
     */
    quadraticCurveTo: function(cpx, cpy, x, y) {
        // Append to path object
        this.path.push('Q ' + cpx + ',' + cpy + ' ' + x + ',' + y);
    },

    /**
     * Draws a rectanle on the canvas.
     *
     * @method rect
     * @param {Number} x The x coordinate to start at
     * @param {Number} y The y coordinate to start at
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    rect: function(x, y, width, height, styles) {
        // Create the rect element
        this.element.appendChild(this.createElement('rect', EJSC._.merge(this.stylize(styles), {
            x: x,
            y: y,
            width: width,
            height: height
        })));
    },

    /**
     * Resizes the canvas.
     *
     * @method resize
     * @param {Integer} width The new width for the canvas
     * @param {Integer} height The new height for the canvas
     * @since 3.0.0
     */
    resize: function(width, height) {
        // Set the width and height attributes of the main element
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);

        // Set the viewbox attribute of the main element
        this.element.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

        // Set the width and height attributes of the background element
        this.background.setAttribute('width', width);
        this.background.setAttribute('height', height);
    },

    /**
     * Draws a stroke along the current drawing path.
     *
     * @method stroke
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    stroke: function(styles) {
        // Stroke the path
        this.drawPath(EJSC._.merge(this.stylize(styles), {
            fillStyle: 'transparent'
        }));
    },

    /**
     * Draws text on the canvas.
     *
     * @method text
     * @param {String} text The text to draw on the canvas
     * @param {Number} x The x coordinate to draw the text at
     * @param {Number} y The y coordinate to draw the text at
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    text: function(text, x, y, styles) {
        // Build the correct styles object
        styles = EJSC._.merge({}, this.stylize(styles), {
            strokeStyle: 'none',
            x: x,
            y: y
        });

        // Create the text element
        var el = this.element.appendChild(this.createElement('text', styles));
        el.setAttribute('transform', 'rotate(' + styles.textRotation + ' ' + x + ' ' + y + ')');
        el.appendChild(document.createTextNode(text));
    },

    /**
     * Draws a vertical line to a new position.
     *
     * @method verticalTo
     * @param {Number} y The y coordinate to draw to
     * @since 3.0.0
     */
    verticalTo: function(y) {
        // Append to path object
        this.path.push('V ' + y);
    },

    /**
     * Consstructs the class.
     *
     * @method __construct
     * @private
     * @since 3.0.0
     */
    __construct: function() {
        // Create a document fragment to temporarily hold the DOM Elements
        var frag = document.createDocumentFragment();

        // Create the main element
        this.element = frag.appendChild(this.createElement('svg', {
            'xmlns': EJSC.SVG.xmlns,
            'version': '1.1'
        }));
        this.element.setAttributeNS(EJSC.SVG.xmlns, 'xmlns:xlink', EJSC.SVG.xlink);

        // Create the definitions element
        this.definitions = this.element.appendChild(this.createElement('defs'));

        // Create the background element
        this.background = this.element.appendChild(this.createElement('rect', {
            x: 0,
            y: 0,
            fill: 'transparent'
        }));

        // Create a global stylesheet (only once) to restrict user selection
        EJSC.SVG.buildStylesheet();
    },

    /**
     * Creates an SVG elemen.
     *
     * @method createElement
     * @param {String} tagName The type of element to create
     * @param {Object} attributes The attributes to add to the element
     * @return {DOM.Element}
     * @since 3.0.0
     */
    createElement: function(tagName, attributes) {
        // Create an element using the given tagName
        var el = document.createElementNS(EJSC.SVG.svgns, tagName);

        // Set the given attributes to the element
        for (var i in attributes) {
            // If this is direct css
            if (i === 'css') {
                el.style.cssText = attributes[i];
            }

            // If this is the font attribute, set it using CSS
            else if (i === 'font') {
                el.style.cssText = 'font: ' + attributes.font + ' !important;';
            }

            // If this is the text-align attribute
            else if (i === 'textAlign') {
                el.setAttribute('text-anchor', ({
                    'left': 'start',
                    'center': 'middle',
                    'right': 'end'
                })[attributes[i]]);
            }

            // If this is the rotate attribute, don't set it
            else if (i === 'textRotation') {
                // Do nothing
            }

            // If this is the text-baseline attribute, set it using custom attributes
            else if (i === 'textBaseline') {
                el.style.dominantBaseline = ({
                    'top': 'hanging',
                    'middle': 'middle',
                    'bottom': 'baseline'
                })[attributes[i]];
            }

            // If this is the same as the default attribute
            else if (attributes[i] === EJSC.Drawing.defaults[i] && i !== 'strokeStyle' && i !== 'fillStyle') {
                // Do nothing
            }

            // Set the attribute to the element
            else {
                el.setAttribute(EJSC.SVG.styles[i] || i, attributes[i]);
            }
        }

        if (this.clipId !== null) {
            el.setAttribute('clip-path', 'url(#' + this.clipId + ')');
        }

        // Return the element
        return el;
    },

    /**
     * Draws the given path.
     *
     * @method drawPath
     * @private
     * @param {Object} styles The styles to apply
     * @since 3.0.0
     */
    drawPath: function(styles) {
        // Create the path element
        this.element.appendChild(this.createElement('path', EJSC._.merge(this.stylize(styles), {
            d: this.path.join(' ')
        })));
    },

    /**
     * Applies the given styles to the drawing context.
     *
     * @method stylize
     * @private
     * @param {Object} styles The styles to apply
     * @return {Object}
     * @since 3.0.0
     */
    stylize: function(styles) {
        // Apply the default and user styles to the context
        return EJSC._.merge({}, EJSC.Drawing.defaults, styles);
    }
});

EJSC.SVG.css = 'svg { overflow: hidden; } svg, svg * { user-select: none; -moz-user-select: none; -webkit-user-select: none; }';

/**
 * Defines the style conversion names.
 *
 * @property {Object} styles
 * @private
 * @static
 * @since 3.0.0
 */
EJSC.SVG.styles = {
    fillStyle: 'fill',
    font: 'font',
    lineCap: 'stroke-linecap',
    lineDash: 'stroke-dasharray',
    lineJoin: 'stroke-linejoin',
    lineWidth: 'stroke-width',
    strokeStyle: 'stroke',
    textAlign: 'text-align',
    textBaseline: 'text-baseline',
    textRotation: 'text-rotation'
};

/**
 * Defines the stylesheet that holds the global SVG styles.
 *
 * @property {StyleSheet} stylesheet
 * @private
 * @static
 * @default null
 * @since 3.0.0
 */
EJSC.SVG.stylesheet = null;

/**
 * Defines the SVG namespace.
 *
 * @property {String} svgns
 * @private
 * @static
 * @default 'http://www.w3.org/2000/svg'
 * @since 3.0.0
 */
EJSC.SVG.svgns = 'http://www.w3.org/2000/svg';

/**
 * Defines the XML namespace.
 *
 * @property {String} xmlns
 * @private
 * @static
 * @default 'http://www.w3.org/2000/xmlns/'
 * @since 3.0.0
 */
EJSC.SVG.xmlns = 'http://www.w3.org/2000/xmlns/';

/**
 * Defines the Xlink namespace.
 *
 * @property {String} xlink
 * @private
 * @static
 * @default 'http://www.w3.org/2000/xlink'
 * @since 3.0.0
 */
EJSC.SVG.xlink = 'http://www.w3.org/1999/xlink';

/**
 * Builds the default SVG stylesheet.
 *
 * @method buildStylesheet
 * @private
 * @static
 * @since 3.0.0
 */
EJSC.SVG.buildStylesheet = function() {
    // Only run once
    if (EJSC._.isNull(EJSC.SVG.stylesheet)) {
        // Grab the page header
        var head = document.head || document.getElementsByTagName('head')[0];

        // Create the stylesheet
        var stylesheet = document.createElement('style');
        stylesheet.type = 'text/css';

        // Set the CSS
        if (stylesheet.styleSheet) {
            stylesheet.styleSheet.cssText = EJSC.SVG.css;
        }
        else {
            stylesheet.appendChild(document.createTextNode(EJSC.SVG.css));
        }

        // Append the styleshet to the page header
        head.appendChild(stylesheet);

        // Save the stylesheet
        EJSC.SVG.stylesheet = stylesheet;
    }
};

/**
 * Determines if the browser supports SVG.
 *
 * @method isSupported
 * @static
 * @private
 * @return {Boolean} If the browser supports SVG
 * @since 3.0.0
 */
EJSC.SVG.isSupported = function() {
    // Return if the element supports SVG
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
};

// Register the engine
EJSC.Drawing.register('SVG', EJSC.SVG);

/**
 * Defines a basic chart that can display a variety of series types on it.
 *
 * A container must be defined in the config options in order for the chart to be rendered to the page.
 *
 * @example
 *
 *     // Create a chart sending in the id of the container
 *     var chart = new EJSC.sparkline.Chart('chart-container');
 *
 *     // Create a chart sending in a reference to the container's element
 *     var chart = new EJSC.sparkline.Chart(document.getElementById('chart-container'));
 *
 * @class EJSC.sparkline.Chart
 * @extends EJSC.Drawing
 * @constructor
 * @param {DOMElement|String} container The container to render the chart in
 * @param {Object} [options] The config options to apply to the chart
 * @since 3.0.0
 */
EJSC.sparkline.Chart = EJSC.Drawing.extend({




    // TODO:
    background: 'rgba(0, 0, 0, 0)',

    // Getter
    getBackground: function() {
        // Return the current background
        return this.background;
    },

    // Setter
    setBackground: function(background, apply) {
        // Store the new background
        this.background = background;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the default colors to apply to new series.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC.sparkline.Chart('chart-container', {
     *         // Define the default colors as [red, green, blue]
     *         colors: ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)']
     *     });
     *
     * @attribute {Array} colors
     * @default [...]
     * @since 3.0.0
     */
    colors: [
        'rgb(150, 184, 211)',
        'rgb(205, 171, 66)',
        'rgb(139, 167, 55)',
        'rgb(204, 136, 92)',
        'rgb(59, 144, 144)',
        'rgb(181, 94, 94)',
        'rgb(144, 100, 144)',
        'rgb(109, 136, 79)',
        'rgb(197, 190, 104)',
        'rgb(59, 144, 187)',
        'rgb(140, 48, 51)',
        'rgb(151, 135, 169)',
        'rgb(191, 132, 72)',
        'rgb(206, 173, 136)',
        'rgb(159, 153, 57)',
        'rgb(209, 130, 139)',
        'rgb(205, 197, 51)',
        'rgb(55, 106, 155)',
        'rgb(203, 143, 71)',
        'rgb(178, 87, 56)',
        'rgb(53, 115, 53)',
        'rgb(120, 90, 59)'
    ],

    // Getter
    getColors: function() {
        // Return the current colors
        return this.colors;
    },

    // Setter
    setColors: function(colors, apply) {
        // Store the new colors
        this.colors = colors;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the title to display at the top of the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC.sparkline.Chart('chart-container', {
     *         // Define the title as 'My Chart'
     *         title: 'My Chart'
     *     });
     *
     * @attribute {String} title
     * @default 'Emprise JavaScript Charts'
     * @since 3.0.0
     */
    title: 'Emprise JavaScript Charts',

    // Getter
    getTitle: function() {
        // Return the current title
        return this.title;
    },

    // Setter
    setTitle: function(title, apply) {
        // Store the new title
        this.title = title;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },



    /**
     * Holds the list of series attached to the chart.
     *
     * @property {Array} series
     * @protected
     * @default []
     * @since 3.0.0
     */
    series: [],

    // Getter
    getSeries: function() {
        // Return the current series
        return this.series;
    },

    /**
     * Holds the list of axis property names.
     *
     * @property {Array} axisList
     * @private
     * @default ['axisBottom', 'axisLeft', 'axisRight', 'axisTop']
     * @since 3.0.0
     */
    axisList: ['axisBottom', 'axisLeft', 'axisRight', 'axisTop'],

    /**
     * Defines the next index to use to choose a color.
     *
     * @property {Integer} colorIndex
     * @private
     * @default 0
     * @since 3.0.0
     */
    colorIndex: 0,

    /**
     * Holds the coordinates that the chart can draw in.
     *
     * @property {Object} drawArea
     * @property {Integer} drawArea.bottom The bottom coordinate of the chart's draw area (Default: null)
     * @property {Integer} drawArea.left The left coordinate of the chart's draw area (Default: null)
     * @property {Integer} drawArea.right The right coordinate of the chart's draw area (Default: null)
     * @property {Integer} drawArea.top The top coordinate of the chart's draw area (Default: null)
     * @private
     * @since 3.0.0
     */
    drawArea: {
        bottom: null,
        left: null,
        right: null,
        top: null
    },

    /**
     * Holds the list of axis side names.
     *
     * @property {Array} sidesList
     * @private
     * @default ['bottom', 'left', 'righ', 'top']
     * @since 3.0.0
     */
    sidesList: ['bottom', 'left', 'right', 'top'],










    /**
     * Adds a new series to the chart.
     * Optionally (true by default) redraws the chart.
     *
     * **Note:** If you are adding multiple series at one time,
     * you may wish to not redraw the chart until all of
     * the series have been added to speed things up.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC.sparkline.Chart(document.getElementById('chart-container'));
     *
     *     // Add a scatter series to the chart
     *     var series1 = chart.addSeries(
     *         new EJSC.sparkline.ScatterSeries(...)
     *     );
     *
     * @method addSeries
     * @param {EJSC.sparkline.Series} series The series to add to the chart
     * @param {Boolean} [redraw=true] Whether to redraw the chart or not
     * @return {EJSC.sparkline.Series} The series that was added
     * @since 3.0.0
     */
    addSeries: function(series, redraw) {
        // If the series is not actually a series, back out
        if (!(series instanceof EJSC.sparkline.Series)) {
            return null;
        }

        // Prepare the series
        series.prepare(this, {
            color: this.getNextColor()
        });

        // Add the series to the array
        this.series.push(series);

        // Redraw the chart
        if (redraw !== false) {
            this.redraw();
        }

        // Return the series
        return series;
    },

    /**
     * Redraws the chart.
     *
     * @example
     *
     *     // Create a chart in the element with the id 'chart-container'
     *     var chart = new EJSC.sparkline.Chart('chart-container');
     *
     *     // Add a scatter series to the chart without redrawing the chart
     *     var series1 = chart.addSeries(
     *         new EJSC.sparkline.ScatterSeries(...),
     *         false
     *     );
     *
     *     // Add a line series to the chart without redrawing the chart
     *     var series2 = chart.addSeries(
     *         new EJSC.sparkline.LineSeries(...),
     *         false
     *     );
     *
     *     // Redraw the chart
     *     chart.redraw();
     *
     * @method redraw
     * @since 3.0.0
     */
    redraw: function() {
        // Reset the draw area
        this.resetDrawArea();

        // Clear the drawing
        this.clear();

        // Draw the background
        this.drawBackground();


        // Draw the axes
        this.drawAxes();

        // Draw the series
        this.drawSeries();


    },

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * @param {String|DOMElement} container The container (or id) to render the chart to
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(container, options) {
        // Call the _super method
        this._super(container, options);

        // Prepare the chart
        this.prepare();

        // Redraw the chart
        this.redraw();
    },

    /**
     * Draws each of the axis to the chart.
     * Updates the draw area according to the axes sizes.
     *
     * @method drawAxes
     * @private
     * @since 3.0.0
     */
    drawAxes: function() {
        // Grab a local reference to the chart
        var chart = this;

        // Draw the axes
        EJSC._.forEach(this.axisList, function(axis) {
            chart[axis].draw();
        });

    },

    /**
     * Draws the background of the chart.
     *
     * @method drawBackground
     * @private
     * @since 3.0.0
     */
    drawBackground: function() {
        // Draw a rectangle that covers the whole draw area
        this.rect(0, 0, this.drawArea.right, this.drawArea.bottom, {
            fillStyle: this.background,
            strokeStyle: 'none'
        });
    },

    /**
     * Loops through each of the visible series and draw them to the chart.
     *
     * @method drawSeries
     * @private
     * @since 3.0.0
     */
    drawSeries: function() {
        // Begin clipping the drawing area
        this.beginClip(
            this.drawArea.left,
            this.drawArea.top,
            this.drawArea.right - this.drawArea.left,
            this.drawArea.bottom - this.drawArea.top
        );

        // Loop through the visible series and draw each
        EJSC._.forEach(this.getVisibleSeries(), function(series) {
            series.draw();
        });

        // End clipping the drawing area
        this.endClip();
    },


    // TODO:
    getNextColor: function() {
        // Grab the next available color
        var color = this.colors[this.colorIndex++];

        // Reset the color index if needed
        if (this.colorIndex === this.colors.length) {
            this.colorIndex = 0;
        }

        // Return the selected color
        return color;
    },

    // TODO:
    getVisibleSeries: function() {
        // Return the list of visible series
        return EJSC._.filter(this.series, function(series) {
            return series.isVisible();
        });
    },

    // TODO:
    prepare: function() {

        this.prepareAxes();
    },

    // TODO:
    prepareAxes: function() {
        var chart = this;

        // Loop through each of the sides
        EJSC._.forEach(this.sidesList, function(side) {
            // Create some temporary variables
            var axis = 'axis' + EJSC._.capitalize(side);

            // Turn the axis into a class if not already one
            if (!(chart[axis] instanceof EJSC.sparkline.Axis)) {
                chart[axis] = new EJSC.sparkline.LinearAxis(chart[axis]);
            }

            // Prepare the axis
            chart[axis].prepare(chart, side);
        });
    },


    // TODO:
    resetDrawArea: function() {
        // Reset the current draw area
        this.drawArea = {
            left: 0,
            top: 0,
            right: this.container.clientWidth,
            bottom: this.container.clientHeight
        };
    },

    /**
     * Fires when a property of the class has changed.
     *
     * @method update
     * @private
     * @since 3.0.0
     */
    update: function() {
        // Redraw the chart
        this.redraw();
    }
});

/**
 * Holds the code common to all Axis types.
 *
 * @class EJSC.sparkline.Axis
 * @extends EJSC.Class
 * @constructor
 * @private
 * @since 3.0.0
 */
EJSC.sparkline.Axis = EJSC.Class.extend({


    /**
     * Defines the extremes of the axis.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} extremes
     * @property {Number} caption.max The max extreme (Default: null)
     * @property {Number} caption.min The min extreme (Default: null)
     * @since 3.0.0
     */
    extremes: {
        max: null,
        min: null
    },

    // Getter
    getExtremes: function() {
        // Return the current extremes
        return this.extremes;
    },

    // Setter
    setExtremes: function(extremes, apply) {
        // Update the current extremes
        this.update(this.extremes, extremes);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },



    /**
     * Defines the padding between the ends of the axis and
     * the start and end of the data displayed when zoomed out.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Integer} padding
     * @default 5
     * @since 3.0.0
     */
    padding: 5,

    // Getter
    getPadding: function() {
        // Return the current padding
        return this.padding;
    },

    // Setter
    setPadding: function(padding, apply) {
        // Update the current padding
        this.padding = padding;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * TODO:
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Boolean} reverse
     * @default false
     * @since 3.0.0
     */
    reverse: false,

    // Getter
    getReverse: function() {
        // Return the current reverse
        return this.reverse;
    },

    // Setter
    setReverse: function(reverse, apply) {
        // Update the current reverse
        this.reverse = reverse;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },


    // TODO:
    visible: null,

    // Getter
    getVisible: function() {
        // Return the current visible
        return this.visible;
    },

    // Setter
    setVisible: function(visible, apply) {
        // Update the current size
        this.visible = visible;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },


    /**
     * Defines the current zoom of the axis.
     *
     * @property {Object} zoom
     * @property {Number} zoom.min The min coordinate (Default: null)
     * @property {Number} zoom.max The max coordinate (Default: null)
     * @since 3.0.0
     */
    zoom: {
        min: null,
        max: null
    },

    // Getter
    getZoom: function() {
        // Return the current zoom
        return this.zoom;
    },

    // Setter
    setZoom: function(zoom, apply) {
        // Update the current zoom
        this.update(this.zoom, zoom);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Holds a reference to the owner chart.
     *
     * @property {EJSC.sparkline.Chart} chart
     * @protected
     * @default null
     * @since 3.0.0
     */
    chart: null,

    // Getter
    getChart: function() {
        return this.chart;
    },

    /**
     * Holds the dimensions for the draw area of this axis.
     *
     * @property {Object} drawArea
     * @property {Number} drawArea.bottom The bottom coordinate of the draw area (Default: null)
     * @property {Number} drawArea.left The left coordinate of the draw area (Default: null)
     * @property {Number} drawArea.right The right coordinate of the draw area (Default: null)
     * @property {Number} drawArea.top The top coordinate of the draw area (Default: null)
     * @private
     * @since 3.0.0
     */
    drawArea: {
        bottom: null,
        left: null,
        right: null,
        top: null
    },

    /**
     * Holds the orientation of the axis.
     * (Values: 'horizontal', 'vertical')
     *
     * @property {String} orientation
     * @private
     * @default null
     * @since 3.0.0
     */
    orientation: null,

    /**
     * Holds the current scale to convert pixels to points.
     *
     * @property {Number} scale
     * @private
     * @default null
     * @since 3.0.0
     */
    scale: null,

    /**
     * Holds the side of the axis.
     * (Values: 'left', 'top', 'right', 'bottom')
     *
     * @property {String} side
     * @private
     * @default null
     * @since 3.0.0
     */
    side: null,

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(options) {
        // Merge in the config options
        EJSC._.merge(this, options);
    },

    /**
     * Calculates the draw area for the axis.
     *
     * @method calculateDrawArea
     * @private
     * @since 3.0.0
     */
    calculateDrawArea: function() {
        // Grab some local pointers
        var chart = this.chart;
        var chartDrawArea = chart.drawArea;
        var drawArea = EJSC._.merge(this.drawArea, chartDrawArea);

        // Declare some local variables
        var bottom;
        var left;
        var right;
        var top;

    },

    /**
     * Calculates the extremes for the axis.
     *
     * @method calculateExtremes
     * @private
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Placeholder
    },

    /**
     * TODO:
     *
     * @method calculateScale
     * @private
     * @since 3.0.0
     */
    calculateScale: function() {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var extremes = this.extremes;
        var orientation = this.orientation;
        var zoom = this.zoom;

        // Define some local variables
        var pointMin = zoom.min || extremes.min;
        var pointMax = zoom.max || extremes.max;
        var pixelMin = (orientation === 'vertical' ? drawArea.top : drawArea.left);
        var pixelMax = (orientation === 'vertical' ? drawArea.bottom : drawArea.right);

        // Calculate the scale
        this.scale = (pointMax - pointMin) / (pixelMax - pixelMin);
    },

    /**
     * Calculates the axis' ticks based on the attached series' data.
     *
     * @method calculateTicks
     * @private
     * @since 3.0.0
     */
    calculateTicks: function() {
        // Return the list of ticks
        return [];
    },

    // TODO:
    convertLinearToPoint: function(linear) {
        // Return the linear value
        return linear;
    },

    /**
     * Converts from chart pixel to point.
     *
     * @method convertPixelToPoint
     * @private
     * @param {Number} pixel The pixel to convert
     * @return {Number} The point
     * @since 3.0.0
     */
    convertPixelToPoint: function(pixel) {
        // Return the point
        return pixel;
    },

    // TODO:
    convertPointToLinear: function(point) {
        // Return the point
        return point;
    },

    /**
     * Converts from chart point to pixel.
     *
     * @method convertPointToPixel
     * @private
     * @param {Number} point The point to convert
     * @return {Number} The pixel
     * @since 3.0.0
     */
    convertPointToPixel: function(point) {
        // Return the pixel
        return point;
    },

    // TODO:
    draw: function() {
        // Grab some local pointers
        var chart = this.chart;
        var drawArea = chart.drawArea;
        var bottom = drawArea.bottom - chart.axisBottom.getOffsetSize();
        var left = drawArea.left + chart.axisLeft.getOffsetSize();
        var right = drawArea.right - chart.axisRight.getOffsetSize();
        var top = drawArea.top + chart.axisTop.getOffsetSize();

        // If this axis is not visible, don't do anything
        if (!this.isVisible()) {
            return;
        }

        // Calculate the draw area
        this.calculateDrawArea();

        // Calculate the extremes
        this.calculateExtremes();

        // Calculate the scale
        this.calculateScale();

    },







    /**
    * Returns the current zoom (plus given spacing) of the axis.
    *
    * @method getCurrentZoom
    * @private
    * @param {Integer} spacing The additional spacing to include
    * @since 3.0.0
    */
    getCurrentZoom: function(spacing) {
        // Grab some local pointers
        var zoom = this.zoom;
        var extremes = this.extremes;
        var scale = this.scale;

        // Update some variables with default values
        spacing = spacing || 0;

        // Calculate the current zoom
        var currentZoom = {
            min: (zoom.min || extremes.min) - (spacing * scale),
            max: (zoom.max || extremes.max) + (spacing * scale)
        };

        // Return the current zoom
        return currentZoom;
    },

    /**
     * Returns the current offset size of the axis.
     *
     * @method getOffsetSize
     * @private
     * @return {Integer} The offset size of the axis
     * @since 3.0.0
     */
    getOffsetSize: function() {
        // Determine the size of the axis if shown
        var size = (this.isVisible() ? this.size : 0);

        // Return the size
        return size;
    },

    /**
     * Returns the list of visible series attached to the axis.
     *
     * @method getVisibleSeries
     * @private
     * @return {Array} The visible series
     * @since 3.0.0
     */
    getVisibleSeries: function() {
        // Grab some local pointers
        var axis = this;

        // Grab the list of visible attached series
        var visibleSeries = EJSC._.filter(this.chart.series, function(series) {
            return (
                (axis.orientation === 'horizontal' && series.xAxis === axis.side && series.isVisible()) ||
                (axis.orientation === 'vertical' && series.yAxis === axis.side && series.isVisible())
            );
        });

        // Return the list of visible series
        return visibleSeries;
    },

    // TODO:
    hasVisibleSeries: function() {
        // Determine if there are any visible attached series
        var hasVisibleSeries = this.getVisibleSeries().length > 0;

        // Return if there are any visible attached series
        return hasVisibleSeries;
    },

    /**
     * Determines if the axis is currently visible (needs to be drawn).
     *
     * @method isVisible
     * @private
     * @return {Boolean} If the axis is currently visible
     * @since 3.0.0
     */
    isVisible: function() {
        // Determine if the axis is visible
        var visible = (EJSC._.isNil(this.visible) ? this.hasVisibleSeries() : this.visible);

        // Return if the axis is visible
        return visible;
    },

    /**
     * Links the series to its owner chart.
     *
     * @method prepare
     * @private
     * @param {EJSC.Chart} chart The owner chart
     * @param {String} side The axis' side
     * @since 3.0.0
     */
    prepare: function(chart, side) {
        // Update the axis properties
        EJSC._.merge(this, {
            chart: chart,
            side: side,
            orientation: EJSC.sparkline.Axis.orientations[side]
        });

        // Update the size if needed
        if (EJSC._.isNil(this.size)) {
            this.size = EJSC.sparkline.Axis.sizes[this.orientation];
        }
    },

    /**
     * Fires when a property of the class has changed.
     *
     * @method update
     * @private
     * @since 3.0.0
     */
    update: function() {
        // Redraw the chart
        if (EJSC._.has(this, 'chart.redraw')) {
            this.chart.redraw();
        }
    }
});

// Define the default values for orientation
EJSC.sparkline.Axis.orientations = {
    bottom: 'horizontal',
    left: 'vertical',
    right: 'vertical',
    top: 'horizontal'
};

// Define the default values for size
EJSC.sparkline.Axis.sizes = {
    horizontal: 45,
    vertical: 70
};

/**
 * TODO:
 *
 * @class EJSC.sparkline.LinearAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
EJSC.sparkline.LinearAxis = EJSC.Axis.extend({
    /**
     * Calculates the extremes for the axis.
     *
     * @method calculateExtremes
     * @private
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var orientation = this.orientation;
        var padding = this.padding;
        var extremes = this.extremes;
        var visibleSeries = this.getVisibleSeries();

        // Define some local variables
        var dataPoint = orientation === 'vertical' ? 'y' : 'x';
        var spacing = 0;
        var min = null;
        var max = null;
        var scale;

        // Reset the extremes
        EJSC._.merge(extremes, {
            min: null,
            max: null
        });

        // If there are no visible series, we can't calculate the extremes
        if (visibleSeries.length <= 0) {
            return;
        }

        // Loop through each of the visible series
        EJSC._.forEach(visibleSeries, function(series) {
            // Calculate the min and max range
            EJSC._.forEach(series.data, function(point) {
                EJSC._.forEach(series.dataPoints[dataPoint], function(property) {
                    min = EJSC._.min([min, point[property]]);
                    max = EJSC._.max([max, point[property]]);
                });
            });

            // Calculate the series spacing
            spacing = EJSC._.max([spacing, series.calculateSpacing()]);
        });

        // Add the series spacing to the padding
        padding += spacing - 1;

        // Determine the scale based on the axis' orientation
        switch (orientation) {
            case 'horizontal':
                scale = ((max - min) / (drawArea.right - drawArea.left - (padding * 2)));
                break;

            case 'vertical':
                scale = ((max - min) / (drawArea.bottom - drawArea.top - (padding * 2)));
                break;
        }

        // Update the extremes with the padding
        EJSC._.merge(extremes, {
            min: min - (scale * padding),
            max: max + (scale * padding)
        });
    },

    /**
     * Calculates the axis' ticks based on the attached series' data.
     *
     * @method calculateTicks
     * @private
     * @return {Array} The list of ticks
     * @since 3.0.0
     */
    calculateTicks: function() {
        // Grab some local pointers
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var min = zoom.min;
        var max = zoom.max;
        var range = max - min;
        var interval = Math.pow(10, Math.floor(Math.log10(range)));
        var count = 3;
        var increment;
        var start;
        var i;
        var ticks = [];

        // Set up the increment
        if (range / interval >= count) {
            increment = interval;
        }
        else if (range / (interval / 2) >= count) {
            increment = interval / 2;
        }
        else {
            increment = interval / 5;
        }

        // Calculate the starting point
        start = Math.ceil(min / increment) * increment;

        // Build the list of ticks
        for (i = start; i <= max; i += increment) {
            ticks.push(i);
        }

        // Return the list of ticks
        return ticks;
    },

    /**
     * Converts from chart pixel to point.
     *
     * @method convertPixelToPoint
     * @private
     * @param {Number} pixel The pixel to convert
     * @return {Number} The point
     * @since 3.0.0
     */
    convertPixelToPoint: function(pixel) {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var pixelMin;
        var pixelMax;
        var pixelDif;
        var pixelPerc;
        var pointMin = zoom.min;
        var pointMax = zoom.max;
        var pointDif = pointMax - pointMin;
        var point = null;

        // There needs to be a current zoom to convert
        if (pointMin !== null && pointMax !== null) {
            // Calculate the coordinate based on the axis' orientation
            switch (this.orientation) {
                case 'horizontal':
                    pixelMin = drawArea.left;
                    pixelMax = drawArea.right - 1;
                    pixelDif = pixelMax - pixelMin;
                    pixelPerc = ((pixel - pixelMin) / pixelDif);

                    if (this.reverse === false) {
                        point = pointMin + (pointDif * pixelPerc);
                    }
                    else {
                        point = pointMax - (pointDif * pixelPerc);
                    }

                    break;

                case 'vertical':
                    pixelMin = drawArea.top;
                    pixelMax = drawArea.bottom - 1;
                    pixelDif = pixelMax - pixelMin;
                    pixelPerc = ((pixel - pixelMin) / pixelDif);

                    if (this.reverse === false) {
                        point = pointMax - (pointDif * pixelPerc);
                    }
                    else {
                        point = pointMin + (pointDif * pixelPerc);
                    }

                    break;
            }
        }

        // Return the point
        return point;
    },

    /**
     * Converts from chart point to pixel.
     *
     * @method convertPointToPixel
     * @private
     * @param {Number} point The point to convert
     * @return {Number} The pixel
     * @since 3.0.0
     */
    convertPointToPixel: function(point) {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var pointMin = zoom.min;
        var pointMax = zoom.max;
        var pointPerc = ((point - pointMin) / (pointMax - pointMin));
        var pixelMin;
        var pixelMax;
        var pixelDif;
        var pixel = null;

        // There needs to be a current zoom to convert
        if (pointMin !== null && pointMax !== null) {
            // Determine the coordinate based on the axis' orientation
            switch (this.orientation) {
                case 'horizontal':
                    pixelMin = drawArea.left;
                    pixelMax = drawArea.right - 1;
                    pixelDif = pixelMax - pixelMin;

                    if (this.reverse === false) {
                        pixel = pixelMin + (pixelDif * pointPerc);
                    }
                    else {
                        pixel = pixelMax - (pixelDif * pointPerc);
                    }

                    break;

                case 'vertical':
                    pixelMin = drawArea.top;
                    pixelMax = drawArea.bottom - 1;
                    pixelDif = pixelMax - pixelMin;

                    if (this.reverse === false) {
                        pixel = pixelMax - (pixelDif * pointPerc);
                    }
                    else {
                        pixel = pixelMin + (pixelDif * pointPerc);
                    }

                    break;
            }
        }

        // Return the pixel
        return pixel;
    }
});

/**
 * TODO:
 *
 * @class EJSC.sparkline.LogarithmicAxis
 * @extends EJSC.Axis
 * @constructor
 * @private
 * @since 3.0.0
 */
EJSC.sparkline.LogarithmicAxis = EJSC.Axis.extend({
    // TODO:
    base: 10,

    // Getter
    getBase: function() {
        // Return the current base
        return this.base;
    },

    // Setter
    setBase: function(base, apply) {
        // Update the current base
        this.base = base;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    logPoints: {
        maxPositive: null,
        minPositive: null,
        zeroValue: null,
        maxNegative: null,
        minNegative: null
    },

    // TODO:
    calculateExtremes: function() {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var orientation = this.orientation;
        var padding = this.padding;
        var extremes = this.extremes;
        var logPoints = this.logPoints;
        var visibleSeries = this.getVisibleSeries();

        // Define some local variables
        var dataPoint = orientation === 'vertical' ? 'y' : 'x';
        var spacing = 0;
        var min = null;
        var max = null;
        var maxPositive = null;
        var minPositive = null;
        var zeroValue = null;
        var maxNegative = null;
        var minNegative = null;
        var scale;

        // Reset the extremes
        EJSC._.merge(extremes, {
            min: null,
            max: null
        });

        // Reset the log points
        EJSC._.merge(logPoints, {
            maxPositive: null,
            minPositive: null,
            zeroValue: null,
            maxNegative: null,
            minNegative: null
        });

        // If there are no visible series, we can't calculate the extremes
        if (visibleSeries.length <= 0) {
            return;
        }

        // Loop through each of the visible series
        EJSC._.forEach(visibleSeries, function(series) {
            // Calculate the min and max range
            EJSC._.forEach(series.data, function(point) {
                EJSC._.forEach(series.dataPoints[dataPoint], function(property) {
                    // Calculate the extremes
                    min = EJSC._.min([min, point[property]]);
                    max = EJSC._.max([max, point[property]]);

                    // Calculate the log points
                    if (point[property] > 0) {
                        maxPositive = EJSC._.max([maxPositive, point[property]]);
                        minPositive = EJSC._.min([minPositive, point[property]]);
                    }
                    else if (point[property] === 0) {
                        zeroValue = 0;
                    }
                    else if (point[property] < 0) {
                        maxNegative = EJSC._.max([maxNegative, point[property]]);
                        minNegative = EJSC._.min([minNegative, point[property]]);
                    }
                });
            });

            // Calculate the series spacing
            spacing = EJSC._.max([spacing, series.calculateSpacing()]);
        });

        if (!EJSC._.isNil(zeroValue) || (!EJSC._.isNil(minPositive) && !EJSC._.isNil(maxNegative))) {
            // Make sure the zero value is defined
            zeroValue = 0;

            // Move minPositive and maxNegative to closest power
            minPositive = this.convertPowerToPoint(Math.floor(this.convertPointToPower(minPositive)));
            maxNegative = -this.convertPowerToPoint(Math.floor(this.convertPointToPower(-maxNegative)));
        }

        // Reset the log points
        EJSC._.merge(logPoints, {
            maxPositive: maxPositive,
            minPositive: minPositive,
            zeroValue: zeroValue,
            maxNegative: maxNegative,
            minNegative: minNegative
        });

        // Add the series spacing to the padding
        padding += spacing - 1;

        var linearMin = this.convertPointToLinear(min);
        var linearMax = this.convertPointToLinear(max);

        // Determine the scale based on the axis' orientation
        switch (orientation) {
            case 'horizontal':
                scale = ((linearMax - linearMin) / (drawArea.right - drawArea.left - (padding * 2)));
                break;

            case 'vertical':
                scale = ((linearMax - linearMin) / (drawArea.bottom - drawArea.top - (padding * 2)));
                break;
        }

        min = this.convertLinearToPoint(linearMin - (scale * padding));
        max = this.convertLinearToPoint(linearMax + (scale * padding));

        // Update the extremes with the padding
        EJSC._.merge(extremes, {
            min: min,
            max: max
        });
    },

    // TODO:
    calculateTicks: function() {
        // Grab some local pointers
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var min = this.convertPointToLinear(zoom.min);
        var max = this.convertPointToLinear(zoom.max);
        var ticks = [];
        var i;

        // Loop through adding a tick at each power
        for (i = Math.ceil(min); i <= Math.floor(max); i++) {
            ticks.push(this.convertLinearToPoint(i));
        }

        // Return the list of ticks
        return ticks;
    },

    // TODO:
    convertLinearToPoint: function(linear) {
        // TODO:
        var logPoints = this.logPoints;
        var minPositive = logPoints.minPositive;
        var maxNegative = logPoints.maxNegative;

        // TODO:
        var point;

        // Convert 0 to 0
        if (linear === 0) {
            point = 0;
        }

        // TODO:
        else if (linear > 0 && linear < 1) {
            // TODO
        }

        // TODO:
        else if (linear < 0 && linear > -1) {
            // TODO:
        }

        // TODO
        else if (linear >= 1) {
            point = this.convertPowerToPoint(linear - 1 + this.convertPointToPower(minPositive));
        }

        // TODO:
        else if (linear <= -1) {
            point = -(this.convertPowerToPoint(-linear - 1 + this.convertPointToPower(-maxNegative)));
        }

        // Return the point value
        return point;
    },

    // TODO:
    convertPixelToPoint: function(pixel) {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var pixelMin;
        var pixelMax;
        var pixelDif;
        var pixelPerc;
        var linearMin = this.convertPointToLinear(zoom.min);
        var linearMax = this.convertPointToLinear(zoom.max);
        var linearDif = linearMax - linearMin;
        var point = null;

        // There needs to be a current zoom to convert
        if (linearMin !== null && linearMax !== null) {
            // Calculate the coordinate based on the axis' orientation
            switch (this.orientation) {
                case 'horizontal':
                    pixelMin = drawArea.left;
                    pixelMax = drawArea.right - 1;
                    pixelDif = pixelMax - pixelMin;
                    pixelPerc = ((pixel - pixelMin) / pixelDif);

                    if (this.reverse === false) {
                        point = this.convertLinearToPoint(linearMin + (linearDif * pixelPerc));
                    }
                    else {
                        point = this.convertLinearToPoint(linearMax - (linearDif * pixelPerc));
                    }

                    break;

                case 'vertical':
                    pixelMin = drawArea.top;
                    pixelMax = drawArea.bottom - 1;
                    pixelDif = pixelMax - pixelMin;
                    pixelPerc = ((pixel - pixelMin) / pixelDif);

                    if (this.reverse === false) {
                        point = this.convertLinearToPoint(linearMax - (linearDif * pixelPerc));
                    }
                    else {
                        point = this.convertLinearToPoint(linearMin + (linearDif * pixelPerc));
                    }

                    break;
            }
        }

        // Return the point
        return point;
    },

    // TODO:
    convertPointToLinear: function(point) {
        // TODO:
        var logPoints = this.logPoints;
        var minPositive = logPoints.minPositive;
        var maxNegative = logPoints.maxNegative;

        // TODO:
        var linear;

        // Convert 0 to 0
        if (point === 0) {
            linear = 0;
        }

        // TODO:
        else if (point > 0 && point < minPositive) {
            // TODO:
        }

        // TODO:
        else if (point < 0 && point > maxNegative) {
            // TODO:
        }

        // Calculate the power difference for positive values above minPositive
        else if (point >= minPositive) {
            linear = this.convertPointToPower(point) - this.convertPointToPower(minPositive) + 1;
        }

        // Calculate the power difference for negative values below maxNegative
        else if (point <= maxNegative) {
            linear = -(this.convertPointToPower(-point) - this.convertPointToPower(-maxNegative) + 1);
        }

        // Return the linear value
        return linear;
    },

    // TODO:
    convertPointToPixel: function(point) {
        // Grab some local pointers
        var drawArea = this.drawArea;
        var zoom = this.getCurrentZoom();

        // Define some local variables
        var linearMin = this.convertPointToLinear(zoom.min);
        var linearMax = this.convertPointToLinear(zoom.max);
        var linearPerc = ((this.convertPointToLinear(point) - linearMin) / (linearMax - linearMin));
        var pixelMin;
        var pixelMax;
        var pixelDif;
        var pixel = null;

        // There needs to be a current zoom to convert
        if (linearMin !== null && linearMax !== null) {
            // Determine the coordinate based on the axis' orientation
            switch (this.orientation) {
                case 'horizontal':
                    pixelMin = drawArea.left;
                    pixelMax = drawArea.right - 1;
                    pixelDif = pixelMax - pixelMin;

                    if (this.reverse === false) {
                        pixel = pixelMin + (pixelDif * linearPerc);
                    }
                    else {
                        pixel = pixelMax - (pixelDif * linearPerc);
                    }

                    break;

                case 'vertical':
                    pixelMin = drawArea.top;
                    pixelMax = drawArea.bottom - 1;
                    pixelDif = pixelMax - pixelMin;

                    if (this.reverse === false) {
                        pixel = pixelMax - (pixelDif * linearPerc);
                    }
                    else {
                        pixel = pixelMin + (pixelDif * linearPerc);
                    }

                    break;
            }
        }

        // Return the pixel
        return pixel;
    },

    // TODO:
    convertPointToPower: function(point) {
        // Calculate the power value
        var power = Math.log(point) / Math.log(this.base);

        // Return the power value
        return power;
    },

    // TODO:
    convertPowerToPoint: function(power) {
        // Calculate the point value
        var point = Math.pow(this.base, power);

        // Return the point value
        return point;
    }
});

/**
 * Holds all of the common code to all of the series.
 *
 * @class EJSC.sparkline.Series
 * @private
 * @extends EJSC.Class
 * @since 3.0.0
 */
EJSC.sparkline.Series = EJSC.Class.extend({
    /**
     * Defines the color of the series.
     *
     * @attribute {String} color
     * @default null
     * @since 3.0.0
     */
    color: null,

    // Getter
    getColor: function() {
        // Return the current color
        return this.color;
    },

    // Setter
    setColor: function(color, apply) {
        // Update the current color
        this.color = color;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the title of the series.
     *
     * @attribute {String} title
     * @default null
     * @since 3.0.0
     */
    title: null,

    // Getter
    getTitle: function() {
        // Return the current title
        return this.title;
    },

    // Setter
    setTitle: function(title, apply) {
        // Update the current title
        this.title = title;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines if the series if visible or not.
     *
     * @attribute {Boolean} visible
     * @default true
     * @since 3.0.0
     */
    visible: true,

    // Getter
    getVisible: function() {
        // Return the current visible
        return this.visible;
    },

    // Setter
    setVisible: function(visible, apply) {
        // Store the current visible
        this.visible = visible;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Holds a pointer to this series' owner chart.
     *
     * @property {EJSC.sparkline.Chart} chart
     * @private
     * @default null
     * @since 3.0.0
     */
    chart: null,

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(options) {
        // Copy the incoming config options
        EJSC._.merge(this, options);

        // Initialize some variables if not defined in the options
        this.title = (this.title === null ? 'Series' : this.title);
    },

    /**
     * Draws the series to its owner chart's drawing engine.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Placeholder
    },

    /**
     * Determines if the series is visible or not.
     *
     * @method isVisible
     * @private
     * @return {Boolean} If the series is visible or not
     * @since 3.0.0
     */
    isVisible: function() {
        // Return if this series is visible or not
        return this.visible;
    },

    /**
     * Links the series to its owner chart.
     *
     * @method prepare
     * @private
     * @param {EJSC.Chart} chart The owner chart
     * @param {Object} options Default options to apply if not defined
     * @since 3.0.0
     */
    prepare: function(chart, options) {
        // Store the owner chart
        this.chart = chart;

        // Update any options that haven't been defined
        EJSC._.merge(this, options);
    },

    /**
     * Fires when a property of the class has changed.
     *
     * @method update
     * @private
     * @since 3.0.0
     */
    update: function() {
        // Redraw the chart
        if (EJSC._.has(this, 'chart.redraw')) {
            this.chart.redraw();
        }
    }
});

/**
 * Defines a series that requires data.
 *
 * @class EJSC.sparkline.DataSeries
 * @extends EJSC.Class
 * @private
 * @since 3.0.0
 */
EJSC.sparkline.DataSeries = EJSC.Class.extend({
    // TODO:
    data: [],

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * TODO:
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(data) {
        // Store and prepare the data handler
        this.data = data;
    }
});

/**
 * Defines a series that will plot its data using the chart's axes.
 *
 * @class EJSC.sparkline.PlotSeries
 * @extends EJSC.sparkline.Series
 * @private
 * @since 3.0.0
 */
EJSC.sparkline.PlotSeries = EJSC.sparkline.Series.extend({
    /**
     * Defines the x axis to draw on.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {String} xAxis
     * @default 'bottom'
     * @values 'bottom', 'top'
     * @since 3.0.0
     */
    xAxis: 'bottom',

    // Getter
    getXAxis: function() {
        // Return the current x axis
        return this.xAxis;
    },

    // Setter
    setXAxis: function(xAxis, apply) {
        // Update the current x axis
        this.xAxis = xAxis;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the y axis to draw on.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {String} yAxis
     * @default 'left'
     * @values 'left', 'right'
     * @since 3.0.0
     */
    yAxis: 'left',

    // Getter
    getYAxis: function() {
        // Return the current y axis
        return this.yAxis;
    },

    // Setter
    setYAxis: function(yAxis, apply) {
        // Update the current y axis
        this.yAxis = yAxis;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the extremes for the series based on its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The new extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Define some local variables
        var extremes = {
            xMin: null,
            xMax: null,
            yMin: null,
            yMax: null
        };

        // Return the extremes
        return extremes;
    },

    /**
     * Returns the list of visible points.
     *
     * @method getVisiblePoints
     * @private
     * @return {Array} The list of visible points
     * @since 3.0.0
     */
    getVisiblePoints: function() {
        // TODO:
        var series = this;

        // Return the list of visible points
        return EJSC._.filter(series.data, function(point) {
            return series.isPointVisible(point);
        });
    },

    /**
     * Returns a reference to the x axis
     *
     * @method referenceXAxis
     * @private
     * @return {EJSC.sparkline.Axis} The x axis
     * @since 3.0.0
     */
    referenceXAxis: function() {
        // Return a reference to the x axis
        return this.chart['axis' + EJSC._.capitalize(this.xAxis)];
    },

    /**
     * Returns a reference to the y axis
     *
     * @method referenceXAxis
     * @private
     * @return {EJSC.sparkline.Axis} The y axis
     * @since 3.0.0
     */
    referenceYAxis: function() {
        // Return a reference to the y axis
        return this.chart['axis' + EJSC._.capitalize(this.yAxis)];
    }
});

/**
 * TODO;
 *
 * @class EJSC.sparkline.XYSeries
 * @extends EJSC.sparkline.PlotSeries
 * @uses EJSC.sparkline.DataSeries
 * @private
 * @since 3.0.0
 */
EJSC.sparkline.XYSeries = EJSC.sparkline.PlotSeries.extend([
    EJSC.sparkline.DataSeries
], {
    dataPoints: {
        x: ['x'],
        y: ['y']
    },

    /**
     * Consstructs the chart.
     *
     * @method __construct
     * @private
     * TODO:
     * @param {Object} options The config options to apply to the axis
     * @since 3.0.0
     */
    __construct: function(data, options) {
        // Call the super method
        this._super(options);

        //
        EJSC.DataSeries.prototype.__construct.call(this, data);
    }
});

/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC.sparkline.ScatterSeries
 * @extends EJSC.sparkline.XYSeries
 * @constructor
 * @since 3.0.0
 */
EJSC.sparkline.ScatterSeries = EJSC.sparkline.XYSeries.extend({
    /**
     * Defines the style options for the points.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} points
     * @property {String} points.shape Defines the shape of the points. (Default: 'circle') (Values: 'box', 'circle', 'diamond', 'triangle')
     * @property {Integer} points.size Defines the size of the points. (Default: 5)
     * @property {Object} points.style
     * @property {String} points.style.fillStyle Defines the fill color. (Default: null)
     * @property {Integer} points.style.lineWidth Defines the width of the line. (Default: 2)
     * @property {String} points.style.strokeStyle Defines the color of the line. (Default: null)
     * @property {Boolean} points.visible Defines if the points should be drawn. Only applies to child classes of ScatterSeries. (Default: false)
     * @since 3.0.0
     */
    points: {
        shape: 'circle',
        size: 5,
        style: {
            fillStyle: null,
            lineWidth: 2,
            strokeStyle: null
        },
        visible: false
    },

    // Getter
    getPoints: function() {
        // Return the current points
        return this.points;
    },

    // Setter
    setPoints: function(points, apply) {
        // Update the current points
        EJSC._.merge(this.points, points);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the extremes for the series based on its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The new extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Define some local variables
        var extremes = {
            xMin: null,
            xMax: null,
            yMin: null,
            yMax: null
        };

        // Loop through the associated data
        EJSC._.forEach(this.data, function(point) {
            // Update the xMin value if needed
            EJSC._.merge(extremes, {
                xMin: EJSC._.min([extremes.xMin, point.x]),
                xMax: EJSC._.max([extremes.xMax, point.x]),
                yMin: EJSC._.min([extremes.yMin, point.y]),
                yMax: EJSC._.max([extremes.yMax, point.y])
            });
        });

        // Return the extremes
        return extremes;
    },

    /**
     * Calculates the spacing needed for the series.
     *
     * @method calculateSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */
    calculateSpacing: function() {
        // Grab some local pointers
        var points = this.points;

        // Determine the spacing needed for the series
        var spacing = Math.ceil(points.size + (points.style.lineWidth / 2));

        // Return the spacing needed for the series
        return spacing;
    },

    /**
     * Draws the series.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Define some local variables
        var chart = this.chart;
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var points = this.points;
        var color = this.color;
        var style = EJSC._.merge({}, points.style);
        var size = points.size;

        // Fill in missing colors if needed
        style.fillStyle = style.fillStyle || EJSC._.setOpacity(color, 0.5);
        style.strokeStyle = style.strokeStyle || color;

        // Draw the visible points
        EJSC._.forEach(this.getVisiblePoints(), function(point) {
            // Define the pixel values
            var dx = xAxis.convertPointToPixel(point.x) + 0.5;
            var dy = yAxis.convertPointToPixel(point.y) + 0.5;

            // Determine what shape to draw
            switch (points.shape) {
                // Draw the rect
                case 'box':
                    chart.rect(dx - size, dy - size, size * 2, size * 2, style);
                    break;

                // Draw the circle
                case 'circle':
                    chart.circle(dx, dy, size, style);
                    break;

                // Draw the diamond
                case 'diamond':
                    chart.beginPath();
                    chart.moveTo(dx, dy - size);
                    chart.lineTo(dx - size, dy);
                    chart.lineTo(dx, dy + size);
                    chart.lineTo(dx + size, dy);
                    chart.lineTo(dx, dy - size);
                    chart.draw(style);
                    break;

                // Draw the triangle
                case 'triangle':
                    chart.beginPath();
                    chart.moveTo(dx, dy - size);
                    chart.lineTo(dx - size, dy + size);
                    chart.lineTo(dx + size, dy + size);
                    chart.lineTo(dx, dy - size);
                    chart.draw(style);
                    break;
            }
        });
    },

    /**
     * Determines if a point is currently visible or not.
     *
     * @method isPointVisible
     * @private
     * @param {Array<Number, Number>} point The point to determine
     * @return {Boolean} If the point is currently visible or not
     * @since 3.0.0
     */
    isPointVisible: function(point) {
        // Grab some local pointers
        var spacing = this.calculateSpacing();
        var xAxisZoom = this.referenceXAxis().getCurrentZoom(spacing);
        var yAxisZoom = this.referenceYAxis().getCurrentZoom(spacing);

        // Determine if the point should be drawn or not
        var isPointVisible = (
            EJSC._.isNil(point.x) === false &&
            EJSC._.isNil(point.y) === false &&
            point.x >= xAxisZoom.min &&
            point.x <= xAxisZoom.max &&
            point.y >= yAxisZoom.min &&
            point.y <= yAxisZoom.max
        );

        // Return if the point should be drawn or not
        return isPointVisible;
    }
});

/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC.sparkline.LineSeries
 * @extends EJSC.sparkline.ScatterSeries
 * @constructor
 * @since 3.0.0
 */
EJSC.sparkline.LineSeries = EJSC.sparkline.ScatterSeries.extend({
    /**
     * Defines the style options for the drawn line.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} line
     * @property {Integer} line.lineWidth Defines the width of the line. (Default: 1)
     * @property {String} line.strokeStyle Defines the color of the line. (Default: null)
     * @since 3.0.0
     */
    line: {
        lineWidth: 1,
        strokeStyle: null
    },

    // Getter
    getLine: function() {
        // Return the current line
        return this.line;
    },

    // Setter
    setLine: function(line, apply) {
        // Update the current line
        EJSC._.merge(this.line, line);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Determines if the drawing routine should draw as steps.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Boolean} step
     * @default false
     * @since 3.0.0
     */
    step: false,

    // Getter
    getStep: function() {
        // Return the current step
        return this.step;
    },

    // Setter
    setStep: function(step, apply) {
        // Update the current step
        this.step = step;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Builds the drawing path.
     *
     * @method buildPath
     * @private
     * @return {Array} The path to draw
     * @since 3.0.0
     */
    buildPath: function() {
        // Grab some local pointers
        var step = this.step;
        var path = [];

        // Build the drawing path
        EJSC._.forEach(this.data, function(point, index) {
            // Add the previous step (if needed)
            if (index > 0 && step) {
                path.push({

                                    x: point.x,

                                    y: path[path.length - 1].y
                });
            }

            // Add the current point to the path
            path.push({

                                    x: point.x,

                                    y: point.y
            });
        });


        // Return the path
        return path;
    },

    /**
     * Calculates the spacing needed for the series.
     *
     * @method calculateSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */
    calculateSpacing: function() {
        // Define some local variables
        var pointSpacing = this.points.visible ? this._super.apply(this, arguments) : 0;
        var lineSpacing = Math.ceil(this.line.width / 2);

        // Return the larger spacing
        return EJSC._.max([pointSpacing, lineSpacing]);
    },


    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Grab some local pointers
        var chart = this.chart;
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var points = this.buildPath();

        // Begin the drawing path
        chart.beginPath();

        // Loop through the points of data adding them to the path array
        EJSC._.forEach(points, function(point, index) {
            chart[index === 0 ? 'moveTo' : 'lineTo'](
                xAxis.convertPointToPixel(point.x),
                yAxis.convertPointToPixel(point.y)
            );
        });

        // Draw the line
        chart.stroke(EJSC._.merge({}, this.line, {
            strokeStyle: this.line.strokeStyle || this.color
        }));

        // Draw the points if needed
        if (this.points.visible === true) {
            this._super.apply(this, arguments);
        }
    },

});

/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC.sparkline.AreaSeries
 * @extends EJSC.sparkline.LineSeries
 * @constructor
 * @since 3.0.0
 */
EJSC.sparkline.AreaSeries = EJSC.sparkline.LineSeries.extend({
    /**
     * Defines the styles for the area fill.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} area
     * @property {String} area.fillStyle The background color of the area fill. (Default: null)
     * @since 3.0.0
     */
    area: {
        fillStyle: null
    },

    // Getter
    getArea: function() {
        // Return the current area
        return this.area;
    },

    // Setter
    setArea: function(area, apply) {
        // Update the current area
        EJSC._.merge(this.area, area);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the zero coordinate for the series.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Number} zeroCoordinate
     * @default 0
     * @since 3.0.0
     */
    zeroCoordinate: 0,

    // Getter
    getZeroCoordinate: function() {
        // Return the current zero coordinate
        return this.zeroCoordinate;
    },

    // Setter
    setZeroCoordinate: function(zeroCoordinate, apply) {
        // Update the current zero coordinate
        this.zeroCoordinate = zeroCoordinate;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the extremes for the series based off of its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object} The calculated extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Grab some local pointers
        var extremes = this.point.calculateExtremes(this.handler.data);
        var zeroCoordinate = this.zeroCoordinate;

        // Update extremes to the zero coordinate
        extremes.yMin = EJSC._.min([extremes.yMin, zeroCoordinate]);
        extremes.yMax = EJSC._.max([extremes.yMax, zeroCoordinate]);

        // Return the extremes
        return extremes;
    },

    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Grab some local pointers
        var chart = this.chart;
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var yAxisZoom = yAxis.getCurrentZoom();
        var zeroCoordinate = yAxis.convertPointToPixel(EJSC._.clamp(this.zeroCoordinate, yAxisZoom.min, yAxisZoom.max));
        var points = this.buildPath();

        // Start at the first point
        chart.beginPath();

        // Loop through the points of data adding them to the path array
        EJSC._.forEach(points, function(point, index) {
            chart[index === 0 ? 'moveTo' : 'lineTo'](
                xAxis.convertPointToPixel(point.x),
                yAxis.convertPointToPixel(point.y)
            );
        });

        // Loop through the points of data adding them to the path array
        EJSC._.forEach(points.reverse(), function(point) {
            chart.lineTo(
                xAxis.convertPointToPixel(point.x),
                zeroCoordinate
            );
        });

        // Close the path
        chart.closePath();

        // Fill in the path
        chart.fill(EJSC._.merge({}, this.area, {
            fillStyle: this.area.fillStyle || EJSC._.setOpacity(this.color, 0.5)
        }));

        // Draw the line
        this._super.apply(this, arguments);
    }
});

/**
 * // TODO:
 *
 * @example
 *
 *     // TODO:
 *
 * @class EJSC.sparkline.BarSeries
 * @extends EJSC.sparkline.ScatterSeries
 * @constructor
 * @since 3.0.0
 */
EJSC.sparkline.BarSeries = EJSC.sparkline.ScatterSeries.extend({
    /**
     * Defines the styles for the bar.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Object} bar
     * @property {Number} bar.size The amount of available space the bars should take up. (Default: 0.8)
     * @property {Object} bar.style
     * @property {String} bar.style.fillStyle The background color of the bar. (Default: null)
     * @property {Integer} bar.style.lineWidth The border width of the bar. (Default: 1)
     * @property {String} bar.style.strokeStyle The border color of the bar. (Default: null)
     * @since 3.0.0
     */
    bar: {
        size: 0.8,
        style: {
            fillStyle: null,
            lineWidth: 1,
            strokeStyle: null
        }
    },

    // Getter
    getBar: function() {
        // Return the current bar
        return this.bar;
    },

    // Setter
    setBar: function(bar, apply) {
        // Update the current bar
        EJSC._.merge(this.bar, bar);

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Defines the zero coordinate for the series.
     *
     * @example
     *
     *     // TODO:
     *
     * @attribute {Number} zeroCoordinate
     * @default 0
     * @since 3.0.0
     */
    zeroCoordinate: 0,

    // Getter
    getZeroCoordinate: function() {
        // Return the current zeroCoordinate
        return this.zeroCoordinate;
    },

    // Setter
    setZeroCoordinate: function(zeroCoordinate, apply) {
        // Update the current zeroCoordinate
        this.zeroCoordinate = zeroCoordinate;

        // Redraw the chart if needed
        if (apply !== false) {
            this.update();
        }
    },

    /**
     * Calculates the boundary points for a bar in the series.
     *
     * @method calculateBarPoints
     * @private
     * @return {Object} The boundary points
     * @since 3.0.0
     */
    calculateBarPoints: function(point) {
        // Grab some local pointers
        var barSize = this.calculateBarSize();
        var zeroCoordinate = this.zeroCoordinate;

        // Return the bar points
        return {
            xMax: point.x + (barSize / 2),
            xMin: point.x - (barSize / 2),
            yMax: EJSC._.max([point.y, zeroCoordinate]),
            yMin: EJSC._.min([point.y, zeroCoordinate])
        };
    },

    /**
     * Calculates the boundary pixels for a bar in the series.
     *
     * @method calculateBarPixels
     * @private
     * @return {Object} The boundary pixels
     * @since 3.0.0
     */
    calculateBarPixels: function(point) {
        // Grab some local pointers
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var spacing = this.getSpacing();
        var xAxisZoom = xAxis.getCurrentZoom(spacing);
        var yAxisZoom = yAxis.getCurrentZoom(spacing);
        var barPoints = this.calculateBarPoints(point);
        var temp;

        // Calculate the bar pixels
        var barPixels = {
            xMax: xAxis.convertPointToPixel(EJSC._.min([barPoints.xMax, xAxisZoom.max])),
            xMin: xAxis.convertPointToPixel(EJSC._.max([barPoints.xMin, xAxisZoom.min])),
            yMax: yAxis.convertPointToPixel(EJSC._.min([barPoints.yMax, yAxisZoom.max])),
            yMin: yAxis.convertPointToPixel(EJSC._.max([barPoints.yMin, yAxisZoom.min]))
        };

        // Reverse the x values if needed
        if (barPixels.xMax < barPixels.xMin) {
            temp = barPixels.xMax;
            barPixels.xMax = barPixels.xMin;
            barPixels.xMin = temp;
        }

        // Reverse the y values if needed
        if (barPixels.yMax < barPixels.yMin) {
            temp = barPixels.yMax;
            barPixels.yMax = barPixels.yMin;
            barPixels.yMin = temp;
        }

        // Return the bar pixels
        return barPixels;
    },

    /**
     * Calculates the size (width) for a bar in the series.
     *
     * @method calculateBarPixels
     * @private
     * @return {Number} The size of the bar
     * @since 3.0.0
     */
    calculateBarSize: function() {
        // Grab some local pointers
        var data = this.data;

        // Define some local variables
        var xs = [];
        var barSize = 1;

        // If there are more than 1 points, determine the min distance between the points
        if (data.length > 1) {
            // Add each point's x value to the array
            EJSC._.forEach(data, function(point) {
                xs.push(point.x);
            });

            // Sort the array
            xs.sort();

            // Find the minimum difference
            EJSC._.forEach(xs, function(x, index) {
                if (index === 0) {
                    barSize = null;
                }
                else {
                    barSize = EJSC._.min([barSize, x - xs[index - 1]]);
                }
            });
        }

        // Return the bar size
        return barSize * this.bar.size;
    },

    /**
     * Calculates the extremes for the series based off of its data.
     *
     * @method calculateExtremes
     * @private
     * @return {Object<Number xMin, Number xMax, Number yMin, Number yMin>} The calculated extremes
     * @since 3.0.0
     */
    calculateExtremes: function() {
        // Grab some local pointers
        var extremes = this._super();
        var barSize = this.calculateBarSize();
        var zeroCoordinate = this.zeroCoordinate;

        // Update extremes to the zero coordinate
        extremes.yMin = EJSC._.min([extremes.yMin, zeroCoordinate]);
        extremes.yMax = EJSC._.max([extremes.yMax, zeroCoordinate]);

        // Update extremes to the bar size
        extremes.xMin -= (barSize / 2);
        extremes.xMax += (barSize / 2);

        // Return the extremes
        return extremes;
    },

    /**
     * Draws the series to the chart.
     *
     * @method draw
     * @private
     * @since 3.0.0
     */
    draw: function() {
        // Grab some local pointers
        var series = this;
        var chart = this.chart;
        var color = this.color;
        var bar = this.bar;

        // Define the drawing style
        var style = EJSC._.merge({}, bar, {
            fillStyle: bar.fillStyle || EJSC._.setOpacity(color, 0.5),
            strokeStyle: bar.strokeStyle || color
        });

        // Loop through the visible points
        EJSC._.forEach(this.getVisiblePoints(), function(point) {
            // Calculate the bar points
            var barPixels = series.calculateBarPixels(point);

            // Draw the bar
            chart.rect(
                Math.round(barPixels.xMin) + 0.5,
                Math.round(barPixels.yMin) + 0.5,
                Math.round(barPixels.xMax - barPixels.xMin),
                Math.round(barPixels.yMax - barPixels.yMin),
                style
            );
        });

        // Draw the points if needed
        if (this.points.visible === true) {
            this._super.apply(this, arguments);
        }
    },

    /**
     * Calculates the spacing needed for the series.
     *
     * @method getSpacing
     * @private
     * @return {Number} The spacing needed for the series
     * @since 3.0.0
     */
    getSpacing: function() {
        // Declare some local variables
        var pointSpacing = this.points.visible ? this._super.apply(this, arguments) : 0;
        var lineSpacing = Math.ceil(this.bar.lineWidth / 2);

        // Return the spacing
        return EJSC._.max([pointSpacing, lineSpacing]);
    },

    /**
     * Determines if the given point is in range of the cursor or not.
     *
     * @method isPointInRange
     * @private
     * @param {EJSC.Point} point The point
     * @param {MouseEvent} event The mouse event
     * @return {Boolean} If the point is in range or not
     * @since 3.0.0
     */
    isPointInRange: function(point, event) {
        // Grab some local pointers
        var chart = this.chart;
        var chartPixels = chart.getChartPixels(event);
        var cursorX = chartPixels.x;
        var cursorY = chartPixels.y;
        var spacing = this.getSpacing();
        var barPixels = this.calculateBarPixels(point);

        // Determine if the bar is in range of the cursor
        var barInRange = (
            cursorX >= barPixels.xMin - spacing - 5 &&
            cursorX <= barPixels.xMax + spacing + 5 &&
            cursorY >= barPixels.yMin - spacing - 5 &&
            cursorY <= barPixels.yMax + spacing + 5
        );

        // Determine if the point is in range of the cursor
        var pointInRange = (this.points.visible ? this._super.apply(this, arguments) : false);

        // Return if the bar or the point (if shown) is in range of the cursor
        return barInRange || pointInRange;
    },

    /**
     * Determines if a point is currently visible or not.
     *
     * @method isPointVisible
     * @private
     * @param {Array<Number, Number>} point The point to determine
     * @return {Boolean} If the point is currently visible or not
     * @since 3.0.0
     */
    isPointVisible: function(point) {
        // Grab some local pointers
        var xAxis = this.referenceXAxis();
        var yAxis = this.referenceYAxis();
        var spacing = this.getSpacing();
        var xAxisZoom = xAxis.getCurrentZoom(spacing);
        var yAxisZoom = yAxis.getCurrentZoom(spacing);
        var barPoints = this.calculateBarPoints(point);

        // Determine if the bar is visible or not
        var barVisible = (
            EJSC._.isNil(point.x) === false &&
            EJSC._.isNil(point.y) === false &&
            barPoints.xMax >= xAxisZoom.min &&
            barPoints.xMin <= xAxisZoom.max &&
            barPoints.yMax >= yAxisZoom.min &&
            barPoints.yMin <= yAxisZoom.max
        );

        // Determine if the point is visible or not
        var pointVisible = (this.points.visible ? this._super.apply(this, arguments) : false);

        // Return if this bar or the point (if shown) is visible or not
        return barVisible || pointVisible;
    }
});
})();