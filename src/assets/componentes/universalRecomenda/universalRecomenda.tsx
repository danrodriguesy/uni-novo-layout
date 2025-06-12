import styles from './universalRecomenda.module.css';

function UniversalRecomenda() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>

      <div className={styles.center}>
        <div className={styles.title}>
          <img
            src="src/assets/componentes/universalRecomenda/imagens/icone.png"
            className={styles.icone}
            alt="Ícone Universal Recomenda"
          />
          <h2>Universal Recomenda</h2>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.btn}>Ver Mais</button>
      </div>
    </div>
  );
}

export default UniversalRecomenda;
