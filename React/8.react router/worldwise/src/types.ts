export interface CitiesContextType {
  cities: Cities[];
  isLoading: boolean;
  currentCity: Cities | null;
  getCity: (id: string) => Promise<void>;
  createCity: (newcity: Cities) => Promise<void>;
  deleteCity: (id: string) => Promise<void>;
}

export interface Cities {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: string;
}
