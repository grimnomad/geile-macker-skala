import { Ref, useCallback } from 'react';

/**
 * Combines many refs into one. Useful for combining many ref hooks
 *
 * Taken from: https://github.com/facebook/react/issues/13029#issuecomment-497641073
 */
function useCombinedRefs<T extends unknown>(...refs: Ref<T>[]): Ref<T> {
  return useCallback(
    (element: T) =>
      refs.forEach((ref) => {
        if (!ref) {
          return;
        }

        // Ref can have two types - a function or an object. We treat each case.
        if (typeof ref === 'function') {
          return ref(element);
        }

        // As per https://github.com/facebook/react/issues/13029
        // it should be fine to set current this way.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ref as any).current = element;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}

export { useCombinedRefs };
