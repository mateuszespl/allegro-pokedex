import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterPokemonList } from "../../store/actionsCreator";

const StyledWrapper = styled.button<{ currentFilters: Array<any> }>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 15px;
  list-style: none;
  width: 120px;
  position: relative;
  height: 30px;
  opacity: ${({ currentFilters }) =>
    currentFilters.length === 0 ? "50%" : "100%"};
  outline: none;
  font-size: ${({ theme }) => theme.fonts.s};
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ currentFilters }) =>
    currentFilters.length === 0 ? "unset" : "pointer"};
`;

export interface FiltersSubmitButtonInterface {
  currentFilters: Array<any>;
  filterPokemonList: (
    pokemonDataList: Array<any>,
    currentFilters: Array<any>
  ) => any;
  pokemonDataList: Array<any>;
}

const FiltersSubmitButton: React.FC<FiltersSubmitButtonInterface> = ({
  currentFilters,
  filterPokemonList,
  pokemonDataList,
}) => {
  const [filterApplied, setFilterApplied] = useState<boolean>(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFilterApplied(!filterApplied);
    filterPokemonList(pokemonDataList, currentFilters);
  };
  return (
    <StyledWrapper
      className="filters__submit"
      onClick={handleClick}
      currentFilters={currentFilters}
      disabled={currentFilters.length === 0 ? true : false}
    >
      {!filterApplied ? "Filtruj" : "Resetuj filtry"}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFilters: state.currentFilters,
    pokemonDataList: state.pokemonDataList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterPokemonList: (pokemonDataList, filters) =>
      dispatch(filterPokemonList(pokemonDataList, filters)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersSubmitButton);
