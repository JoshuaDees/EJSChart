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
