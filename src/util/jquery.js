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
