import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './menu.module.css';

const menuItems = [
  {
    label: 'Início',
    icon: '/icons/home.png',
    link: '#',
  },
  {
    label: 'Sobre',
    icon: '/icons/about.png',
    link: '#',
    children: [
      { label: 'Equipe', link: '#' },
      { label: 'Missão', link: '#' },
    ],
  },
  {
    label: 'Contato',
    icon: '/icons/contact.png',
    link: '#',
  },
];

function Menu() {
  const [aberto, setAberto] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <motion.ul
            className={styles.dropdown}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={styles.item}
              >
                <a href={item.link} className={styles.itemContent}>
                  <img src={item.icon} alt="" className={styles.iconImg} />
                  <span>{item.label}</span>
                </a>

                {item.children && hoveredIndex === index && (
                  <motion.ul
                    className={styles.submenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.link}>{child.label}</a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
