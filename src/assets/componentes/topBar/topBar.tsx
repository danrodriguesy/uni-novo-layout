import styles from './topBar.module.css';
import ListaLinks from './listaLinks/listaLinks';
import Slider from './slider/slider';
import BandeirasIdiomas from './bandeiras/bandeirasIdiomas';

type TopBarProps = {
  hidden: boolean;
};

function TopBar({ hidden }: TopBarProps) {
  return (
    <div className={`${styles.inner} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.content}>
        <ListaLinks />
        <Slider />
        <BandeirasIdiomas />
      </div>
    </div>
  );
}

export default TopBar;
