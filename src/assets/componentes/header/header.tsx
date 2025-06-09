import styles from './header.module.css';
import Logo from './logo/logo';
import Menu from './menu/menu';
import Search from './searchBar/searchBar';
import IconsWithContact from './ContactWithIcons/icons';

function Header(){
    return (
        <>
            <div className={styles.container}>
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