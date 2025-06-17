import { useEffect, useRef, useState } from "react";
import styles from "./camprePorCategorias.module.css";
import Itens from "./itens/itens";

function ComprePorCategorias() {
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
    const scrollLeft = trackRef.current.scrollLeft;
    const itemWidth = trackRef.current.firstElementChild?.clientWidth || 1;
    const index = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(index);
  };

  const scrollTo = (index: number) => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.firstElementChild?.clientWidth || 1;
      const scrollPos = index * itemWidth;
      trackRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
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
          <Itens />
        </div>
      ) : (
        <>
          <div className={styles.sliderMobileWrapper}>
            <div
              className={styles.sliderMobile}
              onScroll={handleScroll}
              ref={trackRef}
            >
              <div className={styles.sliderTrack}>
                <Itens />
              </div>
            </div>
          </div>

          <div className={styles.dots}>
            {Array.from({ length: 4 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`${styles.dot} ${
                  i === currentIndex ? styles.active : ""
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ComprePorCategorias;
