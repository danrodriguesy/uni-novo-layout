import styles from './footer.module.css';

function footer(){
    return (
        <>
            <div className={styles.container}>
                <hr />
                <img className={styles.logo} src="src\assets\componentes\footer\imagens\logo.png" />
                <hr />
            </div>
        </>
    )
}

export default footer;