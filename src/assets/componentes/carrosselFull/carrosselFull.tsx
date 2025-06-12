import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './carrosselFull.module.css';
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const produtos = [
  { id: 1, nome: 'Coxim do motor dianteiro com reforço lateral...', ref: '1001' },
  { id: 2, nome: 'Coxim do motor dianteiro com reforço lateral...', ref: '1002' },
  { id: 3, nome: 'Coxim do motor dianteiro com reforço lateral...', ref: '1003' },
  { id: 4, nome: 'Coxim do motor dianteiro com reforço lateral...', ref: '1004' },
  { id: 5, nome: 'Coxim do motor dianteiro com reforço lateral...', ref: '1005' },
  { id: 6, nome: 'Coxim do motor dianteiro com reforço lateral...', ref: '1006' }
];

const CARD_WIDTH = 262; // 230 + padding
const VISIBLE = 4;

function CarrosselProdutos() {
  const [index, setIndex] = useState(0);
  const maxIndex = produtos.length - VISIBLE;

  const next = () => {
    setIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.seta} ${styles.left}`} onClick={prev}><img className={styles.arrowLeft} src="/imagens/universalRecomenda/arrow-left.png" /></button>

      <div className={styles.sliderArea}>
        <motion.div
          className={styles.cardTrack}
          animate={{ x: -index * CARD_WIDTH }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {produtos.map(produto => (
            <div className={styles.card} key={produto.id}>
              <div className={styles.header}>
                <span className={styles.tag}>-20%</span>
                <CiHeart className={styles.iconHeart} />
              </div>
              <div className={styles.containerImagem}>
                <img src="/imagens/universalRecomenda/imagem-produto.png" className={styles.imagemProduto} />
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
      <button className={`${styles.seta} ${styles.right}`} onClick={next}><img className={styles.arrowRight} src="/imagens/universalRecomenda/arrow-right.png" /></button>
      <div className={styles.dots}>
        {Array.from({ length: produtos.length - VISIBLE + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarrosselProdutos;
