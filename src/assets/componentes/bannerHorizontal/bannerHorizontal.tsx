import styles from './bannerHorizontal.module.css';

function bannerHorizontal(){
    return (
        <>
            <div className={styles.containerBanner}>
                <img className={styles.banner} src="/imagens/bannerHorizontal/banner-horizontal-2.jpg" />
            </div>
        </>
    )
}

export default bannerHorizontal;