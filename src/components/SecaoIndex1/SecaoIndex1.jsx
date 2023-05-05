import { Button } from "../../components/Button/Button";
import "./SecaoIndex1.css";

export function SecaoIndex1() {

  const styleButtonPrimary = {
    color: "#000000",
    background: "var(--orange)",
  };

  const styleButtonSecondary = {
    color: "#FFFFFF",
    border: "3px solid var(--orange)",
    background: "transparent",
    cursor: "pointer",
  };

  return (
    <section>
      {/* <div className="eclipse"></div> */}
      {/* por enquanto vamos deixar esse eclipse aqui, até encontrarmos uma maneira mais eficiente de reproduzir */}

      {/* a imagem do caminhão também é provisória, até acharmos uma melhor */}

      <div className="wrapperContent">
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
          <Button style={styleButtonPrimary} name="Solicite um carreto" />
          <Button style={styleButtonSecondary} name="Seja um motorista" />
        </div>
      </div>

      <img src="../src/assets/Caminhao1.png" alt="" />
      {/* <div className="parcerias">
        <img src="../src/assets/logoWaze.png" className="imagemParceira" />
        <img src="../src/assets/logoShell.png" className="imagemParceira" />
        <img src="../src/assets/logoPetrobras.png" className="imagemParceira" />
        <img src="../src/assets/logoIpiranga.png" className="imagemParceira" />
        <img src="../src/assets/logoRutter.png" className="imagemParceira" />
      </div> */}
    </section>
  );
}
