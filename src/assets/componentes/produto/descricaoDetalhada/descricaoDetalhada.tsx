import styles from './descricaoDetalhada.module.css';

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
                            <img src="/imagens/produto/icone-cor.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações do Produto</h3>
                        </div>
                        <span className={styles.spanCard}>Inox/Preto</span>
                    </div>
                </div>
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
                            <img src="/imagens/produto/icone-cor.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações do Produto</h3>
                        </div>
                        <span className={styles.spanCard}>Inox/Preto</span>
                    </div>
                </div>
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
                            <img src="/imagens/produto/icone-cor.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações do Produto</h3>
                        </div>
                        <span className={styles.spanCard}>Inox/Preto</span>
                    </div>
                </div>
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
                            <img src="/imagens/produto/icone-cor.png" alt="Ícone" />
                            <h3 className={styles.titleCard}>Especificações do Produto</h3>
                        </div>
                        <span className={styles.spanCard}>Inox/Preto</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescricaoDetalhada;