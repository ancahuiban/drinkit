import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { CanvasContainer, Canvas, Container, ButtonContainer } from "./style";
import {
  Subtitle,
  PrimaryButton as Button,
  Steps,
  // Input,
  // Select,
} from "../../components";
import { Inputs as Input } from "./AddBeerInputs";
import { useHistory } from "react-router-dom";

import { useQuery } from "react-apollo";
import { getBeverageTypes } from "../../graphql/queries";

const AddBeerInfo = ({ pixels, canvasRef }) => {
  const { isPhotoCropped, cropDetails } = useContext(AppContext);
  const history = useHistory();
  const { data, loading } = useQuery(getBeverageTypes);

  const beverageTypes = loading ? [] : data.getBeverageTypes.map((e) => e.name);
  const assortments =
    loading && formInfo.beverageType === ""
      ? []
      : data.getBeverageTypes
          .map(({ name, assortments }) => {
            if (name === formInfo.beverageType)
              return assortments.map((e) => e.name);
          })
          .flat();

  const [step, setStep] = useState(1);
  const [formInfo, setFormInfo] = useState({
    beverageType: "",
    brandName: "",
    edition: "",
    origin: "",
    alcoholPercentage: null,
    score: null,
  });

  const onInputChange = (key) => (e) =>
    setFormInfo({ ...formInfo, [key]: e.target.value });

  console.log(cropDetails);
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
              <Input
                isSelect
                text="What type of beverage is it?"
                onChange={onInputChange("beverageType")}
                options={beverageTypes}
              />
              <Input
                isSelect
                text="What assortment does it have?"
                onChange={onInputChange("assortment")}
                options={assortments}
              />
            </>
          )}
          {step === 3 && (
            <>
              <Input
                text="What's the brand name?"
                value={formInfo.brandName}
                onChange={onInputChange("brandName")}
              />
              <Input
                text="What edition is it?"
                value={formInfo.edition}
                onChange={onInputChange("edition")}
              />
              <Input
                text="Where was this drink born?"
                value={formInfo.origin}
                onChange={onInputChange("origin")}
              />
              <Input
                text="What's the alcohol percentage?"
                value={formInfo.alcoholPercentage}
                onChange={onInputChange("alcoholPercentage")}
              />
              <Input
                value={formInfo.score}
                onChange={onInputChange("score")}
                text="How would you rate this drink?"
              />
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
              text={step === 4 ? "Go to library" : "Next step"}
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
