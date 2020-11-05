import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x2, x8 },
    },
  }) => `
    display: flex;
    flex-direction: column;
    padding : ${x2};
    margin-bottom: ${x8};
  `}
`;
