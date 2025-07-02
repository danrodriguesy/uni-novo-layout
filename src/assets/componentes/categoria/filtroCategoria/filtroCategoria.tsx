import styles from "./filtroCategoria.module.css";
import FilterDrawer from "../filtroSuspenso/filtroSuspenso";

function filtroCategoria() {
  return (
    <>
        <div className={styles.containerFiltroCategoria}>
            <div className={styles.contentFiltroCategoria}>
                <button className={styles.btnFiltroCategoria}>
                    
                    <FilterDrawer />
                </button>
                
                <select name="select" className={styles.selectFiltroCategoria}>
                    <option value="valor1" selected>Relêvancia</option>
                    <option value="valor2">Nossas Marcas</option>
                    <option value="valor3">Nossas Marcas</option>
                    <option value="valor4">Nossas Marcas</option>
                    <option value="valor5">Nossas Marcas</option>
                    <option value="valor6">Nossas Marcas</option>
                    <option value="valor7">Nossas Marcas</option>
                    <option value="valor8">Nossas Marcas</option>
                </select>
                <div className={styles.iconsGridFiltroCategoria}>
                    <div className={styles.iconGrid3xFiltroCategoria}>
                        <img src="/imagens/filtroCategoria/iconGrid3x.png" alt="Bloco" />
                    </div>
                    <div className={styles.iconGrid5xFiltroCategoria}>
                        <img src="/imagens/filtroCategoria/iconGrid5x.png" alt="Bloco" />
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default filtroCategoria;