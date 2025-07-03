import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './menu.module.css';
import MenuPrincipal from '../menuPrincicpal/menuPrincipal';

function Menu() {
  const [aberto, setAberto] = useState(false);

  const toggleMenu = () => setAberto((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.icon}>
          {aberto ? <FaTimes size={20} /> : <FaBars size={20} />}
        </span>
        <span className={styles.label}>Menu</span>
      </button>

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
    </div>
  );
}

export default Menu;
