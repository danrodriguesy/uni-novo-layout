import styles from './itens.module.css';

function Itens(){
    return (
        <> 
            <div className={styles.containerImagens}>
                <img src="/imagens/comprePorCategorias/item1.png" />
                <img src="/imagens/comprePorCategorias/item2.png" />
                <img src="/imagens/comprePorCategorias/item3.png" />
                <img src="/imagens/comprePorCategorias/item4.png" />
            </div>
        </>
    )
}

export default Itens;