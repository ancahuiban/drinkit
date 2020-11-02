import React from "react";
import { StyledPrimaryButton } from "./style";
import { StyledButtonText } from "../Typography/style";

export const PrimaryButton = ({ text, isYellow, onClick }) => (
  <StyledPrimaryButton onTouchStart={onClick} isYellow={isYellow}>
    <StyledButtonText> {text} </StyledButtonText>
  </StyledPrimaryButton>
);
