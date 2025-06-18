import styles from './menuHorizontal.module.css';

function MenuHorizontal() {
  return (
    <div className={styles.container}>
      <ul className={styles.containerLista}>
        <li><a href="#">Ferragens</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Químicos</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Lâmpadas</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Lançamentos</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Mais Vendidos</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Destaques</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Outlet</a></li>
        <li><strong>|</strong></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  );
}

export default MenuHorizontal;