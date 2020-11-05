import React from "react";
import {
  Container,
  Header,
  Search,
  ActionButton,
  Beverages,
  Beverage,
  ActionIcon,
  SearchBar,
} from "./style";
import { useQuery } from "react-apollo";
import { getBeverages } from "../../graphql/queries";
import { Title } from "../../components";

import {
  Search as SearchIcon,
  Filter as FilterIcon,
} from "@styled-icons/boxicons-regular";

const BeerList = () => {
  const { data, loading } = useQuery(getBeverages);
  return (
    <Container>
      <Title text="Beverages list" align="left" />
      <Header>
        <SearchBar>
          <Search type="search" placeholder="Search drink" />
          <ActionButton>
            <ActionIcon as={SearchIcon} />
          </ActionButton>
        </SearchBar>
        <ActionButton>
          <ActionIcon as={FilterIcon} />
        </ActionButton>
      </Header>
      <Beverages>
        {loading
          ? []
          : data.getBeverages.map(({ name, origin, edition }) => (
              <Beverage>
                {name} · {edition} · {origin}
              </Beverage>
            ))}
      </Beverages>
    </Container>
  );
};
export default BeerList;
