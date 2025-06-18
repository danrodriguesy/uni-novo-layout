import styles from './sliderProduto.module.css';

function SliderProduto(){
    return (
        <>
            <div className={styles.container}>
                <img className={styles.imagemProduto} src="/imagens/produto/fotoProduto.png" />
            </div>
        </>
    )
}

export default SliderProduto;