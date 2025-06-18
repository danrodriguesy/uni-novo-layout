import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './slider.module.css';
import useIsMobile from '../../hooks/useIsMobile';

const banners = [
  { id: 1, img: '/imagens/sliderBannerPrincipal/banner.png', alt: 'Banner 1' },
  { id: 2, img: '/imagens/sliderBannerPrincipal/banner.png', alt: 'Banner 2' },
  { id: 3, img: '/imagens/sliderBannerPrincipal/banner.png', alt: 'Banner 3' },
];

const bannersMobile = [
  { id: 1, img: '/imagens/sliderBannerPrincipal/banner-mobile.png', alt: 'Banner 1' },
  { id: 2, img: '/imagens/sliderBannerPrincipal/banner-mobile.png', alt: 'Banner 2' },
  { id: 3, img: '/imagens/sliderBannerPrincipal/banner-mobile.png', alt: 'Banner 3' },
];

function Banner() {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const next = () => setIndex((prev) => (prev + 1) % banners.length);
  const prev = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length);


  const scrollTo = (i: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: i * slideWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const handleScroll = () => {
      const scrollLeft = scrollRef.current!.scrollLeft;
      const slideWidth = scrollRef.current!.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setIndex(newIndex);
    };

    const el = scrollRef.current;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <>
      <div className={styles.bannerWrapper}>
        {!isMobile ? (
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
        ) : (
          <div className={styles.bannerTrack} ref={scrollRef}>
            {bannersMobile.map((banner) => (
              <div key={banner.id} className={styles.bannerSlide}>
                <AnimatePresence mode="wait">
                  <motion.img
                    src={banner.img}
                    alt={banner.alt}
                    className={styles.bannerImage}
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Agora fora da wrapper — sem cortar, sem erro */}
      <div className={styles.dots}>
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              if (isMobile) scrollTo(i);
            }}
            className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default Banner;