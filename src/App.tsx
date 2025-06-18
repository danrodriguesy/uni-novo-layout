import './App.css'
import TopBar from './assets/componentes/topBar/topBar';
import Header from './assets/componentes/header/header';
import SliderBannerPrincipal from './assets/componentes/SliderBannerPrincipal/slider';
import FiltroInteligente from './assets/componentes/filtroInteligente/filtroInteligente';
import Lancamentos from './assets/componentes/Lancamentos/lancamentos';
import BannerHorizontal from './assets/componentes/bannerHorizontal/bannerHorizontal';
import ComprePorCategorias from './assets/componentes/comprePorCategorias/comprePorCategorias';
import NossasMarcas from './assets/componentes/nossasMarcas/nossasMarcas';
import CarrosselNossasMarcas from './assets/componentes/nossasMarcas/carrossel/carrosselMarcas';
import MaisVendidos from './assets/componentes/MaisVendidos/maisVendidos';
import CarrosselFull from './assets/componentes/carrosselFull/carrosselFull';
import UniversalRecomenda from './assets/componentes/universalRecomenda/universalRecomenda';
import VitrineImagens from './assets/componentes/vitrineImagens/vitrineImagens';
import Newsletter from './assets/componentes/newsletter/newsletter';
import Footer from './assets/componentes/footer/footer';
import useIsMobile from './assets/hooks/useIsMobile';

function App() {
  
  const isMobile = useIsMobile();

  if(isMobile){
    return (
      <>
        <TopBar />
        <Header />
        <SliderBannerPrincipal />
        <NossasMarcas />
        <CarrosselNossasMarcas />
        <Lancamentos />
        <BannerHorizontal />
        <FiltroInteligente />
        <ComprePorCategorias />
        <VitrineImagens />
        <Newsletter />
        <Footer />
      </>
    )
  }

  return (
    <>
      <TopBar />
      <Header />
      <SliderBannerPrincipal />
      <FiltroInteligente />
      <Lancamentos />
      <BannerHorizontal />
      <ComprePorCategorias />
      <NossasMarcas />
      <CarrosselNossasMarcas />
      <MaisVendidos
        titulo="Mais Vendidos"
        imagem="/imagens/maisVendidos/mais-vendidos.png"
        textoBotao="Ver Mais"
      />
      <BannerHorizontal />
      <UniversalRecomenda />
      <CarrosselFull />
      <VitrineImagens />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App