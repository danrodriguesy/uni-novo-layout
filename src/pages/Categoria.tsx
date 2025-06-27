import TopBar from '../assets/componentes/topBar/topBar';
import Header from '../assets/componentes/header/header';
import Footer from '../assets/componentes/footer/footer';
import Newsletter from '../assets/componentes/newsletter/newsletter';
import '../../src/App.css';
import '../../src/index.css';
import MenuHorizontal from '../assets/componentes/menuHorizontal/menuHorizontal';
import Breadcrumb from '../assets/componentes/breadcrumb/breadcrumb';
import useIsMobile from '../assets/hooks/useIsMobile';

function Categoria(){
  const isMobile = useIsMobile();

  if(isMobile){
    return (
      <>
        <TopBar hidden={false} />
        <Header />
        <MenuHorizontal />
        <Breadcrumb />
        
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
      <Breadcrumb />
      
      
      <Newsletter />
      <Footer />
    </>
  )
}

export default Categoria;