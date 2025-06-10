import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './carrosselMaisVendidos.module.css';
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const produtos = [
  { id: 1, ref: '99743', nome: 'Amortecedor Mola a Gás da tampa do porta-mal....' },
  { id: 2, ref: '99744', nome: 'Coxim do motor dianteiro com reforço lateral...' },
  { id: 3, ref: '99745', nome: 'Junta homocinética com rolamento integrado...' },
  { id: 4, ref: '99746', nome: 'Kit amortecedor dianteiro com batente e coifa' },
  { id: 5, ref: '99747', nome: 'Suporte inferior da barra estabilizadora...' },
  { id: 6, ref: '99748', nome: 'Braço oscilante dianteiro com bucha de PU...' }
];

const CARD_WIDTH = 262; // 230 card + 32 padding/margin
const VISIBLE_CARDS = 3;

function CarrosselMaisVendidos() {
  const [index, setIndex] = useState(0);
  const maxIndex = produtos.length - VISIBLE_CARDS;

  const next = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <>

      <div className={styles.container}>
        <div className={styles.containerBanner}>
          <img
            className={styles.bannerLateral}
            src="src\assets\componentes\MaisVendidos\maisVendidosCarrossel\imagens\banner-lateral-mais-vendidos.png"
            alt="Banner Lançamentos"
          />
        </div>

        <div className={styles.wrapper}>
          <button className={`${styles.seta} ${styles.left}`} onClick={prev}><img className={styles.arrowLeft} src="src\assets\componentes\Lancamentos\imagens\arrow-left.png" /></button>

          <div className={styles.sliderArea}>
            <motion.div
              className={styles.cardTrack}
              animate={{ x: -index * CARD_WIDTH }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {produtos.map((produto) => (
                <div className={styles.card} key={produto.id}>
                  <div className={styles.header}>
                    <span className={styles.tag}>-20%</span>
                    <CiHeart className={styles.iconHeart} />
                  </div>
                  <div className={styles.containerImagem}>
                    <img src="src/assets/componentes/Lancamentos/imagens/imagem-produto.png" className={styles.imagemProduto} />
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
                      <span className={styles.textoBtn1}>Cadastre-se</span><br />
                      <span className={styles.textoBtn2}>e veja o preço</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className={`${styles.seta} ${styles.right}`} onClick={next}><img className={styles.arrowRight} src="src\assets\componentes\Lancamentos\imagens\arrow-right.png" /></button>

          <div className={styles.dots}>
            {Array.from({ length: produtos.length - VISIBLE_CARDS + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`${styles.dot} ${i === index ? styles.active : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarrosselMaisVendidos;
