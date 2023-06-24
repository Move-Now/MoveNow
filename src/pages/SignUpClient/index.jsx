import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { AiFillEye } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

import { Link } from "react-router-dom";

const StyledSignUp = styled.div`
  #SignUpClientMain {
    background-color: ${(props) => props.theme.glass};
    color: ${(props) => props.theme.textColor};
    transition: ${(props) => props.theme.transitionComponents};
    max-width: 800px;
    width: 90%;
    height: auto;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 50px 0;
    margin: 50px auto;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.spanColor};
  }

  .buttonsLogin {
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 20px;
    border: ${(props) => props.theme.borderBottom};
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  .buttonEntrar {
    background: transparent;
    color: #ccc;
  }

  span {
    color: ${(props) => props.theme.spanColor};
    font-weight: 500;
  }

  .icon2 {
    right: 10%;
  }

  .contentLinks {
    text-align: center;
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

const ButtonPrimary = styled.button`
  font-weight: ${(props) => props.theme.buttonFontWeight};
  color: ${(props) => props.theme.buttonPrimaryColor};
  background-color: ${(props) => props.theme.buttonBackgroundPrimaryColor};
`;

export function SignUpClient() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledSignUp>
      <main id="SignUpClientMain">
        <div className="buttonsLogin">
          <Link to={"/login"}>
            <button className="buttonEntrar">Entrar</button>
          </Link>
          <ButtonPrimary className="buttonCadastrar">Cadastrar</ButtonPrimary>
        </div>
        <form action="">
          <div className="column">
            <Input
              title="Nome Completo"
              type="text"
              placeholder="Nome"
              icon={<BsPersonCircle className="icon" />}
            />
            <Input
              title="Email"
              type="email"
              placeholder="Email"
              icon={<BsEnvelopeFill className="icon" />}
            />
            <Input
              title="CPF"
              type="number"
              placeholder="000.000.000-00"
              icon={<BsPersonVcardFill className="icon" />}
            />
            <p className="contentLinks">
              Já possui uma conta?{" "}
              <Link to={"/login"}>
                <span>Entre aqui!</span>
              </Link>
            </p>
          </div>
          <div className="column">
          <Input
              title="Telefone"
              type="tel"
              placeholder="00 00000-0000"
              icon={<BsTelephoneFill className="icon" />}
            />
            <Input
              title="Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              icon={<BiLock className="icon" />}
              icon2={
                <AiFillEye
                  className="icon2"
                  onClick={handleTogglePassword}
                  style={{ cursor: "pointer" }}
                />
              }
            />
            <Input
              title="Confirme sua Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Confirme a senha..."
              icon={<BiLock className="icon" />}
            />
            <p className="contentLinks">
              Quer ser motorista?{" "}
              <Link to={"/cadastroMotorista"}>
                <span>Clique aqui!</span>
              </Link>
            </p>
          </div>
        </form>
        <ButtonPrimary>Cadastrar</ButtonPrimary>
      </main>
    </StyledSignUp>
  );
}
