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
`;

export const Search = styled.input`
  ${({
    theme: {
      spaces: { x1, x6 },
      colors: { darkPrimary },
    },
  }) => `
  height: ${x6};
  border: none;
  width: 100%;
  margin-right: ${x1};
  `}
`;
export const ActionButton = styled.button`
  ${({
    theme: {
      spaces: { x1, x6 },
      colors: { darkPrimary },
    },
  }) => `
  display: flex;
  color: ${darkPrimary};
  height: ${x6};
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
  width: ${x5};`}
`;

export const Beverages = styled.div``;
export const Beverage = styled.div``;
