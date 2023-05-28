import { Button } from "../../components/Button/Button";
import { AiFillCaretDown } from "react-icons/ai";
import "./SecaoIndex2.css";

export function SecaoIndex2() {
  const styleButtonPrimary = {
    color: "#000000",
    background: "var(--orange)",
    fontWeight: "600",
    width: "100%",
  };

  return (
    <div className="section2">
      {/* <div className="eclipse"></div> */}
      {/* por enquanto vamos deixar esse eclipse aqui, até encontrarmos uma maneira mais eficiente de reproduzir */}
      <div className="topIndex2">
        <h2 className="titleIndex2">Transporte de carretos e mudanças na região de São Paulo</h2>
        <p className="contentIndex2">Faça a <span>escolha certa</span> para sua mudança. Faça já um <span>orçamento</span>!</p>
      </div>
      <div className="bottomIndex2">
        <div className="form">
            <p>Solicite seu orçamento <span>grátis</span> <br/> e sem compromisso</p>

            <button className="buttonIndex2">São Bernado do Campo <AiFillCaretDown className="iconIndex2"/></button>
            <input type="text" className="buttonIndex2" placeholder="Cidade ou CEP"/>

            <button className="buttonIndex2">Campinas <AiFillCaretDown className="iconIndex2"/></button>
            <input type="text" className="buttonIndex2" placeholder="Cidade ou CEP"/>
            <Button style={styleButtonPrimary} name="Solicite já seu orçamento >"/>
        </div>
        <img src="../src/assets/Caminhao2.png" alt=""/>
      </div>
      
    </div>
  );
}
