import React from 'react'
import { StyledPrimaryButton, StyledRounded, StyledButtonText } from './style'
import { Plus } from 'styled-icons/feather/Plus'

export const PrimaryButton = ({ text }) => (
  <StyledPrimaryButton>
    <StyledButtonText> {text} </StyledButtonText>
  </StyledPrimaryButton>
)

export const RoundedButton = () => (
  <StyledRounded>
    <Plus size="50" />
  </StyledRounded>
)
