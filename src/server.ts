import { Movies, MovieDetail } from "./types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "808cabea1582db02810d3c942e6781f8";

async function makeRequest(path: string, params?: string) {
  let url = `${BASE_URL}${path}?api_key=${API_KEY}`;
  if (params) {
    url = `${BASE_URL}${path}${params}&api_key=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    const body = await response.json();

    return body;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export const getMovies = (category: string, params: string): Promise<Movies> =>
  makeRequest(`/movie/${category}`, params);

export const getMovieDetails = (movie_id: number): Promise<MovieDetail> =>
  makeRequest(`/movie/${movie_id}`);

export const getSearchMovie = (params: string): Promise<Movies> =>
  makeRequest("/search/movie", params);
