import React, {useState, useEffect, useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";


const StyledAbout = styled.div`

`;

export function About() {

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
                  Carreteiros valorizados. Setor transformado. Essa é a missão da MoveNow!
                </h2>
                  <p>
                    A MoveNow busca sempre valorizar o carreteiro. Nosso objetivo é ajudar você a alcançar seus destinos e objetivos. Conte conosco para mover suas conquistas e abrir novos caminhos.
                  </p>
              </div>
              <div className="dropdownParagraphAbout" onClick={toggleContent}>
                <p className="dropdownParagraphAboutContent">
                  Leia a declaração completa sobre a nossa missão
                </p>
                {showContent ? <FiMinus /> : <FiPlus />}
              </div>
              {showContent && (
                  <p>
                    Na MoveNow, temos como missão primordial valorizar e dar visibilidade aos carreteiros, proporcionando melhorias significativas em seu espaço de trabalho. Estamos comprometidos em criar um ambiente que reconheça e exalte a importância desses profissionais, garantindo-lhes as condições adequadas para desempenhar suas atividades com excelência. Nosso objetivo é promover um setor de transporte de cargas mais justo, seguro e gratificante, onde os carreteiros sejam reconhecidos como pilares fundamentais. Através de iniciativas e investimentos contínuos, buscamos elevar sua qualidade de vida, oferecendo suporte, oportunidades de crescimento e respeito inegociável. Somos movidos pela valorização e desenvolvimento dos carreteiros, pois sabemos que seu trabalho é essencial para a economia e a mobilidade das pessoas em todo o mundo. Junte-se a nós nessa jornada, em que cada carreteiro é valorizado como um protagonista da nossa história de sucesso.
                  </p>
                )}
            </div>
          </div>
        </div>
        <Footer />
      </StyledAbout>
    );
  }