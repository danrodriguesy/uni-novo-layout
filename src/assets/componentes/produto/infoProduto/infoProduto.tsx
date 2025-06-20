import styles from './infoProduto.module.css';
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

function infoProduto(){
    return (
        <>
            <div className={styles.container}>
                <button className={styles.btnCadastrar}>
                    Cadastre-se para ver o preço
                </button>
                <div className={styles.containerDetalhes}>
                    <div className={styles.Header}>
                        <span>Ref.: 99743</span>
                        <div className={styles.social}>
                            <CiHeart fontSize={30}/>
                            <IoShareSocialOutline fontSize={30} />
                        </div>
                    </div>
                    <div className={styles.tituloProduto}>
                        <h1>Amortecedor Mola a Gás da Tampa do Porta-Malas - Comprimento: 
                            510mm/Curso: 210mm/Carga: 45KGF - Diâmetro Pistão: 8mm/Tubo: 18mm</h1>
                    </div>
                    <div className={styles.containerMaisDetalhes}>
                        <span className={styles.mais}>+</span> <span className={styles.texto}>Ver descrição completa</span>
                    </div>
                    <div className={styles.containerAvaliacaoCategoria}>
                        <div className={styles.stars}>
                            <CiStar fontSize={30} className={styles.star} />
                            <CiStar fontSize={30} className={styles.star} />
                            <CiStar fontSize={30} className={styles.star} />
                            <CiStar fontSize={30} className={styles.star} />
                            <CiStar fontSize={30} className={styles.star} />
                        </div>
                        <span className={styles.categoria}>Amortex</span>
                    </div>
                    <div className={styles.entreguePor}>
                        <span>Vendido e entregue por: UNIVERSAL AUTOMOTIVE SYSTEMS S/A.</span>
                    </div>
                </div>
                <div className={styles.containerDuvida}>
                    <div>
                        <img className={styles.iconSac} src="/imagens/footer/imagens/SAC.png" />
                    </div>
                    <div>
                        <span><strong>Alguma dúvida?</strong></span>
                        <div className={styles.textos}>
                            <span>Entre em contato com nosso suporte</span>
                            <span className={styles.linkCanalSuporte}>Ver canal do suporte</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default infoProduto;