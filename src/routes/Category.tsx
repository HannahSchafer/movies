import React, { useState, useCallback, useRef } from "react";
import { useStoreContext } from "../stores/StoreContext";
import MovieList from "../components/MovieList";
import { useFetchMovies } from "../hooks/movies";
import "./MovieDetails.css";

const Category: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    state: { selectedCategory },
  } = useStoreContext();

  const { list, isLoading, hasError, hasMore } = useFetchMovies(
    selectedCategory,
    pageNumber
  );
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElement = useCallback(
    (node: Element) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return (
    <div>
      <div>{selectedCategory}</div>
      <MovieList list={list} lastElement={lastMovieElement} />
    </div>
  );
};

export default Category;
