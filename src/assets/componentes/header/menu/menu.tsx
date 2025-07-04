import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./menu.module.css";
import MenuPrincipal from "../menuPrincicpal/menuPrincipal";
import useIsMobile from "../../../hooks/useIsMobile";

function Menu() {
  const isMobile = useIsMobile();
  const [aberto, setAberto] = useState(false);
  const toggleMenu = () => setAberto((prev) => !prev);

  useEffect(() => {
    if (!isMobile) return;

    if (aberto) {
      document.querySelector("main")?.classList.add("menuAberto");
      document.querySelector(".containerHeader")?.classList.add("menuAberto");
      document.querySelector(".inner")?.classList.add("menuAberto");
      document.querySelector(".content")?.classList.add("menuAberto");
    } else {
      document.querySelector("main")?.classList.remove("menuAberto");
      document
        .querySelector(".containerHeader")
        ?.classList.remove("menuAberto");
      document.querySelector(".inner")?.classList.remove("menuAberto");
      document.querySelector(".content")?.classList.remove("menuAberto");
    }

    return () => {
      document.querySelector("main")?.classList.remove("menuAberto");
      document
        .querySelector(".containerHeader")
        ?.classList.remove("menuAberto");
      document.querySelector(".inner")?.classList.remove("menuAberto");
      document.querySelector(".content")?.classList.remove("menuAberto");
    };
  }, [aberto, isMobile]);

  return (
    <div className={styles.wrapper}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.icon}>
          {aberto ? <FaTimes size={20} /> : <FaBars size={20} />}
        </span>
        <span className={styles.label}>Menu</span>
      </button>

      {isMobile ? (
        <AnimatePresence>
          {aberto && (
            <motion.div
              key="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
              }}
            >
              <div
                onClick={() => setAberto(false)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  zIndex: 1,
                }}
              />

              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.25 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "85%",
                  height: "100vh",
                  backgroundColor: "white",
                  zIndex: 2,
                  overflowY: "auto",
                }}
              >
                <button
                  onClick={() => setAberto(false)}
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    zIndex: 10,
                    background: "none",
                    color: "#000",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  aria-label="Fechar menu"
                >
                  <FaTimes />
                </button>
                <MenuPrincipal />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {aberto && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: -35, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <MenuPrincipal />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default Menu;
