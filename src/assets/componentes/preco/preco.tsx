import styles from './preco.module.css';

function preco(){
    return (
        <>
            <div className={styles.containerPreco}>
                <span className={styles.semDesconto}>R$ 499,00</span>
                <span className={styles.comDesconto}>R$ 599,00</span>
            </div>
        </>
    )
}

export default preco;