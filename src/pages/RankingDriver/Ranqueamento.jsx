import React, { useState, useEffect, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Swal from "sweetalert2";
import axios from "axios";

const StyledRanqueamento = styled.div`
  color: ${(props) => props.theme.textColor};

  .ranqueamento-content,
  .bottom-ranking {
    background-color: ${(props) => props.theme.glass};
  }

  .subtitle-ranqueamento-content-top1 {
   color: ${(props) => props.theme.spanColor};
  }

  .details-ranqueamento-content {
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 20px;
  }

  .details-ranqueamento-content-drivers-top1 {
    background-color: ${(props) => props.theme.backgroundColor};
    box-shadow: ${props => props.theme.boxShadow};
  }

  .details-ranqueamento-content-drivers {
    background-color: ${(props) => props.theme.backgroundColor};
  }
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Ranqueamento() {
  
  return (
      <StyledRanqueamento>
        <ScrollToTop />
          <div className="raqueamento">
            <div className="top-ranqueamento">
              <div className="content-top-ranqueamento">
                <h1 className="title-ranqueamento">Conheça os melhores carreteiros do mês e inspire-se!</h1>
              </div>
            </div>
            
            <h2 className="title-top-ranking">Sistema de ranqueamento</h2>
            
            <div className="ranqueamento-content">

              <div className="details-ranqueamento-content">
                <div className="left-raqueamento-content">
                  <p className="subtitle-ranqueamento-content">Nome</p>
                </div>

                <div className="center-raqueamento-content">
                  <p className="subtitle-ranqueamento-content-center">Dados</p>
                </div>

                <div className="right-raqueamento-content">
                  <p className="subtitle-ranqueamento-content">Posição</p>
                </div>
              </div>

              <div className="details-ranqueamento-content-drivers-top1">
                <div className="left-raqueamento-content-drivers">
                  <p className="subtitle-ranqueamento-content-top1">Gabriel Sena</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p className="subtitle-ranqueamento-content-top1">Total de Viagens: 31</p>
                  <p className="subtitle-ranqueamento-content-top1">Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p className="subtitle-ranqueamento-content-top1">1°</p>
                </div>
              </div>

              <div className="details-ranqueamento-content-drivers">
                <div className="left-raqueamento-content-drivers">
                  <p>Felipe Barbour</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p>Total de Viagens: 31</p>
                  <p>Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p>2°</p>
                </div>
              </div>

              <div className="details-ranqueamento-content-drivers">
                <div className="left-raqueamento-content-drivers">
                  <p>Lucas Teixeira</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p>Total de Viagens: 31</p>
                  <p>Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p>3°</p>
                </div>
              </div>
              <div className="details-ranqueamento-content-drivers">
                <div className="left-raqueamento-content-drivers">
                  <p>Fabrício Oliveira</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p>Total de Viagens: 31</p>
                  <p>Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p>4°</p>
                </div>
              </div>

              <div className="details-ranqueamento-content-drivers">
                <div className="left-raqueamento-content-drivers">
                  <p>Igor Silva</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p>Total de Viagens: 31</p>
                  <p>Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p>5°</p>
                </div>
              </div>

              <div className="details-ranqueamento-content-drivers">
                <div className="left-raqueamento-content-drivers">
                  <p>Kristian Oliveira</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p>Total de Viagens: 31</p>
                  <p>Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p>6°</p>
                </div>
              </div>

              <div className="details-ranqueamento-content-drivers">
                <div className="left-raqueamento-content-drivers">
                  <p>Guilherme Oliveira</p>
                </div>

                <div className="center-raqueamento-content-drivers">
                  <p>Total de Viagens: 31</p>
                  <p>Média das avaliações: 5</p>
                </div>

                <div className="right-raqueamento-content-drivers">
                  <p>7°</p>
                </div>
              </div>

              
            </div>
  
              <div className="bottom-ranking">
                <h2 className="title-bottom">Bem-vindo ao Ranqueamento da MoveNow!</h2>

                <p>
                  Ao final de cada mês, o motorista que conquistar o primeiro lugar no ranking terá a oportunidade de receber uma bonificação em dinheiro. Essa bonificação será calculada com base em uma porcentagem definida previamente, levando em consideração o desempenho e a eficiência alcançados durante o mês em questão. 

                  Nosso sistema de ranqueamento é projetado para valorizar os carreteiros que se destacam, seja pela pontualidade nas entregas, pela qualidade do serviço prestado ou pela sua habilidade em lidar com desafios e imprevistos ao longo das viagens. Além disso, o sistema considera outros fatores importantes, como a avaliação dos clientes, a quantidade de entregas realizadas e a satisfação geral dos usuários.

                  É importante ressaltar que, ao final de cada mês, o ranking será resetado, permitindo que todos os carreteiros tenham uma nova chance de alcançar o primeiro lugar e receber a bonificação. Dessa forma, todos têm a oportunidade de competir em igualdade de condições e buscar constantemente a excelência em suas atividades.
                </p>
              </div>

            </div>
        <Footer />
      </StyledRanqueamento>
  );
}
