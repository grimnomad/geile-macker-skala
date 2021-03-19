import { useCallback } from 'react';

interface UseLocalStorageReturn {
  set(value: string): void;
  get(): string | null;
  clear(): void;
  remove(): void;
}

/**
 * This hook serves as a convenient abstraction around the localStorage object.
 * @param key A key to identify the localStorage item
 * @returns An object with set, get, clear, and remove functions
 */
function useLocalStorage(key: string): UseLocalStorageReturn {
  const set = useCallback(
    (value: string) => {
      localStorage.setItem(key, value);
    },
    [key]
  );

  const get = useCallback(() => {
    const value = localStorage.getItem(key);
    return value;
  }, [key]);

  const clear = useCallback(() => {
    localStorage.clear();
  }, []);

  const remove = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return { set, get, remove, clear };
}

export type { UseLocalStorageReturn };
export { useLocalStorage };
