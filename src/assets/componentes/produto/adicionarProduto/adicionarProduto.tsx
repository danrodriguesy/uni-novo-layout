import styles from './adicionarProduto.module.css';
import { BsCart2 } from "react-icons/bs";


function adicionarProduto(){
    return (
        <>
            <div className={styles.containerAdicionarProduto}>
                <div className={styles.add}>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <div className={styles.adicionarBtn}>
                    <BsCart2 />
                    Adicionar
                </div>
            </div>
        </>
    )
}

export default adicionarProduto;