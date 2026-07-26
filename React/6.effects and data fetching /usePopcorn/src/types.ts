export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
}

export interface MainProp {
  movies: Movie[];
  selectedId: string | null;
  onSelectMovie: (id: string) => void;
  onCloseMovie: () => void;
  watched: WatchedMovie[];
  onWatched: (movie: WatchedMovie) => void;
  onDeleteWatched: (id:string) => void
}

export interface MovieDetails {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}


