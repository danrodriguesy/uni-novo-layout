import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './carrosselMarcas.module.css';

const marcas = [
  { id: 1, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/amortex.png', alt: 'Amortex' },
  { id: 2, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/carto.png', alt: 'Carto' },
  { id: 3, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/lougan.png', alt: 'Lougan' },
  { id: 4, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/micro.png', alt: 'Micro' },
  { id: 5, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/uni1000.png', alt: 'UNI 1000' },
  { id: 6, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/unick.png', alt: 'Unick' },
  { id: 7, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/uniflex.png', alt: 'Uniflex' },
  { id: 8, src: 'src/assets/componentes/nossasMarcas/carrossel/imagens/universal.png', alt: 'Universal' }
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
