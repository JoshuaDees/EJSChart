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
