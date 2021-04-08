import styled from "styled-components";
import { Logo } from "../../assets/Logo";

export const Container = styled.div`
  ${({
    theme: {
      colors: { primary },
      spaces: { x8 },
      boxShadow: { header },
    },
  }) => `
background-color: ${primary};
display: flex;
justify-content: center;
align-items: center;
height:${x8};
box-shadow:${header};
`}
`;

export const LogoStyled = styled(Logo)`
  ${({
    theme: {
      spaces: { x7 },
    },
  }) => `
width: 160px;
`}
`;
