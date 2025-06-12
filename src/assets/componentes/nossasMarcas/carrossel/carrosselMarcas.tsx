import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './carrosselMarcas.module.css';

const marcas = [
  { id: 1, src: '/imagens/nossasMarcas/amortex.png', alt: 'Amortex' },
  { id: 2, src: '/imagens/nossasMarcas/carto.png', alt: 'Carto' },
  { id: 3, src: '/imagens/nossasMarcas/lougan.png', alt: 'Lougan' },
  { id: 4, src: '/imagens/nossasMarcas/micro.png', alt: 'Micro' },
  { id: 5, src: '/imagens/nossasMarcas/uni1000.png', alt: 'UNI 1000' },
  { id: 6, src: '/imagens/nossasMarcas/unick.png', alt: 'Unick' },
  { id: 7, src: '/imagens/nossasMarcas/uniflex.png', alt: 'Uniflex' },
  { id: 8, src: '/imagens/nossasMarcas/universal.png', alt: 'Universal' }
];

const CARD_WIDTH = 180;
const VISIBLE = 4;

function CarrosselMarcas() {
  const [index, setIndex] = useState(0);
  const TOTAL = marcas.length;
  const steps = Math.ceil(TOTAL / VISIBLE);

  const goTo = (i: number) => {
    setIndex(i);
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.carrossel}
        animate={{ x: -index * CARD_WIDTH * VISIBLE }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {marcas.map((marca) => (
          <motion.div className={styles.logoBox} key={marca.id}>
            <img src={marca.src} alt={marca.alt} className={styles.logo} />
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.dots}>
        {Array.from({ length: steps }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`${styles.dot} ${index === i ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarrosselMarcas;
