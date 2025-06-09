import styles from './maisVendidos.module.css';

function maisVendidos(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img className={styles.icone} src="src\assets\componentes\MaisVendidos\imagens\mais-vendidos.png" />
                    <h2>Mais Vendidos</h2>
                </div>
                <button className={styles.btn}>Ver Mais</button>
            </div>
        </>
    )
}

export default maisVendidos;