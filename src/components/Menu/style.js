import styled from "styled-components";
import { IconText } from "../Drawer/style";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x1, x4, x10 },
      boxShadow: { menuMobile },
    },
  }) => `
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: ${x1};
height: ${x10};
z-index:1;
box-shadow:${menuMobile};
bottom:0;
position:fixed;
width: 100vw;
`}
`;

export const Tab = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TabText = styled(IconText)`
  ${({
    theme: {
      colors: { textPrimary },
    },
  }) => `
  text-align: center;
  color: ${textPrimary}
`}
`;
