import React, { useCallback, useEffect, useState } from "react";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../server";
import { Movie } from "../types";

export const useFetchPopular = () => {
  const [isLoadingPopular, setIsLoadingPopular] = useState<boolean>(true);
  const [popularList, setPopularList] = useState<Movie[]>([]);
  const [errorPopular, setHasError] = useState(false);

  const fetchPopular = useCallback(async () => {
    const result = await getPopularMovies();
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setPopularList(result.results);
    }
    setIsLoadingPopular(false);
    return [popularList, isLoadingPopular, errorPopular];
  }, []);

  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  return { popularList, isLoadingPopular, errorPopular };
};

export const useFetchNowPlay = () => {
  const [isLoadingNowPlay, setIsLoading] = useState<boolean>(true);
  const [nowPlayingList, setList] = useState<Movie[]>([]);
  const [errorNowPlay, setHasError] = useState(false);

  const fetchNowPlaying = useCallback(async () => {
    const result = await getNowPlayingMovies();
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setList(result.results);
    }
    setIsLoading(false);
    return [nowPlayingList, isLoadingNowPlay, errorNowPlay];
  }, []);

  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  return { nowPlayingList, isLoadingNowPlay, errorNowPlay };
};

export const useFetchTopRated = () => {
  const [isLoadingTopRated, setIsLoading] = useState<boolean>(true);
  const [topRatedList, setList] = useState<Movie[]>([]);
  const [errorTopRated, setHasError] = useState(false);

  const fetchTopRated = useCallback(async () => {
    const result = await getTopRatedMovies();
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setList(result.results);
    }
    setIsLoading(false);
    return [topRatedList, isLoadingTopRated, errorTopRated];
  }, []);

  useEffect(() => {
    fetchTopRated();
  }, [fetchTopRated]);

  return { topRatedList, isLoadingTopRated, errorTopRated };
};

export const useFetchUpcoming = () => {
  const [isLoadingUpcoming, setIsLoading] = useState<boolean>(true);
  const [upcomingList, setList] = useState<Movie[]>([]);
  const [errorUpcoming, setHasError] = useState(false);

  const fetchUpcoming = useCallback(async () => {
    const result = await getUpcomingMovies();
    if (result instanceof Error) {
      setHasError(true);
    } else {
      setList(result.results);
    }
    setIsLoading(false);
    return [upcomingList, isLoadingUpcoming, errorUpcoming];
  }, []);

  useEffect(() => {
    fetchUpcoming();
  }, [fetchUpcoming]);

  return { upcomingList, isLoadingUpcoming, errorUpcoming };
};
