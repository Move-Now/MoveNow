import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import "./style.css";

const StyledSignUp = styled.div`

  main {
    background-color: ${props => props.theme.glass};
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transitionComponents};
  }

  input {
    background-color: ${props => props.theme.backgroundColor};
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

const ButtonPrimary = styled.button` 
  font-weight: ${props => props.theme.buttonFontWeight};
  color: ${props => props.theme.buttonPrimaryColor};
  background-color: ${props => props.theme.buttonBackgroundPrimaryColor};
`;

export function SignUpClient() {
    
return (
    <StyledSignUp>
        <main>
            <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
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
                        type="text"
                        placeholder="000.000.000-00"
                        icon={<BsPersonVcardFill className="icon" />}
                    />
                    <Input
                        title="Senha"
                        type="password"
                        placeholder="senha"
                        icon={<BiLock className="icon" />}
                    />
                    <Input
                        title="Confirme sua Senha"
                        type="password"
                        placeholder="confirme a senha..."
                        icon={<BiLock className="icon" />}
                    />
                </div>
            </form>
            <ButtonPrimary>Entrar</ButtonPrimary>
        </main>
    </StyledSignUp >
);
}