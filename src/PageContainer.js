import React, { useContext } from "react";
import { Header, MenuTabs } from "./components";
import {
  MainPage,
  MainContent,
  ContentContainer,
  UnsupportPage,
} from "./style";
import { Logo } from "./assets/Logo";
import { Title } from "./components/Typography";
import { AppContext } from "./AppContext";

export const PageContainer = ({ children }) => {
  const { isTablet } = useContext(AppContext);
  return (
    <MainPage>
      {isTablet && (
        <MainContent>
          <Header />
          <ContentContainer> {children}</ContentContainer>
          <MenuTabs />
        </MainContent>
      )}
      {!isTablet && (
        <UnsupportPage>
          <Logo width="300" />
          <Title text="is supported only on mobile." />
        </UnsupportPage>
      )}
    </MainPage>
  );
};
