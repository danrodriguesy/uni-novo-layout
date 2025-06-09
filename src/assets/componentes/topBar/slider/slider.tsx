import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './slider.module.css';

const slides = [
  {
    id: 1,
    img: 'src/assets/componentes/topBar/slider/imagens/Pix.png',
    texto: '5% de desconto no Pix',
  },
  {
    id: 2,
    img: 'src/assets/componentes/topBar/slider/imagens/Pix.png',
    texto: 'Frete grátis',
  },
  {
    id: 3,
    img: 'src/assets/componentes/topBar/slider/imagens/Pix.png',
    texto: 'Ganhe 10%',
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={styles.wrapper}>
      <img src="src/assets/componentes/topBar/slider/imagens/arrow-left.png" className={styles.seta} onClick={prev} />
      <div className={styles.sliderArea}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            className={styles.container}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img className={styles.pix} src={slides[index].img} alt="Slide" />
            <span className={styles.texto}>{slides[index].texto}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <img src="src/assets/componentes/topBar/slider/imagens/arrow-right.png" className={styles.seta} onClick={next} />
    </div>
  );
}

export default Slider;
