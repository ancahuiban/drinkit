import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x6 },
      boxShadow: { menuMobile },
    },
  }) => `
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: ${x6};
  width: 100%;
  `}
`;

export const Dot = styled.div`
  ${({
    theme: {
      spaces: { x2, x6 },
      colors: { darkPrimary, accent },
    },
  }) => `
  background-color: ${accent};
  color: ${darkPrimary};
  width: ${x6};
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content:center;
  align-items: center;
  z-index: 1;
  font-weight: 600;
  border: 1px solid ${darkPrimary} ;
  `}
`;
export const Line = styled.div`
  ${({
    theme: {
      spaces: { x1 },
      colors: { darkPrimary, accent },
    },
  }) => `
  position: absolute;
  width: 100%;
  height: calc(${x1} / 2);
  background: ${darkPrimary};
  `}
`;
