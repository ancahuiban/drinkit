import {
  HomeIcon,
  InventoryIcon,
  RecipesIcon,
  ShoppingListIcon,
  LogoutIcon,
  SettingsIcon,
} from "../../assets/MenuIcons";
import UserPhoto from "../../assets/UserPlaceholder.png";

export const mainMenu = [
  {
    id: 1,
    name: "Dashboard",
    Icon: HomeIcon,
    link: "/",
  },
  {
    id: 2,
    // Icon: InventoryIcon,
    link: "/add-beer",
  },
  {
    id: 3,
    name: "List",
    Icon: ShoppingListIcon,
    link: "/see-beers",
  },
];

export const secondaryMenu = [
  {
    id: 1,
    name: "Settings",
    Icon: SettingsIcon,
    link: "/settings",
  },
  {
    id: 2,
    name: "Log out",
    Icon: LogoutIcon,
    link: "/sign-in",
  },
];

export const userDetails = {
  name: "Anca",
  avatar: UserPhoto,
};
