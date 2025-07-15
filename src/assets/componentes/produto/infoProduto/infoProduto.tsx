import styles from "./infoProduto.module.css";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import useIsMobile from "../../../hooks/useIsMobile";
import AdicionarProduto from "../adicionarProduto/adicionarProduto";

function InfoProduto() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.containerDetalhes}>
            <div className={styles.Header}>
              <span>Ref.: 99743</span>
              <div className={styles.social}>
                <CiHeart fontSize={30} />
                <IoShareSocialOutline fontSize={30} />
              </div>
            </div>
            <div className={styles.tituloProduto}>
              <h1>
                Amortecedor Mola a Gás da Tampa do Porta-Malas - Comprimento:
                510mm/Curso: 210mm/Carga: 45KGF - Diâmetro Pistão: 8mm/Tubo:
                18mm
              </h1>
            </div>
            {/* 
            <div className={styles.containerMaisDetalhes}>
              <span className={styles.mais}>+</span>{" "}
              <span className={styles.texto}>Ver descrição completa</span>
            </div>
            */}
            {/*<div className={styles.containerAvaliacaoCategoria}>
              <div className={styles.stars}>
                <CiStar fontSize={30} className={styles.star} />
                <CiStar fontSize={30} className={styles.star} />
                <CiStar fontSize={30} className={styles.star} />
                <CiStar fontSize={30} className={styles.star} />
                <CiStar fontSize={30} className={styles.star} />
              </div>
              <span className={styles.categoria}>Amortex</span>
            </div>*/}
            <div className={styles.precoEstoque}>
              <div className={styles.precos}>
                <span className={styles.precoAntigo}>R$ 599,99</span>
                <span className={styles.precoDesconto}>R$ 499,99</span>
              </div>
              <div className={styles.containerRight}>
                <div className={styles.containerDesconto}>
                  <span className={styles.desconto}>-20%</span>
                </div>
                <div className={styles.containerEstoque}>
                  <span className={styles.estoqueRestante}>
                    {" "}
                    <img
                      className={styles.fogueira}
                      src="/imagens/produto/fogueira.png"
                    />{" "}
                    Restam <strong> 41 </strong> Un.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.containerFrete}>
              <div className={styles.textos}>
                <span className={styles.calcular}>Calcular frete</span>
                <span className={styles.naoSeiMeuCEP}>Não sei meu CEP</span>
              </div>
              <div className={styles.containerInput}>
                <input type="text" className={styles.input} />
                <button className={styles.btnCalcular}>OK</button>
              </div>
              {/* adicionar */}
              <AdicionarProduto />
            </div>
            <div className={styles.cardsSedexFob}>
              <div className={styles.fob}>
                <img
                  src="/imagens/produto/arrow-down-money.png"
                  className={styles.arrowDownMoney}
                />
                <div>
                  <p>Preço FOB</p>
                  <span>Sem frete</span>
                </div>
              </div>
              <div className={styles.sedex}>
                <div className={styles.left}>
                  <img
                    src="imagens/produto/caminhao-de-entrega.png"
                    className={styles.truck}
                  />
                </div>
                <div className={styles.right}>
                  <p>Sedex</p>
                  <span>Em até X dia(s) úteis</span>
                  <div>
                    <span>
                      <strong>R$ 10,00</strong>
                    </span>
                  </div>
                  <div>
                    <span>+ opções de envio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerDuvida}>
              <div className={styles.contentIcon}>
                <img
                  className={styles.iconSac}
                  src="/imagens/footer/imagens/SAC.png"
                />
              </div>

              <div className={styles.contentTexto}>
                <div className={styles.textos}>
                  <span>
                    <strong className={styles.title}>Alguma dúvida?</strong>
                  </span>
                  <span>Entre em contato com nosso suporte</span>
                  <span className={styles.linkCanalSuporte}>
                    Ver canal do suporte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.container}>
        {/*<button className={styles.btnCadastrar}>
          Cadastre-se para ver o preço
        </button>*/}
        <div className={styles.containerDetalhes}>
          <div className={styles.Header}>
            <span>Ref.: 99743</span>
            <div className={styles.social}>
              <CiHeart fontSize={30} />
              <IoShareSocialOutline fontSize={30} />
            </div>
          </div>
          <div className={styles.tituloProduto}>
            <h1>
              Fechadura Interna do Porta-Malas c/ Micro Switch | 2 Pinos | Gol G5 a G8 2008 a 2023
            </h1>
          </div>
          {/* 
          <div className={styles.containerMaisDetalhes}>
            <span className={styles.mais}>+</span>{" "}
            <span className={styles.texto}>Ver descrição completa</span>
          </div>
          */}
          {/*<div className={styles.containerAvaliacaoCategoria}>
            <div className={styles.stars}>
              <CiStar fontSize={30} className={styles.star} />
              <CiStar fontSize={30} className={styles.star} />
              <CiStar fontSize={30} className={styles.star} />
              <CiStar fontSize={30} className={styles.star} />
              <CiStar fontSize={30} className={styles.star} />
            </div>
            <span className={styles.categoria}>Amortex</span>
          </div>*/}
          <div className={styles.precoEstoque}>
            <div className={styles.precos}>
              <span className={styles.precoAntigo}>R$ 599,99</span>
              <span className={styles.precoDesconto}>R$ 499,99</span>
            </div>
            <div className={styles.containerRight}>
              <div className={styles.containerDesconto}>
                <span className={styles.desconto}>-20%</span>
              </div>
              <div className={styles.containerEstoque}>
                <span className={styles.estoqueRestante}>
                  {" "}
                  <img
                    className={styles.fogueira}
                    src="/imagens/produto/fogueira.png"
                  />{" "}
                  Restam <strong> 41 </strong> Un.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.containerFrete}>
            <div className={styles.textos}>
              <span className={styles.calcular}>Calcular frete</span>
              <span className={styles.naoSeiMeuCEP}>Não sei meu CEP</span>
            </div>
            <div className={styles.containerInput}>
              <input type="text" className={styles.input} />
              <button className={styles.btnCalcular}>OK</button>
            </div>
            {/* adicionar */}
            <AdicionarProduto />
          </div>
        </div>
        <div className={styles.cardsSedexFob}>
          <div className={styles.fob}>
            <img
              src="/imagens/produto/arrow-down-money.png"
              className={styles.arrowDownMoney}
            />
            <div>
              <p>Preço FOB</p>
              <span>Sem frete</span>
            </div>
          </div>
          <div className={styles.sedex}>
            <div className={styles.left}>
              <img
                src="imagens/produto/caminhao-de-entrega.png"
                className={styles.truck}
              />
            </div>
            <div className={styles.right}>
              <p>Sedex</p>
              <span>Em até X dia(s) úteis</span>
              <div>
                <span>
                  <strong>R$ 10,00</strong>
                </span>
              </div>
              <div>
                <span>+ opções de envio</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerDuvida}>
          <div>
            <img
              className={styles.iconSac}
              src="/imagens/footer/imagens/SAC.png"
            />
          </div>

          <div className={styles.containerDuvidaTexto}>
            <span>
              <strong>Alguma dúvida?</strong>
            </span>
            <div className={styles.textos}>
              <span>Entre em contato com nosso suporte</span>
              <span className={styles.linkCanalSuporte}>
                Ver canal do suporte
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoProduto;
