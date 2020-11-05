import gql from "graphql-tag";

export const addBeverageMutation = gql`
  mutation addBeverage($input: AddBeverageInput) {
    addBeverage(input: $input) {
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
