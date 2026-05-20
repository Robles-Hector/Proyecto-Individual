import { createContext, useContext, useReducer } from 'react';

const F1Context = createContext();

const initialState = {
  selectedYear: '2026',
  loading: false,
  driversCache: {},
  teamsCache: {},
  activeFilters: { team: 'all', nationality: 'all' }
};

function f1Reducer(state, action) {
  switch (action.type) {
    case 'SET_YEAR':
      return { ...state, selectedYear: action.payload };
    case 'SET_FILTERS':
      return { ...state, activeFilters: { ...state.activeFilters, ...action.payload } };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export function F1Provider({ children }) {
  const [state, dispatch] = useReducer(f1Reducer, initialState);

  return (
    <F1Context.Provider value={{ state, dispatch }}>
      {children}
    </F1Context.Provider>
  );
}

export const useF1 = () => useContext(F1Context);