import styled from 'styled-components'
import { Paragraph } from '../Typography'

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x2, x4 },
      boxShadow: { menuDesktop }
    }
  }) => `
padding: ${x2};
display: flex;
justify-content: space-between;
flex-direction: column;
height: 100vh;
z-index:1;
box-shadow:${menuDesktop};
* { transition: .25s ease-in-out; } 
`}
`

export const TopSection = styled.div`
  ${({
    theme: {
      spaces: { x3 }
    }
  }) => `
  display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: ${x3};
`}
`
export const UserContainer = styled.div`
  height: 200px;
  text-align: center;
`

export const UserAvatar = styled.img`
  ${({
    theme: {
      colors: { darkPrimary },
      spaces: { x2 }
    }
  }) => `
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${darkPrimary};
  margin:${x2} auto;
`}
`
//MenuList

export const MenuSection = styled.div`
  ${({
    theme: {
      spaces: { x4 }
    }
  }) => `
  margin: ${x4} 0;
  `}
`
export const MenuItem = styled.a`
  ${({
    theme: {
      colors: { lightPrimary, textPrimary },
      spaces: { x2, x1 }
    }
  }) => `
  text-decoration:none;
  color: ${textPrimary};
  display: flex;
  align-items: center;
  &:hover{
    background-color: ${lightPrimary};
  }
  padding: ${x1};
  margin: ${x1} 0;
  border-radius: ${x2};
  cursor:pointer;
  white-space: nowrap;
`}
`
export const IconContainer = styled.div`
  ${({
    theme: {
      spaces: { x3 }
    },
    drawerOpen
  }) => `
  height: 50;
  margin-right:${drawerOpen && x3};
`}
`

export const IconText = styled(Paragraph)`
  ${({
    theme: {
      fontWeight: { regular }
    }
  }) => `
  font-weight: ${regular};
`}
`
