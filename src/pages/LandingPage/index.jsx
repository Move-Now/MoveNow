import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "styled-components";
import { Header } from "../../components/Header/Header";
import { SecaoIndex1 } from "../../components/SecaoIndex1/SecaoIndex1";
import { Partnerships } from "../../components/Partnerships/Partnerships";
import { SecaoIndex2 } from "../../components/SecaoIndex2/SecaoIndex2";
import { Tape } from "../../components/Tape/Tape";
import { SecaoIndex5 } from "../../components/SecaoIndex5/SecaoIndex5";
import { FinishedJobs } from "../../components/FinishedJobs/FinishedJobs";
import { SecaoIndex3 } from "../../components/SecaoIndex3/SecaoIndex3";
import { Footer } from "../../components/Footer/Footer";


export function LandingPage() {
  const theme = useContext(ThemeContext);
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    setIsDarkMode(storedTheme === "dark");
  }, [storedTheme]);

  const imageTruck = isDarkMode
    ? "../src/assets/CaminhaoDark.png"
    : "../src/assets/CaminhaoLight.png";
  const imageTape = isDarkMode
    ? "../src/assets/LOGOLaranja.png"
    : "../src/assets/LOGOTransLight.png";
  const imageIndex2 = isDarkMode
    ? "../src/assets/caminhaoLaranja.png"
    : "../src/assets/caminhaoAzul.png";
  const imageFinishedJobs = isDarkMode
    ? "../../src/assets/adesivo-rastro.svg"
    : "../../src/assets/adesivo-rastro-light.svg";

  return (
    <ThemeProvider theme={theme}>
      <SecaoIndex1 img={imageTruck} />
      <Partnerships />
      <SecaoIndex2 img={imageIndex2}/>
      <Tape img={imageTape}/>
      <SecaoIndex3 />
      <FinishedJobs img={imageFinishedJobs}/>
      <SecaoIndex5 />
      <Footer />
    </ThemeProvider>
  );
}
