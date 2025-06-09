import styles from './bannerHorizontal.module.css';

function bannerHorizontal(){
    return (
        <>
            <div className={styles.containerBanner}>
                <img className={styles.banner} src="src\assets\componentes\bannerHorizontal\imagens\banner.png" />    
            </div>
            
        </>
    )
}

export default bannerHorizontal;