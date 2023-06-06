import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";    
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.div`
    .top-mobile {
      transition: ${props => props.theme.transitionComponents};
      background: ${props => props.theme.glassFooter};
    }

    .top-mobile button{
      transition: ${props => props.theme.transitionComponents};
      background: ${props => props.theme.buttonBackgroundPrimaryColor};
    }

  .top-mobile p{
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  .bottom {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  .bottom span {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.spanColor};
  }

  .Socials {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }
  
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Footer() {

  return (
    <StyledFooter>
      <footer>
        <div className="top">
            <div className="top-mobile">
                <p className="content">Baixe nosso aplicativo para celular!</p>
                <div className="wrapperButtons">
                    <button>App Store</button>
                    <button>Google Play</button>
                </div>
            </div>
        </div>

        <div className="bottom">
            <h2 className="titleFooter">move<span>now</span></h2>
            <div className="container">
                
                <div id="content-empresa" className="bottom-content">
                    <ul>
                        <li className="bottom-content-title">Empresa</li>
                        <li className="bottom-click">Sobre Nós</li>
                        <li className="bottom-click">Fale Conosco</li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <ul>
                        <li className="bottom-content-title">Ajuda</li>
                        <li className="bottom-click">Perguntas <br/>Frenquentes</li>
                        <li className="bottom-click">Motorista</li>
                        <li className="bottom-click">Usuário</li>
                        <li className="bottom-click">Ajudante</li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <ul>
                        <li className="bottom-content-title">Contate-nos</li>
                        <li className="bottom-click"> <FaLinkedin className="Socials" /> @MoveNow</li>
                        <li className="bottom-click"> <FaWhatsapp className="Socials" /> (11)00000-0000</li>
                        <li className="bottom-click"> <FaGithub className="Socials" /> @MoveNow</li>
                    </ul>
                </div>
            </div>
        </div>     
      </footer>  
    </StyledFooter>
  );
}
