import styled from "styled-components";

//Typography
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

//Buttons

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
