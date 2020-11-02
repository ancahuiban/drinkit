import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import { CanvasContainer, Canvas, Container, ButtonContainer } from "./style";
import { Subtitle, PrimaryButton as Button, Steps } from "../../components";

const AddBeerInfo = ({ pixels, canvasRef }) => {
  const { isPhotoCropped } = useContext(AppContext);
  const [step, setStep] = useState(1);
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
      {isPhotoCropped && (
        <div>
          Step {step}
          <Steps />
        </div>
      )}
      {step === 1 && (
        <CanvasContainer isCropped={isPhotoCropped}>
          <Canvas ref={canvasRef} width={pixels.width} height={pixels.height} />
        </CanvasContainer>
      )}
      {isPhotoCropped && (
        <>
          {step === 1 && (
            <>
              <Subtitle
                align="center"
                text="You uploaded the cap, thrus completing the 1st step. Follow the steps and add the remaining informations about the beverage!"
              />
              <ButtonContainer>
                <Button text="Change the photo" onClick={() => {}} />
                <Button
                  text="Next step"
                  isYellow
                  onClick={() => setStep(step + 1)}
                />
              </ButtonContainer>
            </>
          )}
          {step === 2 && <> hey macarenaa</>}
        </>
      )}
    </Container>
  );
};
export default AddBeerInfo;
