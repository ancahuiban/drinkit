import styled from "styled-components";

export const Stars = styled.div`
  ${({
    theme: {
      spaces: { x2, x8 },
    },
  }) => `
  `}
`;
export const Star = styled.label`
  ${({
    theme: {
      colors: { accent },
    },
  }) => `

  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.5em;
  color: #ABABAB;
  transition: color .2s ease-out;
  &.is-selected {
    color: ${accent};
  }
  `}
`;
