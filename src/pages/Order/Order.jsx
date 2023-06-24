import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "styled-components";
import { Input } from "../../components/Input/Input";
import { Footer } from "../../components/Footer/Footer";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Tape } from "../../components/Tape/Tape";
import "./Order.css";
import { BiMap } from "react-icons/bi";
import { FaRoad, FaRulerCombined } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { MdKitchen } from "react-icons/md";
import { FaRulerHorizontal } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { GiWeightScale } from "react-icons/gi";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const StyledOrder = styled.div`
  #sectionOrder {
    background-color: ${props => props.theme.glass};
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transitionComponents};
  }

  input {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }

  .icon {
    color: ${props => props.theme.textColor};
  }

  input:focus {
    border: none;
    outline: 1px solid ${props => props.theme.spanColor};
  }

  #sectionOrder p span {
    color: ${props => props.theme.spanColor};
  }

  .wrapper-button-order button{
    background: ${props => props.theme.spanColor};
    font-weight: 600;
    color:  #ffffff;
  }

  .wrapper-button-order .order-buttons-add {
    background: transparent;
    border: 2px solid ${props => props.theme.spanColor};
    color: ${props => props.theme.textColor};
  }

  .order-buttons-next{
    background: ${props => props.theme.spanColor};
    font-weight: 600;
    color:  #ffffff;
  }

  th {
    background: ${props => props.theme.spanColor};
    color: #FFFFFF;
  }

  td {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.backgroundColor};
  }

  td::before {
    color: ${props => props.theme.spanColor};
  }
  
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Order() {
  const theme = useContext(ThemeContext);
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    setIsDarkMode(storedTheme === "dark");
  }, [storedTheme]);

  const imageTape = isDarkMode
    ? "../src/assets/LOGOLaranja.png"
    : "../src/assets/LOGOTransLight.png";

  return (
    <ThemeProvider theme={theme}>
    <StyledOrder>
      <ScrollToTop />
      <main id="mainOrder">
        <section id="sectionOrder">
          <h2 className="section-order-title">Informe os dados do endereço</h2>
          <p className="section-order-paragraph">
            Solicite o seu orçamento <span>grátis</span> e sem compromisso.
          </p>
          <form action="">
            <div className="column">
              <h3>Origem:</h3>
              <Input
                title="CEP"
                type="text"
                placeholder="00000-000"
                icon={<BiMap className="icon" />}
              />
              <Input
                title="Rua"
                type="text"
                placeholder="Nome da rua"
                icon={<FaRoad className="icon" />}
              />
              <Input
                title="Número"
                type="text"
                placeholder="000"
                icon={<AiOutlineFieldNumber className="icon" />}
              />
            </div>
            <br/>
            <div className="column">
              <h3>Destino:</h3>
              <Input
                title="CEP"
                type="text"
                placeholder="00000-000"
                icon={<BiMap className="icon" />}
              />
              <Input
                title="Rua"
                type="text"
                placeholder="Nome da rua"
                icon={<FaRoad className="icon" />}
              />
              <Input
                title="Número"
                type="text"
                placeholder="000"
                icon={<AiOutlineFieldNumber className="icon" />}
              />
              
            </div>
            
          </form>
              <button className="order-buttons-next">Próximo {">"}</button>
        </section>

        <Tape img={imageTape } />

        <section id="sectionOrder">
          <h2 className="section-order-title">Informe os detalhes da mudança</h2>
          <form action="">
            <div className="column">
              <Input
                title="Informe a quantidade de itens:"
                type="number"
                placeholder="0"
                icon={<BsFillBoxFill className="icon" />}
              />
              <Input
                title="Tipo de item:"
                type="text"
                placeholder="ex.: Geladeira"
                icon={<MdKitchen className="icon" />}
              />
              <Input
                title="Altura (cm)"
                type="number"
                placeholder="0"
                icon={<FaRulerVertical className="icon" />}
              />
              <Input
                title="Largura (cm)"
                type="number"
                placeholder="0"
                icon={<FaRulerHorizontal className="icon" />}
              />
              <Input
                title="Comprimento (cm)"
                type="number"
                placeholder="0"
                icon={<FaRulerCombined className="icon" />}
              />
              <Input
                title="Peso (kg)"
                type="number"
                placeholder="0"
                icon={<GiWeightScale className="icon" />}
              />

              <Checkbox title="Seguro incluso" price={"00,00"} />

              <div className="wrapper-button-order">
                <button className="order-buttons-add">+ Adicionar item</button>
                <button className="order-buttons">Finalizar</button>
              </div>
            </div>
            
              <div className="column">
                <table className="table-order">
                  <thead>
                    <th>Item</th>
                    <th>Área</th>
                    <th>Peso</th>
                  </thead>
                  <tr>
                    <td>Dado 1</td>
                    <td>Dado 2</td>
                    <td>Dado 3</td>
                  </tr>
                  <tr>
                    <td>Dado 4</td>
                    <td>Dado 5</td>
                    <td>Dado 6</td>
                  </tr>
                </table>
              </div>
            </form>
        </section>
      </main>
      <Footer />
    </StyledOrder>
    </ThemeProvider>
  );
}
