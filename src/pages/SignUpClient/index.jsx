import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { Checkbox } from "../../components/Checkbox/Checkbox";
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

  .buttonCadastrar {
    background-color: ${(props) => props.theme.spanColor};
    color: #fff;
    font-weight: 600;
  }

  span {
    color: ${(props) => props.theme.spanColor};
    font-weight: 500;
  }

  .icon2 {
    right: 10%;
  }

  .contentLinks {
    text-align: start;
    font-size: 15px;
    font-weight: 500;
  }

  .buttonEntrar:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
  }

  .buttonCadastrar:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
    background-color: ${(props) => props.theme.corFraca};
    color: #fff;
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

  const { username, senha, nome_completo, endereco, cpf, data_nasc, email, telefone } = usuario;

  const onInputChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
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

  const validarCEP = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { erro } = response.data;

      if (erro) {
        // CEP inválido
        return false;
      }
      // CEP válido
      return true;
    } catch (error) {
      return false;
    }
  };

  const validaForm = async () => {
    const listaCampos = ["username", "nome_completo", "endereco", "data_nasc", "email", "cpf", "telefone", "senha"];
    const nomeCampo = {
      username: "Username",
      nome_completo: "Nome completo",
      endereco: "CEP",
      data_nasc: "Data de nascimento",
      email: "Endereço de e-mail",
      cpf: "CPF",
      telefone: "Telefone",
      senha: "Senha"
    };

    let formValido = true;

    // Valida se tem algum campo vazio
    for (const campo of listaCampos) {
      if (!usuario[campo]) {
        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'error',
          title: 'Oops...',
          text: `Preencha o campo ${nomeCampo[campo]}`,
        })
        formValido = false;
        break;
      }
    }

    // Valida se o CEP é válido
    if (formValido) {
      const cep = usuario["endereco"];
      const cepValido = await validarCEP(cep);

      if (!cepValido) {
        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'error',
          title: 'Oops...',
          text: 'Digite um CEP válido',
        });

        formValido = false;
      }
    }

    //valida se o CPF existe
    if (formValido) {
      const cpf = usuario["cpf"];
      if (!isValidCPF(cpf)) {
        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'error',
          title: 'Oops...',
          text: 'Digite um CPF válido',
        })
        formValido = false;
      }
    }

    // Valida se a senha e confirmação são iguais 
    if (formValido) {
      const senha = usuario["senha"];
      const confirsenha = document.getElementsByName("confirsenha")[0].value;

      if (senha !== confirsenha) {

        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'error',
          title: 'Oops...',
          text: 'As senhas devem ser iguais!',
        })

        formValido = false

      }
    }
    return formValido;
  };


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formValido = await validaForm();

      if (!formValido) {
        return;
      }

      const response = await axios.post("http://localhost:8080/usuario", usuario);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      // Tratar o erro, exibir mensagem de erro, etc.
    }
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
              placeholder="CEP"
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

          </div>
          <div className="column">

            <label>CPF</label>
            <input
              title="CPF"
              type={"number"}
              name="cpf"
              value={cpf}
              onChange={(e) => onInputChange(e)}
              placeholder="000.000.000-00"
            />

            <label>Telefone</label>
            <input
              title="Telefone"
              type={"tel"}
              name="telefone"
              value={telefone}
              onChange={(e) => onInputChange(e)}
              placeholder="00 00000-0000"
            />

            <label>Senha</label>
            <input
              title="Senha"
              type={showPassword ? "text" : "password"}
              name="senha"
              value={senha}
              placeholder="Senha"
              onChange={(e) => onInputChange(e)}
            />

            <label>Confirme Senha</label>
            <input
              title="Confirme sua Senha"
              name="confirsenha"
              type={showPassword ? "text" : "password"}
              placeholder="Confirme a senha..."
            />

            <Checkbox 
              title={"Mostrar senhas"}
              onClick={handleTogglePassword}
            />

            <p className="contentLinks">
              Quer ser motorista?{" "}
              <Link to={"/cadastroMotorista"}>
                <span>Clique aqui!</span>
              </Link>
              <p className="contentLinks">
                Já possui uma conta?{" "}
                <Link to={"/login"}>
                  <span>Entre aqui!</span>
                </Link>
              </p>
            </p>

          </div>
        </form>
        <button type="submit" form="SignUpForm" className="buttonCadastrar">
          Cadastrar
        </button>
      </main>
    </StyledSignUp>
  );
}
