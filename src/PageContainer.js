import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Drawer, Header, MenuTabs } from "./components";
import { MainPage, MainContent, ContentContainer } from "./style";

export const PageContainer = ({ children }) => {
  const { isMobile } = useContext(AppContext);
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
