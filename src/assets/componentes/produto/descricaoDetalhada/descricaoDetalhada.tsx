import styles from './descricaoDetalhada.module.css';

import { FaPlus } from "react-icons/fa";

function DescricaoDetalhada() {
    return(
        <>
            <div className={styles.containerDescricaoDetalhada}>
                <h2>Descrição</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <hr className={styles.hr} />
                <h2 className={styles.titleInformativo}>Informações do Produto</h2>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-cor.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Cor</h3>
                        </div>
                        <span className={styles.spanCard}>Inox/Preto</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-box.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações do Produto</h3>
                        </div>
                        <span className={styles.spanCard}><FaPlus fontSize={12} /></span>
                    </div>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-material.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Material</h3>
                        </div>
                        <span className={styles.spanCard}>Ferro</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-box.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações da Embalagem</h3>
                        </div>
                        <span className={styles.spanCard}><FaPlus fontSize={12} /></span>
                    </div>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-garantia.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Garantia</h3>
                        </div>
                        <span className={styles.spanCard}>3 meses</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-caixa-inner.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações da Caixa Inner</h3>
                        </div>
                        <span className={styles.spanCard}><FaPlus fontSize={12} /></span>
                    </div>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-marca.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Marca</h3>
                        </div>
                        <span className={styles.spanCard}>Amortex</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.headerCard}>
                            <img src="/imagens/produto/icone-caixa-master.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações da Caixa Master</h3>
                        </div>
                        <span className={styles.spanCard}><FaPlus fontSize={12} /></span>
                    </div>
                </div>
                <hr className={styles.hr} />
                <h2 className={styles.titleInformativo}>Categoria</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            {/*<div className={styles.containerAvaliacaoProduto}>
                <div className={styles.headerAvaliacaoProduto}>
                    <h2 className={styles.titleAvaliacaoProduto}>Avaliação do Produto</h2>
                    <div className={styles.containerStars}>
                        <FaStar fontSize={25} className={styles.starCinza} />
                        <FaStar fontSize={25} className={styles.starCinza} />
                        <FaStar fontSize={25} className={styles.starCinza} />
                        <FaStar fontSize={25} className={styles.starCinza} />
                        <FaStar fontSize={25} className={styles.starCinza} />
                    </div>
                </div>
                <div className={styles.containerComentarios}>
                    <p>Seja o primeiro a avaliar este produto!</p>
                </div>
                <div className={styles.containerAvaliacoesBtn}>
                    <FaStar fontSize={25} className={styles.starCinza} />
                    <span className={styles.avaliarProduto}>Avaliar este produto</span>
                </div>
            </div>*/}
        </>
    )
}

export default DescricaoDetalhada;