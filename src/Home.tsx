import React, { useCallback, useEffect, useState } from "react";
import MovieCarousel from "./components/MovieCarousel";
import { Movie } from "./types";
import { getUpcomingMovies } from "./server";
import {
  useFetchPopular,
  useFetchNowPlay,
  useFetchTopRated,
  useFetchUpcoming,
} from "./hooks/movies";
import "./Home.css";

const Home: React.FC = () => {
  const { popularList, isLoadingPopular, errorPopular } = useFetchPopular();
  const { nowPlayingList, isLoadingNowPlay, errorNowPlay } = useFetchNowPlay();
  const { topRatedList, isLoadingTopRated, errorTopRated } = useFetchTopRated();
  const { upcomingList, isLoadingUpcoming, errorUpcoming } = useFetchUpcoming();

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
