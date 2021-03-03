import SearchBar from "components/SearchBar";
import React from "react";

import { StyledNavBar } from "./NavBar.styled";

export const NavBar: React.FC = () => {
  return (
    <StyledNavBar className="navbar">
      <div className="navbar__logo">
        <h1>Pokédex</h1>
        <img
          alt="pokedex icon"
          src="https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Pokedex_tool-512.png"
        />
      </div>
      <SearchBar />
      <div>Icons</div>
    </StyledNavBar>
  );
};
