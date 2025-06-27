import styles from './bannerEstatico.module.css';

function BannerEstatico(){ 
    return (
        <img className={styles.bannerEstatico} src="/imagens/bannerEstatico/bannerEstatico.png" alt="Banner Estático" />
    )
}

export default BannerEstatico;