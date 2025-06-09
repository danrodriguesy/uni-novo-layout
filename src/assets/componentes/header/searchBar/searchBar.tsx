import { FaSearch, FaMicrophone } from 'react-icons/fa';
import styles from './searchbar.module.css';

function SearchBar() {
  return (
    <div className={styles.searchWrapper}>
      <FaSearch className={styles.iconLeft} />
      <input type="text" placeholder="O que você procura?" className={styles.input} />
      <FaMicrophone className={styles.iconRight} />
    </div>
  );
}

export default SearchBar;
