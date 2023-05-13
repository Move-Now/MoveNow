import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";    
import { FaGithub } from "react-icons/fa";    

export function Footer() {

  return (
      <footer>
        <div className="top">
            <div className="top-mobile">
                <p>Baixe nosso aplicativo para celular!</p>
                <div className="wrapperButtons">
                    <button>Google Play</button>
                    <button>App Store</button>
                </div>
            </div>
        </div>
        <div className="bottom">

            <div className="container">
                <h2>Move<span>Now</span></h2>
                <div id="content-empresa" className="bottom-content">
                    <ul>
                        <li className="bottom-content-title">Empresa</li>
                        <li>Sobre Nós</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <ul>
                        <li className="bottom-content-title">Ajuda</li>
                        <li>Perguntas Frenquentes</li>
                        <li>Motorista</li>
                        <li>Usuário</li>
                        <li>Ajudante</li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <ul>
                        <li className="bottom-content-title">Contate-nos</li>
                        <li> <FaLinkedin className="Socials" /> @MoveNow</li>
                        <li> <FaWhatsapp className="Socials" /> (11)00000-0000</li>
                        <li> <FaGithub className="Socials" /> @MoveNow</li>
                    </ul>
                </div>
            </div>

            
        </div>     
      </footer>  
  );
}
