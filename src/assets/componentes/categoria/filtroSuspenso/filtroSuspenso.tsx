
import React, { useState } from 'react'
import styles from './filtroSuspenso.module.css'
import useIsMobile from '../../../hooks/useIsMobile'

const FilterDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const isMobile = useIsMobile()

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  if (!isOpen) {
    return (
      <div className={styles.wrapper}>
        <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
          <img className={styles.iconFiltroCategoria} src="/imagens/filtroCategoria/iconFiltro.png" alt="Filtre aqui" />
          <span>Filtre Aqui</span>
        </button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.iconFiltroCategoria} src="/imagens/filtroCategoria/iconFiltro.png" alt="Filtre aqui" />
        <span>Filtre Aqui</span>
      </button>

      {isMobile ? (
        <div className={styles.drawer}>
          {/* MOBILE - conteúdo já existente com accordions */}
          {['marca', 'montadora'].map((section) => (
            <div className={styles.accordion} key={section}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion(section)}>
                <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                <span className={styles.icon}>
                  {openAccordion === section ? '−' : '+'}
                </span>
              </div>
              {openAccordion === section && (
                <div className={styles.accordionContent}>
                  <ul className={styles.accordionList}>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <li key={i}><label><input type="checkbox" /> Loren Ipsum</label></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className={styles.actions}>
            <button className={styles.apply}>Aplicar</button>
            <button className={styles.clear}>Limpar</button>
          </div>
        </div>
      ) : (
        <div className={styles.desktopGrid}>
          {[
            'Categoria', 'Subcategoria', 'Marca', 'Material',
            'Montadora', 'Modelo', 'Ano', 'Geração'
          ].map((title) => (
            <div className={styles.column} key={title}>
              <h4>{title}</h4>
              <ul>
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i}><label><input type="checkbox" /> Loren Ipsum</label></li>
                ))}
              </ul>
              <span className={styles.viewAll}>Ver tudo</span>
            </div>
          ))}

          <div className={styles.actionsDesktop}>
            <button className={styles.clear}>🧹 Limpar</button>
            <button className={styles.apply}>Aplicar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterDrawer
