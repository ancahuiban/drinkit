import React from "react";
import { Container, LogoStyled } from "./style";
import { Logo } from "../../assets/Logo";

export const Header = () => (
  <Container>
    <LogoStyled />
    {/* <LogoStyled src={Logo} alt="Logo" /> */}
  </Container>
);
