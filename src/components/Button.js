import React from "react";
import { StyledPrimaryButton, StyledButtonText } from "./style";

export const PrimaryButton = ({ text, isYellow, onClick }) => (
  <StyledPrimaryButton onTouchStart={onClick} isYellow={isYellow}>
    <StyledButtonText> {text} </StyledButtonText>
  </StyledPrimaryButton>
);
