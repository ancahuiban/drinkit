import React from "react";
import {
  StyledTitle,
  StyledSubtitle,
  StyledParagraph,
  StyledButtonText,
} from "./style";

export const Title = ({ text, align }) => (
  <StyledTitle align={align}> {text} </StyledTitle>
);

export const Subtitle = ({ text, align }) => (
  <StyledSubtitle align={align}> {text} </StyledSubtitle>
);

export const Paragraph = ({ text, ...rest }) => (
  <StyledParagraph {...rest}> {text} </StyledParagraph>
);

export const Button = ({ text }) => (
  <StyledButtonText> {text} </StyledButtonText>
);
