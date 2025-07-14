import styles from "./buscarPorPlaca.module.css";
import { IoIosSearch } from "react-icons/io";

function BuscarPorPlaca() {
  return (
    <div className={styles.containerBuscarPorPlaca}> 
        <div className={styles.headerBuscarPorPlaca}>
            <img src="/imagens/buscarPorPlaca/bascarPorPlaca.png" alt="Digite aqui a placa" className={styles.iconBuscarPorPlaca} />
            <h1>Busque por Placa</h1>
        </div>
        <div className={styles.cotainerForms}>
            <input type="text" placeholder="Digite a placa do veículo" />
            <div className={styles.containerBtn}>
                <button className={styles.btnLimpar}>Limpar</button>
                <button className={styles.btnBuscar}>
                  <IoIosSearch fontSize={20}/> 
                  <span>Buscar Peças</span>
                </button>
            </div>
            
        </div>
    </div>
  );
}

export default BuscarPorPlaca;