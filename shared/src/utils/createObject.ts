/**
 * An utility function for creating readonly pure objects.
 * @param object An object
 */
function createObject<T>(object: T): Readonly<T> {
  return (function (obj: T) {
    return Object.freeze(obj);
  })(Object.assign(Object.create(null), object));
}

export { createObject };
