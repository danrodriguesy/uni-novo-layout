import styles from './estilo.module.css';

function bandeirasIdiomas(){
    return (
        <>
            <div className={styles.container}>
                <img src="imagens/topBar/portugues.png" alt="Idioma em português" />
                <img src="imagens/topBar/ingles.png" alt="Idioma em inglês" />
                <img src="imagens/topBar/espanhol.png" alt="Idioma em espanhol" />
            </div>
        </>
    )
}

export default bandeirasIdiomas;