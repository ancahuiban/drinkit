import React from "react";
import { Header, MenuTabs } from "./components";
import { MainPage, MainContent, ContentContainer } from "./style";

export const PageContainer = ({ children }) => {
  return (
    <MainPage>
      <MainContent>
        <Header />
        <ContentContainer>{children}</ContentContainer>
        <MenuTabs />
      </MainContent>
    </MainPage>
  );
};
