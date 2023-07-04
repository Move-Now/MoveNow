import React, { useEffect } from "react";
import styled from "styled-components";
import "./Header.css";
import { FaAngleDown } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  header {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    border-bottom: ${(props) => props.theme.borderBottom};
    box-shadow: ${(props) => props.theme.boxShadow};
    transition: ${(props) => props.theme.transitionComponents};
  }

  span {
    color: ${(props) => props.theme.spanColor};
  }

  .arrowIcon {
    color: ${(props) => props.theme.iconsColor};
  }

  .menuIcon {
    color: ${(props) => props.theme.iconsColor};
  }

  .dropdown {
    background-color: ${(props) => props.theme.backgroundColor};
    box-shadow: ${(props) => props.theme.shadow};
  }

  .dropdown li {
    color: ${(props) => props.theme.textColor};
  }

  .dropdownContent li:hover {
    color: ${(props) => props.theme.spanColor};
    border-bottom: 1px solid ${(props) => props.theme.spanColor};
  }

  ul li:hover {
    color: ${(props) => props.theme.spanColor};
    border-bottom: 1px solid ${(props) => props.theme.spanColor};
  }

  .dropdownMobile li {
    border-bottom: 1px solid ${(props) => props.theme.spanColor};
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Header(props) {
  const [toggle, setToggle] = useState(true);
  const [showDropdownEntrar, setShowDropdownEntrar] = useState(false); // Estado para controlar a exibição do dropdown do item "entrar"

  const entrar = () => {
    setShowDropdownEntrar(!showDropdownEntrar);
  };

  const hide = () => {
    setShowDropdownEntrar(false);
    setToggle(true);
  };

  return (
    <StyledHeader>
      <header>
        <Link to={"/"}>
          <img src={props.img} alt="" className="imagemLogo" onClick={hide} />
        </Link>
        <nav className={toggle && "navDisabled"}>
          <ul>
            {props.isLoggedIn ? (
              <>
                <Link to={"/user"} onClick={hide}>
              <li onClick={hide}>Página inicial</li>
            </Link>

            <Link to={"/orcamentos"} onClick={hide}>
              <li onClick={hide}>Orçamentos recebidos</li>
            </Link>

            <Link to={"/orcamento"} onClick={hide}>
              <li onClick={hide}>Solicite um carreto</li>
           </Link>

            <Link to={"/sobreNos"} onClick={hide}>
              <li onClick={hide}>Quem somos?</li>
            </Link>

            <Link to={"/faq"} onClick={hide}>
              <li onClick={hide}>
                ajuda
              </li>
            </Link>

            <li className="divider">|</li>

            <Link to={"/profileUser"} onClick={hide}>
              <li onClick={hide}>
                Meu perfil
              </li>
            </Link>

            <li onClick={hide}>
              Sair
            </li>
              </>
            ) : (
              <>
                <Link to={"/"}>
                  <li>Home</li>
                </Link>

                <Link to={"/orcamento"} onClick={hide}>
                  <li onClick={hide}>Solicite um carreto</li>
                </Link>

                <Link to={"/sobreNos"} onClick={hide}>
                  <li onClick={hide}>Quem somos?</li>
                </Link>

                <Link to={"/faq"} onClick={hide}>
                  <li onClick={hide}>ajuda</li>
                </Link>

                <li className="divider">|</li>
                <Link to="/trabalheConosco" onClick={hide}>
                  <li onClick={hide}>trabalhe conosco</li>
                </Link>
                <li onClick={entrar}>
                  entrar
                  <FaAngleDown className="arrowIcon" />
                  {showDropdownEntrar && (
                    <div className="dropdown">
                      {/* Conteúdo do dropdown */}
                      <ul className="dropdownContent">
                        <Link to={"/cadastroMotorista"}>
                          <li>Seja Motorista</li>
                        </Link>
                        <Link to={"/cadastro"}>
                          <li>Cadastra-se</li>
                        </Link>
                        <Link to="/login">
                          <li>Entrar</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
                {showDropdownEntrar && (
                  <div
                    className="dropdownMobile"
                    onClick={() => setShowDropdownEntrar(!showDropdownEntrar)}
                  >
                    <Link to={"/cadastroMotorista"}>
                      <li onClick={hide}>Seja Motorista</li>
                    </Link>
                    <Link to={"/cadastro"}>
                      <li onClick={hide}>Cadastra-se</li>
                    </Link>
                    <Link to="/login">
                      <li onClick={hide}>Entrar</li>
                    </Link>
                  </div>
                )}
              </>
            )}
          </ul>
        </nav>

        <div className="iconsWrapper">
          <BiMenu className="menuIcon" onClick={() => setToggle(!toggle)} />
          <IoIosClose className="menuCloseIcon disabled" />
          {props.iconeToggle}
        </div>
      </header>
    </StyledHeader>
  );
}
