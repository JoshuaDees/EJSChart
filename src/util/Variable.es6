import EJSC from '../EJSC.es6';

/**
 * Houses all of the utility methods for dealing with variables.
 *
 * @class EJSC.Variable
 * @private
 * @since 3.0.0
 */
export default EJSC.Variable = new class {
  /**
   * Checks if value is likely an arguments object.
   *
   * @example
   *
   *   EJSC.Variable.isArguments(function() { return arguments; }());
   *   // => true
   *
   *   EJSC.Variable.isArguments([1, 2, 3]);
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
   *   EJSC.Variable.isArray([1, 2, 3]);
   *   // => true
   *
   *   EJSC.Variable.isArray(document.body.children);
   *   // => false
   *
   *   EJSC.Variable.isArray('abc');
   *   // => false
   *
   *   EJSC.Variable.isArray(function() {});
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
   *   EJSC.Variable.isElement(document.body);
   *   // => true
   *
   *   EJSC.Variable.isElement('<body>');
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
   *   EJSC.Variable.isFunction(function() {});
   *   // => true
   *
   *   EJSC.Variable.isFunction(/abc/);
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
   *   EJSC.Variable.isNil(null);
   *   // => true
   *
   *   EJSC.Variable.isNil(void 0);
   *   // => true
   *
   *   EJSC.Variable.isNil(NaN);
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
   *   EJSC.Variable.isNull(null);
   *   // => true
   *
   *   EJSC.Variable.isNull(void 0);
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
   *   EJSC.Variable.isObject({});
   *   // => true
   *
   *   EJSC.Variable.isObject([1, 2, 3]);
   *   // => true
   *
   *   EJSC.Variable.isObject(function() {});
   *   // => true
   *
   *   EJSC.Variable.isObject(null);
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
   *   EJSC.Variable.isObjectLike({});
   *   // => true
   *
   *   EJSC.Variable.isObjectLike([1, 2, 3]);
   *   // => true
   *
   *   EJSC.Variable.isObjectLike(function() {});
   *   // => false
   *
   *   EJSC.Variable.isObjectLike(null);
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
   *   EJSC.Variable.isPlainObject(new Foo);
   *   // => false
   *
   *   EJSC.Variable.isPlainObject([1, 2, 3]);
   *   // => false
   *
   *   EJSC.Variable.isPlainObject({ x: 0, y: 0 });
   *   // => true
   *
   *   EJSC.Variable.isPlainObject(Object.create(null));
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
   *   EJSC.Variable.isString('abc');
   *   // => true
   *
   *   EJSC.Variable.isString(1);
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
   *   EJSC.Variable.isUndefined(void 0);
   *   // => true
   *
   *   EJSC.Variable.isUndefined(null);
   *   // => false
   *
   * @method isUndefined
   * @param {*} value The value to check
   * @return {Boolean} If value is undefined.
   * @since 3.0.0
   */
  isUndefined(value) {
    // Return if value is undefined
    return value === ((() => {
      // noop
    })());
  }
}();
