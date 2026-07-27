import { useRef } from 'react';
import type { Movie } from '../types';
import { useKey } from './useKey';

interface NavbarProp {
  query: string;
  setQuery: (val: string) => void;
  movies: Movie[];
}

export default function Navbar({ query, setQuery, movies }: NavbarProp) {
  const inputRef = useRef<HTMLInputElement>(null);

  useKey('Enter', function () {
    if (document.activeElement === inputRef.current) return;
    inputRef.current?.focus();
    setQuery('');
  });

  // useEffect(
  //   function () {
  //     function callback(e: KeyboardEvent) {
  //       if (document.activeElement === inputRef.current) return;

  //       if (e.code === 'Enter') {
  //         inputRef.current?.focus();
  //         setQuery('');
  //       }
  //     }
  //     document.addEventListener('keydown', callback);

  //     return () => document.removeEventListener('keydown', callback);
  //   },
  //   [setQuery],
  // );

  // useEffect(function () {
  //   const el = document.querySelector<HTMLInputElement>('.search');

  //   if (el) {
  //     el.focus();
  //   }
  // }, []);

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          ref={inputRef}
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
    </>
  );
}
