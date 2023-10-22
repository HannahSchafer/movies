import { createContext, useContext, useReducer } from "react";
import { Movie } from "../types";

export enum ActionTypes {
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
  SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
  SET_MOVIE_LISTS = "SET_MOVIE_LISTS",
}

export const StoreContext = createContext<any | undefined>(undefined);

type StoreState = {
  movieLists: any;
  searchTerm: string;
  selectedMovie?: number;
  selectedCategory?: string;
};

type ActionType = {
  type: ActionTypes;
  payload?: any;
};

type StoreContextProviderProps = {
  children?: any;
};

const reducer = (state: StoreState, action: ActionType): StoreState => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    case ActionTypes.SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    }
    case ActionTypes.SET_SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    }
    case ActionTypes.SET_MOVIE_LISTS: {
      const updatedData = {
        ...state.movieLists,
        [action.payload.key]: action.payload.data,
      };
      const data = action.payload.key ? updatedData : state.movieLists;
      return {
        ...state,
        movieLists: data,
      };
    }
    default:
      console.warn("Not a valid action type");
      return state;
  }
};

const defaultStoreState: StoreState = {
  movieLists: {},
  searchTerm: "",
  selectedMovie: undefined,
  selectedCategory: undefined,
};

type ContextStore = {
  state: StoreState;
  actions: {
    setMovieLists: (category: string, list: Movie[]) => void;
    setSearchTerm: (term: string) => void;
    setSelectedMovie: (movieId: number) => void;
    setSelectedCategory: (category: string) => void;
  };
};

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, defaultStoreState);

  const store: ContextStore = {
    state: {
      movieLists: state.movieLists,
      searchTerm: state.searchTerm,
      selectedMovie: state.selectedMovie,
      selectedCategory: state.selectedCategory,
    },
    actions: {
      setMovieLists: (category: string, list: Movie[]) => {
        const payloadObj = { data: list, key: category };
        dispatch({
          type: ActionTypes.SET_MOVIE_LISTS,
          payload: payloadObj,
        });
      },
      setSearchTerm: (term: string) => {
        dispatch({
          type: ActionTypes.SET_SEARCH_TERM,
          payload: term,
        });
      },
      setSelectedMovie: (movieId: number) => {
        dispatch({
          type: ActionTypes.SET_SELECTED_MOVIE,
          payload: movieId,
        });
      },
      setSelectedCategory: (category: string) => {
        dispatch({
          type: ActionTypes.SET_SELECTED_CATEGORY,
          payload: category,
        });
      },
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStoreContext(): ContextStore {
  const context = useContext(StoreContext);

  if (context === undefined) {
    console.warn(
      "useStorecontext has to be used within the StoreContextProvider"
    );
  }

  return context;
}
