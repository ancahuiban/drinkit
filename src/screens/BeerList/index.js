import React from "react";
import { Container } from "./style";
import { useQuery } from "react-apollo";
import { getBeverages } from "../../graphql/queries";

const BeerList = () => {
  const { data, loading } = useQuery(getBeverages);
  const beverages = loading
    ? []
    : data.getBeverages.map(
        ({
          name,
          beverageTypeID,
          assortmentID,
          origin,
          edition,
          alcoholPercentage,
          score,
        }) => `${name} · ${edition} · ${origin}`
      );

  return <Container>{beverages}</Container>;
};
export default BeerList;
