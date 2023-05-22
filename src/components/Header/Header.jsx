import "./Header.css";
import { FaRegMoon } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [toggle, setToggle] = useState(true);
  return (
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
        <FaRegMoon className="modeIcon" />
      </div>
    </header>
  );
}
