import "./SecaoIndex1.css";

export function SecaoIndex1() {
  return (
    <section>
      <div className="eclipse"></div>
      {/* por enquanto vamos deixar esse eclipse aqui, até encontrarmos uma maneira mais eficiente de reproduzir */}

      <img src="./assets/Caminhao1.png" alt="" />
      {/* a imagem do caminhão também é provisória, até acharmos uma melhor */}
      <h1>
        <span>Movimente</span> sua vida com tranquilidade. <br /> Deixe o
        <span> transporte</span> por nossa conta.
      </h1>

      <p>
        Se você está procurando um serviço de fretes ou carretos
        <br />
        confiável e eficiente, então você veio ao lugar certo! Não <br />
        deixe para depois, peça “<span>Now</span>” com a <span>MoveNow</span>.
      </p>

      <div className="wrapperButtons">
        <button>Solicite um carreto</button>
        <button>Seja um motorista</button>
      </div>

      <div className="parcerias">
        <img src="./assets/logoWaze.png" className="imagemParceira" />
        <img src="./assets/logoShell.png" className="imagemParceira" />
        <img src="./assets/logoPetrobras.png" className="imagemParceira" />
        <img src="./assets/logoIpiranga.png" className="imagemParceira" />
        <img src="./assets/logoRutter.png" className="imagemParceira" />
      </div>
    </section>
  );
}
