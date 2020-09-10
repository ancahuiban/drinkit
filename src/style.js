import styled from "styled-components";

export const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const MainContent = styled(MainPage)`
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  ${({
    theme: {
      spaces: { x2, x4, x7 },
    },
  }) => `
  padding : ${x2};
  width: calc( 100vw - ${x4} );
  height: calc( 100vh - ${x7} - ${x4});
  `}
`;
