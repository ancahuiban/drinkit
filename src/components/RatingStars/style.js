import styled from "styled-components";

export const Stars = styled.div``;

export const Star = styled.label`
  ${({
    theme: {
      colors: { accent },
    },
    isSelected,
  }) => `

  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.5em;
  color: ${isSelected ? accent : `#ABABAB`};
  transition: color .2s ease-out;
  `}
`;
