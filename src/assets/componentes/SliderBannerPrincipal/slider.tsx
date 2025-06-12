import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './slider.module.css';

const banners = [
  { id: 1, img: '/imagens/sliderBannerPrincipal/banner.png', alt: 'Banner 1' },
  { id: 2, img: '/imagens/sliderBannerPrincipal/banner.png', alt: 'Banner 2' },
  { id: 3, img: '/imagens/sliderBannerPrincipal/banner.png', alt: 'Banner 3' },
];

function Banner() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % banners.length);
  const prev = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderArea}>
        <button className={`${styles.seta} ${styles.left}`} onClick={prev}>‹</button>

        <AnimatePresence mode="wait">
          <motion.img
            key={banners[index].id}
            src={banners[index].img}
            alt={banners[index].alt}
            className={styles.bannerImage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <button className={`${styles.seta} ${styles.right}`} onClick={next}>›</button>
      </div>
      <div className={styles.dots}>
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
