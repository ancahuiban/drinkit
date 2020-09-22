import React from "react";
import { StyledPrimaryButton, StyledButtonText } from "./style";
// import { Plus } from 'styled-icons/feather/Plus'

export const PrimaryButton = ({ text, isYellow }) => (
  <StyledPrimaryButton isYellow={isYellow}>
    <StyledButtonText> {text} </StyledButtonText>
  </StyledPrimaryButton>
);
