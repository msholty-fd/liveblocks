import { useCallback, useState } from 'react';

/**
 * Trigger a re-render programmatically, without changing the component's
 * state.
 *
 * Usage:
 *
 *   const rerender = useRerender();
 *   return (
 *     <button onClick={rerender}>
 *       {Math.random()}
 *     </button>
 *   )
 *
 */
export default function useRerender(): () => void {
  const [, update] = useState<unknown>(null);
  return useCallback(() => {
    // NOTE: This assigns a new, empty, object on every call, which forces
    // a state update, and thus a re-render of the calling component.
    update({});
  }, []);
}

