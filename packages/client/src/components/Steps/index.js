import React from "react";
import { Container, Dot, Line, Checked } from "./style";

export const Steps = ({ step }) => {
  const steps = [1, 2, 3, 4];
  return (
    <Container>
      <Line />
      {steps.map((el, id) => (
        <Dot key={id} dots={steps.length}> {el <= step ? <Checked /> : el} </Dot>
      ))}
    </Container>
  );
};
