import React, { useRef, useContext, useEffect } from "react";
import { Container, Tab, MainButton, IconContainer, Input } from "./style";
import { mainMenu } from "./constants";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";

import { CameraRetro } from "@styled-icons/fa-solid/CameraRetro";
import { Crop } from "@styled-icons/fa-solid/Crop";

export const MenuTabs = () => {
  const { setPhoto, photo, isPhotoCropped, setIsPhotoCropped } = useContext(
    AppContext
  );
  const inputRef = useRef();
  const history = useHistory();

  const selectPhoto = (e) => {
    window.addEventListener("click", () => {
      inputRef.current.click();
    });
  };

  const previewPhoto = (link) => (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
    history.push(link);
  };

  return (
    <Container>
      {mainMenu.map(({ name, Icon, link, id }) => {
        const DynamicIcons = () => {
          if (!name && !photo) return CameraRetro;
          if (!name && photo && !isPhotoCropped) return Crop;
          return Icon;
        };
        const StyledIcon = styled(DynamicIcons())`
          width: 40px;
          height: 40px;
        `;

        if (!name) {
          return (
            <MainButton key={id} onTouchStart={selectPhoto}>
              <StyledIcon />
              <Input
                type="file"
                id="fileUpload"
                ref={inputRef}
                accept="image/*"
                onChange={previewPhoto(link)}
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
