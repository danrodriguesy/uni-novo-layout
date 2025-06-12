import styles from './nossasMarcas.module.css';

function nossasMarcas(){
    return (
        <>  
            <div className={styles.container}>
                <img className={styles.icone} src="/imagens/nossasMarcas/icone.png" /><h2>Nossas Marcas</h2>
            </div>
        </>
    )
}

export default nossasMarcas;