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
import "./SignUpDriver.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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

    let navigate = useNavigate();

    const [motorista, setMotorista] = useState({
      nome_completo_motorista: "",
      email_motorista: "",
      cpf_motorista: "",
      telefone_motorista: "",
      cnh_motorista: "",
      senha_motorista: "",
    });

    const { nome_completo_motorista, email_motorista, cpf_motorista, telefone_motorista, cnh_motorista, senha_motorista} = motorista;

    const onInputChange = (e) => {
      setMotorista({ ...motorista, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();
        const  response = await axios.post("http://localhost:8080/motorista", motorista);
        console.log(response);
        navigate("/login"); 
      };


  return (
    <StyledSignUpDriver>
      <main id="mainDriver">
        <h2 className="titleSignUp">Cadastro de Motorista</h2>
        <form onSubmit={(e) => onSubmit(e)} id="SignUpFormMot">
          <div className="column">
            <label>Nome Completo</label>
            <input
              title="Nome Completo"
              type="text"
              placeholder="Nome"
              value={nome_completo_motorista}
              onChange={(e) => onInputChange(e)}
            />
            <label>E-mail</label>
            <input
              title="Email"
              type="email"
              placeholder="Email"
              value={email_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>CPF</label>
            <input
              title="CPF"
              type="number"
              placeholder="000.000.000-00"
              value={cpf_motorista}
              onChange={(e) => onInputChange(e)}
            />
            
            <label>Telefone</label>
            <input
              title="Telefone"
              type="tel"
              placeholder="00 00000-0000"
              value={telefone_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>Carteita de motorista</label>
            <input
              title="Carteira de Motorista"
              type="text"
              placeholder="00000000000"
              value={cnh_motorista}
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="column">
            <label>Placa do Veículo</label>
            <input
              title="Placa do Veículo"
              type="text"
              placeholder="123ABC"
              value={cnh_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <Input
              title="Foto do Documento"
              type="file"
              placeholder="Arraste até aqui, ou selecione"
              icon={<ImFilePicture className="icon" size={40} />}
            />

            <label>Senha</label>
            <input
                title="Senha"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={senha_motorista}
                onChange={(e) => onInputChange(e)}
            />

            <label>Confirme senha</label>
            <input
              title="Confirmar a Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              onChange={(e) => onInputChange(e)}
            />

            <p className="contentLinks">
              Já tem uma conta?{" "}
              <span>
                <Link to={"/login"}>Entre aqui</Link>
              </span>
            </p>
          </div>
        </form>
        <button className="cadastrar" form="SignUpFormMot">Cadastrar como Motorista</button>
      </main>
    </StyledSignUpDriver>
  );
}
