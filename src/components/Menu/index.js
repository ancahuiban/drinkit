import React from "react";
import { Container, Tab, TabText } from "./style";
import { mainMenu } from "./constants";
import { IconContainer } from "../Drawer/style";

export const MenuTabs = () => (
  <Container>
    {mainMenu.map(({ name, Icon, id, link }) => (
      <Tab href={link}>
        <IconContainer>
          <Icon key={id} />
        </IconContainer>
        <TabText text={name} />
      </Tab>
    ))}
  </Container>
);
