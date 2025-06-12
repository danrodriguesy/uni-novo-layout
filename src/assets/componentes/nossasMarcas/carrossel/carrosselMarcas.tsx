import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../../../hooks/useIsMobile';
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
const GAP = 16;
const VISIBLE_DESKTOP = 4;

function CarrosselMarcas() {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Atualiza largura do container no mobile
  useEffect(() => {
    if (isMobile && scrollRef.current) {
      const updateWidth = () => setContainerWidth(scrollRef.current!.offsetWidth);
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [isMobile]);

  const cardsPerStep = isMobile
    ? Math.floor(containerWidth / (CARD_WIDTH + GAP)) || 1
    : VISIBLE_DESKTOP;

  const stepWidth = (CARD_WIDTH + GAP) * cardsPerStep;
  const steps = Math.ceil(marcas.length / cardsPerStep);
  const displacement = index * stepWidth;

  const handleDotClick = (i: number) => {
    setIndex(i);

    if (isMobile && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: i * stepWidth,
        behavior: 'smooth',
      });
    }
  };

  // Sincroniza os dots com o scroll no mobile
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const handleScroll = () => {
      const scrollX = scrollRef.current!.scrollLeft;
      const newIndex = Math.round(scrollX / stepWidth);
      setIndex(newIndex);
    };

    const el = scrollRef.current;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile, stepWidth]);

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <div className={styles.mobileCarrossel} ref={scrollRef}>
          {marcas.map((marca) => (
            <div className={styles.logoBox} key={marca.id}>
              <img src={marca.src} alt={marca.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          className={styles.carrossel}
          animate={{ x: -displacement }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {marcas.map((marca) => (
            <motion.div className={styles.logoBox} key={marca.id}>
              <img src={marca.src} alt={marca.alt} className={styles.logo} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className={styles.dots}>
        {Array.from({ length: steps }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`${styles.dot} ${index === i ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarrosselMarcas;
