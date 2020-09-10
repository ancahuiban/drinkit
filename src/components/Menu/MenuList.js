import React, { useContext } from 'react'
import { MenuItem, IconContainer, IconText, MenuSection } from './style'
import { AppContext } from '../../AppContext'

export const MenuList = ({ menuButtons }) => {
  const { drawerOpen } = useContext(AppContext)
  return (
    <MenuSection>
      {menuButtons.map(({ name, Icon, id, link }) => (
        <MenuItem href={link} key={id}>
          <IconContainer drawerOpen={drawerOpen}>
            <Icon key={id} />
          </IconContainer>
          {drawerOpen && <IconText text={name} />}
        </MenuItem>
      ))}
    </MenuSection>
  )
}
