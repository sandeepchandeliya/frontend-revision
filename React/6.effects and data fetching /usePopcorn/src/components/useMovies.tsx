import { useEffect, useState } from 'react';
import type { Movie } from '../types';
const KEY = '1f7cc905';

export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(
    function () {
      const controller = new AbortController();
      async function FetchMovies() {
        try {
          setIsLoading(true);
          setError('');

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );
          if (!res.ok) {
            throw new Error('Something went wrong fetching movies data.');
          }
          const data = await res.json();
          if (data.Response === 'False') {
            throw new Error('Movie not found!');
          }
          setMovies(data.Search);
          // console.log(data);
        } catch (err) {
          if (err instanceof Error) {
            // console.error(err.message);
            if (err.name !== 'AbortError') {
              setError(err.message);
            }
          } else {
            setError('Something went wrong');
          }
        } finally {
          setIsLoading(false);
        }
      }

      // if (query.length < 3) {
      //   setMovies([]);
      //   setError('');
      //   return;
      // }
      // handleCloseMovie()
      FetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query],
  );

  return { movies, isLoading, error };
}
