import { useEffect, useState } from 'react';
import type { WatchedMovie } from '../types';

export function useLocalStorageState(initialState: [], key: string) {
  const [value, setValue] = useState<WatchedMovie[]>(function () {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return [];
    return storedValue ? JSON.parse(storedValue) : initialState;
    // return JSON.parse(localStorage.getItem("watched") ?? "[]");
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue] as const; //--> this is a tuple example
}
