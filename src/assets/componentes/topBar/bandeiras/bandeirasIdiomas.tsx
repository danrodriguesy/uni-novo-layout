import styles from './estilo.module.css';

function bandeirasIdiomas(){
    return (
        <>
            <div className={styles.container}>
                <img src="src\assets\componentes\topBar\bandeiras\imagens\portugues.png" alt="Idioma em português" />
                <img src="src\assets\componentes\topBar\bandeiras\imagens\ingles.png" alt="Idioma em inglês" />
                <img src="src\assets\componentes\topBar\bandeiras\imagens\espanhol.png" alt="Idioma em espanhol" />
            </div>
        </>
    )
}

export default bandeirasIdiomas;