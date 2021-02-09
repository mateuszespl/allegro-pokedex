import React from "react";

import FilterList from "components/FilterList";
import PokemonList from "components/PokemonList";
import Pagination from "components/Pagination";
import SearchBar from "components/SearchBar";
import { StyledMain } from "./Main.styled";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <SearchBar />
      <FilterList />
      <section className="displaySection">
        <PokemonList />
        <Pagination />
      </section>
    </StyledMain>
  );
};
