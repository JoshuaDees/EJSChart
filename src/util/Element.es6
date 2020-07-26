import $Array from './Array.es6';
import $Object from './Object.es6';

// TODO: $Element documentation
/**
 * @class $Element
 * @private
 */
let $Element = (element) => new class {
  // constructor
  constructor($element) {
    this.result = $element;
  }

  /**
   * Attach an event handler function for one or more events to the element.
   *
   * @example
   *   ```
   *   // TODO: $Element().on example
   *   ```
   *
   * @method on
   * @param {Array|String} events The event(s) to listen for
   * @param {Function} callback The function to call when the event occurs
   * @chainable
   * @since @todo
   */
  on(events, callback) {
    // Convert the events to an array if it's not already
    if (!$Object.isArray(events)) {
      events = [events];
    }

    // Loop through each of the events
    $Array.forEach(events, event => {
      // Attach the event handler function for the current event to the element
      if (this.result.attachEvent) {
        this.result.attachEvent('on' + event, callback.bind(this.result));
      }
      else {
        this.result.addEventListener(event, callback.bind(this.result), true);
      }
    });

    // Chain
    return this;
  }
}(element);

// TODO: $Element.find documentation
$Element.find = (selector) => {
  let element = null;

  if ($Object.isElement(selector)) {
    element = [selector];
  }
  else if ($Object.isString(selector)) {
    element = document.querySelectorAll(selector);
  }
  else if ($Object.isArray(selector)) {
    // TODO: $Element.find $Object.isArray
  }

  return element;
};

/**
 * Attach an event handler function for one or more events to the element.
 *
 * @example
 *   ```
 *   // TODO: $Element.on example
 *   ```
 *
 * @method on
 * @param {Element}
 * @param {Array|String} events The event(s) to listen for
 * @param {Function} callback The function to call when the event occurs
 * @return {Element} The element
 * @since @todo
 */
$Element.on = (element, events, callback) => element && $Element(element).on(events, callback).result;

export default $Element;
