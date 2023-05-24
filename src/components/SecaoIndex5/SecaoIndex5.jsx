import "./SecaoIndex5.css";
import { Button } from "../../components/Button/Button";

export function SecaoIndex5() {
    const styleButtonPrimary = {
      color: "#FFFF",
      background: "var(--orange)",
      fontWeight: "600",
      width: "60%",
    };

return (
    <div className="section5">
        <img src="../src/assets/plantaIndex.png" alt="" />
        <div className="textoSection5">
        <h2 className="titleSection5">Envie seus produtos e ajude o meio ambiente!</h2>
        <p className="paragrafoSustentabilidade">A Move Now é uma empresa que busca tornar o transporte de mercadorias mais ecológico e eficiente. Seu sistema de busca de carga reduz o número de vans e caminhões vazios nas estradas, o que diminui as emissões de CO2.</p>
        <Button style={styleButtonPrimary} name="Solicite já seu orçamento! >" />
        </div>
    </div>
);
}