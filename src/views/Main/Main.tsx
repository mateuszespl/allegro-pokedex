import React from "react";
import { useHistory } from "react-router-dom";

import FilterList from "components/FilterList";
import PokemonList from "components/PokemonList";
import Pagination from "components/Pagination";
import NavBar from "components/NavBar";
import { StyledMain } from "./Main.styled";

interface MainInterface {
  match: { path: string; params: { currentPage: string } };
}

export const Main: React.FC<MainInterface> = ({ match }) => {
  const history = useHistory();
  let currentPage = 0;

  if (match.params.currentPage === "0") {
    history.push("/");
  } else if (match.path === "/") {
    currentPage = 1;
  } else currentPage = Number(match.params.currentPage);
  return (
    <StyledMain>
      <NavBar />
      <FilterList />
      <section className="displaySection">
        <PokemonList />
        <Pagination currentPage={currentPage} />
      </section>
    </StyledMain>
  );
};
