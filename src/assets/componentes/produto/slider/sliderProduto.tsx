import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './sliderProduto.module.css';
import useIsMobile from '../../../hooks/useIsMobile';

const imagens = [
  '/imagens/produto/imagem-produto-apresentacao.jpeg',
  '/imagens/produto/imagemProduto2.webp',
  '/imagens/produto/imagemProduto3.webp',
  '/imagens/produto/imagemProduto4.webp'
];

function SliderProduto() {
  const [indexAtivo, setIndexAtivo] = useState(0);
  const isMobile = useIsMobile();

  const anterior = () => {
    setIndexAtivo(prev => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndexAtivo(prev => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagemPrincipalWrapper}>
        <button onClick={anterior} className={styles.seta}>
          <img className={styles.arrowLeft} src='/imagens/produto/arrow-left.png' />
        </button>

        <div className={styles.imagemContainer}>
          <AnimatePresence mode="wait">
            <motion.img
              key={imagens[indexAtivo]}
              src={imagens[indexAtivo]}
              alt={`Produto ${indexAtivo + 1}`}
              className={styles.imagemProduto}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>

        <button onClick={proximo} className={styles.seta}>
          <img className={styles.arrowRight} src="/imagens/produto/arrow-right.png" />
        </button>
      </div>

      {isMobile ? (
        <div className={styles.dots}>
          {imagens.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === indexAtivo ? styles.activeDot : ''}`}
              onClick={() => setIndexAtivo(i)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.miniaturas}>
          {imagens.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Miniatura ${i + 1}`}
              onClick={() => setIndexAtivo(i)}
              className={`${styles.miniatura} ${i === indexAtivo ? styles.ativo : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SliderProduto;