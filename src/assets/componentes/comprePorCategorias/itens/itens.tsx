import styles from "./itens.module.css";

function Itens() {
  const categorias = [
    { src: "/imagens/comprePorCategorias/suspensao.png", label: "Suspensão" },
    { src: "/imagens/comprePorCategorias/lampadas.png", label: "Lâmpadas" },
    { src: "/imagens/comprePorCategorias/macanetas.png", label: "Maçanetas" },
    { src: "/imagens/comprePorCategorias/fechadura.png", label: "Fechaduras" },
  ];

  return (
    <div className={styles.containerImagens}>
      {categorias.map((item, index) => (
        <figure key={index} className={styles.item}>
          <img src={item.src} alt={item.label} />
          <figcaption className={styles.legenda}>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Itens;