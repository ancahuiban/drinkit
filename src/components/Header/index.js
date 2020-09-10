import React from 'react'
import { Container, LogoStyled } from './style'
import Logo from '../../assets/LogoWhite.svg'

export const Header = () => (
  <Container>
    <LogoStyled src={Logo} alt="Logo" />
  </Container>
)
