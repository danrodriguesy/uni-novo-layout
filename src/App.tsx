import { useEffect, useRef, useState } from 'react';
import './App.css';

import TopBar from './assets/componentes/topBar/topBar';
import Header from './assets/componentes/header/header';
import MenuHorizontal from './assets/componentes/menuHorizontal/menuHorizontal';
import SliderBannerPrincipal from './assets/componentes/SliderBannerPrincipal/slider';
//import FiltroInteligente from './assets/componentes/filtroInteligente/filtroInteligente';
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
import BuscarPorPlaca from './assets/componentes/buscarProPlaca/buscarPorPlaca';
import CarrosselMaisVendidos from './assets/componentes/MaisVendidos/maisVendidosCarrossel/carrosselMaisVendidos';


function App() {

  const isMobile = useIsMobile();
  const [showShadow, setShowShadow] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowShadow((prev) => {
        const next = scrollY > 10;
        return prev !== next ? next : prev;
      });

      setHideTopbar((prev) => {
        const next = scrollY > 0;
        return prev !== next ? next : prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TopBar dentro de wrapper com altura fixa */}
      <div style={{ height: 40, overflow: 'hidden' }}>
        <TopBar hidden={hideTopbar} />
      </div>

      {/* Header fixo que será medido */}
      <div
        ref={headerRef}
        className={`containerHeader ${showShadow ? 'with-shadow' : ''}`}
      >
        <Header />
        <MenuHorizontal />
      </div>

      <main>
        {isMobile ? (
          <>
            <SliderBannerPrincipal />
            <NossasMarcas />
            <CarrosselNossasMarcas />
            <Lancamentos />
            <BannerHorizontal />
            <BuscarPorPlaca />
            <ComprePorCategorias />
            <VitrineImagens />
            <Newsletter />
            <Footer />
          </>
        ) : (
          <>
            <SliderBannerPrincipal />
            <br /><br />
            <BuscarPorPlaca />
            <br /><br />
            <MaisVendidos
              titulo="Lançamentos"
              imagem="/imagens/lancamentos/lancamento.png"
              textoBotao="Ver Mais"
            />
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
            <CarrosselMaisVendidos />
            <BannerHorizontal />
            <UniversalRecomenda />
            <CarrosselFull />
            <VitrineImagens />
            <Newsletter />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

export default App;