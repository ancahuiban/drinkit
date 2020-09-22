import React from "react";
import { StyledPrimaryButton, StyledButtonText } from "./style";
// import { Plus } from 'styled-icons/feather/Plus'

export const PrimaryButton = ({ text }) => (
  <StyledPrimaryButton>
    <StyledButtonText> {text} </StyledButtonText>
  </StyledPrimaryButton>
);
