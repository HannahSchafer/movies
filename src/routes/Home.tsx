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
      <div className="carousel-container">
        <ExploreButton title="Popular Movies" category="popular" />
        <MovieCarousel list={popularList} />
      </div>

      <div className="carousel-container">
        <ExploreButton title="Now Playing" category="now_playing" />
        <MovieCarousel list={nowPlayingList} />
      </div>

      {/* TODO: Lazy load all lists below the fold here */}
      <div className="carousel-container">
        <ExploreButton title="Top Rated" category="top_rated" />
        <MovieCarousel list={topRatedList} />
      </div>

      <div className="carousel-container">
        <ExploreButton title="Upcoming" category="upcoming" />
        <MovieCarousel list={upcomingList} />
      </div>
    </div>
  );
};

export default Home;
