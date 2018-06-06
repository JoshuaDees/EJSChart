import EJSC from '../EJSC.es6';
import Util from '../util/Util.es6';

/**
 * Holds the base functionality of all constructable classes.
 *
 * @class EJSC.Class
 * @private
 * @since 3.0.0
 */
export default EJSC.Class = class Class {
  /**
   * Defines if the class is currently listening for changes.
   *
   * @property {Boolean} listening
   * @default true
   * @since 3.0.0
   */

  // constructor
  constructor(options = {}) {
    // Initialize the properties
    this.init();

    // Apply the given options
    this.apply(options);
  }

  /**
   * Applies new options to the class.
   *
   * @example
   *
   *   // Create a class
   *   var myClass = new EJSC.SomeClass();
   *
   *   // Apply some new options
   *   myClass.apply({
   *     newProperty: 'newValue'
   *   });
   *
   * @method apply
   * @public
   * @param {Object} [options={}] The options to apply
   * @since 3.0.0
   */
  apply(options = {}) {
    // Store listening
    let listening = this.listening;

    // Stop listening
    this.listening = false;

    // Loop through each of the options
    Util.forEach(options, (value, name) => {
      // Grab the setter
      let setter = this['set' + Util.upperFirst(name)];

      // Use the setter if defined
      if (setter) {
        // Call the setter
        setter.call(this, value, false);
      }

      // Otherwise use merge
      else {
        // Build a new object with just this option
        let option = {};
        option[name] = value;

        // Merge the object into the class
        Util.merge(this, option);
      }
    });

    // Restore listening
    this.listening = listening;
  }

  /**
   * Initializes the variable properties of the class.
   *
   * @method init
   * @private
   * @since 3.0.0
   */
  init() {
    // Initialize some private properties
    this.listening = true;
  }
};
