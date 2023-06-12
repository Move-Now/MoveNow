import React, {useState, useEffect, useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import { ThemeContext } from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";


const StyledWorkWithUs = styled.div`

    h1 {
        transition: ${props => props.theme.transitionComponents};
        color:${props => props.theme.textColor};
    }
    
    p {
        transition: ${props => props.theme.transitionComponents};
        color:${props => props.theme.textColor};
    }

    .arrow {
        color:${props => props.theme.textColor};
    }

    .buttonsTrabalheConosco {
        border-bottom: 2px solid ${(props) => props.theme.textColor};

        &:hover 
        .arrow {
          color: ${(props) => props.theme.spanColor};
        }
    }

    .buttonsTrabalheConosco:hover {
        border-bottom: 2px solid ${(props) => props.theme.spanColor};
    }

    .imageTrabalheConosco {
        border-radius: 15px;
        border: 0.5px solid ${props => props.theme.textColor};
        box-shadow: 10px 10px 1px ${props => props.theme.shadowBox};
    }

    .bottomContent {
        background-color: ${props => props.theme.glass};
    }
    /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function WorkWithUs() {
    const theme = useContext(ThemeContext);
    const storedTheme = localStorage.getItem("theme");
    const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

    useEffect(() => {
        setIsDarkMode(storedTheme === "dark");
    }, [storedTheme]);

    const image = isDarkMode ? "../src/assets/TrabalheConoscoDark.png" : "../src/assets/TrabalheConoscoLight.png"

return (
    <StyledWorkWithUs>
        <ScrollToTop />
        <div className="sectionTrabalheConosco">
            <div className="topContent">
                <h1 className="titleTopContent">Faça seu carreto pela MoveNow e aumente seus ganhos</h1>

                <p>Transporte sua carreira para novos destinos com a MoveNow.</p>

                <div className="wrapperButtonsTrabalheConosco">
                <Link to={"/cadastroMotorista"}>
                    <div className="buttonsTrabalheConosco">
                        <p>Cadastre-se</p> <FiArrowRight className="arrow"/>
                    </div>
                </Link>
                <Link to={"/login"}>
                    <div className="buttonsTrabalheConosco">
                        <p>Fazer Login</p> <FiArrowRight className="arrow"/>
                    </div>
                </Link>
                </div>
            </div>
            <img className="imageTrabalheConosco" src={image} alt="" />
        </div>

        <div className="bottomContent">
            <p>
                Se você é um motorista em busca de oportunidades e visibilidade, a MoveNow oferece um potencial de ganhos de cliente extraordinário. Muitos carreteiros têm alcançado uma média de 2 salários mínimos mensais ao utilizar nossa plataforma. Imagine o impacto positivo que isso pode ter no seu estilo de vida e no crescimento da sua bagagem profissional!
            </p>
            <br/>
            <p>
                É importante mencionar que os ganhos podem variar dependendo de fatores como o número de mudanças e/ou entregas realizadas, a demanda dos usuários em determinada região e outras variáveis específicas do mercado. Portanto, os valores apresentados não devem ser considerados como uma garantia ou estimativa exata de ganhos pela plataforma MoveNow. No entanto, com uma frota em constante crescimento e uma base de clientes cada vez mais ampla, a MoveNow oferece um ambiente propício para que você aumente seus ganhos e conquiste a visibilidade e reconhecimento. Aproveite essa oportunidade de prosperar e expandir sua carreira, podendo ganhar benefícios com parceiros nunca antes pensado! Não perca tempo! Junte-se à MoveNow hoje mesmo e descubra como sua dedicação e habilidades ao volante podem se traduzir em ganhos significativos. Estamos comprometidos em apoiar o seu sucesso e em proporcionar uma experiência gratificante como parte da nossa comunidade de carreteiros.
            </p>
        </div>
               
        <Footer />
    </StyledWorkWithUs>
);
}