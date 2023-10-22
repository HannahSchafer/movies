import React, { useCallback, useEffect, useState } from "react";
import MovieCarousel from "./components/MovieCarousel";
import { Movie } from "./types";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "./server";
import "./Home.css";

const Home: React.FC = () => {
  const [popularList, setPopularList] = useState<Movie[]>();
  const [nowPlayingList, setNowPlayingList] = useState<Movie[]>();
  const [topRatedList, setTopRatedList] = useState<Movie[]>();
  const [upcomingList, setUpcomingList] = useState<Movie[]>();

  const fetchPopular = useCallback(async () => {
    const movies = await getPopularMovies();

    setPopularList(movies.results);
  }, []);

  const fetchNowPlaying = useCallback(async () => {
    const movies = await getNowPlayingMovies();

    setNowPlayingList(movies.results);
  }, []);

  const fetchTopRated = useCallback(async () => {
    const movies = await getTopRatedMovies();

    setTopRatedList(movies.results);
  }, []);

  const fetchUpcoming = useCallback(async () => {
    const movies = await getUpcomingMovies();

    setUpcomingList(movies.results);
  }, []);

  useEffect(() => {
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    fetchUpcoming();
  }, [fetchPopular, fetchNowPlaying, fetchTopRated, fetchUpcoming]);

  return (
    <div>
      <div>Popular Movies</div>
      <MovieCarousel list={popularList} />

      <div>Now Playing</div>
      <MovieCarousel list={nowPlayingList} />

      <div>Top Rated</div>
      <MovieCarousel list={topRatedList} />

      <div>Upcoming</div>
      <MovieCarousel list={upcomingList} />
    </div>
  );
};

export default Home;
