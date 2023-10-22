export type Movie = {
  id: string;
  title: string;
  poster_path: string;
};

export type MovieDetail = {
  id: string;
  budget: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  vote_average: number;
};

export type Movies = {
  results: Movie[];
  page: number;
  total_pages: number;
};
