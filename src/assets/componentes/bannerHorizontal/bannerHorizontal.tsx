import styles from './bannerHorizontal.module.css';

function bannerHorizontal(){
    return (
        <>
            <div className={styles.containerBanner}>
                <img className={styles.banner} src="/bannerHorizontal/banner.png" />    
            </div>
            
        </>
    )
}

export default bannerHorizontal;