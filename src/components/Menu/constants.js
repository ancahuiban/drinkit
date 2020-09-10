import {
  HomeIcon,
  InventoryIcon,
  RecipesIcon,
  ShoppingListIcon,
  LogoutIcon,
  SettingsIcon
} from '../../assets/MenuIcons'
import UserPhoto from '../../assets/UserPlaceholder.png'

export const mainMenu = [
  {
    id: 1,
    name: 'Home',
    Icon: HomeIcon,
    link: '/'
  },
  {
    id: 2,
    name: 'Inventory',
    Icon: InventoryIcon,
    link: '/inventory'
  },
  {
    id: 3,
    name: 'Recipes',
    Icon: RecipesIcon,
    link: '/recipes'
  },
  {
    id: 4,
    name: 'Shopping',
    Icon: ShoppingListIcon,
    link: '/shopping-list'
  }
]

export const secondaryMenu = [
  {
    id: 1,
    name: 'Settings',
    Icon: SettingsIcon,
    link: '/settings'
  },
  {
    id: 2,
    name: 'Log out',
    Icon: LogoutIcon,
    link: '/sign-in'
  }
]

export const userDetails = {
  name: 'Anca',
  avatar: UserPhoto
}
