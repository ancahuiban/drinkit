import React, { useRef, useContext } from "react";
import { Container, Tab, MainButton, IconContainer, Input } from "./style";
import { mainMenu } from "./constants";
import styled from "styled-components";
import { AppContext } from "../../AppContext";

export const MenuTabs = () => {
  const { setPhoto } = useContext(AppContext);
  const inputRef = useRef();

  const selectPhoto = (e) => {
    window.addEventListener("click", () => {
      inputRef.current.click();
    });
    setPhoto(URL.createObjectURL(e.target.files[0]));
    return window.removeEventListener("click", () => inputRef.current.click());
  };
  return (
    <Container>
      {mainMenu.map(({ name, Icon, link, id }) => {
        const StyledIcon = styled(Icon)`
          width: 40px;
          height: 40px;
        `;

        if (!name) {
          return (
            <MainButton href={link} key={id} onTouchStart={selectPhoto}>
              <StyledIcon />
              <Input
                type="file"
                id="fileUpload"
                ref={inputRef}
                accept="image/*"
              />
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
