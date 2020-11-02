import React from "react";
import { Container, Dot, Line } from "./style";

export const Steps = () => {
  const steps = [1, 2, 3, 4];
  return (
    <Container>
      <Line />
      {steps.map((el, id) => (
        <Dot dots={el.length}> {el} </Dot>
      ))}
    </Container>
  );
};
