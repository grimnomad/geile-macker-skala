import { useMemo, useState } from 'react';

interface UseBooleanReturn {
  readonly value: boolean;
  toggle(): void;
  setTrue(): void;
  setFalse(): void;
}

function useBoolean(initialValue: boolean = false): UseBooleanReturn {
  const [value, setValue] = useState(initialValue);

  const result = useMemo<Omit<UseBooleanReturn, 'value'>>(
    () => ({
      setFalse: () => setValue(false),
      setTrue: () => setValue(true),
      toggle: () => setValue((val) => !val)
    }),
    []
  );

  return {
    value,
    ...result
  };
}

export type { UseBooleanReturn };
export { useBoolean };
