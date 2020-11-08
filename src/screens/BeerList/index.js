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
  BeverageInfo,
  BeverageHeader,
  BeverageImg,
} from "./style";
import { useQuery } from "react-apollo";
import { getBeverages } from "../../graphql/queries";
import { Title, Subtitle } from "../../components";
import { Rating } from "../../components/RatingStars";

import {
  Search as SearchIcon,
  Filter as FilterIcon,
} from "@styled-icons/boxicons-regular";

import UserPlaceholder from "../../assets/UserPlaceholder.png";

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
          : data.getBeverages.map(
              ({ name, origin, edition, alcoholPercentage, score }) => (
                <Beverage>
                  <BeverageHeader>
                    <BeverageImg src={UserPlaceholder} />
                    <Rating rating={score} />
                  </BeverageHeader>
                  <BeverageInfo>
                    <Subtitle text={name} />
                    <>
                      {edition} · {origin} · {alcoholPercentage}% ABV
                    </>
                  </BeverageInfo>
                </Beverage>
              )
            )}
      </Beverages>
    </Container>
  );
};
export default BeerList;
