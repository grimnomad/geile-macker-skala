import { useEffect } from 'react';

/**
 * Sets the title of the document.
 * @param title A title
 */
function useTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export { useTitle };
