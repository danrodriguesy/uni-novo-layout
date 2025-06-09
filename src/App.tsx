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

function App() {
  
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
      <MaisVendidos />
    </>
  )
}

export default App
