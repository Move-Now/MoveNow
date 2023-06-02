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
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Header(props) {
  const [toggle, setToggle] = useState(true);
  return (
    <StyledHeader>
      <header>
        <h2 className="logo">
          Move<span>Now</span>
        </h2>

        <nav className={toggle && "navDisabled"}>
          <ul>
            <li>Solicite um carreto</li>
            <li>Quem somos?</li>
            <li>
              ajuda
              <FaAngleDown className="arrowIcon" />
            </li>
            <li className="divider">|</li>
            <li>trabalhe conosco</li>
            <Link to="/cadastro">
              <li>
                entrar
                <FaAngleDown className="arrowIcon" />
              </li>
            </Link>
          </ul>
        </nav>

        <div className="iconsWrapper">
          <BiMenu className="menuIcon" onClick={() => setToggle(!toggle)} />
          <IoIosClose className="menuCloseIcon disabled" />
          <FaRegMoon className="modeIcon" onClick={props.action}/>
        </div>
      </header>
    </StyledHeader>
  );
}
