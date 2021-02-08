import React from "react";
import { FaSearch } from "react-icons/fa";

import { StyledSearchBarButton } from "./SearchBarButton.styled";

interface SearchBarButtonInterface {
  searchInputValue: string;
  searchPokemon: (searchInputValue: string) => void;
}

export const SearchBarButton: React.FC<SearchBarButtonInterface> = ({
  searchInputValue,
  searchPokemon,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (searchInputValue.length === 0) {
      alert("Wpisz nazwę szukanego pokemona.");
    } else searchPokemon(searchInputValue);
  };
  return (
    <StyledSearchBarButton className="search__button" onClick={handleClick}>
      <FaSearch />
    </StyledSearchBarButton>
  );
};
