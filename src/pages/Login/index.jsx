import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Input } from "../../components/Input/Input";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedin } from "../App/App";

const StyledLogin = styled.div`
  #loginMain {
    background-color: ${(props) => props.theme.glass};
    color: ${(props) => props.theme.textColor};
    transition: ${(props) => props.theme.transitionComponents};
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

  .buttonCadastrar {
    background: transparent;
    color: #ccc;
  }

  span {
    color: ${(props) => props.theme.spanColor};
    font-weight: 500;
  }

  .icon2 {
    right: 6%;
  }

  .buttonCadastrar:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
  }

  .loginButton {
    color: #fff;
    background-color: ${(props) => props.theme.spanColor};
  }

  .loginButton:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

const ButtonPrimary = styled.button`
  font-weight: ${(props) => props.theme.buttonFontWeight};
  color: ${(props) => props.theme.buttonPrimaryColor};
  background-color: ${(props) => props.theme.buttonBackgroundPrimaryColor};
`;

export function Login() {

  let navigate = useNavigate();

  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [login, setLogin] = useState({
      user: "",
      senha: "",

  });

  const {user, senha} = login;

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

    const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", login);
      const responseData = response.data;

      if (responseData.message === "LogadoUser") {
        setLoggedInUserId(responseData.id); // Salvando o ID na variável loggedInUserId
        console.log("ID do usuário logado:", responseData.id);
        isLoggedin = true
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          color: '#000',
          icon: 'success',
          title: 'Logado com sucesso!'
        })

        navigate("/user");
      } else if (responseData.message === "LogadoMot") {
        setLoggedInUserId(responseData.id); // Salvando o ID na variável loggedInUserId
        navigate("/driver");

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          color: '#000',
          icon: 'success',
          title: 'Logado com sucesso!'
        })

        console.log("ID do motorista logado:", responseData.id);
      } else {
        // Login falhou, exibir mensagem de erro no front-end
        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'error',
          title: 'Oops...',
          text: "Credenciais inválidas. Verifique login e senha!",
        })
        console.log(responseData.message);
      }
    } catch (error) {
      // Tratar erros de conexão ou outros erros
      console.log("Erro ao fazer login:", error);
    }
  };


  return (
    <StyledLogin>
      <main id="loginMain">
        <div className="buttonsLogin">
          <ButtonPrimary className="buttonEntrar">Entrar</ButtonPrimary>
          <Link to={"/cadastro"}>
            <button className="buttonCadastrar">Cadastrar</button>
          </Link>
        </div>
        <form onSubmit={(e) => onSubmit(e)} id="Login">
          <div className="column">
          <label>Login</label>
            <input
              title="Usuário"
              type="text"
              name="user"
              placeholder="Nome | CPF | E-mail"
              value={user}
              onChange={(e) => onInputChange(e)}
            />
            <label>Senha</label>
            <input
              title="Senha"
              name="senha"
              value={senha}
              placeholder="Senha"
              onChange={(e) => onInputChange(e)}
            />
            <p className="contentLinks">
              Não possui uma conta?{" "}
              <Link to={"/cadastro"}>
                <span>Cadastre aqui!</span>
              </Link>
            </p>
          </div>
        </form>
        <button form="Login" className="loginButton">Entrar</button>
      </main>
    </StyledLogin>
  );
}
