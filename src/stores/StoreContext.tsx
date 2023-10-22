import { createContext, useContext, useEffect, useReducer } from "react";
import { Movie } from "../types";

export enum ActionTypes {
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
  SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE",
}

export const StoreContext = createContext<any | undefined>(undefined);

type StoreState = {
  searchTerm: string;
  selectedMovie?: number;
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
    default:
      console.warn("Not a valid action type");
      return state;
  }
};

const defaultStoreState: StoreState = {
  searchTerm: "",
  selectedMovie: undefined,
};

type ContextStore = {
  state: StoreState;
  actions: {
    setSearchTerm: (term: string) => void;
    setSelectedMovie: (movieId: number) => void;
  };
};

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, defaultStoreState);

  // useEffect(() => {
  //   dispatch({
  //     type: ActionTypes.SET_ALL_DATA,
  //     payload: { data: benchmarkData, key: "benchmarkData" },
  //   });
  //   dispatch({
  //     type: ActionTypes.SET_ALL_DATA,
  //     payload: { data: accelerateData, key: "accelerateData" },
  //   });
  // }, [accelerateData, benchmarkData, configData, hardwareTargetApiData]);

  const store: ContextStore = {
    state: {
      searchTerm: state.searchTerm,
      selectedMovie: state.selectedMovie,
    },
    actions: {
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
