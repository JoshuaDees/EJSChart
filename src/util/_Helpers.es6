/*
 * Returns the item that was sent in.
 * Used as a default conversion method.
 *
 * @method identity
 * @param {Variable} item The item to convert
 * @return {Variable} The converted item
 */
const identity = (item) => item;

/*
 * Blank function that does nothing and returns nothing.
 * Used to make sure undefined is returned correctly.
 *
 * @method noop
 */
const noop = () => {
  // no-op
};

export { identity, noop };
