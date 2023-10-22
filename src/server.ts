import { PopularMovies } from "./types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "808cabea1582db02810d3c942e6781f8";

async function makeRequest(path: string) {
  try {
    const response = await fetch(`${BASE_URL}${path}?api_key=${API_KEY}`);
    const body = await response.json();

    return body;
  } catch (err) {
    console.error(err);
  }
}

export const getPopularMovies = (): Promise<PopularMovies> =>
  makeRequest("/movie/popular");

export const getNowPlayingMovies = (): Promise<PopularMovies> =>
  makeRequest("/movie/now_playing");

export const getTopRatedMovies = (): Promise<PopularMovies> =>
  makeRequest("/movie/top_rated");

export const getUpcomingMovies = (): Promise<PopularMovies> =>
  makeRequest("/movie/upcoming");
