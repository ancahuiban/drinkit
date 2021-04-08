import styled from "styled-components";

export const StyledPrimaryButton = styled.div`
  ${({
    theme: {
      colors: { accent, textPrimary, darkPrimary, lightPrimary },
      spaces: { x5, x2, x1 },
    },
    isYellow,
  }) => `
    background-color: ${isYellow ? accent : darkPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${x2};
    border-radius: calc(${x1}/2);
    width: fit-content;
    border: 1px solid ${isYellow ? darkPrimary : `transparent`};
    height:${x5};
    color: ${isYellow ? textPrimary : lightPrimary};
    cursor: pointer;
    `}
`;
