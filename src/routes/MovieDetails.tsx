import React from "react";
import { useStoreContext } from "../stores/StoreContext";
import { useFetchMovieDetails } from "../hooks/movie";
import getString from "../utils/getString";

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
      <div>Movie details</div>
      <div>
        {getString("title")}: {details.title}
      </div>
      <div>
        {getString("overview")}: {details.overview}
      </div>
      <div>
        {getString("releaseDate")}: {details.release_date}
      </div>
      <div>
        {getString("runtime")}: {details.runtime}
      </div>
      <div>
        {getString("voteAverage")}: {details.vote_average}
      </div>
      <div>
        {getString("budget")}: {details.budget}
      </div>
      <div>
        {getString("revenue")}: {details.revenue}
      </div>
    </div>
  );
};

export default MovieDetails;
