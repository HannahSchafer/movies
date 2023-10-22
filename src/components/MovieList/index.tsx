import React from "react";
import { Movie as IMovie } from "../../types";
import Movie from "../Movie";
import "./styles.css";

type Props = {
  list?: IMovie[];
};

const MovieList: React.FC<Props> = ({ list }) =>
  list ? (
    <div className="movie-list">
      {list.map((movie) => {
        if (!movie.poster_path) {
          return;
        }
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  ) : null;

export default MovieList;
