import EJSC from '../EJSC.es6';
import $Object from '../util/Object.es6';
import $String from '../util/String.es6';

/**
 * Base class from which all EJSC classes descend.
 *
 * @class EJSC.Inheritable
 * @private
 * @constructor
 * @param {Object} [options={}] The options to apply
 * @since @todo
 */
export default EJSC.Inheritable = class Inheritable {
  /**
   * Defines if the class is initialized.
   *
   * @property {Boolean} initialized
   * @private
   * @default false
   * @since @todo
   */

  /**
   * Defines if the class is currently listening for property changes.
   *
   * @property {Boolean} listening
   * @private
   * @default true
   * @since @todo
   */

  // constructor
  constructor(options = {}) {
    // Initialize the properties
    this.init();

    // Apply the given options
    this.apply(options);

    // Mark the class as initialized
    this.initialized = true;
  }

  /**
   * Applies new options to the class.
   *
   * @example
   *   ```
   *   // Create a class
   *   let myClass = new EJSC.SomeClass();
   *
   *   // Apply some new options
   *   myClass.apply({
   *     newProperty: 'newValue'
   *   });
   *   ```
   *
   * @method apply
   * @param {Object} [options={}] The options to apply
   * @since @todo
   */
  apply(options = {}) {
    // Store listening
    let listening = this.listening;

    // Stop listening
    this.listening = false;

    // Loop through each of the options
    $Object(options).forEach((value, key) => {
      // Grab the setter
      let setter = this['set' + $String.upperFirst(key)];

      // Use the setter if defined
      if ($Object.isFunction(setter)) {
        // Call the setter
        setter.call(this, value, false);
      }

      // Otherwise use merge
      else {
        // Merge the object into the class
        $Object.merge(this, {
          [key]: value
        });
      }
    });

    // Restore listening
    this.listening = listening;

    // Run the update method
    if (this.initialized) {
      this.update();
    }
  }

  /**
   * Initializes the variable properties of the class.
   *
   * @method init
   * @private
   * @since @todo
   */
  init() {
    // Initialize the private properties
    this.initialized = false;
    this.listening = true;
  }

  /**
   * Updates the class after properties have changed.
   *
   * @method update
   * @private
   * @since @todo
   */
  update() {
    // no-op
  }
};
