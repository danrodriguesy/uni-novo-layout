import styles from './header.module.css';
import Logo from './logo/logo';
import Menu from './menu/menu';
import Search from './searchBar/searchBar';
import IconsWithContact from './ContactWithIcons/icons';
import useIsMobile from '../../hooks/useIsMobile';

function Header(){

    const isMobile = useIsMobile();

    if(isMobile){
        return (
            <>
                <div className={styles.container}>
                    <Menu />
                    <Logo />
                    <IconsWithContact />
                </div>
                <Search />
            </>
        )
    }

    return (
        <>
            <div className={styles.container}>
                {isMobile}
                <div className={styles.containerLogoMenu}>
                    <Logo />
                    <Menu />
                </div>
                <Search />
                <IconsWithContact />
            </div>
        </>
    )
}

export default Header;