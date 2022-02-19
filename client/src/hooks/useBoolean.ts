import { useMemo, useState } from 'react';

interface UseBooleanSetter {
  readonly toggle: () => void;
  readonly on: () => void;
  readonly off: () => void;
}

function useBoolean(initialValue = false): [boolean, UseBooleanSetter] {
  const [value, setValue] = useState(initialValue);

  const setter = useMemo<UseBooleanSetter>(
    () => ({
      off: () => setValue(false),
      on: () => setValue(true),
      toggle: () => setValue((val) => !val)
    }),
    []
  );

  return [value, setter];
}

export { useBoolean };
