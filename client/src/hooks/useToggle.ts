import { useCallback, useState } from 'react';

type UseToggleReturn = [boolean, () => void];

function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((val) => !val), []);

  return [value, toggle];
}

export { useToggle };
