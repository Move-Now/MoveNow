import React, {useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";


const StyledAbout = styled.div`
  .paragraphsAbout {
    color: ${props => props.theme.textColor};
  }

  .dropdownParagraphAboutContent {
    color: ${props => props.theme.textColor};
  }

  .iconsAbout {
    color: ${props => props.theme.spanColor};
  }

  .subtitleAbout {
    color: ${props => props.theme.textColor};
  }

  .contentSustentabilidadeAbout {
    border-right: 1px solid ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.textColor};
  }

  .contentSustentabilidadeAbout2 {
    border-left: 1px solid ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.textColor};
  }

  .subtitleContainers {
    color: ${props => props.theme.textColor};
  }
`;

export function About() {

  const theme = useContext(ThemeContext);
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    setIsDarkMode(storedTheme === "dark");
  }, [storedTheme]);

  const imageAbout = isDarkMode ? "../src/assets/movenowProaDark.png" : "../src/assets/movenowProaLight.png"

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <StyledAbout>
      <ScrollToTop />
      <div className="sobreNos">
        <div className="topAbout">
          <div className="contentTopAbout">
            <h1 className="titleAbout">Quem somos?</h1>
          </div>
        </div>
        <div className="bottomAbout">
          <div className="contentBottomAbout">
            <div className="bottomContent2">
              <h2 className="subtitleAbout">
                Carreteiro valorizado. Setor transformado. Essa é a missão da MoveNow!
              </h2>
              <p className="paragraphsAbout">
                A MoveNow busca sempre valorizar o carreteiro. Nosso objetivo é ajudar você a alcançar seus destinos e objetivos. Conte conosco para mover suas conquistas e abrir novos caminhos.
              </p>
            </div>
            <div className="dropdownParagraphAbout" onClick={toggleContent}>
              <p className="dropdownParagraphAboutContent">
                Leia a declaração completa sobre a nossa missão
              </p>
              {showContent ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
            </div>
            {showContent && (
              <p className="paragraphsAbout">
                Na MoveNow, temos como missão primordial dar visibilidade aos carreteiros, proporcionando melhorias significativas em seu espaço de trabalho. Estamos comprometidos em criar um ambiente que reconheça e exalte a importância desses profissionais, garantindo-lhes as condições adequadas para desempenhar suas atividades com excelência. Nosso objetivo é promover um setor de transporte de cargas mais justo, seguro e gratificante, onde os carreteiros sejam reconhecidos como pilares fundamentais. Por meio de iniciativas e investimentos contínuos, buscamos elevar sua qualidade de vida, oferecendo suporte, oportunidades de crescimento e respeito inegociável. Somos movidos pela valorização e desenvolvimento dos carreteiros, pois sabemos que seu trabalho é essencial para a economia e a mobilidade de cargas em todo o mundo. Junte-se a nós nessa jornada, em que cada carreteiro é valorizado como um protagonista da nossa história de sucesso.
              </p>
            )}
          </div>
        </div>
        <div className="aboutSustentabilidade">
          <div className="aboutSustentabilidadeContent">
            <img src="../../src/assets/aboutSustentabilidade.png" alt="oi" className="imgAboutSustentabilidade" />
            <div className="contentSustentabilidadeAbout">
              <h2 className="subtitleAbout">Sustentabilidade</h2>
              <p className="paragraphsAbout">
                A MoveNow é uma empresa de carretos comprometida com a sustentabilidade em todas as etapas de suas operações. Uma das principais iniciativas sustentáveis da empresa é a parceria com postos de gasolina que fornecem biodiesel para abastecer as frotas de caminhões. Além disso, a MoveNow também investe em caminhões elétricos, visando reduzir ainda mais as emissões e promover o uso de energia limpa.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutSustentabilidade">

          <div className="aboutSustentabilidadeContent2">
            <div className="contentSustentabilidadeAbout2">
              <h2 className="subtitleAbout">A segurança é uma prioridade</h2>
              <p className="paragraphsAbout">
                Nós levamos a segurança das mudanças muito a sério e utilizamos tecnologias avançadas para garantir o acompanhamento e a geolocalização precisa de todos os carretos. Por meio de sistemas de rastreamento integrados, a empresa é capaz de monitorar em tempo real a localização das mudanças. Isso permite que os clientes acompanhem o progresso de suas mudanças e tenham a tranquilidade de saber onde seus pertences estão a qualquer momento.
              </p>

            </div>
            <img src="../../src/assets/rastreamento.png" alt="oi" className="imgAboutSustentabilidade" />
          </div>
        </div>
        <div className="finalAbout">
          <div className="finalAboutContent">
            <div className="titleFinalAbout">
              <h2 className="subtitleAbout">Por trás da MoveNow...</h2>
            </div>
            <div className="finalAboutContentContainers">
              
              <div className="aboutContainers">
                <img src="../../src/assets/equipeMoveNow.jpg" className="containersImages"/>
                <p className="subtitleContainers">Nossa equipe</p>
                <p className="paragraphsAbout">Em nossa equipe, valorizamos a colaboração, a criatividade e a paixão por encontrar soluções disruptivas. Nosso objetivo comum é transformar a área de carretos, tornando-a mais eficiente, valorizada e sustentável. Juntos, avançamos rumo ao sucesso, construindo um futuro melhor para todos os carreteiros.</p>
              </div>

              <div className="aboutContainers">
                <img src={imageAbout} className="containersImages"/>
                <p className="subtitleContainers">História da MoveNow</p>
                <p className="paragraphsAbout">Nossa história começa com três integrantes cujos familiares são carreteiros. Conhecendo de perto as dificuldades enfrentadas, criamos a MoveNow para resolver os diversos problemas vividos, valorizando verdadeiramente nossos carreteiros e tornando-os acessíveis a todos. Pegando diversas dores e tranformando em soluções, essa é a MoveNow!</p>
              </div>

              <div className="aboutContainers">
                <img src="../../src/assets/futuroAbout.png" className="containersImages"/>
                <p className="subtitleContainers">Inovação e tecnologia</p>
                <p className="paragraphsAbout">Buscamos por tecnologias inovadoras para impulsionar nossa plataforma. Introduzimos recursos avançados, como geolocalização e realidade aumentada, aprimorando o gerenciamento de caminhos e veículos. Além disso, investimos em frotas elétricas e melhoramos a infraestrutura viária, visando um transporte mais sustentável e eficiente.</p>
              </div>

            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </StyledAbout>
  );
}