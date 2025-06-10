import styles from './newsletter.module.css';

function newsletter(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.contentnewsletter}>
                    <div className={styles.contentItens}>
                        <img className={styles.icone} src="src\assets\componentes\newsletter\imagens\icone.png" />
                        <span className={styles.texto}>Quer receber promoções e novidades?</span>
                    </div>
                    <div className={styles.fileds}>
                        <input type="text" className={styles.input} placeholder="Digite seu e-mail" />
                        <button className={styles.btn}>Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default newsletter;