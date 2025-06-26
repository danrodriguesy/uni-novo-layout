import { useEffect, useRef, useState } from "react";
import styles from "./camprePorCategorias.module.css";

function ComprePorCategorias() {
  const categorias = [
    { src: "/imagens/comprePorCategorias/suspensao.png", label: "Suspensão" },
    { src: "/imagens/comprePorCategorias/lampadas.png", label: "Lâmpadas" },
    { src: "/imagens/comprePorCategorias/macanetas.png", label: "Maçanetas" },
    { src: "/imagens/comprePorCategorias/fechadura.png", label: "Fechaduras" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = () => {
    if (!trackRef.current) return;

    //const scrollLeft = trackRef.current.scrollLeft;
    const items = Array.from(trackRef.current.querySelectorAll(`.${styles.item}`));

    let closest = 0;
    let minDiff = Infinity;

    items.forEach((item, index) => {
      const diff = Math.abs(
        item.getBoundingClientRect().left -
        trackRef.current!.getBoundingClientRect().left
      );
      if (diff < minDiff) {
        minDiff = diff;
        closest = index;
      }
    });

    setCurrentIndex(closest);
  };

  const scrollTo = (index: number) => {
    const items = trackRef.current?.querySelectorAll(`.${styles.item}`);
    if (items?.[index]) {
      const left = (items[index] as HTMLElement).offsetLeft;
      trackRef.current?.scrollTo({ left, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.icon}
          src="imagens/comprePorCategorias/icone.png"
          alt="Ícone"
        />
        <h2>Compre por Categorias</h2>
      </div>

      {!isMobile ? (
        <div className={styles.container}>
          {categorias.map((cat, index) => (
            <div key={index} className={styles.item}>
              <img src={cat.src} alt={cat.label} />
              <p className={styles.label}>{cat.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={styles.sliderMobileWrapper}>
            <div
              className={styles.sliderMobile}
              ref={trackRef}
              onScroll={handleScroll}
            >
              <div className={styles.sliderTrack}>
                {categorias.map((cat, index) => (
                  <div key={index} className={styles.item}>
                    <img src={cat.src} alt={cat.label} />
                    <p className={styles.label}>{cat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.dots}>
            {categorias.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`${styles.dot} ${i === currentIndex ? styles.active : ""}`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ComprePorCategorias;
