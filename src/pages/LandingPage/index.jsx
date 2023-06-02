import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header/Header";
import { SecaoIndex1 } from "../../components/SecaoIndex1/SecaoIndex1";
import { Partnerships } from "../../components/Partnerships/Partnerships";
import { SecaoIndex2 } from "../../components/SecaoIndex2/SecaoIndex2";
import { Tape } from "../../components/Tape/Tape";
import { SecaoIndex5 } from "../../components/SecaoIndex5/SecaoIndex5";
import { FinishedJobs } from "../../components/FinishedJobs/FinishedJobs";
import { SecaoIndex3 } from "../../components/SecaoIndex3/SecaoIndex3";
import { Footer } from "../../components/Footer/Footer";

const lightTheme = {
  borderBottom: "var(--border-light)",
  outline: "var(--border-blue)",
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
  borderBottom: "1px solid rgba(235, 113, 0, 0.15)",
  outline: "var(--border-orange)",
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
  buttonBorderSecondary: "3px solid #FB6730",
  buttonFontWeight: "600",
  transitionComponents: "0.7s ease-in-out",
  glassFooter: "rgba(252, 112, 19, 0.33)", 
  // Adicione outras propriedades de estilo específicas do tema escuro aqui
};

export function LandingPage() {
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

  // Seção das variaveis das imagens dinamicas:
  const imageTruck = isDarkMode ? "../src/assets/CaminhaoDark.png" : "../src/assets/CaminhaoLight.png";
  const imageTape = isDarkMode ? "../src/assets/LOGOLaranja.png" : "../src/assets/LOGOTransLight.png"
  const imageIndex2 = isDarkMode ? "../src/assets/caminhaoLaranja.png" : "../src/assets/caminhaoAzul.png";

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

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header action={toggleTheme} />
      <SecaoIndex1 img={imageTruck} />
      <Partnerships />
      <SecaoIndex2 img={imageIndex2}/>
      <Tape img={imageTape}/>
      <SecaoIndex3 />
      {/* <FinishedJobs /> */}
      <SecaoIndex5 />
      <Footer />
    </ThemeProvider>
  );
}
