import React from "react";
import { Container, Dot } from "./style";

export const Steps = () => {
  return (
    <Container>
      {[1, 2, 3, 4].map((el, id) => (
        <Dot> {el} </Dot>
      ))}
    </Container>
  );
};
