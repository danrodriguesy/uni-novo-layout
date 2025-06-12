import styles from "./vittrineImagens.module.css";

function vitrineImagens() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.div1}>
          <img
            className={`${styles.img1} ${styles.imageZoom}`}
            src="/imagens/vitrineImagens/celular.png"
          />
        </div>
        <div className={styles.div2}>
          <img
            className={`${styles.img2} ${styles.imageZoom}`}
            src="/imagens/vitrineImagens/selecao-pecas-itens-linha-pesada.png"
          />
          <img
            className={`${styles.img3} ${styles.imageZoom}`}
            src="/imagens/vitrineImagens/selecao-pecas-vw-gol.png"
          />
        </div>
        
      </div>
    </>
  );
}

export default vitrineImagens;
