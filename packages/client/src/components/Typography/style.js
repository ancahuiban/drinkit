import styled from "styled-components";

export const StyledTitle = styled.div`
  ${({ align }) => `
  font-family: "Montserrat Alternates";
  font-size: 30px;
  font-weight: 700;
  text-align: ${align === "center" ? `center` : `flex-start`};
  `}
`;

export const StyledSubtitle = styled.div`
  ${({ align }) => `

  font-family: "Roboto";
  font-size: 22px;
  font-weight: 500;
  text-align: ${align === "center" ? `center` : `flex-start`};
`}
`;

export const StyledParagraph = styled.div`
  ${({ align }) => `
  font-family: "Roboto";
  font-size: 16px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 300)};
  text-align: ${align === "center" ? `center` : `flex-start`};
`}
`;

export const StyledButtonText = styled(StyledParagraph)`
  text-transform: uppercase;
  font-weight: 500;
`;
