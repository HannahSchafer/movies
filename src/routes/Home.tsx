import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import ExploreButton from "../components/ExploreButton";
import { useFetchMovies } from "../hooks/movies";
import "./Home.css";

const Home: React.FC = () => {
  const {
    list: popularList,
    isLoading: isLoadingPopular,
    hasError: errorPopular,
  } = useFetchMovies("popular", 1);
  const {
    list: nowPlayingList,
    isLoading: isLoadingNowPlay,
    hasError: errorNowPlay,
  } = useFetchMovies("now_playing", 1);
  const {
    list: topRatedList,
    isLoading: isLoadingTopRated,
    hasError: errorTopRated,
  } = useFetchMovies("top_rated", 1);
  const {
    list: upcomingList,
    isLoading: isLoadingUpcoming,
    hasError: errorUpcoming,
  } = useFetchMovies("upcoming", 1);

  // TODO: Add skeleton loading components and error states
  return (
    <div>
      <ExploreButton title="Popular Movies" category="popular" />
      <MovieCarousel list={popularList} />

      <ExploreButton title="Now Playing" category="nowPlaying" />
      <MovieCarousel list={nowPlayingList} />

      {/* TODO: Lazy load all lists below the fold here */}
      <ExploreButton title="Top Rated" category="topRated" />
      <MovieCarousel list={topRatedList} />

      <ExploreButton title="Upcoming" category="upcoming" />
      <MovieCarousel list={upcomingList} />
    </div>
  );
};

export default Home;
