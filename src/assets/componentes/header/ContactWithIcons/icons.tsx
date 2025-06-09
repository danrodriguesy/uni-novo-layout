import styles from './icons.module.css';
import { LuUserRound } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsCart2 } from "react-icons/bs";

function IconsWithContact() {
    return (
        <>
            <div className={styles.icons}>
                <div className={styles.content}>
                    <LuUserRound className={styles.icone} title="Login" />
                    <span className={styles.texto}>Login</span>
                </div>
                
                <div className={styles.content}>
                    <TfiHeadphoneAlt className={styles.icone} title="SAC" />
                    <span className={styles.texto}>SAC</span>
                </div>

                <div className={styles.content}>
                    <BsCart2 className={styles.icone} title="Carrinho" />
                    <span className={styles.texto}>Carrinho</span>
                </div>
                
            </div>
            
        </>
    )

}

export default IconsWithContact;