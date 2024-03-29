import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom';
import "./SecaoIndex5.css";

const StyledSecaoIndex5 = styled.div`

    .titleSection5{
        transition: ${props => props.theme.transitionComponents};
        color: ${props => props.theme.textColor};
    }

    .paragrafoSustentabilidade {
        transition: ${props => props.theme.transitionComponents};
        color: ${props => props.theme.textColor};
    }

    button {
        color: #FFFFFF;
        font-weight: 600;
        background: ${props => props.theme.buttonBackgroundPrimaryColor};
    }

    button:hover {
        box-shadow: 0px 1px 10px ${props => props.theme.textColor};
        background: ${props => props.theme.corFraca};
      }
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;


export function SecaoIndex5() {
    
    const navigate = useNavigate();

    const redirectOrder = () => {
        
        // NESTA FUNCAO VERIFICAR SE O USUARIO ESTA LOGADO OU NAO, E SE TIVER REDIRECIONAR NORMALMENTE SE NAO, REDIRECIONAR PARA A PAGINA DE LOGIN

        navigate('/orcamento');
    }

return (
    <StyledSecaoIndex5>
        <div className="section5">
            <img src="../src/assets/plantaIndex.png" alt="" />
            <div className="textoSection5">
            <h2 className="titleSection5">Envie seus produtos e ajude o meio ambiente!</h2>
            <p className="paragrafoSustentabilidade">A Move Now é uma empresa que torna o transporte de mercadorias mais ecológico e eficiente. Seu sistema de busca de carga reduz o número de vans e caminhões vazios nas estradas, o que diminui as emissões de CO2.</p>
            <button className = "buttonSus" onClick={redirectOrder}>Peça já seu orçamento! </button>
            </div>
        </div>
    </StyledSecaoIndex5>
);
}