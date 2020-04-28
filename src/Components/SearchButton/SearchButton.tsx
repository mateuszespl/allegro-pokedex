import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { searchPokemon } from "../../store/actionsCreator";

const StyledWrapper = styled.button`
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-left: none;
  border-right: none;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;

export interface SearchButtonInterface {
  searchInputValue: string;
  searchPokemon: (searchInputValue: string) => any;
}

const SearchButton: React.FC<SearchButtonInterface> = ({
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
    <StyledWrapper className="search__button" onClick={handleClick}>
      <FaSearch />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  searchInputValue: state.searchInputValue,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchPokemon: (searchInputValue) =>
      dispatch(searchPokemon(searchInputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
