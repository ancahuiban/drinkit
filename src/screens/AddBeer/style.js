import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      colors: { primary, lightPrimary },
      spaces: { x2, x8 },
    },
  }) => `
display: flex;
background: ${lightPrimary}; 
flex-direction: column;
padding : ${x2};
margin-bottom: ${x8};
`}
`;

export const CropperContainer = styled.div`
  width: 100% !important;
  height: 100% !important;

  position: relative;
`;

export const CanvasContainer = styled.div`
  ${({
    theme: {
      spaces: { x3 },
    },
    isCropped,
  }) => `
  display: ${isCropped ? "flex" : "none"};
  justify-content: center;
  padding: ${x3} 0;
  `}
`;

export const Canvas = styled.canvas`
  ${({
    theme: {
      colors: { primary },
      spaces: { x3 },
    },
  }) => `
  border-radius:50%;
  border: 2px solid ${primary};
  `}
`;

export const ButtonContainer = styled.div`
  ${({
    theme: {
      spaces: { x3 },
    },
  }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: ${x3} 0;
  `}
`;
