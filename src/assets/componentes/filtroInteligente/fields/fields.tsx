import styles from './fields.module.css';
import Button from '../botaoBuscar/botaoBuscar';

const icon = () => {
    return (
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14">
            <path id="Polígono_10" data-name="Polígono 10" d="M6.79,2.816a2,2,0,0,1,3.419,0l4.946,8.146A2,2,0,0,1,13.446,14H3.554a2,2,0,0,1-1.71-3.038Z" transform="translate(17 14) rotate(180)" fill="#55565a" />
        </svg>
    )
}

function Fields() {
    return (
        <div className={styles.container}>
            {/* Primeiro campo com ícone */}
            <div className={styles.selectWrapper}>
                <select name="select" className={`${styles.select} ${styles.first}`}>
                    <option value="valor1" selected>Nossas Marcas</option>
                </select>
                {icon()}
            </div>

            <div className={styles.selectWrapper}>
                <select name="select" className={styles.select}>
                    <option value="valor1" selected>Escolha uma montadora</option>
                </select>
                {icon()}
            </div>

            <div className={styles.selectWrapper}>
                <select name="select" className={styles.select}>
                    <option value="valor1" selected>Escolha um modelo</option>
                </select>
                {icon()}
            </div>

            <div className={styles.selectWrapper}>
                <select name="select" className={`${styles.select} ${styles.last}`}>
                    <option value="valor1" selected>Escolha um ano</option>
                </select>
                {icon()}
            </div>

            <div className={styles.selectWrapper}>
                <Button />
            </div>
        </div>
    );
}

export default Fields;
