import styles from './filtroInteligente.module.css';
import Fields from './fields/fields';

function FiltroInteligente(){
    return (
        <>
            <div className={styles.container}>
                
                <h1 className={styles.title}><img className={styles.icon} src="src/assets/componentes/filtroInteligente/imagens/icon-filtro-inteligente.png" /> Filtro Inteligente</h1>
                <div>
                    <Fields />
                </div>
            </div>
        </>
    )
}

export default FiltroInteligente;