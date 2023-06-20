import React, { useState } from 'react';
import styled from "styled-components";
import './SecaoIndex3.css';

const StyledSecaoIndex3 = styled.div`
  .section3 {
    transition: ${props => props.theme.transitionComponents};
    background-color: ${props => props.theme.glass};
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  h2 {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  #progress-bar-container li.active:before, #progress-bar-container li:hover:before {
    transition: ${props => props.theme.transitionComponents};
    border:solid 1.5px ${props => props.theme.textColor};
    background: ${props => props.theme.spanColor};
  }

  #progress-bar-container li.active, #progress-bar-container li:hover {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  #progress-bar-container li.active:after {
    transition: ${props => props.theme.transitionComponents};
    background: ${props => props.theme.spanColor};
  }

  #progress-bar-container #line-progress {
    transition: ${props => props.theme.transitionComponents};
    background: ${props => props.theme.spanColor}; 
  }

  #progress-content-section .section-content h2{
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  #progress-content-section .section-content p{
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }
  
  
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function SecaoIndex3() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);

    const progressBar = document.querySelector('#line-progress');
    const sections = document.querySelectorAll('.section-content');
    const steps = document.querySelectorAll('.step');

    progressBar.style.width = `${(step - 1) * 25}%`;

    sections.forEach((section, index) => {
      section.classList.remove('active');
      if (index === step - 1) {
        section.classList.add('active');
      }
    });

    steps.forEach((stepElement, index) => {
      stepElement.classList.remove('active');
      if (index < step) {
        stepElement.classList.add('active');
      }
    });
  };

  return (
    <StyledSecaoIndex3>
      <div className='section3'>

        <h2 className='titleIndex3'>Como funciona?</h2>
        <p className='contentTitleIndex3'>Acompanhe o processo até a conclusão de seu pedido</p>

          <div id="progress-bar-container">

            <ul>
              <li
                className={`step step01 ${activeStep >= 1 ? 'active' : ''}`}
                onClick={() => handleStepClick(1)}
              >
                <div className="step-inner">Solicite seu orçamento</div>
              </li>
              <li
                className={`step step02 ${activeStep >= 2 ? 'active' : ''}`}
                onClick={() => handleStepClick(2)}
              >
                <div className="step-inner">Receba diversos preços</div>
              </li>
              <li
                className={`step step03 ${activeStep >= 3 ? 'active' : ''}`}
                onClick={() => handleStepClick(3)}
              >
                <div className="step-inner">Selecione o melhor orçamento</div>
              </li>
              <li
                className={`step step04 ${activeStep >= 4 ? 'active' : ''}`}
                onClick={() => handleStepClick(4)}
              >
                <div className="step-inner">Converse com o motorista</div>
              </li>
              <li
                className={`step step05 ${activeStep >= 5 ? 'active' : ''}`}
                onClick={() => handleStepClick(5)}
                >
                <div className="step-inner">Rastreie a mudança</div>
              </li>
            </ul>

            <div id="line">
              <div id="line-progress"></div>
            </div>

          </div>

          <div className="process-wrapper">

            <div id="progress-content-section">
              <div className={`section-content orcamento ${activeStep === 1 ? 'active' : ''}`}>
                <h2>Solicite seu orçamento</h2>
                <p>
                  Para solicitar um orçamento completo, basta informar nos campos adequados a descrição de sua mudança ou transporte, para que nosso sistema auxilie automaticamente com os melhores caminhões disponíveis.
                </p>
              </div>

              <div className={`section-content precos ${activeStep === 2 ? 'active' : ''}`}>
                <h2>Receba diversos preços</h2>
                <p>
                  Com o nosso sistema de integração com os motoristas, você nosso cliente pode receber diversos orçamentos referente a mesma viagem.
                </p>
              </div>

              <div className={`section-content precos2 ${activeStep === 3 ? 'active' : ''}`}>
                <h2>Selecione o melhor orçamento</h2>
                <p>
                  Selecione o orçamento mais indicado para garantir que você obtenha o melhor valor e a qualidade desejada.
                </p>
              </div>

              <div className={`section-content motorista ${activeStep === 4 ? 'active' : ''}`}>
                <h2>Converse diretamente com nosso motorista</h2>
                <p>
                  É possível conversar em detalhes com o carreteiro para esclarecer dúvidas, obter informações adicionais e estabelecer uma comunicação clara e transparente.
                </p>
              </div>

              <div className={`section-content rastreio ${activeStep === 5 ? 'active' : ''}`}>
                <h2>Rastreie a mudança</h2>
                <p>
                  Para segurança de todos, rastreamos todas a viagens de carreto podendo ser visualizada na aba do "rastreamento".
                </p>
              </div>
            </div>
          </div>
        </div>
    </StyledSecaoIndex3>
  );
}
