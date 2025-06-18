import TopBar from '../assets/componentes/topBar/topBar';
import Header from '../assets/componentes/header/header';
//import Footer from '../assets/componentes/footer/footer';
//import Newsletter from '../assets/componentes/newsletter/newsletter';
import '../../src/App.css';
import '../../src/index.css';
import MenuHorizontal from '../assets/componentes/menuHorizontal/menuHorizontal';
import Breadcrumb from '../assets/componentes/breadcrumb/breadcrumb';
import Slider from '../assets/componentes/produto/slider/sliderProduto';
import styles from '../assets/componentes/produto/produto.module.css';


function Produto(){
  return (
    <>
      <TopBar />
      <Header />
      <MenuHorizontal />
      <Breadcrumb />
      <div className={styles.containerInformacoesProduto}>
        <Slider />
        
      </div>
    </>
  )
}

export default Produto;