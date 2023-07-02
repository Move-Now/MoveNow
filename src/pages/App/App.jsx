import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import styled, { ThemeProvider } from "styled-components";
import { BsFillSunFill } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { HeaderDriver } from "../../components/HeaderDriver/HeaderDriver";

const lightTheme = {
  shadow: "0px 2px 4px rgba(0, 0, 0, 0.2);",
  shadowBox: "rgba(0, 0, 0, 0.2);",
  borderBottom: "var(--border-light)",
  boxShadow: "var(--box-shadow-light)",
  backgroundColor: "#fff",
  glass: "var(--bg-glass-light)",
  hoverBackground: "rgba(0, 0, 0, 0.1)",
  textColor: "#000",
  spanColor: "#3066BE",
  iconsColor: "#3066BE",
  buttonPrimaryColor: "#FFFFFF",
  buttonSecondaryColor: "#3066BE",
  buttonBackgroundPrimaryColor: "#3066BE",
  buttonBackgroundSecondaryColor: "transparent",
  buttonBorderSecondary: "3px solid #3066BE",
  buttonFontWeight: "600",
  transitionComponents: "0.7s ease-in-out",
  glassFooter: "rgba(48, 102, 190, 0.25)", 
  // Adicione outras propriedades de estilo específicas do tema claro aqui
};

const darkTheme = {
  shadow: "0px 2px 4px rgba(255, 255, 255, 0.20);",
  shadowBox: "rgba(255, 255, 255, 0.08);",
  borderBottom: "1px solid rgba(235, 113, 0, 0.15)",
  boxShadow: "var(--box-shadow-dark)",
  backgroundColor: "#101217",
  glass: "var(--bg-glass-dark)",
  hoverBackground: "rgba(255, 255, 255, 0.05)",
  textColor: "#fff",
  spanColor: "#FB6730",
  iconsColor: "#FB6730",
  buttonPrimaryColor: "#000000",
  buttonSecondaryColor: "#FFFFFF",
  buttonBackgroundPrimaryColor: "#FB6730",
  buttonBackgroundSecondaryColor: "transparent",
  buttonBorderSecondary:"3px solid #FB6730",
  buttonFontWeight: "600",
  transitionComponents: "0.7s ease-in-out",
  glassFooter: "rgba(252, 112, 19, 0.33)", 
  // Adicione outras propriedades de estilo específicas do tema escuro aqui
};

export function App() {
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

  //Função de mudar o tema quando clicar no botão, e salvar no localStorage
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setIsTransitionEnabled(true);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (isTransitionEnabled) {
      document.body.style.transition = "background-color 0.7s ease-in-out"; // adiciona a transição suave
    } else {
      document.body.style.transition = ""; // remove a transição
    }

    document.body.style.backgroundColor = isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor;

    // Limpa a transição ao desmontar o componente
    return () => {
      document.body.style.transition = "";
    };
  }, [isDarkMode, isTransitionEnabled]);

  const imageLogo = isDarkMode
    ? "../../src/assets/logoDark.png"
    : "../../src/assets/logoLight.png";
  
  const iconeToggle = isDarkMode
  ? <BsFillSunFill className="modeIcon" onClick={toggleTheme}/>
  : <FaRegMoon className="modeIcon" onClick={toggleTheme}/>;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header action={toggleTheme} theme={isDarkMode ? darkTheme : lightTheme} img={imageLogo} iconeToggle={iconeToggle}/>
      {/* <HeaderDriver action={toggleTheme} theme={isDarkMode ? darkTheme : lightTheme} img={imageLogo} iconeToggle={iconeToggle}/> */}
      <Outlet theme={isDarkMode ? darkTheme : lightTheme}/>
    </ThemeProvider>
  );
}
