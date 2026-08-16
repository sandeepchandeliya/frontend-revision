import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from 'react';

import type { Cities, CitiesContextType } from '../types';

const BASE_URL = 'http://localhost:8000';

interface CitiesState {
  cities: Cities[];
  isLoading: boolean;
  currentCity: Cities | null;
  error: string;
}

const initialState: CitiesState = {
  cities: [],
  isLoading: false,
  currentCity: null,
  error: '',
};

type CitiesAction =
  | { type: 'loading' }
  | { type: 'cities/loaded'; payload: Cities[] }
  | { type: 'city/loaded'; payload: Cities }
  | { type: 'city/created'; payload: Cities }
  | { type: 'cities/deleted'; payload: string }
  | { type: 'rejected'; payload: string };

function reducer(state: CitiesState, action: CitiesAction) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case 'cities/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error('unknown action');
  }
}

//  1->>>>>>Creates the context.
const CitiesContext = createContext<CitiesContextType | undefined>(undefined);

function CitiesProvider({ children }: { children: ReactNode }) {
  // const [cities, setCities] = useState<Cities[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState<Cities | null>(null);
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();

        dispatch({ type: 'cities/loaded', payload: data });
      } catch {
        dispatch({ type: 'rejected', payload: 'There was an error' });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: string) {
    if (id === currentCity?.id) return;

    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: 'city/loaded', payload: data });
    } catch {
      dispatch({ type: 'rejected', payload: 'There was an geting city' });
    }
  }

  async function createCity(newCity: Cities) {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      // console.log(data);
      dispatch({ type: 'city/created', payload: data });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error in creating city',
      });
    }
  }
  async function deleteCity(id: string) {
    dispatch({ type: 'loading' });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'cities/deleted', payload: id });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting a city',
      });
    }
  }

  return (
    //2->>>>>Provides a value to components.
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

//3->>>>>Consumes the value using useContext hook
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error('CitiesContext was used outside of CitiesProvider');
  return context;
}

export { CitiesProvider, useCities };
