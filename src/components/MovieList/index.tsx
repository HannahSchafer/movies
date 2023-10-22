import React from "react";
import { Movie as IMovie } from "../../types";
import Movie from "../Movie";
import "./styles.css";

type Props = {
  list?: IMovie[];
  lastElement: any;
};

const MovieList: React.FC<Props> = ({ list, lastElement }) =>
  list ? (
    <div className="movie-list">
      {list.map((movie, index) => {
        if (!movie.poster_path) {
          return;
        }
        if (list.length === index + 1) {
          return (
            <div ref={lastElement} key={movie.id}>
              <Movie movie={movie} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Movie movie={movie} />
            </div>
          );
        }
      })}
    </div>
  ) : null;

export default MovieList;
