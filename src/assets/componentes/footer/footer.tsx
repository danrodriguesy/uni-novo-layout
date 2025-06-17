import { useEffect, useState } from "react";
import styles from "./footer.module.css";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "Institucional",
      links: [
        "Quem somos",
        "Trabalhe conosco",
        "Nossa história",
        "Marcas",
        "Blog",
      ],
    },
    {
      title: "Políticas",
      links: [
        "Formas de pagamento",
        "Políticas de entrega",
        "Políticas de troca",
        "Políticas de devolução",
        "Termos de uso",
      ],
    },
    {
      title: "Ajuda",
      links: ["Como comprar", "Dúvidas frequentes", "Onde encontrar", "SAC"],
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <hr className={styles.hr} />
        <img
          className={styles.logo}
          src="/imagens/footer/imagens/logo-universal.png"
        />
        <hr className={styles.hr} />
      </div>

      <div className={styles.containerLinks}>
        {sections.map((section, index) => (
          <ul
            key={index}
            className={`${styles.listaLinks} ${isMobile ? styles.mobileList : ""}`}
          >
            <li className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>{section.title}</span>
              {isMobile && (
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={styles.accordionToggle}
                >
                  {openIndexes.includes(index) ? "-" : "+"}
                </button>
              )}
            </li>
            {(!isMobile || openIndexes.includes(index)) &&
              section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
          </ul>
        ))}

        <ul className={ `${styles.listaLinks} ${styles.nossasRedes}` }>
          <li>
            <span className={styles.titleList}>Nossas Redes</span>
            <br />
            <br />
          </li>
          <li className={styles.icones}>
            <a href="#">
              <img src="/imagens/footer/imagens/facebook.png" />
            </a>
            <a href="#">
              <img src="/imagens/footer/imagens/instagram.png" />
            </a>
            <a href="#">
              <img src="/imagens/footer/imagens/linkedin.png" />
            </a>
          </li>
          <li>
            <br />
            <img
              className={styles.sac}
              src="/imagens/footer/imagens/SAC.png"
            />
          </li>
        </ul>
      </div>

      <div className={styles.formasPagamento}>
        <h3 className={styles.titleFormasPagamento}>Formas de pagamento</h3>
        <div className={styles.bandeirasPagamento}>
          <img src="/imagens/footer/imagens/VISA.png" />
          <img src="/imagens/footer/imagens/Master-Card.png" />
          <img src="/imagens/footer/imagens/americanExpress.png" />
          <img src="/imagens/footer/imagens/elo.png" />
          <img src="/imagens/footer/imagens/hipercard.png" />
          <img src="/imagens/footer/imagens/pix.png" />
          <img src="/imagens/footer/imagens/boleto.png" />
        </div>
      </div>

      <div className={styles.containerCopyright}>
        <div className={styles.copyright}>
          <span>© Copyright 2025 Universal Soluções Automotivas</span>
          <div className={styles.parceiros}>
            <p>Segurança</p>
            <div className={styles.logos}>
              <img src="/imagens/footer/imagens/PCI.png" />
              <img src="/imagens/footer/imagens/letsEncrypt.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
