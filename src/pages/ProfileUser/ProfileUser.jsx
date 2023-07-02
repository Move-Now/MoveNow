import React, { useState, useEffect, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Swal from "sweetalert2";
import axios from "axios";

const StyledProfileUser = styled.div`
  
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function ProfileUser() {
  
  return (
      <StyledProfileUser>
        <ScrollToTop />

        <Footer />
      </StyledProfileUser>
  );
}
