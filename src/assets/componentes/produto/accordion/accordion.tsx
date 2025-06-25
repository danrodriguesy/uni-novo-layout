import React, { useState } from 'react';
import styles from './accordion.module.css';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}


function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => toggle(index)}>
            <span>{item.title}</span>
            <span className={`accordion-icon ${openIndex === index ? 'open' : ''}`}>▼</span>
          </div>
          {openIndex === index && (
            <div className={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;