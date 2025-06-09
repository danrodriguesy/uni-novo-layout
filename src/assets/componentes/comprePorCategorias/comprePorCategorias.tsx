import Itens from './itens/itens';

import styles from './camprePorCategorias.module.css';

function comprePorCategorias(){
    return (
        <>
            <div className={styles.header}>
                <img className={styles.icon} src="src\assets\componentes\comprePorCategorias\imagens\icone.png" /><h2>Compre por Categorias</h2>
            </div>
            <div className={styles.container}>
                <Itens />
            </div>
        </>
    )
}

export default comprePorCategorias;