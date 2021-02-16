import React from "react";

import FilterList from "components/FilterList";
import PokemonList from "components/PokemonList";
import Pagination from "components/Pagination";
import SearchBar from "components/SearchBar";
import { StyledMain } from "./Main.styled";

interface MainInterface {
  match: { path: string; params: { currentPage: number } };
}

export const Main: React.FC<MainInterface> = ({ match }) => {
  return (
    <StyledMain>
      <SearchBar />
      <FilterList />
      <section className="displaySection">
        <PokemonList />
        <Pagination
          currentPage={match.path === "/" ? 1 : match.params.currentPage}
        />
      </section>
    </StyledMain>
  );
};
