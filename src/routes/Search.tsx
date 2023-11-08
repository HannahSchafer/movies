import React, { useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useFetchSearch } from "../hooks/search";

const Search: React.FC = () => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  // const { searchTerm } = useContext()

  const { list, isLoading, hasError, hasMore } = useFetchSearch(
    location.search,
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
      <div>Search results</div>
      <MovieList list={list} lastElement={lastMovieElement} />
    </div>
  );
};

export default Search;
