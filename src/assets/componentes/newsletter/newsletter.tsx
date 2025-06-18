import styles from './newsletter.module.css';

function Newsletter() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentnewsletter}>
          <div className={styles.contentItens}>
            <img
              className={styles.icone}
              src="/imagens/newsletter/icone.png"
              alt="Ícone"
            />
            <span className={styles.texto}>Quer receber promoções e novidades?</span>
          </div>

          <div className={styles.fields}>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite seu e-mail"
            />
            <button className={styles.btn}>Enviar</button>

            <div className={styles.checkboxPolitica}>
              <input type="checkbox" />
              <span className={styles.textoPolitica}>
                Ao se cadastrar, você concorda com a nossa{' '}
                <a href="#" className={styles.linkPolitica}>Política de privacidade</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;