import { useMemo } from 'react';

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
  const funcs = useMemo<UseLocalStorageReturn>(
    () => ({
      set: (value: string) => {
        localStorage.setItem(key, value);
      },
      clear: () => {
        localStorage.clear();
      },
      get: () => {
        const value = localStorage.getItem(key);
        return value;
      },
      remove: () => {
        localStorage.removeItem(key);
      }
    }),
    [key]
  );

  return funcs;
}

export type { UseLocalStorageReturn };
export { useLocalStorage };
