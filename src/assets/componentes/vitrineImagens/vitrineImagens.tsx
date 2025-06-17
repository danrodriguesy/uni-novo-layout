import { useEffect, useRef, useState } from "react";
import styles from "./vittrineImagens.module.css";

function VitrineImagens() {
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
    const index = Math.round(scrollLeft / (itemWidth + 16));
    setCurrentIndex(index);
  };

  const scrollTo = (index: number) => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.firstElementChild?.clientWidth || 1;
      const scrollPos = index * (itemWidth + 16);
      trackRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  };

  const slides = [
    {
      src: !isMobile ? "/imagens/vitrineImagens/celular.png"
      : "/imagens/vitrineImagens/celular-mobile.png",
      alt: "celular",
      className: styles.img1,
    },
    {
      src: !isMobile ? "/imagens/vitrineImagens/selecao-pecas-itens-linha-pesada.png" 
      : "/imagens/vitrineImagens/selecaoPecas-mobile.png",
      alt: "linha pesada",
      className: styles.img2,
    },
    {
      src: !isMobile ? "/imagens/vitrineImagens/selecao-pecas-vw-gol.png" :
      "/imagens/vitrineImagens/selecao-pecas-vw-gol-mobile.png",
      alt: "vw gol",
      className: styles.img3,
    },
  ];

  return (
    <>
      {!isMobile ? (
        <div className={styles.container}>
          <div className={styles.div1}>
            <img
              className={`${styles.img1} ${styles.imageZoom}`}
              src="/imagens/vitrineImagens/celular.png"
              alt="celular"
            />
          </div>
          <div className={styles.div2}>
            <img
              className={`${styles.img2} ${styles.imageZoom}`}
              src="/imagens/vitrineImagens/selecao-pecas-itens-linha-pesada.png"
              alt="linha pesada"
            />
            <img
              className={`${styles.img3} ${styles.imageZoom}`}
              
              src="/imagens/vitrineImagens/selecao-pecas-vw-gol.png"
              alt="vw gol"
            />
          </div>
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
                {slides.map((slide, index) => (
                  <div className={styles.slideItem} key={index}>
                    <img
                      className={`${slide.className} ${styles.imageZoom}`}
                      src={slide.src}
                      alt={slide.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.dots}>
            {slides.map((_, i) => (
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

export default VitrineImagens;