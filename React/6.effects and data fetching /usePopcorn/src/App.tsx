import { useState } from 'react';
import Navbar from './components/Navbar';
import { type MainProp, type WatchedMovie } from './types';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import SelectedMovie from './components/SelectedMovie';
import { useMovies } from './components/useMovies';
import { useLocalStorageState } from './components/useLocalStoageState';

function Main({
  movies,
  selectedId,
  onSelectMovie,
  onCloseMovie,
  onWatched,
  watched,
  onDeleteWatched,
}: MainProp) {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const average = (arr: number[]) =>
    arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <>
      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? '–' : '+'}
          </button>
          {isOpen1 && (
            <ul className="list list-movies">
              {movies?.map((movie) => (
                <li
                  key={movie.imdbID}
                  onClick={() => onSelectMovie(movie.imdbID)}
                >
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedId ? (
          <SelectedMovie
            selectedId={selectedId}
            onCloseMovie={onCloseMovie}
            onWatched={onWatched}
            watched={watched}
          />
        ) : (
          <div className="box">
            <button
              className="btn-toggle"
              onClick={() => setIsOpen2((open) => !open)}
            >
              {isOpen2 ? '–' : '+'}
            </button>
            {isOpen2 && (
              <>
                <div className="summary">
                  <h2>Movies you watched</h2>
                  <div>
                    <p>
                      <span>#️⃣</span>
                      <span>{watched.length} movies</span>
                    </p>
                    <p>
                      <span>⭐️</span>
                      <span>{avgImdbRating.toFixed(2)}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{avgUserRating.toFixed(2)}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{avgRuntime.toFixed(2)} min</span>
                    </p>
                  </div>
                </div>

                <ul className="list">
                  {watched.map((movie) => (
                    <li key={movie.imdbID}>
                      <img src={movie.poster} alt={`${movie.title} poster`} />
                      <h3>{movie.title}</h3>
                      <div>
                        <p>
                          <span>⭐️</span>
                          <span>{movie.imdbRating}</span>
                        </p>
                        <p>
                          <span>🌟</span>
                          <span>{movie.userRating}</span>
                        </p>
                        <p>
                          <span>⏳</span>
                          <span>{movie.runtime} min</span>
                        </p>
                        <button
                          className="btn-delete"
                          onClick={() => onDeleteWatched(movie.imdbID)}
                        >
                          ❌
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default function App() {
  // const [movies, setMovies] = useState<Movie[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');
  
  // const [watched, setWatched] = useState<WatchedMovie[]>([]);
  // const [watched, setWatched] = useState<WatchedMovie[]>(function () {
    //   const storedValue = localStorage.getItem('watched');
    //   if (!storedValue) return [];
    //   return JSON.parse(storedValue);
    //   // return JSON.parse(localStorage.getItem("watched") ?? "[]");
    // });
    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleAddWatched(movie: WatchedMovie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function handleSelectMovie(id: string) {
    setSelectedId((selectedid) => (id === selectedid ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }

  // Custom hook
  const { movies, isLoading, error } = useMovies(query);

  // useEffect(function () {
  //   fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=inception`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setMovies(data.Search)});
  // }, []);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} movies={movies} />
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <Main
          watched={watched}
          onWatched={handleAddWatched}
          movies={movies}
          selectedId={selectedId}
          onSelectMovie={handleSelectMovie}
          onCloseMovie={handleCloseMovie}
          onDeleteWatched={handleDeleteWatched}
        />
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
