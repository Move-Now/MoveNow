import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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

  let navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    username: "",
    senha: "",
    nome_completo: "",
    endereco: "",
    cpf: "",
    data_nasc: "",
    email: "",
    telefone: "",
  });

  const { username, senha, nome_completo, endereco, cpf, data_nasc, email, telefone } = usuario

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/usuario", usuario);
    console.log(response)
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
        <form onSubmit={(e) => onSubmit(e)} id="SignUpForm">
          <div className="column">
            <label>Username</label>
            <input
              type={"text"}
              name="username"
              value={username}
              
              onChange={(e) => onInputChange(e)}
              placeholder="Username"
              />
              <label>Nome Completo</label>
             <input
              title="Nome Completo"
              type={"text"}
              name="nome_completo"
              value={nome_completo}
              onChange={(e) => onInputChange(e)}
              placeholder="Nome"
            />
              <label>CEP</label>
             <input
              title="Endereço"
              type={"text"}
              name="endereco"
              value={endereco}
              onChange={(e) => onInputChange(e)}
              placeholder="Endereço"
            />
            <label>Data de Nascimento</label>
             <input
              title="Data de nascimento"
              type={"date"}
              name="data_nasc"
              value={data_nasc}
              onChange={(e) => onInputChange(e)}
              placeholder="Data de nascimento"
            />
            <label>E-mail</label>
            <input
              title="Email"
              type={"mail"}
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              placeholder="Email"
            />
            <input
              title="CPF"
              type={"number"}
              name="cpf"
              value={cpf}
              onChange={(e) => onInputChange(e)}
              placeholder="000.000.000-00"
            />
            <p className="contentLinks">
              Já possui uma conta?{" "}
              <Link to={"/login"}>
                <span>Entre aqui!</span>
              </Link>
            </p>
          </div>
          <div className="column">
            <input
              title="Telefone"
              type={"tel"}
              name="telefone"
              value={telefone}
              onChange={(e) => onInputChange(e)}
              placeholder="00 00000-0000"
            />
            <input
              title="Senha"
              type={showPassword ? "text" : "password"}
              name="senha"
              value={senha}
              onChange={(e) => onInputChange(e)}
              placeholder="Senha"
              
              icon2={
                <AiFillEye
                  className="icon2"
                  onClick={handleTogglePassword}
                  style={{ cursor: "pointer" }}
                />
              }
            />
            <input
              title="Confirme sua Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Confirme a senha..."
              
            />
            <p className="contentLinks">
              Quer ser motorista?{" "}
              <Link to={"/cadastroMotorista"}>
                <span>Clique aqui!</span>
              </Link>
            </p>
          </div>
        </form>
        <button type="submit" form="SignUpForm">Cadastrar</button>
      </main>
    </StyledSignUp>
  );
}
