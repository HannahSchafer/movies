import { useCallback, useEffect, useState } from "react";
import { Movie } from "../types";
import { getSearchMovie } from "../server";

export const useFetchSearch = (params: string, pageNumber: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState<Movie[]>([]);
  const [hasError, setHasError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const fetchSearch = useCallback(
    async (params: string, pageNumber: number) => {
      const allParams = params + `&page=${pageNumber}`;
      const result = await getSearchMovie(allParams);
      if (result instanceof Error) {
        setHasError(true);
      } else {
        setList((prev) => [...result.results, ...prev]);
        setHasMore(result.page < result.total_pages);
      }
      setIsLoading(false);
      return [list, isLoading, hasError];
    },
    []
  );

  useEffect(() => {
    if (params) {
      fetchSearch(params, pageNumber);
    }
  }, [params, pageNumber, fetchSearch]);

  return { list, isLoading, hasError, hasMore };
};
