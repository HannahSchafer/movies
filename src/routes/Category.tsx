import React from "react";
import { useStoreContext } from "../stores/StoreContext";
import MovieList from "../components/MovieList";
import "./MovieDetails.css";

const Category: React.FC = () => {
  const {
    state: { selectedCategory, movieLists },
  } = useStoreContext();
  console.log("movieLists", movieLists);
  if (!selectedCategory) {
    return null;
  }
  // const { details, isLoading, hasError } = useFetchMovieDetails(selectedMovie);
  // if (!details) {
  //   return null;
  // }
  return (
    <div>
      <div>{selectedCategory}</div>
      <MovieList list={movieLists[selectedCategory]} />
    </div>
  );
};

export default Category;
