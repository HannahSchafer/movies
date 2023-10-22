import { useCallback, useEffect, useState } from "react";
import { getMovieDetails } from "../server";
import { MovieDetail } from "../types";

export const useFetchMovieDetails = (movieId?: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [details, setDetails] = useState<MovieDetail | undefined>(undefined);
  const [hasError, setHasError] = useState(false);

  const fetchMovieDetails = useCallback(async (movieId: number) => {
    const result = await getMovieDetails(movieId);
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setDetails(result);
    }
    setIsLoading(false);
    return [details, isLoading, hasError];
  }, []);

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId);
    }
  }, [movieId, fetchMovieDetails]);

  return { details, isLoading, hasError };
};
