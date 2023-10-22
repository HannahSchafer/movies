import React from "react";
import { Movie } from "../../types";
import "./styles.css";

const posterPath = "https://image.tmdb.org/t/p/w500/";

type Props = {
  list?: Movie[];
};

const MovieList: React.FC<Props> = ({ list }) =>
  list ? (
    <div className="movie-list">
      {list.map((movie) => {
        if (!movie.poster_path) {
          return;
        }
        const { title } = movie;

        return (
          <img
            src={`${posterPath}${movie.poster_path}`}
            alt={title}
            className="movie-poster"
          />
        );
      })}
    </div>
  ) : null;

export default MovieList;
