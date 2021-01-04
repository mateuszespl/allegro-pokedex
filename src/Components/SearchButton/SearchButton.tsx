import React from "react";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { searchPokemon } from "../../store/actionsCreator";
import { StyledSearchButton } from "./SearchButton.styled";

interface SearchButtonInterface {
  searchInputValue: string;
  searchPokemon: (searchInputValue: string) => any;
}

export const SearchButton: React.FC<SearchButtonInterface> = ({
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
    <StyledSearchButton className="search__button" onClick={handleClick}>
      <FaSearch />
    </StyledSearchButton>
  );
};
