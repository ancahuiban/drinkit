import styled from "styled-components";

export const InputContainer = styled.input`
  ${({
    theme: {
      colors: { darkPrimary, accent, textPrimary },
      spaces: { x2, x3, x5 },
    },
  }) => `
  height: ${x5};
  margin: ${x2} 0 ${x3};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${darkPrimary};
  outline-color: ${accent};
  color: ${textPrimary};
  font-size: 16px;
  font-weight: 400;
  `}
`;

export const Option = styled.option`
  ${({
    theme: {
      colors: { darkPrimary, accent, textPrimary },
    },
  }) => `
  color: ${textPrimary};
  font-size: 16px;
  font-weight: 400;
  background-color: white;

  &:disabled {
    background-color: ${accent};
    }
  `}
`;
