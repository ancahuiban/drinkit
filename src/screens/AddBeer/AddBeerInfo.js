import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import { CanvasContainer, Canvas } from "./style";

const AddBeerInfo = ({ pixels, canvasRef }) => {
  const { isPhotoCropped } = useContext(AppContext);

  return (
    <CanvasContainer isCropped={isPhotoCropped}>
      <Canvas ref={canvasRef} width={pixels.width} height={pixels.height} />
    </CanvasContainer>
  );
};
export default AddBeerInfo;
