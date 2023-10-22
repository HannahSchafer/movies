import { createContext, useContext, useEffect, useReducer } from "react";

export enum ActionTypes {
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
}

export const StoreContext = createContext<any | undefined>(undefined);

type StoreState = {
  searchTerm: string;
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
    default:
      console.warn("Not a valid action type");
      return state;
  }
};

const defaultStoreState: StoreState = {
  searchTerm: "",
};

type ContextStore = {
  state: StoreState;
  actions: {
    setSearchTerm: (term: string) => void;
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
    },
    actions: {
      setSearchTerm: (term: string) => {
        dispatch({
          type: ActionTypes.SET_SEARCH_TERM,
          payload: term,
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
