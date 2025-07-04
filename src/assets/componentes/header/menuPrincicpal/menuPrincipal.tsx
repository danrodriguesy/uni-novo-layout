import { useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import styles from "./menuPrincipal.module.css";
import { FaCaretRight } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const categorias = [
  {
    nome: "Ferragens Automotivas",
    logo: "/imagens/header/menuPrincipal/logo-universal.png",
    descricao: "Ferragens Automotivas",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
  {
    nome: "Máquinas, Componentes do Vidro e Palhetas",
    logo: "/imagens/header/menuPrincipal/micro.png",
    descricao: "Máquinas, Componentes do Vidro e Palhetas",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
  {
    nome: "Suspensão, Direção, Câmbio e Amortecedores",
    logo: "/imagens/header/menuPrincipal/amortex.png",
    descricao: "Suspensão, Direção, Câmbio e Amortecedores",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
  {
    nome: "Tampas Automotivas",
    logo: "/imagens/header/menuPrincipal/unick.png",
    descricao: "Tampas Automotivas",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
  {
    nome: "Lâmpadas Automotivas",
    logo: "/imagens/header/menuPrincipal/carto.png",
    descricao: "Lâmpadas Automotivas",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
  {
    nome: "Químicos Automotivos",
    logo: "/imagens/header/menuPrincipal/uni1000.png",
    descricao: "Químicos Automotivos",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
  {
    nome: "Borrachas Automotivas de Vedação",
    logo: "/imagens/header/menuPrincipal/uniflex.png",
    descricao: "Borrachas Automotivas de Vedação",
    subcategorias: Array(18).fill("Lorem Ipsum"),
  },
];

function MenuPrincipal() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  if (isMobile) {
    return (
      <div className={styles.mobileMenuContainer}>
        <div className={styles.mobileMenuHeader}>
          <GoPerson fontWeight={800} size={25} />
          <span>Entre ou Cadastre-se</span>
        </div>

        {categorias.map((cat, index) => (
          <div key={index} className={styles.ItemMenuMobile}>
            <div
              className={styles.headerItemMenuMobile}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <img
                src={cat.logo}
                className={styles.logoMobileIteMenu}
                alt={cat.nome}
              />
              <FaCaretRight
                color="#ADADAD"
                size={20}
                style={{
                  transform: activeIndex === index ? "rotate(90deg)" : "rotate(0)",
                  transition: "transform 0.2s ease",
                }}
              />
            </div>
            <span className={styles.tituloItemMenuMobile}>
              {cat.descricao}
            </span>

            {activeIndex === index && (
              <div className={styles.mobileSubmenu}>
                {cat.subcategorias.map((sub, i) => (
                  <div key={i} className={styles.menuSubitem}>
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.megaMenuContainer}>
      <div className={styles.menuLeft}>
        {categorias.map((cat, index) => (
          <div
            key={index}
            className={`${styles.menuLeftItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className={styles.logoWrap}>
              <img src={cat.logo} alt={cat.nome} className={styles.logo} />
              <div className={styles.arrow}>
                <FaCaretRight />
              </div>
            </div>
            <div className={styles.infoWrap}>
              <span className={styles.desc}>{cat.descricao}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.menuRight}>
        <h3 className={styles.menuRightTitle}>
          {categorias[activeIndex ?? 0].nome}
        </h3>
        <div className={styles.menuGrid}>
          {categorias[activeIndex ?? 0].subcategorias.map((item, i) => (
            <div key={i} className={styles.menuSubitem}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.verTodos}>Ver Todos</div>
      </div>
    </div>
  );
}

export default MenuPrincipal;
