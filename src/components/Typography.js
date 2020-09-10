import React from 'react'
import {
  StyledTitle,
  StyledSubtitle,
  StyledParagraph,
  StyledButtonText
} from './style'

export const Title = ({ text }) => <StyledTitle> {text} </StyledTitle>

export const Subtitle = ({ text }) => <StyledSubtitle> {text} </StyledSubtitle>

export const Paragraph = ({ text, ...rest }) => (
  <StyledParagraph {...rest}> {text} </StyledParagraph>
)

export const Button = ({ text }) => (
  <StyledButtonText> {text} </StyledButtonText>
)
