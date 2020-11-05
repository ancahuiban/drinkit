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
      spaces: { x1 },
    },
  }) => `
  background-color: white;
  height: 100px;
  border-radius: ${x1};
  `}
`;
