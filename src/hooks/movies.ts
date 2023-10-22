import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../server";
import { useStoreContext } from "../stores/StoreContext";
import { Movie } from "../types";

export const useFetchMovies = (category: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Movie[]>([]);
  const [hasError, setHasError] = useState(false);
  const {
    actions: { setMovieLists },
  } = useStoreContext();

  const fetchMovies = useCallback(async (category: string) => {
    const result = await getMovies(category);
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setList(result.results);
      setMovieLists(category, result.results);
    }
    setIsLoading(false);
    return [list, isLoading, hasError];
  }, []);

  useEffect(() => {
    if (category) {
      fetchMovies(category);
    }
  }, [category, fetchMovies]);

  return { list, isLoading, hasError };
};
