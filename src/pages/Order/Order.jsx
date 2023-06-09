import { Input } from "../../components/Input/Input";
import {Footer} from  "../../components/Footer/Footer"
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
        <section id="sectionOrder">
          <h2>Informe os detalhes da mudança</h2>
          <form action="">
            <div className="column">
              <h3>Partida:</h3>
              <div className="row">
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
              </div>
              <div className="row">
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
              </div>
              <div className="row">
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
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
