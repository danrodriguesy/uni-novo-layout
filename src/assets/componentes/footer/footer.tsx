import styles from "./footer.module.css";

function footer() {
  return (
    <>
      <div className={styles.container}>
        <hr className={styles.hr} />
        <img
          className={styles.logo}
          src="src\assets\componentes\footer\imagens\logo.png"
        />
        <hr className={styles.hr} />
      </div>
      <div className={styles.containerLinks}>
        <ul className={styles.listaLinks}>
          <li>
            <span className={styles.titleList}>Institucional</span>
            <br />
            <br />
          </li>
          <li>
            <a href="#">Quem somos</a>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
          <li>
            <a href="#">Nossa história</a>
          </li>
          <li>
            <a href="#">Marcas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className={styles.listaLinks}>
          <li>
            <span className={styles.titleList}>Políticas</span>
            <br />
            <br />
          </li>
          <li>
            <a href="#">Formas de pagamento</a>
          </li>
          <li>
            <a href="#">Políticas de entrega</a>
          </li>
          <li>
            <a href="#">Políticas de troca</a>
          </li>
          <li>
            <a href="#">Políticas de devolução</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>

        <ul className={styles.listaLinks}>
          <li>
            <span className={styles.titleList}>Ajuda</span>
            <br />
            <br />
          </li>
          <li>
            <a href="#">Como comprar</a>
          </li>
          <li>
            <a href="#">Dúvidas frequentes</a>
          </li>
          <li>
            <a href="#">Onde encontrar</a>
          </li>
          <li>
            <a href="#">SAC</a>
          </li>
        </ul>

        <ul className={styles.listaLinks}>
          <li>
            <span className={styles.titleList}>Nossas Redes</span>
            <br />
            <br />
          </li>
          <li className={styles.icones}>
            <a href="#">
              <img src="src\assets\componentes\footer\imagens\facebook.png" />
            </a>
            <a href="#">
              <img src="src\assets\componentes\footer\imagens\instagram.png" />
            </a>
            <a href="#">
              <img src="src\assets\componentes\footer\imagens\linkedin.png" />
            </a>
          </li>
          <li>
            <br />
            <img
              className={styles.sac}
              src="src\assets\componentes\footer\imagens\SAC.png"
            />
          </li>
        </ul>
      </div>
      <div className={styles.formasPagamento}>
        <h3 className={styles.titleFormasPagamento}>Formas de pagamento</h3>
        <div className={styles.bandeirasPagamento}>
          <img src="src\assets\componentes\footer\imagens\VISA.png" />
          <img src="src\assets\componentes\footer\imagens\Master-Card.png" />
          <img src="src\assets\componentes\footer\imagens\americanExpress.png" />
          <img src="src\assets\componentes\footer\imagens\elo.png" />
          <img src="src\assets\componentes\footer\imagens\hipercard.png" />
          <img src="src\assets\componentes\footer\imagens\pix.png" />
          <img src="src\assets\componentes\footer\imagens\boleto.png" />
        </div>
      </div>
      <div className={styles.containerCopyright}>
        <div className={styles.copyright}>
          <span>© Copyright 2025 Universal Soluções Automotivas</span>
          <div className={styles.parceiros}>
            <p>Segurança</p>
            <div className={styles.logos}>
              <img src="src\assets\componentes\footer\imagens\PCI.png" />
              <img src="src\assets\componentes\footer\imagens\letsEncrypt.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;