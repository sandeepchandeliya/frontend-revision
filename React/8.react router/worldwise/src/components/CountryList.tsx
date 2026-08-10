import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

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

export interface Countries {
  country: string;
  emoji: string;
}

export default function CountryList({
  cities,
  isLoading,
}: {
  cities: Cities[];
  isLoading: boolean;
}) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city!" />;

  const countries: Countries[] = cities.reduce<Countries[]>((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}