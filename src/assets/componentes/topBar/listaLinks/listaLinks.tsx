import styles from './listaLinks.module.css';

function listaLinks() {
    return (
        <>
            <ul className={styles.links}>
                <li className={styles.itemIcon}><img className={styles.icon} src="src/assets/componentes/topBar/listaLinks/imagens/icon-portal.png" /> Portal</li>
                <li><strong className={styles.noClick}>|</strong></li>
                <li>Cadastre-se</li>
                <li><strong className={styles.noClick}>|</strong></li>
                <li>Pedido rápido</li>
            </ul>
        </>
    )
}

export default listaLinks;