import React from "react";
import MovieList from "../components/MovieList";
import { useFetchSearch } from "../hooks/search";
import { useStoreContext } from "../stores/StoreContext";
import "./Search.css";

const Search: React.FC = () => {
  const {
    state: { searchTerm },
  } = useStoreContext();

  const { searchList, isLoadingSearch, errorSearch } =
    useFetchSearch(searchTerm);

  return (
    <div>
      <div>Search results</div>
      <MovieList list={searchList} />
    </div>
  );
};

export default Search;
