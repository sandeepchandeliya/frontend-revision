export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MainProp {
  movies: Movie[];
  selectedId: string | null;
  onSelectMovie: (id: string) => void;
  onCloseMovie: () => void;
}
