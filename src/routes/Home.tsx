import React from "react";
import MovieCarousel from "../components/MovieCarousel";
import ExploreButton from "../components/ExploreButton";
import {
  useFetchPopular,
  useFetchNowPlay,
  useFetchTopRated,
  useFetchUpcoming,
} from "../hooks/movies";
import "./Home.css";

const Home: React.FC = () => {
  const { popularList, isLoadingPopular, errorPopular } = useFetchPopular();
  const { nowPlayingList, isLoadingNowPlay, errorNowPlay } = useFetchNowPlay();
  const { topRatedList, isLoadingTopRated, errorTopRated } = useFetchTopRated();
  const { upcomingList, isLoadingUpcoming, errorUpcoming } = useFetchUpcoming();

  return (
    <div>
      <ExploreButton title="Popular Movies" category="popular" />
      <MovieCarousel list={popularList} />

      <ExploreButton title="Now Playing" category="nowPlaying" />
      <MovieCarousel list={nowPlayingList} />

      <ExploreButton title="Top Rated" category="topRated" />
      <MovieCarousel list={topRatedList} />

      <ExploreButton title="Upcoming" category="upcoming" />
      <MovieCarousel list={upcomingList} />
    </div>
  );
};

export default Home;
