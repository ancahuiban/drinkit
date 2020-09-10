import styled from 'styled-components'

export const Container = styled.div`
  ${({
    theme: {
      colors: { primary },
      spaces: { x7 },
      boxShadow: { header }
    }
  }) => `
background-color: ${primary};
display: flex;
justify-content: center;
align-items: center;
height:${x7};
box-shadow:${header};
`}
`

export const LogoStyled = styled.img`
  ${({
    theme: {
      spaces: { x6 }
    }
  }) => `
width: 150px;
height: ${x6};
`}
`
