import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import { CanvasContainer, Canvas, Container, ButtonContainer } from "./style";
import { Subtitle, PrimaryButton as Button, Steps } from "../../components";
import { useHistory } from "react-router-dom";

const AddBeerInfo = ({ pixels, canvasRef }) => {
  const { isPhotoCropped } = useContext(AppContext);
  const history = useHistory();

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
      {isPhotoCropped && <Steps step={step} />}
      {step === 1 && (
        <CanvasContainer isCropped={isPhotoCropped}>
          <Canvas ref={canvasRef} width={pixels.width} height={pixels.height} />
        </CanvasContainer>
      )}
      {isPhotoCropped && (
        <>
          {step === 1 && (
            <Subtitle
              align="center"
              text="You uploaded the cap, thus completing the 1st step. Follow the steps and add the remaining informations about the beverage!"
            />
          )}
          {step === 2 && (
            <>
              <Subtitle align="center" text="What type of beverage is it?" />
              <input />
              <Subtitle align="center" text="What assortment does it have?" />
              <input />
            </>
          )}
          {step === 3 && (
            <>
              <Subtitle align="center" text="What edition is it?" />
              <input />
              <Subtitle align="center" text="Where was this drink born?" />
              <input />
              <Subtitle align="center" text="What's the alcohol percentage?" />
              <input />
              <Subtitle align="center" text="How would you rate this drink?" />
              <input />
            </>
          )}
          {step === 4 && (
            <>
              <Subtitle
                align="center"
                text="Congratulations! You've successfully entered your drink and it can be seen in the beverage tasting library!"
              />
            </>
          )}
          <ButtonContainer>
            <Button
              text={step <= 2 ? "Change the photo" : "Previous step"}
              onClick={() => {
                step >= 2 && setStep(step - 1);
              }}
            />
            <Button
              text="Next step"
              isYellow
              onClick={() =>
                step === 4 ? history.push("/see-beers") : setStep(step + 1)
              }
            />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
};
export default AddBeerInfo;
