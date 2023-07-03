import React, { useEffect } from "react";
import styled from "styled-components";
import "./Header.css";
import { FaAngleDown } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledHeaderDriver = styled.div`
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

export function HeaderDriver(props) {
  const [toggle, setToggle] = useState(true);
  const [showDropdownEntrar, setShowDropdownEntrar] = useState(false); // Estado para controlar a exibição do dropdown do item "entrar"


  const entrar = () => {
    setShowDropdownEntrar(!showDropdownEntrar)
  }

  const hide = () => {
    setShowDropdownEntrar(false)
    setToggle(true);
  }

  return (
    <StyledHeaderDriver>
      <header>

      <Link to={"/driver"}><img src={props.img} alt="" className="imagemLogo" onClick={hide}/></Link>
        <nav className={toggle && "navDisabled"}>
          <ul>

            <Link to={"/driver"} onClick={hide}>
              <li onClick={hide}>Orçamentos Disponíveis</li>
            </Link>

            <Link to={"/ranking"} onClick={hide}>
              <li onClick={hide}>Ranqueamento</li>
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

            <Link to={"/profileDriver"} onClick={hide}>
              <li onClick={hide}>
                Meu perfil
              </li>
            </Link>

              <li onClick={hide}>
                Sair
              </li>
            
          </ul>
        </nav>

        <div className="iconsWrapper">
          <BiMenu className="menuIcon" onClick={() => setToggle(!toggle)} />
          <IoIosClose className="menuCloseIcon disabled" />
          {props.iconeToggle}
        </div>
      </header>
    </StyledHeaderDriver>
  );
}