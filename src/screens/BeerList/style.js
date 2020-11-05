import styled from "styled-components";

export const Container = styled.div`
  ${({
    theme: {
      spaces: { x2, x8 },
    },
  }) => `
    display: flex;
    flex-direction: column;
    padding : ${x2};
    margin-bottom: ${x8};
  `}
`;

export const Header = styled.div`
  ${({
    theme: {
      spaces: { x1 },
    },
  }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding : ${x1};
  height: 80px;
`}
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Search = styled.input`
  ${({
    theme: {
      spaces: { x1, x6 },
      colors: { darkPrimary, primary, accent },
      fontWeight: { bold, regular },
    },
  }) => `
  height: ${x6};
  border: none;
  width: 70%;
  margin-right: ${x1};
  border-bottom: 3px solid ${darkPrimary};
  outline-color: ${accent};
  font-weight: ${bold};
  font-size: 18px;

  &::placeholder{
    color:${primary};
    font-weight: ${regular};
  }
  `}
`;
export const ActionButton = styled.button`
  ${({
    theme: {
      spaces: { x1, x6 },
      colors: { primary, accent, lightPrimary },
    },
  }) => `
  display: flex;
  height: ${x6};
  border: 3px solid ${primary};
  background-color: ${accent};
  cursor: pointer;
  border-radius: calc(${x1}/2);
  `}
`;

export const ActionIcon = styled.i`
  ${({
    theme: {
      spaces: { x5 },
      colors: { darkPrimary },
    },
  }) => `
  color: ${darkPrimary};
  width: ${x5};
  `}
`;

export const Beverages = styled.div`
  ${({
    theme: {
      spaces: { x1 },
    },
  }) => `
  padding: ${x1};
  `}
`;
export const Beverage = styled.div`
  ${({
    theme: {
      colors: { lightPrimary },
      spaces: { x1, x4 },
      boxShadow: { cardShadow },
    },
  }) => `
  margin: ${x4} 0px 0px;
  background-image:linear-gradient(180deg,transparent -25%,white 80%);
  height: 140px;
  border-radius: ${x1};
  box-shadow: ${cardShadow};
  `}
`;

export const BeverageHeader = styled.div`
  ${({
    theme: {
      colors: { lightPrimary },
      spaces: { x1 },
      boxShadow: { cardShadow },
    },
  }) => `
  height: 40%;
  position: relative;
  `}
`;

export const BeverageImg = styled.img`
  ${({
    theme: {
      colors: { lightPrimary },
    },
  }) => `
  position: absolute;
  height: 100px;
  border-radius: 50%;
  bottom: -20px;
  left: 20px;
  border: 2px solid ${lightPrimary};
  `}
`;

export const BeverageInfo = styled.div`
  ${({
    theme: {
      spaces: { x3 },
      boxShadow: { cardShadow },
    },
  }) => `
    padding: ${x3};
`}
`;
