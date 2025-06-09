import styles from './nossasMarcas.module.css';

function nossasMarcas(){
    return (
        <>  
            <div className={styles.container}>
                <img className={styles.icone} src="src\assets\componentes\nossasMarcas\imagens\icone.png" /><h2>Nossas Marcas</h2>
            </div>
        </>
    )
}

export default nossasMarcas;