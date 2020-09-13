import React, { useContext } from "react";
import { Container, UserAvatar, TopSection, UserContainer } from "./style";
import { mainMenu, secondaryMenu, userDetails } from "../Menu/constants";
import { MenuList } from "./MenuList";
import { Subtitle } from "../Typography";
import { AppContext } from "../../AppContext";

export const Drawer = () => {
  const { name, avatar } = userDetails;
  const { drawerOpen, setdrawerOpen } = useContext(AppContext);

  const handleResize = (size) =>
    (document.body.getElementsByClassName(
      "user-avatar"
    )[0].style.height = size);

  const handleEnter = () => {
    handleResize("100px");
    setdrawerOpen(true);
  };
  const handleLeave = () => {
    setTimeout(() => {
      handleResize("50px");
      setdrawerOpen(false);
    }, 1000);
  };

  return (
    <Container onMouseOver={handleEnter} onMouseLeave={handleLeave}>
      <TopSection>
        <UserContainer>
          <UserAvatar className="user-avatar" src={avatar} />
          {drawerOpen && <Subtitle text={`Hello, ${name}`} />}
        </UserContainer>
        <MenuList menuButtons={mainMenu} />
      </TopSection>
      <MenuList menuButtons={secondaryMenu} />
    </Container>
  );
};
