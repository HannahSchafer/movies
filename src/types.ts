export type Movie = {
  id: string;
  title: string;
  poster_path: string;
};

export type PopularMovies = {
  results: Movie[];
};
