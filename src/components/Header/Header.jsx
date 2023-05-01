import "./Header.css";
import { FaRegMoon } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

export function Header() {
  return (
    <header>
      <h2 className="logo">
        Move<span>Now</span>
      </h2>
      <nav>
        <ul>
          <li>Solicite um carreto</li>
          <li>Quem somos?</li>
          <li>
            ajuda
            <FaAngleDown className="arrowIcon" />
          </li>
          <li className="divider">|</li>
          <li>trabalhe conosco</li>
          <li>
            entrar
            <FaAngleDown className="arrowIcon" />
          </li>
        </ul>
      </nav>
      <div className="iconsWrapper">
        <BiMenu className="menuIcon " />
        <IoIosClose className="menuCloseIcon disabled" />
        <FaRegMoon className="modeIcon" />
      </div>
    </header>
  );
}
