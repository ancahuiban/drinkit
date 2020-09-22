import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      colors: { primary, lightPrimary },
      spaces: { x2 },
    },
  }) => `
display: flex;
background: ${lightPrimary}; 
flex-direction: column;
padding : ${x2};
height: 100%;
`}
`;

export const CropperContainer = styled.div`
  width: 100% !important;
  height: 100% !important;

  position: relative;
`;

export const CanvasContainer = styled.div`
  ${({ isCropped }) => `
  display: ${isCropped ? "flex" : "none"};
  justify-content: center;
  `}
`;

export const Canvas = styled.canvas`
  ${({
    theme: {
      colors: { primary },
    },
  }) => `
  border-radius:50%;
  border: 2px solid ${primary};
  `}
`;
