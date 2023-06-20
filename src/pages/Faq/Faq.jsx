import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import React, { useState, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import "./style.css";


import { FaTruck } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaDolly } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa';


const StyledFaq = styled.div`
  .faq {
    color: ${props => props.theme.textColor};
  }

  .questions-faq {
    color: ${props => props.theme.textColor};
  }

  .option {
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.textColor};
    transition: 0.3s ease;
  }

  .option:hover,
  .active-option,
  .active-icon {
    color: ${props => props.theme.spanColor};
    border-color: ${props => props.theme.spanColor};
  }

  .questions-faq-content:hover,
  .active-option-questions {
    color: ${props => props.theme.spanColor};
    border-bottom: 1px solid ${props => props.theme.spanColor};
    transition: 0.3s ease;
  }
 
  .faq-answers {
    border: 1px solid ${props => props.theme.spanColor};
    border-top: 0;
  }

  .faq-inputs {
    border-color: ${props => props.theme.textColor};
    color: ${props => props.theme.textColor};
  }

  input:focus {
    border: none;
    outline: 1px solid ${props => props.theme.spanColor};
}

  .faq-select {
    border: 1px solid ${props => props.theme.textColor};
    color: ${props => props.theme.textColor};
  }

  .faq-select:focus {
    border: none;
    outline: 1px solid ${props => props.theme.spanColor}; 
  }

  .faq-select-option {
    background-color: ${props => props.theme.backgroundColor};
  }

  .faq-textarea {
    border: 1px solid ${props => props.theme.textColor}; 
    color: ${props => props.theme.textColor};
  }
  
  .faq-textarea:focus {
    border: none;
    outline: 1px solid ${props => props.theme.spanColor}; 
  }
  
  .faq-send-question-button {
    color: #fff;
    font-weight: 600;
    background-color: ${props => props.theme.spanColor};
  }
  `;
  
  export function Faq() {

  const [selectedOption, setSelectedOption] = useState('motorista');
  const [showContent, setShowContent] = useState({});
  const faqRef = useRef(null);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowContent(false);
    scrollToQuestions();
  };
  
  const toggleContent = (indice) => {
    setShowContent((estado) => {
      const novoEstado = { ...estado };
      Object.keys(novoEstado).forEach((key) => {
        if (key !== indice) {
          novoEstado[key] = false;
        }
      });
      novoEstado[indice] = !estado[indice];
      return novoEstado;
    });
  };

  const scrollToQuestions = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledFaq>
      <ScrollToTop />
      <div className="faq">
        <div className="topFaq">
            <div className="contentTopFaq">
              <h1 className="titleAbout">Apoio MoveNow</h1>
            </div>
          </div>
            <div className="faq-content" ref={faqRef}>
              <h2 className="subtitleFaq">
                Como podemos ajudar?
              </h2>
              <div className="faq-options">
                <div className={`option ${selectedOption === 'motorista' ? 'active-option' : ''}`} onClick={() => handleOptionClick('motorista')}>
                    <FaTruck className={`icon-faq ${selectedOption === 'motorista' ? 'active-icon' : ''}`}/>
                  <p className="faq-options-option">Motorista</p>
                </div>
                <div className={`option ${selectedOption === 'usuario' ? 'active-option' : ''}`} onClick={() => handleOptionClick('usuario')}>
                  <FaUserAlt className={`icon-faq ${selectedOption === 'usuario' ? 'active-icon' : ''}`}/>
                  <p className="faq-options-option">Usuário</p>
                </div>
                <div className={`option ${selectedOption === 'ajudante' ? 'active-option' : ''}`} onClick={() => handleOptionClick('ajudante')}>
                  <FaDolly className={`icon-faq ${selectedOption === 'ajudante' ? 'active-icon' : ''}`} id="icon-faq-helper"/>
                  <p className="faq-options-option">Ajudante</p>
                </div>
                <div className={`option ${selectedOption === 'empresas' ? 'active-option' : ''}`} onClick={() => handleOptionClick('empresas')}>
                  <FaSuitcase className={`icon-faq ${selectedOption === 'empresas' ? 'active-icon' : ''}`}/>
                  <p className="faq-options-option">Empresas</p>
                </div>
              </div>
              <h2 className="subtitleFaq">
                Perguntas frequentes
              </h2>
              {selectedOption === 'motorista' && (
                <div className="questions-faq" >
                  
                  <div className={`questions-faq-content ${showContent[1] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(1)}>
                    <p className="questions-faq-question">Quais os documentos necessários para cadastrar como motorista? </p>
                    {showContent[1] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[1] && (
                    <p className="faq-answers">
                      Os documentos necessários para o cadastro do motorista são: CPF, RG, carteira de motorista e placa do veículo.
                    </p>
                  )}
                  
                  <div className={`questions-faq-content ${showContent[2] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(2)}>
                    <p className="questions-faq-question">Meus documentos estarão seguros?</p>
                    {showContent[2] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[2] && (
                    <p className="faq-answers">
                      A foto e dados de seus documentos são criptografados com tecnologia de ponta e jamais são compartilhados. Fique tranquilo!
                    </p>
                  )}


                  <div className={`questions-faq-content ${showContent[3] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(3)}>
                    <p className="questions-faq-question">Eu tenho diversos veículos, posso adicionar eles ao meu perfil de motorista?</p>
                    {showContent[3] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[3] && (
                    <p className="faq-answers">
                      Não, cada perfil de motorista está vinculado a apenas 1 veículo. 
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[4] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(4)}>
                    <p className="questions-faq-question">Posso fazer mais de uma entrega ao mesmo tempo?</p>
                    {showContent[4] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[4] && (
                    <p className="faq-answers">
                      Não. Nós da MoveNow queremos oferecer o melhor serviço possível para os nossos clientes. Por isso, os motoristas parceiros fazem uma entrega de cada vez. Assim, há um maior cuidado com a carga. Além disso, com os parceiros fazendo apenas um serviço por vez, conseguimos distribuir nossas corridas de forma mais igualitária e beneficiamos um número maior de carreteiros.
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[5] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(5)}>
                    <p className="questions-faq-question">Ao me cadastrar, eu me torno um funcionário da MoveNow?</p>
                    {showContent[5] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[5] && (
                    <p className="faq-answers">
                      Não, você se tornará um motorista parceiro, sem vínculo ou qualquer tipo de relação trabalhista com a MoveNow.
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[6] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(6)}>
                    <p className="questions-faq-question">Como o repasse funciona?</p>
                    {showContent[6] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[6] && (
                    <p className="faq-answers">
                      A transferência dos repasses para a sua conta bancária ocorre semanalmente. A conta bancária deve ser exclusivamente de sua titularidade e é sua responsabilidade inserir os dados corretos. Você pode acompanhar o valor que possui a qualquer momento, apenas clique em "Meu perfil" e "Corridas feitas", por lá pode solicitar o depósito. Quantia miníma para depósito R$ 50,00.
                      <br/>
                      O cronograma de repasses funciona assim: você pode solicitar o depósito em qualquer dia da semana, sendo a data limite aos domingos até 23h59.
                    </p>
                  )}

                </div>
              )}

              {selectedOption === 'usuario' && (
                <div className="questions-faq" >
                  
                  <div className={`questions-faq-content ${showContent[7] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(7)}>
                    <p className="questions-faq-question">Como faço para solicitar um frete? </p>
                    {showContent[7] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[7] && (
                    <p className="faq-answers">
                      Para solicitar um frete, basta acessar nossa plataforma e preencher o formulário de solicitação com as informações necessárias, como origem, destino, tipo de carga e data desejada para o transporte. Em seguida, sua solicitação irá aparecer para os mostoristas, dessa forma irá receber diversos orçamentos.
                    </p>
                  )}
                  
                  <div className={`questions-faq-content ${showContent[8] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(8)}>
                    <p className="questions-faq-question">Quais são as opções de veículos disponíveis para transporte? </p>
                    {showContent[8] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[8] && (
                    <p className="faq-answers">
                      Oferecemos uma variedade de opções de veículos para transporte de acordo com a sua mudança, tudo de forma automática incluindo caminhões de diferentes tamanhos e capacidades. Você poderá escolher o veículo mais adequado daqueles disponíveis, que aguentam sua mudança.
                    </p>
                  )}


                  <div className={`questions-faq-content ${showContent[9] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(9)}>
                    <p className="questions-faq-question">Existe algum seguro para a carga durante o transporte? </p>
                    {showContent[9] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[9] && (
                    <p className="faq-answers">
                      Sim, oferecemos opções de seguro para proteger sua carga durante o transporte. Você poderá escolher entre diferentes níveis de cobertura, de acordo com o valor e a importância da carga. Recomendamos que considere contratar um seguro adequado para garantir a tranquilidade durante o transporte.
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[10] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(10)}>
                    <p className="questions-faq-question">Como funciona o sistema de preço?</p>
                    {showContent[10] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[10] && (
                    <p className="faq-answers">
                      Ao receber os preços dos orçamentos, você já irá visualizá-los com a inclusão da nossa porcentagem em cima do valor total da mudança. Isso significa que o preço que você verá será o valor final, que inclui a nossa taxa. Dessa forma, você terá uma visão clara e transparente do custo total da mudança, evitando surpresas ou taxas adicionais no momento do pagamento.
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[11] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(11)}>
                    <p className="questions-faq-question">O que devo fazer em caso de atraso ou problema com a entrega?</p>
                    {showContent[11] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[11] && (
                    <p className="faq-answers">
                      Em caso de atraso ou qualquer problema com a entrega, entre em contato imediatamente com nossa equipe de suporte ao cliente. Faremos o possível para resolver qualquer problema de forma ágil e satisfatória, buscando a melhor solução para você.
                    </p>
                  )}

                </div>
              )}

              {selectedOption === 'ajudante' && (
                <div className="questions-faq" >
                  
                  <div className={`questions-faq-content ${showContent[12] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(12)}>
                    <p className="questions-faq-question">Quais são as responsabilidades de um ajudante de carretos? </p>
                    {showContent[12] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[12] && (
                    <p className="faq-answers">
                      As responsabilidades de um ajudante de carretos geralmente incluem ajudar na carga e descarga dos materiais, auxiliar na montagem e desmontagem de equipamentos, garantir a segurança dos objetos transportados durante o trajeto, seguir as instruções do motorista e cumprir as normas de segurança estabelecidas.
                    </p>
                  )}
                  
                  <div className={`questions-faq-content ${showContent[13] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(13)}>
                    <p className="questions-faq-question">Quais são as condições de trabalho para um ajudante de carretos?</p>
                    {showContent[13] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[13] && (
                    <p className="faq-answers">
                      As condições de trabalho para ajudantes de carretos podem variar de acordo com o frete. Em geral, pode envolver trabalhar ao ar livre, lidar com cargas pesadas, horários flexíveis que podem incluir finais de semana e feriados, e possivelmente viagens para diferentes locais.
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[14] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(14)}>
                    <p className="questions-faq-question">Como é feito o pagamento dos ajudantes de carretos? </p>
                    {showContent[14] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[14] && (
                    <p className="faq-answers">
                      Você que irá dar seu preço por dia de trabalho, um exemplo R$ 50,00. Porém o valor impacta diretamente no orçamento e na solicitação do frete, podendo ter um aumento significativo no valor final. Saiba também que o valor que colocar, está isento de nossas taxas.
                    </p>
                  )}

                  <div className={`questions-faq-content ${showContent[15] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(15)}>
                    <p className="questions-faq-question">Não consegui chegar a tempo no local da mudança, o que fazer? </p>
                    {showContent[15] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                  </div>
                  {showContent[15] && (
                    <p className="faq-answers">
                      Entre em contato imediatamente com nossa equipe de suporte. Faremos o possível para resolver qualquer problema de forma ágil e satisfatória, buscando a melhor solução para você. Porém saiba que, em seu próximo frete será descontado 25% de seu valor, por conta do imprevisto ou atraso. E o valor pago pelo cliente, será devolvido.
                    </p>
                  )}
                </div>
              )}

              {selectedOption === 'empresas' && (
                <div className="questions-faq" >
                  
                <div className={`questions-faq-content ${showContent[16] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(16)}>
                  <p className="questions-faq-question">Quais são os requisitos para uma empresa se tornar parceira/investidora? </p>
                  {showContent[16] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                </div>
                {showContent[16] && (
                  <p className="faq-answers">
                    Os requisitos para se tornar uma empresa parceira/investidora variam dependendo do tipo de parceria ou investimento que estamos buscando. Geralmente, procuramos empresas com, recursos financeiros sólidos e um alinhamento com os valores e objetivos da nossa empresa. Podeno usufruir de nosso sistema, com entregas parceiras e fretes.
                  </p>
                )}
                
                <div className={`questions-faq-content ${showContent[17] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(17)}>
                  <p className="questions-faq-question">Como faço para me candidatar a uma parceria/investimento com a sua empresa?</p>
                  {showContent[17] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                </div>
                {showContent[17] && (
                  <p className="faq-answers">
                    Para se candidatar a uma parceria ou investimento, você pode entrar em contato diretamente com nosso suporte de empresas. Certifique-se de fornecer informações detalhadas sobre sua empresa, incluindo histórico, principais realizações e proposta de valor.
                  </p>
                )}

                <div className={`questions-faq-content ${showContent[18] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(18)}>
                  <p className="questions-faq-question">Quais são os benefícios de ser uma empresa parceira/investidora? </p>
                  {showContent[18] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                </div>
                {showContent[18] && (
                  <p className="faq-answers">
                    Como empresa parceira/investidora, você terá acesso a uma ampla rede de clientes e oportunidades de negócios. Além disso, oferecemos suporte e recursos para impulsionar o crescimento e a expansão da sua empresa. A parceria/investimento também permite colaboração e troca de conhecimentos entre as empresas envolvidas.
                  </p>
                )}

                <div className={`questions-faq-content ${showContent[19] === true ? 'active-option-questions' : ''}`} onClick={() => toggleContent(19)}>
                  <p className="questions-faq-question">Quais são as formas de retorno ou benefícios financeiros para as empresas investidoras? </p>
                  {showContent[19] ? <FiMinus className="iconsAbout"/> : <FiPlus className="iconsAbout"/>}
                </div>
                {showContent[19] && (
                  <p className="faq-answers">
                    Os retornos e benefícios financeiros para empresas investidoras podem incluir participação nos lucros, dividendos, ganhos de capital com a valorização do investimento.
                  </p>
                )}
              </div>
              )}

              <div className="faq-send-question">
                <h2 className="subtitleFaq">
                  
                  Não achou uma resposta? Mande sua pergunta!
                </h2>
                <div className="faq-send-question-inputs">
                  <input type="email" placeholder="Seu Nome" className="faq-inputs"/>
                  <input type="text" placeholder="Seu Email" className="faq-inputs"/>

                  <select name="area-faq" className="faq-select">
                    <option value="" className="faq-select-option">Área da pergunta</option>
                    <option value="" className="faq-select-option">Motorista</option>
                    <option value="" className="faq-select-option">Usuário</option>
                    <option value="" className="faq-select-option">Ajudante</option>
                    <option value="" className="faq-select-option">Empresas</option>
                  </select>

                  <textarea rows="5" placeholder="Digite sua dúvida aqui..." className="faq-textarea"></textarea>
                  <button className="faq-send-question-button">Enviar</button>
                </div>
              </div>
            </div>
      </div>
      <Footer />
    </StyledFaq>
  );
}