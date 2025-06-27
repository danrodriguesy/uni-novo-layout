import TopBar from '../assets/componentes/topBar/topBar';
import Header from '../assets/componentes/header/header';
import Footer from '../assets/componentes/footer/footer';
import Newsletter from '../assets/componentes/newsletter/newsletter';
import '../../src/App.css';
import '../../src/index.css';
import MenuHorizontal from '../assets/componentes/menuHorizontal/menuHorizontal';
import Breadcrumb from '../assets/componentes/breadcrumb/breadcrumb';
import useIsMobile from '../assets/hooks/useIsMobile';
import BannerEstatico from '../assets/componentes/bannerEstatico/bannerEstatico';
import FiltroSimples from '../assets/componentes/filtroSimples/filtroSimples';
import styles from '../assets/componentes/categoria/categoria.module.css';
import FiltroCategoria from '../assets/componentes/categoria/filtroCategoria/filtroCategoria';

function Categoria(){
  const isMobile = useIsMobile();

  if(isMobile){
    return (
      <>
        <TopBar hidden={false} />
        <Header />
        <MenuHorizontal />
        
        <Newsletter />
        <Footer />
      </>
    )
  }
  
  return (
    <>
      <TopBar hidden={false} />
      <Header />
      <MenuHorizontal />
      
      <BannerEstatico />
      
      <FiltroSimples />
      <Breadcrumb />
      <FiltroCategoria />
      <div className={styles.containerTitle}>
        <img
          className={styles.icon}
          src="/imagens/lancamentos/lancamento.png"
          alt="Lançamentos"
        />
        <h2 className={styles.title}>Lançamentos</h2>
      </div>
      <Footer />
    </>
  )
}

export default Categoria;