import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import { useFetchSearch } from "../hooks/search";
import { useStoreContext } from "../stores/StoreContext";

import "./Search.css";

const Search: React.FC = () => {
  const location = useLocation();
  const {
    state: { searchTerm },
  } = useStoreContext();
  console.log("location", location);

  const { searchList, isLoadingSearch, errorSearch } = useFetchSearch(
    location.search
  );

  return (
    <div>
      <div>Search results</div>
      <MovieList list={searchList} />
    </div>
  );
};

export default Search;
