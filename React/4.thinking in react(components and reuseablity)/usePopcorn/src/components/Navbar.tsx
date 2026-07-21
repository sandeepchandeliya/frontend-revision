import type { Movie } from '../types';

interface NavbarProp {
  query: string;
  setQuery: (val: string) => void;
  movies: Movie[];
}

export default function Navbar({ query, setQuery, movies }: NavbarProp) {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
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
