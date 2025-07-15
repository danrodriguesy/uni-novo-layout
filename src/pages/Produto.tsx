import TopBar from '../assets/componentes/topBar/topBar';
import Header from '../assets/componentes/header/header';
import Footer from '../assets/componentes/footer/footer';
import Newsletter from '../assets/componentes/newsletter/newsletter';
import '../../src/App.css';
import '../../src/index.css';
import MenuHorizontal from '../assets/componentes/menuHorizontal/menuHorizontal';
import Breadcrumb from '../assets/componentes/breadcrumb/breadcrumb';
import Slider from '../assets/componentes/produto/slider/sliderProduto';
import styles from '../assets/componentes/produto/produto.module.css';
import InformacaoDoProduto from '../assets/componentes/produto/infoProduto/infoProduto';
import CarrosselFull from '../assets/componentes/carrosselFull/carrosselFull';
import DescricaoDetalhada from '../assets/componentes/produto/descricaoDetalhada/descricaoDetalhada';
import useIsMobile from '../assets/hooks/useIsMobile';
import Accordion  from '../assets/componentes/produto/accordion/accordion';
import WhatsappButton from '../assets/componentes/whatsapp/whatsapp';

type AccordionItem = {
  title: string;
  content: string;
};

function Produto(){
  const isMobile = useIsMobile();

  const items: AccordionItem[] = [
    { title: 'Descrição', content: 'Texto da descrição do produto.' },
    { title: 'Informações técnicas do produto', content: 'Material: Vidro, Peso: 500g' },
    { title: 'Limpeza e cuidados', content: 'Use pano seco e evite produtos abrasivos.' },
    { title: 'Linha', content: 'Linha Elegance' },
  ];

  if(isMobile){
    return (
      <>
        <TopBar hidden={false} />
        <Header />
        <MenuHorizontal />
        <Breadcrumb />
        <div className={styles.containerInformacoesProduto}>
          <Slider />
          <InformacaoDoProduto />
        </div>
        <Accordion items={items} />
        <div className={styles.titleCompreJunto}>
          <img
            src="/imagens/produto/iconeCompreJunto.png"
            className={styles.icone}
            alt="Ícone Compre Junto"
          />
          <h2>Compre Junto</h2>
        </div> 
        <CarrosselFull />
        <Newsletter />
        <Footer />
        <WhatsappButton />
      </>
    )
  }
  
  return (
    <>
      <TopBar hidden={false} />
      <Header />
      <MenuHorizontal />
      <Breadcrumb />
      <div className={styles.containerInformacoesProduto}>
        <Slider />
        <InformacaoDoProduto />
      </div>
      <div className={styles.titleCompreJunto}>
          <img
            src="/imagens/produto/iconeCompreJunto.png"
            className={styles.icone}
            alt="Ícone Compre Junto"
          />
          <h2>Compre Junto</h2>
      </div>
      <CarrosselFull />
      <DescricaoDetalhada />
      <Newsletter />
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default Produto;