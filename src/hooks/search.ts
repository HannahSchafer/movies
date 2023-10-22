import { useCallback, useEffect, useState } from "react";
import { Movie } from "../types";
import { getSearchMovie } from "../server";

export const useFetchSearch = (params: string) => {
  const [isLoadingSearch, setIsLoading] = useState<boolean>(true);
  const [searchList, setList] = useState<Movie[]>([]);
  const [errorSearch, setHasError] = useState(false);

  const fetchSearch = useCallback(async (params: string) => {
    const result = await getSearchMovie(params);
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setList(result.results);
    }
    setIsLoading(false);
    return [searchList, isLoadingSearch, errorSearch];
  }, []);

  useEffect(() => {
    if (params) {
      fetchSearch(params);
    }
  }, [params, fetchSearch]);

  return { searchList, isLoadingSearch, errorSearch };
};
