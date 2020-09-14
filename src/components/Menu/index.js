import React, { useState } from "react";
import { Container, Tab, MainButton, IconContainer } from "./style";
import { mainMenu } from "./constants";
import styled from "styled-components";

export const MenuTabs = () => {
  return (
    <Container>
      {mainMenu.map(({ name, Icon, link }, id) => {
        const StyledIcon = styled(Icon)`
          width: 40px;
          height: 40px;
        `;

        if (!name) {
          return (
            <MainButton href={link}>
              <StyledIcon />
            </MainButton>
          );
        }
        return (
          <Tab key={id} href={link}>
            <IconContainer>
              <StyledIcon />
            </IconContainer>
          </Tab>
        );
      })}
    </Container>
  );
};
