import { useEffect, useRef, useState } from 'react';
import StarRating from './StarRating';
import Loader from './Loader';
import type { MovieDetails, WatchedMovie } from '../types';
import { useKey } from './useKey';

const KEY = '1f7cc905';
export default function SelectedMovie({
  selectedId,
  onCloseMovie,
  onWatched,
  watched,
}: {
  selectedId: string;
  onCloseMovie: () => void;
  onWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}) {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const countRef = useRef(0);
  // how many time user clicks while rating
  useEffect(
    function () {
      if (userRating) countRef.current = countRef.current + 1;
    },
    [userRating],
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
        );
        const data = await res.json();
        // console.log(data);
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId],
  );

  useEffect(
    function () {
      if (!movie) return;
      document.title = `MOVIE |${movie?.Title}`;

      return function () {
        document.title = 'UsePopcorn';
      };
    },

    [movie],
  );

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: +imdbRating,
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
      countRating: countRef.current,
    };
    onWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey('Escape', onCloseMovie);

  // useEffect(
  //   function () {
  //     function callBack(e: KeyboardEvent) {
  //       if (e.code === 'Escape') {
  //         onCloseMovie();
  //       }
  //     }
  //     document.addEventListener('keydown', callBack);

  //     //clean up
  //     return function () {
  //       document.removeEventListener('keydown', callBack);
  //     };
  //   },
  //   [onCloseMovie],
  // );

  if (!movie) return null;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actor,
    Director: director,
    Genre: genre,
  } = movie;

  return (
    <>
      <div className="details">
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <img src={poster} alt={`Poster of ${movie}`} />
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐️</span>
                  {imdbRating} IMDB rating
                </p>
              </div>
            </header>

            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={24}
                      onSetRating={setUserRating}
                    />
                    {userRating > 0 && (
                      <button className="btn-add" onClick={handleAdd}>
                        +Add to list
                      </button>
                    )}
                  </>
                ) : (
                  <p>
                    You already rated this movie {watchedUserRating}{' '}
                    <span>⭐️</span>.
                  </p>
                )}
              </div>
              <p>
                <em>
                  {plot}, {year}
                </em>
              </p>
              <p>Starting {actor}</p>
              <p>Directed by {director}</p>
            </section>
          </>
        )}

        {/* {selectedId} */}
      </div>
    </>
  );
}
