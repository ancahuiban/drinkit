import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x8 },
      boxShadow: { menuMobile },
    },
  }) => `
  width: 100%!important;
  height: 100%!important;

  position: relative;
  `}
`;
