import React from "react";
import { Movie as IMovie } from "../../types";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const posterPath = "https://image.tmdb.org/t/p/w500/";

type Props = {
  movie: IMovie;
};

const Movie: React.FC<Props> = ({ movie }) => {
  const navigate = useNavigate();
  const selectMovie = () => {
    navigate("/details");
  };
  return (
    <img
      src={`${posterPath}${movie.poster_path}`}
      alt={movie.title}
      className="movie-poster"
      onClick={() => selectMovie()}
    />
  );
};

export default Movie;
