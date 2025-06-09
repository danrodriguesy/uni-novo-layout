import styles from './topBar.module.css';
import ListaLinks from './listaLinks/listaLinks';
import Slider from './slider/slider';
import BandeirasIdiomas from './bandeiras/bandeirasIdiomas';

function topBar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <ListaLinks />
                    <Slider />
                    <BandeirasIdiomas />
                </div>
            </div>
        </>
    )
}

export default topBar;