import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x8 },
      boxShadow: { menuMobile },
    },
  }) => `
  display: flex;
  justify-content: space-between;
  height: ${x8};
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
      boxShadow: { mainButton },
    },
  }) =>
    `
    transform: translateY(-55px);
    z-index:1;
    color: ${accent};
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: ${primary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:${mainButton};
    border: 8px solid white;
  `}
`;

export const Tab = styled.a`
  ${({
    theme: {
      spaces: { x1, x4, x10 },
      boxShadow: { menuMobile },
    },
  }) => `
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: ${x1};
  width: calc(100% * 1/3);
  height: auto;
  `}
`;

export const IconContainer = styled.div`
  ${({
    theme: {
      spaces: { x3 },
      colors: { primary },
    },
  }) => `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: ${primary};
`}
`;

export const Input = styled.input`
  display: none;
`;
