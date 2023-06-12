import { Input } from "../../components/Input/Input";
import { Footer } from "../../components/Footer/Footer";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Tape } from "../../components/Tape/Tape";
import styled from "styled-components";
import "./Order.css";
import { BiMap } from "react-icons/bi";
import { FaRoad, FaRulerCombined } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { MdKitchen } from "react-icons/md";
import { FaRulerHorizontal } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { GiWeightScale } from "react-icons/gi";

export function Order() {


  const ButtonPrimary = styled.button`
    font-weight: ${(props) => props.theme.buttonFontWeight};
    color: ${(props) => props.theme.buttonPrimaryColor};
    background-color: ${(props) => props.theme.buttonBackgroundPrimaryColor};
  `;

  const ButtonSecondary = styled.button`
    font-weight: ${(props) => props.theme.buttonFontWeight};
    color: ${(props) => props.theme.buttonSecondaryColor};
    background-color: ${(props) => props.theme.buttonBackgroundSecondaryColor};
    border: ${(props) => props.theme.buttonBorderSecondary};
  `;

  return (
    <>
      <main id="mainOrder">
        <section id="sectionOrder">
          <h2>Informe os dados do endereço</h2>
          <p>
            Solicite o seu orçamento <span>grátis</span> e sem compromisso.
          </p>
          <form action="">
            <div className="column">
              <h3>Partida:</h3>
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
        </section>
        <Tape img="../src/assets/LOGOLaranja.png"/>

        <section id="sectionOrder">
          <h2>Informe os detalhes da mudança</h2>
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

              <div className="wrapperButtons">
                <ButtonSecondary>Adicionar</ButtonSecondary>
                <ButtonPrimary>Finalizar</ButtonPrimary>
              </div>
            </div>
            <div className="column">
              <table>
                <tr>
                  <th>Item</th>
                  <th>Área</th>
                  <th>Peso</th>
                </tr>
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
        <Tape img="../src/assets/LOGOLaranja.png"/>
      </main>
      <Footer />
    </>
  );
}
