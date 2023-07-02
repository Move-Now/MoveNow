import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./style.css";

const StyledSettingsUsers = styled.div`
  color: ${(props) => props.theme.textColor};
`;

export function SettingsUsers() {
  
  return (
    <StyledSettingsUsers>
      <ScrollToTop />
        
      <Footer />
    </StyledSettingsUsers>
  );
}
