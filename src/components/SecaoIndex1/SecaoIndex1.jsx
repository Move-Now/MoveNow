import "./SecaoIndex1.css";


export function SecaoIndex1() {
  return (
    <section>
        <div className="eclipse"></div>

            <img src="./assets/Caminhao1.png" alt="" />

        <h1><span className="tituloMovimente">Movimente</span> sua vida com tranquilidade. <br/> Deixe o <span  className="tituloTransporte">transporte</span> por nossa conta.</h1>
            
            <p>Se você está procurando um serviço de fretes ou carretos<br/>confiável e eficiente, então você veio ao lugar certo! Não <br/>deixe para depois peça “<span>Now</span>” com a <span>MoveNow</span>.</p>

        <div className="buttons">
            <a className="buttonIndex1">Solicite um carreto</a>
            <a className="buttonIndex2">Seja um motorista</a>
        </div>

        <div className="parcerias">
            <img src="./assets/logoWaze.png" className="imagemParceira"/>
            <img src="./assets/logoShell.png" className="imagemParceira"/>
            <img src="./assets/logoPetrobras.png" className="imagemParceira"/>
            <img src="./assets/logoIpiranga.png" className="imagemParceira"/>
            <img src="./assets/logoRutter.png" className="imagemParceira"/>
        </div>
  
    </section>
  );
}



