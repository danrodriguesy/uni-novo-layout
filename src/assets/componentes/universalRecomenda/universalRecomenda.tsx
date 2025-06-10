import styles from './universalRecomenda.module.css';

function universalRecomenda(){
    return (
        <>
            <div className={styles.container}>
                
                <div className={styles.title}>
                    <img src="src\assets\componentes\universalRecomenda\imagens\icone.png" className={styles.icone} />
                    <h2>Universal Recomenda</h2>
                </div>
                <button className={styles.btn}>Ver Mais</button>
            </div>
        </> 
    )
}

export default universalRecomenda;