import gql from "graphql-tag";

export const getBeverages = gql`
  query {
    getBeverages {
      id
      name
      beverageTypeID
      assortmentID
      origin
      edition
      alcoholPercentage
      score
    }
  }
`;

export const getBeverage = gql`
  query {
    getBeverage {
      id
      name
      beverageTypeID
      assortmentID
      origin
      edition
      alcoholPercentage
      score
    }
  }
`;

export const getBeverageTypes = gql`
  query {
    getBeverageTypes {
      id
      name
      assortments {
        name
      }
    }
  }
`;

export const getBeverageType = gql`
  query {
    getBeverageType {
      id
      name
      assortments {
        name
      }
    }
  }
`;

export const getAssortments = gql`
  query {
    getAssortments {
      id
      name
    }
  }
`;

export const getAssortment = gql`
  query {
    getAssortment {
      id
      name
    }
  }
`;
