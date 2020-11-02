import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const UnsupportPage = styled(MainPage)`
  ${({
    theme: {
      colors: { primary, textLight },
    },
  }) => `
      background-color: ${primary};
      color: ${textLight};
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
`;

export const MainContent = styled(MainPage)`
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  ${({
    theme: {
      spaces: { x2, x4, x8 },
    },
  }) => `
  // width: calc( 100vw - ${x4} );
  height: calc( 100vh - ${x8});
  overflow-x: auto;
  `}
`;
