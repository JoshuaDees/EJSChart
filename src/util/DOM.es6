import EJSC from '../EJSC.es6';
import Util from './Util.es6';

/**
 * Houses all of the utility methods for dealing with DOM elements.
 *
 * @class EJSC.dom
 * @private
 * @param {Array|Element|String} selector The CSS selector or DOM element
 * @since 3.0.0
 */
class _DOM_ {
  /**
   * Holds the list of elements to be manipulated.
   *
   *
   * @property {Array} elements
   * @private
   * @since 3.0.0
   */

  /**
   * Get the descendants of each element in the current set of matched elements, filtered by a selector or element.
   *
   * @example
   *
   *   // TODO: example
   *
   * @method find
   * @param {Array|Element|String} selector The CSS selector or DOM element
   * @return {Array} The matching elements
   * @chainable
   * @since 3.0.0
   */
  find(selector) {
    // Declare some local variables
    let elements = [];

    // Convert the selector to an array if it's not already
    if (!Util.isArray(selector)) {
      selector = [selector];
    }

    // Loop through the selectors
    Util.forEach(selector, (selection) => {
      // If the current selector is a DOM element
      if (Util.isElement(selection)) {
        // TODO: Make sure this element is a child of one of the existing elements in this.elements
        // Append the element to the list of matches
        elements.push(selection);
      }

      // TODO: Handle strings
      else if (Util.isString(selection)) {
        // TODO: Handle strings
      }
    });

    // Fix the elements list
    this.elements = this.fix(elements);

    // Return the new list of elements
    return this.elements;
  }

  /**
   * Attach an event handler function for one or more events to the selected elements.
   *
   * @example
   *
   *   // TODO: example
   *
   * @method on
   * @param {Array|String} events The event(s) to listen for
   * @param {Function} callback The function to call when the event occurs
   * @return {Array} The list of element
   * @chainable
   * @since 3.0.0
   */
  on(events, callback) {
      // Convert the events to an array if it's not already
    if (!Util.isArray(events)) {
      events = [events];
    }

    // Loop through each of the elements
    Util.forEach(this.elements, (element) => {
      // Loop through each of the events
      Util.forEach(events, (event) => {
        // Attach the event handler function for the current event to the current element
        if (element.attachEvent) {
          element.attachEvent('on' + event, callback.bind(element));
        }
        else {
          element.addEventListener(event, callback.bind(element), true);
        }
      });
    });

    // Return the new list of elements
    return this.elements;
  }

  // constructor
  constructor(selector) {
    // Initialize some private properties
    this.elements = [];

    // Find the given elements
    this.elements = this.find(selector);

    // Return the new list of elements
    return this.elements;
  }

  /**
   * Fixes the list of elements to include all of the class' methods.
   *
   * @method fix
   * @private
   * @param {Array} elements The list of elements
   * @return {Array} The fixed list of elements
   * @since 3.0.0
   */
  fix(elements) {
    // Loop through each method in this class and attach it to the list of elements
    Util.forEach(['find', 'fix', 'on'], (name) => {
      elements[name] = this[name].bind(this);
    });

    // Return the fixed list of elements
    return elements;
  }
}

export default EJSC.DOM = (selector) => new _DOM_(selector);
