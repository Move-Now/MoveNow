import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import "./style.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const StyledLogin = styled.div`

    main {
      background-color: ${props => props.theme.glass};
      color: ${props => props.theme.textColor};
      transition: ${props => props.theme.transitionComponents};
    }

    input {
      color: ${props => props.theme.textColor};
      background-color: ${props => props.theme.backgroundColor};
    }

    input:focus {
      outline: 1px solid ${props => props.theme.spanColor};;
  }

  .buttonsLogin {
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 20px;
    border: ${props => props.theme.borderBottom};
    box-shadow: ${props => props.theme.boxShadow};
  }

  .buttonCadastrar {
    background: transparent;
    color: #ccc;
  }
    
  span {
    color: ${props => props.theme.spanColor};
    font-weight: 500;
  } 

  .icon2 {
    right: 6%;
  }
    
    /* Adicione outros estilos personalizados específicos do componente aqui */
`;

const ButtonPrimary = styled.button` 
  font-weight: ${props => props.theme.buttonFontWeight};
  color: ${props => props.theme.buttonPrimaryColor};
  background-color: ${props => props.theme.buttonBackgroundPrimaryColor};
`;

export function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

return (
    <StyledLogin>
      <ScrollToTop />
        <main>
            <div className="buttonsLogin">
                <ButtonPrimary className="buttonEntrar">Entrar</ButtonPrimary>
                <Link to={"/cadastro"}><button className="buttonCadastrar">Cadastrar</button></Link>
            </div>
            <form action="">
                <div className="column">
                    <Input
                        title="Usuário"
                        type="text"
                        placeholder="Nome | CPF | E-mail"
                        icon={<BsPersonCircle className="icon" />}
                    />
                    <Input
                        title="Senha"
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        icon={<BiLock className="icon" />}
                        icon2={<AiFillEye 
                          className="icon2"
                          onClick={handleTogglePassword}
                          style={{cursor: "pointer"}}
                          />
                        }
                    />
                    <p className="contentLinks">Não possui uma conta?{" "} <Link to={"/cadastro"}><span>Cadastre aqui!</span></Link></p>
                </div>
            </form>
            <ButtonPrimary>Entrar</ButtonPrimary>
        </main>
    </StyledLogin >
);
}