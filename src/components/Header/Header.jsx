import React from "react";
import styled from "styled-components";
import "./Header.css";
import { FaRegMoon } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  header {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    border-bottom: ${props => props.theme.borderBottom};
    box-shadow: ${props => props.theme.boxShadow};
    transition: ${props => props.theme.transitionComponents};
  }

  span {
    color: ${props => props.theme.spanColor};
  }

  .arrowIcon {
    color: ${props => props.theme.iconsColor};
  }

  .menuIcon {
    color: ${props => props.theme.iconsColor};
  }

  .dropdown {
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: ${props => props.theme.shadow};
  }

  .dropdown li {
    color: ${props => props.theme.textColor};
  }

  .dropdownContent li:hover {
    color: ${props => props.theme.spanColor};
    border-bottom: 1px solid ${props => props.theme.spanColor};
  }

  ul li:hover {
    color: ${props => props.theme.spanColor};
    border-bottom: 1px solid ${props => props.theme.spanColor};
  }

  .dropdownMobile li{
    border-bottom: 1px solid ${props => props.theme.spanColor};
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Header(props) {
  const [toggle, setToggle] = useState(true);
  const [showDropdownEntrar, setShowDropdownEntrar] = useState(false); // Estado para controlar a exibição do dropdown do item "entrar"
  const [showDropdownAjuda, setShowDropdownAjuda] = useState(false); // Estado para controlar a exibição do dropdown do item "ajuda"

  const closeMenu = () => {
    setToggle(true);
  };

  const dropdownEntrar = () => {
    setShowDropdownEntrar(true);
  };

  const hideDropdownEntrar = () => {
    setShowDropdownEntrar(false);
  };

  const dropdownAjuda = () => {
    setShowDropdownAjuda(true);
  };

  const hideDropdownAjuda = () => {
    setShowDropdownAjuda(false);
  };

  return (
    <StyledHeader>
      <header>
        <h2 className="logo" onClick={closeMenu}>
          <Link to={"/"}>move<span>now</span></Link>
        </h2>

        <nav className={toggle && "navDisabled"}>
          <ul>
           <Link to={"/orcamento"}>
           <li onClick={closeMenu}>Solicite um carreto</li>
           </Link>
            <li onClick={closeMenu}>Quem somos?</li>
            <li
              onMouseEnter={dropdownAjuda}
              onMouseLeave={hideDropdownAjuda}
            >
              ajuda
              <FaAngleDown className="arrowIcon" />
              {showDropdownAjuda && (
                <div className="dropdown">
                  {/* Conteúdo do dropdown */}
                  <ul className="dropdownContent">
                    <li>Para Motoristas</li>
                    <li>Para Empresas</li>
                    <li>Para Usuários</li>
                  </ul>
                </div>
              )}
            </li>
            {showDropdownAjuda && (
            <div className="dropdownMobile">
              <li onClick={closeMenu}>Para Motoristas</li>
              <li onClick={closeMenu}>Para Empresas</li>
              <li onClick={closeMenu}>Para Usuários</li>
            </div>
            )}
            <li className="divider">|</li>
            <Link to="/cadastroMotorista">
              <li onClick={closeMenu}>trabalhe conosco</li>
            </Link>
            
              <li
                onMouseEnter={dropdownEntrar}
                onMouseLeave={hideDropdownEntrar}
              >
                entrar
                <FaAngleDown className="arrowIcon" />
                {showDropdownEntrar && (
                  <div className="dropdown">
                    {/* Conteúdo do dropdown */}
                    <ul className="dropdownContent">
                      <Link to={"/cadastroMotorista"}><li>Seja Motorista</li></Link>
                      <Link to={"/cadastro"}><li>Cadastra-se</li></Link>
                      <Link to="/login"><li>Entrar</li></Link>
                    </ul>
                  </div>
                )}
              </li>
              {showDropdownEntrar && (
                <div className="dropdownMobile">
                  <Link to={"/cadastroMotorista"}><li onClick={closeMenu}>Seja Motorista</li></Link>
                    <Link to={"/cadastro"}><li onClick={closeMenu}>Cadastra-se</li></Link>
                    <Link to="/login"><li onClick={closeMenu}>Entrar</li></Link>
                </div>
              )}
            
          </ul>
        </nav>

        <div className="iconsWrapper">
          <BiMenu className="menuIcon" onClick={() => setToggle(!toggle)} />
          <IoIosClose className="menuCloseIcon disabled" />
          <FaRegMoon className="modeIcon" onClick={props.action} />
        </div>
      </header>
    </StyledHeader>
  );
}