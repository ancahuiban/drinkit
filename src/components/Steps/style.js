import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x7 },
      boxShadow: { menuMobile },
    },
  }) => `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: ${x7};
  width: 100vw;
  background-color: red;
  `}
`;

export const Dot = styled.div``;
export const Dots = styled.div``;
