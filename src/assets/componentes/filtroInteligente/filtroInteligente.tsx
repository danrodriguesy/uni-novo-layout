import styles from './filtroInteligente.module.css';
import Fields from './fields/fields';

function FiltroInteligente(){
    return (
        <>
            <div className={styles.container}>
                
                <h2 className={styles.title}><img className={styles.icon} src="/imagens/filtroInteligente/icon-filtro-inteligente.png" /> Filtro Inteligente</h2>
                <div className={styles.fields}>
                    <Fields />
                </div>
            </div>
        </>
    )
}

export default FiltroInteligente;