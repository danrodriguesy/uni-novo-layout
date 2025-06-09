import styles from './itens.module.css';

function Itens(){
    return (
        <> 
            <div className={styles.containerImagens}>
                <img src="src\assets\componentes\comprePorCategorias\itens\imagens\item1.png" />
                <img src="src\assets\componentes\comprePorCategorias\itens\imagens\item2.png" />
                <img src="src\assets\componentes\comprePorCategorias\itens\imagens\item3.png" />
                <img src="src\assets\componentes\comprePorCategorias\itens\imagens\item4.png" />
            </div>
        </>
    )
}

export default Itens;