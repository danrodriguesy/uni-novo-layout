import './topBar.css';
import ListaLinks from './listaLinks/listaLinks';
import Slider from './slider/slider';
import BandeirasIdiomas from './bandeiras/bandeirasIdiomas';

function topBar() {
    return (
        <>
            <div className="container">
                <div className="content">
                    <ListaLinks />
                    <Slider />
                    <BandeirasIdiomas />
                </div>
            </div>
        </>
    )
}

export default topBar;