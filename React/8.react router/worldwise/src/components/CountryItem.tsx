import styles from './CountryItem.module.css';
import type { Countries } from './CountryList';

function CountryItem({ country }: { country: Countries }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;