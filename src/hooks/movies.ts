import { useCallback, useEffect, useState } from "react";
import { getMovies } from "../server";
import { useStoreContext } from "../stores/StoreContext";
import { Movie } from "../types";

// export const useFetchBooks = (query, page) => {
//   const fetchMovies = async (query, page) => {
//     const response = await getMovies(query, `?page=${page}`);
//   };
//   useEffect(() => {
//     fetchMovies(query, page);
//   }, [query, page]);
//   return null;
// };

export const useFetchMovies = (category: string, pageNumber: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Movie[]>([]);
  const [hasError, setHasError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const {
    actions: { setMovieLists },
  } = useStoreContext();

  const fetchMovies = useCallback(
    async (category: string, pageNumber: number) => {
      const result = await getMovies(category, `?page=${pageNumber}`);
      if (result instanceof Error) {
        setHasError(true);
      } else {
        setList((prev) => [...prev, ...result.results]);
        setHasMore(result.page < result.total_pages);
        setMovieLists(category, result.results);
      }
      setIsLoading(false);
      return [list, isLoading, hasError, hasMore];
    },
    []
  );

  useEffect(() => {
    if (category) {
      fetchMovies(category, pageNumber);
    }
  }, [category, fetchMovies, pageNumber]);

  return { list, isLoading, hasError, hasMore };
};
