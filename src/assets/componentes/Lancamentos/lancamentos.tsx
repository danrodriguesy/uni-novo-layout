import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./lancamentos.module.css";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const produtos = [
  { id: 1, ref: "99743", nome: "Amortecedor Mola a Gás da Tampa do Porta-Malas..." },
  { id: 2, ref: "99744", nome: "Coxim do motor dianteiro com reforço lateral..." },
  { id: 3, ref: "99745", nome: "Junta homocinética com rolamento integrado..." },
  { id: 4, ref: "99746", nome: "Kit amortecedor dianteiro com batente e coifa" },
  { id: 5, ref: "99747", nome: "Suporte inferior da barra estabilizadora..." },
  { id: 6, ref: "99748", nome: "Braço oscilante dianteiro com bucha de PU..." },
];

const CARD_WIDTH = 262;
const CARD_GAP = 16;
const VISIBLE_CARDS = 3;

function Lancamentos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const handleScroll = () => {
      const scrollLeft = scrollRef.current!.scrollLeft;
      const scrollUnit = CARD_WIDTH + CARD_GAP;
      const newIndex = Math.round(scrollLeft / scrollUnit);
      setScrollIndex(newIndex);
    };

    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollToIndex = (i: number) => {
    if (isMobile && scrollRef.current) {
      const scrollUnit = CARD_WIDTH + CARD_GAP;
      scrollRef.current.scrollTo({
        left: i * scrollUnit,
        behavior: "smooth",
      });
    } else {
      setIndex(i);
    }
  };

  const next = () => {
    const maxIndex = produtos.length - VISIBLE_CARDS;
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    const maxIndex = produtos.length - VISIBLE_CARDS;
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className={styles.containerGlobal}>
      <div className={styles.containerTitle}>
        <img
          className={styles.icon}
          src="/imagens/lancamentos/lancamento.png"
          alt="Lançamentos"
        />
        <h2 className={styles.title}>Lançamentos</h2>
      </div>

      <div className={styles.container}>
        {!isMobile && (
          <div className={styles.containerBanner}>
            <img
              className={styles.bannerLateral}
              src="/imagens/lancamentos/banner-vertical-lancamentos.png"
              alt="Banner Lateral"
            />
          </div>
        )}

        <div className={styles.wrapper}>
          {!isMobile && (
            <button className={`${styles.seta} ${styles.left}`} onClick={prev}>
              <img
                className={styles.arrowLeft}
                src="/imagens/lancamentos/arrow-left.png"
                alt="Anterior"
              />
            </button>
          )}

          <div className={isMobile ? styles.sliderAreaMobile : styles.sliderArea}>
            {isMobile ? (
              <div className={styles.sliderAreaMobile} ref={scrollRef}>
                <div className={styles.cardTrackMobile}>
                  {produtos.map((produto) => (
                    <div
                      className={`${styles.card} ${styles.mobileCard}`}
                      key={produto.id}
                    >
                      <ProdutoCard produto={produto} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                className={styles.cardTrack}
                animate={{ x: -index * CARD_WIDTH }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {produtos.map((produto) => (
                  <div className={styles.card} key={produto.id}>
                    <ProdutoCard produto={produto} />
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {!isMobile && (
            <button className={`${styles.seta} ${styles.right}`} onClick={next}>
              <img
                className={styles.arrowRight}
                src="/imagens/lancamentos/arrow-right.png"
                alt="Próximo"
              />
            </button>
          )}

          <div className={styles.dots}>
            {Array.from({
              length: isMobile
                ? produtos.length
                : produtos.length - VISIBLE_CARDS + 1,
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`${styles.dot} ${
                  (isMobile ? scrollIndex : index) === i ? styles.active : ""
                }`}
              />
            ))}
          </div>
          {isMobile && (
            <button className={styles.verMaisBtn}>
              Ver Mais
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProdutoCard({ produto }: { produto: { ref: string; nome: string } }) {
  return (
    <>
      <div className={styles.header}>
        <span className={styles.tag}>-20%</span>
        <CiHeart className={styles.iconHeart} />
      </div>
      <div className={styles.containerImagem}>
        <img
          src="/imagens/lancamentos/imagem-produto.png"
          className={styles.imagemProduto}
          alt="Produto"
        />
      </div>
      <div className={styles.containerRef}>
        <span>Ref: {produto.ref}</span>
      </div>
      <div className={styles.containerTituloProduto}>
        <p className={styles.tituloProduto}>{produto.nome}</p>
      </div>
      <div className={styles.containerStars}>
        <FaStar className={styles.starAmarela} />
        <FaStar className={styles.starAmarela} />
        <FaStar className={styles.starAmarela} />
        <FaStar className={styles.starAmarela} />
        <FaStar className={styles.starCinza} />
      </div>
      <div className={styles.btn}>
        <button className={styles.btnCadastro}>
          <span className={styles.textoBtn1}>Cadastre-se</span>
          <br />
          <span className={styles.textoBtn2}>e veja o preço</span>
        </button>
      </div>
    </>
  );
}

export default Lancamentos;
