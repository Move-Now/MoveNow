import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { AiFillEye } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPostcardFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { ImFilePicture } from "react-icons/im";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./SignUpDriver.css";

const StyledSignUpDriver = styled.div`

  #mainDriver {
    background-color: ${props => props.theme.glass};
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transitionComponents};
  }

  h2 {
    color: ${props => props.theme.spanColor};
    background-color: ${props => props.theme.backgroundColor};
  }

  span {
    color: ${props => props.theme.spanColor};
    font-weight: 500;
  }

  input {
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
  }
  
  input:focus {
    outline: 1px solid ${props => props.theme.spanColor};;
  }
  
  input[type=file] {
    color: transparent;
  }

  input[type=file]::after {
      color: ${props => props.theme.textColor};
  }

  .icon2 {
    right: 10%;
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

const ButtonPrimary = styled.button` 
  font-weight: ${props => props.theme.buttonFontWeight};
  color: ${props => props.theme.buttonPrimaryColor};
  background-color: ${props => props.theme.buttonBackgroundPrimaryColor};
`;

export function SignUpDriver() {

  const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <StyledSignUpDriver>
      <main id="mainDriver">
        <h2 className="titleSignUp">Cadastro de Motorista</h2>
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
            <Input
              title="Telefone"
              type="tel"
              placeholder="00 00000-0000"
              icon={<BsTelephoneFill className="icon" />}
            />
            <Input
              title="Carteira de Motorista"
              type="text"
              placeholder="00000000000"
              icon={<BsPostcardFill className="icon" />}
            />

          </div>
          <div className="column">

            <Input
              title="Placa do Veículo"
              type="text"
              placeholder="123ABC"
              icon={<FaTruck className="icon" />}
            />

            <Input
              title="Foto do Documento"
              type="file"
              placeholder="Arraste até aqui, ou selecione"
              icon={<ImFilePicture className="icon" size={40} />}
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
            
            <Input
              title="Confirmar a Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              icon={<BiLock className="icon" />}
            />
            <p className="contentLinks">
              Já tem uma conta?{" "}
              <span>
                <Link to={"/login"}>Entre aqui</Link>
              </span>
            </p>
          </div>
        </form>
        <ButtonPrimary className="cadastrar">Cadastrar como Motorista</ButtonPrimary>
      </main>
    </StyledSignUpDriver>
  );
}
