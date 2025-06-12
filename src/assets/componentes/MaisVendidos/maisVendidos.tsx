import styles from "./maisVendidos.module.css";
import CarrosselMaisVendidos from "./maisVendidosCarrossel/carrosselMaisVendidos";

interface MaisVendidosProps {
  titulo: string;
  imagem: string;
  textoBotao: string;
  onClickBotao?: () => void;
}

function MaisVendidos({
  titulo,
  imagem,
  textoBotao,
  onClickBotao,
}: MaisVendidosProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}></div>

        <div className={styles.center}>
          <div className={styles.title}>
            <img className={styles.icone} src={imagem} alt={titulo} />
            <h2>{titulo}</h2>
          </div>
        </div>

        <div className={styles.right}>
          <button className={styles.btn} onClick={onClickBotao}>
            {textoBotao}
          </button>
        </div>
      </div>

      <br />
      <CarrosselMaisVendidos />
    </>
  );
}

export default MaisVendidos;
