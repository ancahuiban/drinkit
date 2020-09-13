import styled from "styled-components";
import { IconText } from "../Drawer/style";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x1, x4, x10 },
      boxShadow: { menuMobile },
    },
  }) => `
  display: flex;
  justify-content: space-between;
  height: ${x10};
  z-index:1;
  box-shadow:${menuMobile};
  bottom:0;
  position:fixed;
  width: 100vw;
  `}
`;

export const MainButton = styled.a`
  ${({
    theme: {
      colors: { primary, accent },
    },
  }) =>
    `
    transform: translateY(-40px);
    z-index:1;
    color: ${accent};
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: ${primary};
  `}
`;

export const Tab = styled.a`
  ${({
    theme: {
      spaces: { x1, x4, x10 },
      boxShadow: { menuMobile },
    },
  }) => `
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: ${x1};
  width: calc(100% * 1/3);
  `}
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
