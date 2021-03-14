import { FilterList } from "components/FilterList/FiltersList";
import SearchBar from "components/SearchBar";
import React from "react";

import { StyledNavBar } from "./NavBar.styled";
import NavBarIcons from "./NavBarIcons";

interface NavBarInterface {
  isFilterSectionVisible: boolean;
  setFilterSectionVisibility: () => void;
}

export const NavBar: React.FC<NavBarInterface> = ({
  isFilterSectionVisible,
  setFilterSectionVisibility,
}) => {
  return (
    <StyledNavBar className="navbar">
      <div className="navbar__logo">
        <a href="/1">
          <h1>Pokédex</h1>
          <img
            alt="pokedex icon"
            src="https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokedex_tool-512.png"
          />
        </a>
      </div>
      <SearchBar />
      <NavBarIcons setFilterSectionVisibility={setFilterSectionVisibility} />
      <FilterList isFilterSectionVisible={isFilterSectionVisible} />
    </StyledNavBar>
  );
};
