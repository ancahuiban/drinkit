import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import { CanvasContainer, Canvas, Container } from "./style";
import { Subtitle } from "../../components/Typography";
import { PrimaryButton } from "../../components/Button";

const AddBeerInfo = ({ pixels, canvasRef }) => {
  const { isPhotoCropped } = useContext(AppContext);
  const [formInfo, setFormInfo] = useState({
    beverageType: "",
    brandName: "",
    edition: "",
    beerType: "",
    origin: "",
    alcoholPercentage: 0,
    score: 0,
    notes: [],
    observations: "",
  });

  return (
    <Container>
      <CanvasContainer isCropped={isPhotoCropped}>
        <Canvas ref={canvasRef} width={pixels.width} height={pixels.height} />
      </CanvasContainer>
      {isPhotoCropped && (
        <>
          <Subtitle
            align="center"
            text="You added the cap design, thrus completing the 1st step. Follow the steps and add the remaining informations about the beverage!"
          />
          <PrimaryButton text="Schimba poza" onClick={() => {}} />
          <PrimaryButton text="Pasul urmator" isYellow onClick={() => {}} />
        </>
      )}
    </Container>
  );
};
export default AddBeerInfo;
