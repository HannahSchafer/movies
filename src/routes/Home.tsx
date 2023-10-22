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
  // const {
  //   list: nowPlayingList,
  //   isLoading: isLoadingNowPlay,
  //   hasError: errorNowPlay,
  // } = useFetchMovies("now_playing");
  // const {
  //   list: topRatedList,
  //   isLoading: isLoadingTopRated,
  //   hasError: errorTopRated,
  // } = useFetchMovies("top_rated");
  // const {
  //   list: upcomingList,
  //   isLoading: isLoadingUpcoming,
  //   hasError: errorUpcoming,
  // } = useFetchMovies("upcoming");

  return (
    <div>
      <ExploreButton title="Popular Movies" category="popular" />
      <MovieCarousel list={popularList} />

      {/* <ExploreButton title="Now Playing" category="nowPlaying" />
      <MovieCarousel list={nowPlayingList} />

      <ExploreButton title="Top Rated" category="topRated" />
      <MovieCarousel list={topRatedList} />

      <ExploreButton title="Upcoming" category="upcoming" />
      <MovieCarousel list={upcomingList} /> */}
    </div>
  );
};

export default Home;
