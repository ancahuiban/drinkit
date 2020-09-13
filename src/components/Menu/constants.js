import UserPhoto from "../../assets/UserPlaceholder.png";
import { CameraRetro } from "@styled-icons/fa-solid/CameraRetro";
import { ClipboardList } from "@styled-icons/fa-solid/ClipboardList";
import { Dashboard } from "@styled-icons/material-rounded/Dashboard";

export const mainMenu = [
  {
    id: 1,
    name: "Dashboard",
    Icon: Dashboard,
    link: "/",
  },
  {
    id: 2,
    Icon: CameraRetro,
    link: "/add-beer",
  },
  {
    id: 3,
    name: "List",
    Icon: ClipboardList,
    link: "/see-beers",
  },
];

export const secondaryMenu = [
  {
    id: 1,
    name: "Settings",
    link: "/settings",
  },
  {
    id: 2,
    name: "Log out",
    link: "/sign-in",
  },
];

export const userDetails = {
  name: "Anca",
  avatar: UserPhoto,
};
