import { identity } from './_Helpers.es6';

// TODO: $Array documentation
let $Array = (array) => new class {
  // constructor
  constructor($array) {
    this.result = $array;
  }

  /**
   * Iterates over elements of array, returning an array of all elements predicate returns truthy for.
   * The predicate is invoked with three arguments: (value, key, array).
   *
   * @example
   *
   *   $Array([0, 1, 2]).filter((value, key, array) => value > 0).result;
   *   // => [1, 2]
   *
   * @method filter
   * @param {Function} predicate The function invoked per iteration
   * @chainable
   * @since @todo
   */
  filter(predicate = identity) {
    // TODO: Cover if no built-in method
    this.result = Array.prototype.filter.call(this.result, predicate);

    // Chain
    return this;
  }

  /**
   * Iterates over elements of array and invokes iteratee for each element.
   * The iteratee is invoked with three arguments: (value, key, array).
   * Iteratee functions may exit iteration early by explicitly returning false.
   *
   * @example
   *
   *   $Array([1, 2]).forEach((value, key, array) => console.log(value));
   *   // => Logs '1' then '2'.
   *
   * @method forEach
   * @param {Function} predicate The function invoked per iteration
   * @chainable
   * @since @todo
   */
  forEach(predicate = identity) {
    // TODO: Cover if no built-in method
    Array.prototype.forEach.call(this.result, predicate);

    // Chain
    return this;
  }

  // TODO: $Array().first documentation
  first() {
    // Return the first item in the array
    return this.result[0];
  }

  /**
   * Checks if the given value exists in the given array.
   *
   * @example
   *
   *   $Array([1, 2, 3]).includes(1);
   *   // => true
   *
   * @method includes
   * @param {*} valueToFind The value to search for
   * @param {Number} [fromIndex=0] The index to search from (for arrays)
   * @return {Boolean} If value is found
   * @since @todo
   */
  includes(valueToFind, fromIndex = 0) {
    // TODO: Cover if no built-in method
    return Array.prototype.includes.call(this.result, valueToFind, fromIndex);
  }

  // TODO: $Array().last documentation
  last() {
    return this.result[this.result.length - 1];
  }

  // TODO: $Array().slice documentation
  slice(start = 0, end = this.result.length) {
    // TODO: Cover if no built-in method
    this.result = Array.prototype.slice.call(this.result, start, end);

    // Chain
    return this;
  }

  // TODO: $Array().sort documentation
  sort(predicate = identity) {
    // TODO: Cover if no built-in method
    this.result = Array.prototype.sort.call(this.result, predicate);

    // Chain
    return this;
  }

  /**
   * Transforms an array into a new accumulator array.
   *
   * @example
   *
   *   $Array([2, 3, 4]).transform((result, n) => {
   *     result.push(n *= n);
   *     return n % 2 == 0;
   *   }, []).result;
   *   // => [4, 9]
   *
   * @method transform
   * @param {Function} [predicate=identity] The function invoked per iteration
   * @param {*} [accumulator=[]] The custom accumulator
   * @chainable
   * @since @todo
   */
  transform(predicate = identity, accumulator = []) {
    // Usese the built in forEach method
    $Array.forEach(this.result, (value, index, object) => predicate(accumulator, value, index, object));

    // Store the accumulator
    this.result = accumulator;

    // Chain
    return this;
  }

  /**
   * Creates an array excluding all given values using SameValueZero for equality comparisons.
   *
   * @example
   *
   *   $Array([2, 1, 2, 3]).without(1, 2).result;
   *   // => [3]
   *
   * @method without
   * @param {*} [...values] The values to exclude
   * @chainable
   * @since @todo
   */
  without(...values) {
    // Filter out the unwanted values
    this.result = $Array.filter(this.result, value => !$Array.includes(values, value));

    // Chain
    return this;
  }
}(array);

/**
 * Iterates over elements of array, returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, key, array).
 *
 * @example
 *
 *   $Array.filter([0, 1, 2], (value, key, array) => value > 0);
 *   // => [1, 2]
 *
 * @static
 * @method filter
 * @param {Array} array The array to iterate over
 * @param {Function} [predicate=identity] The function invoked per iteration
 * @return {Array} The new filterd array
 * @since @todo
 */
$Array.filter = (array, predicate = identity) => array && $Array(array).filter(predicate).result;

/**
 * Iterates over elements of array and invokes iteratee for each element.
 * The iteratee is invoked with three arguments: (value, key, array).
 * Iteratee functions may exit iteration early by explicitly returning false.
 *
 * @example
 *
 *   $Array.forEach([1, 2], (value, key, array) => console.log(value));
 *   // => Logs '1' then '2'.
 *
 * @static
 * @method forEach
 * @param {Array} array The array to iterate over
 * @param {Function} [predicate=identity] The function invoked per iteration
 * @return {Array} The array
 * @since @todo
 */
$Array.forEach = (array, predicate = identity) => array && $Array(array).forEach(predicate).result;

// TODO: $Array.first documentation
$Array.first = (array) => array && $Array(array).first();

/**
 * Checks if the given value exists in the given array.
 *
 * @example
 *
 *   $Array.includes([1, 2, 3], 1);
 *   // => true
 *
 * @static
 * @method includes
 * @param {Array} array The array to inspect
 * @param {*} valueToFind The value to search for
 * @param {Number} [fromIndex=0] The index to search from (for arrays)
 * @return {Boolean} If value is found
 * @since @todo
 */
$Array.includes = (array, valueToFind, fromIndex = 0) => array && $Array(array).includes(valueToFind, fromIndex);

// TODO: $Array.last documentation
$Array.last = (array) => array && $Array(array).last();

// TODO: $Array.slice documentation
$Array.slice = (array, start = 0, end = array.length) => array && $Array(array).slice(start, end).result;

// TODO: $Array.sort documentation
$Array.sort = (array, predicate = identity) => array && $Array(array).sort(predicate).result;

/**
 * Transforms an array into a new accumulator array.
 *
 * @example
 *
 *   $Array.transform([2, 3, 4], (result, n) => {
 *     result.push(n *= n);
 *     return n % 2 == 0;
 *   }, []);
 *   // => [4, 9]
 *
 * @method transform
 * @param {Array} array The array to iterate over
 * @param {Function} [predicate=identity] The function invoked per iteration
 * @param {*} [accumulator=[]] The custom accumulator
 * @return {*} The accumulated value
 * @since @todo
 */
$Array.transform = (array, predicate = identity, accumulator = []) => array && $Array(array).transform(predicate, accumulator).result;

/**
 * Creates an array excluding all given values using SameValueZero for equality comparisons.
 *
 * @example
 *
 *   $Array.without([2, 1, 2, 3], 1, 2);
 *   // => [3]
 *
 * @static
 * @method without
 * @param {Array} array The array to inspect
 * @param {*} [...values] The values to exclude
 * @return {Array} The new array of filtered values
 * @since @todo
 */
$Array.without = (array, ...values) => array && $Array(array).without(...values).result;

export default $Array;
