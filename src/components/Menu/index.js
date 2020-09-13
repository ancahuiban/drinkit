import React from "react";
import { Container, Tab, TabText, MainButton } from "./style";
import { mainMenu } from "./constants";
import { IconContainer } from "../Drawer/style";

export const MenuTabs = () => (
  <Container>
    {mainMenu.map(({ name, Icon, link }, id) => {
      if (!name) {
        return <MainButton href={link} />;
      }
      return (
        <Tab key={id} href={link}>
          <IconContainer>
            <Icon key={id} />
          </IconContainer>
          <TabText text={name} />
        </Tab>
      );
    })}
  </Container>
);
