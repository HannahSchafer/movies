import React from "react";
import { useStoreContext } from "../stores/StoreContext";
import { useFetchMovieDetails } from "../hooks/movie";
import getString from "../utils/getString";
import { MovieDetail } from "../types";
import "./MovieDetails.css";

const DETAILS = [
  "title",
  "overview",
  "release_date",
  "runtime",
  "vote_average",
  "budget",
  "revenue",
];

const MovieDetails: React.FC = () => {
  const {
    state: { selectedMovie },
  } = useStoreContext();
  const { details, isLoading, hasError } = useFetchMovieDetails(selectedMovie);
  if (!details) {
    return null;
  }
  return (
    <div>
      <div className="title">Movie details</div>
      {DETAILS.map((detail, i) => {
        return (
          <div className="detail-item" key={i}>
            {getString(detail)}: {details[detail as keyof MovieDetail]}
          </div>
        );
      })}
    </div>
  );
};

export default MovieDetails;
