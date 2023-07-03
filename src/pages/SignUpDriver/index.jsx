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
    cpf_motorista: "",
    email_motorista: "",
    telefone_motorista: "",
    cnh_motorista: "",
    senha_motorista: "",
    data_nasc_motorista: "",
    endereco_motorista: "",
    placa_motorista: "",
  });

  const { nome_completo_motorista, cpf_motorista, email_motorista, telefone_motorista, cnh_motorista, senha_motorista, data_nasc_motorista, endereco_motorista, placa_motorista } = motorista;

  const onInputChange = (e) => {
    setMotorista({ ...motorista, [e.target.name]: e.target.value });
  };

  //Algoritimo que valida se o CPF existe
  const isValidCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, ''); // Remove os caracteres não numéricos do CPF

    const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
    if (!cpfRegex.test(cpf)) {
      return false;
    }

    let sum = 0;
    let remainder;

    // Verifica se todos os dígitos são iguais; se sim, o CPF é inválido
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    // Completa o CPF com zeros à esquerda para facilitar os cálculos
    cpf = cpf.padStart(11, '0');

    // Calcula o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    // Calcula o segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  };

  const validaForm = async () => {
    const listaCampos = ["nome_completo_motorista", "cpf_motorista", "data_nasc_motorista", "telefone_motorista", "cnh_motorista", "endereco_motorista", "email_motorista", "cnh_motorista", "senha_motorista"];
    const nomeCampo = {
      nome_completo_motorista: "Nome completo",
      cpf_motorista: "CPF",
      data_nasc_motorista: "Data de nascimento",
      email_motorista: "Endereço de e-mail",
      cnh_motorista: "CNH",
      telefone_motorista: "Telefone",
      senha_motorista: "Senha",
      endereco_motorista: "CEP"
    };

    let formValido = true;

    // Valida se tem algum campo vazio
    for (const campo of listaCampos) {
      if (!motorista[campo]) {
        alert(`Preencha o campo ${nomeCampo[campo]}`);
        formValido = false;
        break;
      }
    }

    //valida se o CPF existe
    if (formValido) {
      const cpf = motorista["cpf_motorista"];
      if (!isValidCPF(cpf)) {
        alert("Digite um CPF válido.");
        formValido = false;
      }
    }

    // Valida se a senha e confirmação são iguais 
    if (formValido) {
      const senha = motorista["senha_motorista"];
      const confirsenha = document.getElementsByName("confirsenhaMot")[0].value;

      if (senha !== confirsenha) {
        alert("A senha e a confirmação devem ser iguais.");
        formValido = false;
      }
    }

    if (formValido) {
      //Valida Cep
    }
    return formValido;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formValido = await validaForm();

    if (formValido) {
      try {
        const response = await axios.post("http://localhost:8080/motorista", motorista);
        console.log(response);
        navigate("/login");
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        // Tratar o erro, exibir mensagem de erro, etc.
      }
    }
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
              name="nome_completo_motorista"
              value={nome_completo_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>CPF</label>
            <input
              title="CPF"
              type="number"
              name="cpf_motorista"
              placeholder="000.000.000-00"
              value={cpf_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>Data nascimento</label>
            <input
              title="data"
              type="date"
              placeholder="data"
              name="data_nasc_motorista"
              value={data_nasc_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>Telefone</label>
            <input
              title="Telefone"
              type="tel"
              placeholder="00 00000-0000"
              name="telefone_motorista"
              value={telefone_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>Carteita de motorista</label>
            <input
              title="Carteira de Motorista"
              type="text"
              placeholder="00000000000"
              name="cnh_motorista"
              value={cnh_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>CEP</label>
            <input
              title="CEP"
              type="text"
              placeholder="00000000000"
              name="endereco_motorista"
              value={endereco_motorista}
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="column">
            <label>Placa do Veículo</label>
            <input
              title="Placa do Veículo"
              type="text"
              placeholder="123ABC"
              value={placa_motorista}
              name="placa_motorista"
              onChange={(e) => onInputChange(e)}
            />

            <Input
              title="Foto do Documento"
              type="file"
              placeholder="Arraste até aqui, ou selecione"
              icon={<ImFilePicture className="icon" size={40} />}
            />

            <label>E-mail</label>
            <input
              title="Email"
              type="email"
              placeholder="Email"
              name="email_motorista"
              value={email_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>Senha</label>
            <input
              title="Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              name="senha_motorista"
              value={senha_motorista}
              onChange={(e) => onInputChange(e)}
            />

            <label>Confirme senha</label>
            <input
              title="Confirmar a Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              name="confirsenhaMot"
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
