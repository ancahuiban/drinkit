import styled from 'styled-components'

//Typography
export const StyledTitle = styled.div`
  font-family: 'Montserrat Alternates';
  font-size: 30px;
  font-weight: 700;
`

export const StyledSubtitle = styled.div`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
`

export const StyledParagraph = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
`

export const StyledButtonText = styled(StyledParagraph)`
  text-transform: uppercase;
  font-weight: 500;
`

//Buttons

export const StyledPrimaryButton = styled.div`
  ${({
    theme: {
      colors: { accent, textLight },
      spaces: { x5, x2, x1 }
    }
  }) => `
background-color: ${accent};
display: flex;
justify-content: center;
align-items: center;
padding: 0 ${x2};
border-radius: calc(${x1}/2);
width: fit-content;
height:${x5};
color: ${textLight};
cursor: pointer;
`}
`

export const StyledRounded = styled.div`
  ${({
    theme: {
      colors: { accent, textLight },
      spaces: { x8 }
    }
  }) => `
background-color: ${accent};
color: ${textLight};
display: flex;
justify-content: center;
align-items: center;
display: flex;
width: ${x8};
height:${x8};
border-radius: 50%;
cursor: pointer;
`}
`
